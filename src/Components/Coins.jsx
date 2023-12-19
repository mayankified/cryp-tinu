import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../Styles/styles';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import Chart from './Chart';
import axios from 'axios';
import parse from 'html-react-parser';

const Coins = () => {
    const cryp = useParams();

    const [coin, setCoin] = useState([])

    useEffect(() => {
        const fetchcoins = async () => {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryp.id}`)
            setCoin(data);
        }
        fetchcoins()
    }, [])


    return (
        <div className='bg-primary flex justify-center items-center w-full px-6 py-4'>
            <div className='flex md:flex-row flex-col items-center text-white w-[80%]'>
                <div className='flex flex-col justify-center w-fit max-w-md'>
                    <div className='flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px] w-fit mb-4 text-[12px] '>
                        <p className={`${styles.paragraph} ml2 text-[12px]`}> <span className='text-white'>Last updated : </span>
                            {Date(coin?.market_data?.last_updated)}
                        </p>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-[48px] font-poppins font-semibold'>{coin.name}</span>
                        <span className='text-[44px] font-bold bg-[#ff8e1d] text-[#e9e8e8] mx-4 rounded-[5px] py-2 px-4
                    '> #{coin?.market_cap_rank}</span>
                    </div>
                    <img src={coin?.image?.large} className=' w-[100px] h-[100px] m-4' alt="" />
                    <p className={`${styles.paragraph} w-max-[470px] my-4`}>
                        {parse(`${coin?.description?.en.split('.')[0]}`)}

                    </p>

                    <div className='flex flex-col bg-discount-gradient rounded-xl w-fit my-6 p-6 '>
                        <div className='flex px-4 py-2 justify-start my-4'>
                            <span className=' font-poppins text-dimWhite text-[27px] font-medium mr-2 '>Current Price : </span>
                            <span className=' font-poppins text-white text-[27px] font-semibold '>₹{coin?.market_data?.current_price?.inr}</span>
                        </div>
                        <div className='flex px-4 py-2 justify-start'>
                            <FaArrowAltCircleUp className='text-green-500 text-[30px] mx-2' />
                            <span className=' font-poppins text-dimWhite text-[20px] font-medium mr-2'>Today's High : </span>
                            <span className=' font-poppins text-white text-[20px] font-semibold '>₹{coin?.market_data?.high_24h?.inr}</span>
                        </div>
                        <div className='flex px-4 py-2 justify-start'><FaArrowAltCircleDown className='text-red-600 text-[30px] mx-2 ' />
                            <span className=' font-poppins text-dimWhite text-[20px] font-medium mr-2 '>Today's Low :</span>
                            <span className=' font-poppins text-white text-[20px] font-semibold '>₹{coin?.market_data?.low_24h?.inr}</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center p-6'>
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default Coins