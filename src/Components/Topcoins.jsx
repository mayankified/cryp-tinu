import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Topcoins = () => {

  const [coins, setCoins] = useState([])
  const [load, setload] = useState(false)

  useEffect(() => {
    const fetchcoins = async () => {
      try {

        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr')
        setCoins(data);
        setload(true);
      }
      catch (error) {
        console.log("there is an error: ", error)
        toast.error("Too many requests..try again in sometime")
      }
    }
    fetchcoins()
  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 528, min: 0 },
      items: 2
    },
    mssas: {
      breakpoint: { max: 412, min: 0 },
      items: 1
    }
  };



  return (
    <div className={`w-full flex-col ${load?'flex':'hidden'}`}>
      <div className='w-full sm:px-12 px-4 overflow-hidden my-12 flex flex-col' id='trending'>
        <h1 className='textp font-semibold sm:text-[50px] text-[32px] sm:self-start font-poppins mx-2 self-center '>Trending Coins</h1>

        <Carousel
          className='bg-white p-4 rounded-2xl m-4'
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          arrows={false}
          swipeable={false}
        >
          {
            coins.slice(0,10).map((dat) => (
              <div key={dat.id} className='flex flex-col justify-center items-center sm:w-[250px] w-fit ss px-4 mx-4 my-6 text-white  '>
                <img src={dat.image} alt="" className='sm:w-[72px] w-[42px] h-auto' />

                <h3 className='font-poppins font-medium text-primary text-[18px] sm:text-[23px] sm:leading-[30.8px] my-4'>{dat.name}</h3>
                <p className={` font-poppins font-medium sm:text-[16px] text-[12px] sm:leading-[20px] ${(dat.price_change_percentage_24h > 0) ? 'text-green-600' : 'text-red-600'} `}>
                  {dat.price_change_percentage_24h} %</p>
              </div>
            ))}
        </Carousel>;
      </div>
      <div className='flex flex-col items-center py-12' id='coin'>

        <div className='w-fit my-4 bg-[#873cc3] flex justify-center items-center py-6 ss:px-20 px-6 rounded-[30px] text-center'><h1 className='text-[#d6d4d8] font-semibold font-poppins ss:text-[32px] text-[24px]'>Top 100 Cryptos in Market</h1></div>
        <div className='flex flex-wrap justify-evenly mx-4'>
          {

            coins.map((dat) => (
              <div key={dat.id} className='flex flex-col group justify-start items-center ss:w-[250px] w-[80vw] max-w-[250px] bg-discount-gradient rounded-xl p-4 mx-4 my-6 h-[260px]'>
                <h2 className='font-poppins text-white text-[18px] group-hover:text-dimWhite'>{dat.name}</h2>
                <img src={dat.image} alt="" className='w-[54px] h-auto m-3' />
                <div className='bgp w-full rounded-xl flex justify-center items-center p-[2px] IImt-4'>
                  <div className='bg-discount-gradient w-full rounded-xl flex flex-col justify-center items-center p-2'>
                    <h3 className='text-dimWhite font-poppins font-medium'>Current Price</h3>
                    <h3 className='text-white font-poppins font-medium'> ₹ {dat.current_price}</h3>

                  </div>
                </div>
                <Link to={`/${dat.id}`}>
                  <button className='bg-[#873cc3] px-2 group-hover:bg-primary
                border-[2px] border-solid group-hover:text-[#c3a4dc] border-[#873cc3] text-white font-poppins rounded-xl my-4 py-2 font-medium cursor-pointer'>Details</button>
                </Link>
              </div>
            ))}
        </div>
      </div>

    </div>
  )
}

export default Topcoins
