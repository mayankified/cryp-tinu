import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as Chartjs, LinearScale, PointElement, LineElement, Legend, Title, Tooltip, CategoryScale } from 'chart.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
Chartjs.register(
  LinearScale, PointElement, LineElement, Legend, Title, Tooltip, CategoryScale
)
const btn = [
  {
    id: "24h",
    title: "24h",
  },
  {
    id: "3",
    title: "3 days",
  },
  {
    id: "7",
    title: "1 week",
  },
  {
    id: "30",
    title: "1 month",
  },
  {
    id: "365",
    title: "1 Year",
  },
];

const Chart = ({ }) => {

  const price = []
  const date = []
  const cryp = useParams();


  const [chrt, setChrt] = useState([])
  const [dates, setdates] = useState('24h')

  useEffect(() => {
    const fetchcoins = async () => {
      try{
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryp.id}/market_chart?vs_currency=inr&days=${dates}`)
        setChrt(data?.prices);
      }
      catch (error) {
        console.log("there is an error: ", error)
        toast.error("Too many requests..try again in sometime")
      }
    }
    fetchcoins()
  }, [dates])
  console.log('hiiiiii')
  console.log(chrt)


  for (var i = 0; i < chrt.length; i++) {

    if (dates == '24h') {
      date.push(new Date(chrt[i][0]).toLocaleTimeString())

    }
    else {
      date.push(new Date(chrt[i][0]).toLocaleDateString())
    }
    price.push(chrt[i][1])
  }

  console.log(date)
  console.log(price)
  console.log(dates)

  return (
    <div className='md:w-[36vw] w-[80vw] h-auto text-white '>
      <Line
        options={{
          // responsive: true,
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
        data={{
          labels: date,
          datasets: [{
            label: `Prices in INR`,
            data: price,
            borderColor: '#873cc3',
            backgroundColor: '#000',

          }]
        }}
      />
      <div className='w-full flex justify-evenly p-2  flex-wrap font-poppins mx-6'>
        {btn.map((days) => (
          <button key={days.id} className={`w-[100px] m-2 rounded-sm hover:bg-[#aa641f] py-2 bg-[#ff8e1d] ${(dates == days.id) ? 'bg-[#7f4914]' : 'bg-[#ff8e1d]'}`} onClick={() => setdates(days.id)}>{days.title}</button>
        ))}
      </div>
    </div>
  )
}

export default Chart