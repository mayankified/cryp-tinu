import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

const Trending = () => {

    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchcoins = async () => {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
            setCoins(data);
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
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div className='w-full px-12 overflow-hidden my-12 flex flex-col' id='trending'>
            <h1 className='textp font-semibold text-[50px] font-poppins mx-2 '>Trending Coins</h1>

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
                    coins.map((dat) => (
                        <div key={dat.id} className='flex flex-col justify-center items-center w-[250px] p-4 mx-4 my-6 text-white'>
                            <img src={dat.image} alt="" className='w-[72px] h-[72px] ' />

                            <h3 className='font-poppins font-medium text-primary text-[23px] leading-[30.8px] my-4'>{dat.name}</h3>
                            <p className={` font-poppins font-medium text-[16px] leading-[20px] ${(dat.price_change_percentage_24h > 0) ? 'text-green-600' : 'text-red-600'} `}>
                                {dat.price_change_percentage_24h} %</p>
                        </div>
                    ))}
            </Carousel>;
        </div>
    )
}

export default Trending