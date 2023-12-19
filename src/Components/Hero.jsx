import React from 'react'
import styles from '../Styles/styles'
import { hero } from '../assets'

const Hero = () => {
  return (
    <div className={`flex md:flex-row flex-col py2`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 h-[100vh] `}>

        <div className='flex  '>
          <div className='flex flex-col justify-between items-center w-full'>
            <h1 className='font-poppins font-bold text-white ss:text-[52px] text-[40px] ss:leading-[75px] leading-[60px]'>
              REALTIME
              <br />
              <span className='textp'>CRYPTO PRICE</span><br />
              TRACKER
            </h1>
          </div>   
        </div>
        <div className='flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px] mb-4'>
          <p className={`${styles.paragraph} ml2`}> Tracking <span className='text-white'> Sh*tcoins </span> till the <span className='text-white'>Hell</span>
          </p>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Witness the evolution of prices as they dance across the screen, revealing the rhythm of the financial frontier
        </p>
      </div>
      <div className='md:w-[50%] md:h-[50%]  w-[100%] h-[100%] z-[5] relative'>
        <img src={hero} className='object-cover px-6 md:h-[100vh]' alt="" />
        <div className='absolute pink__gradient w-[35%] h-[35%] top-0 z-[0]'></div>
        <div className='absolute white__gradient w-[80%] h-[80%] bottom-0 z-[1]'></div>
        <div className='absolute blue__gradient w-[50%] h-[50%] bottom-20 left-20 z-[0]'></div>
      </div>
    </div>
  )
}

export default Hero
