import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary flex flex-col w-full text-dimWhite font-poppins justify-center items-center py-6  ' id='about'>
        <div className='flex sm:flex-row flex-col justify-center items-center w-[90%]'>
        <a className='sm:w-[10%] text-center hover:text-white align-middle ' href="https://www.linkedin.com/in/mayank-kashyap-20114a24b/">Linkedin</a>
        <a className='sm:w-[10%] text-center hover:text-white align-middle   border-dimWhite sm:border-x-2 ' href="https://github.com/mayankified/">Github</a>
        <a className='sm:w-[10%] text-center hover:text-white align-middle ' href="https://www.instagram.com/mynkashh">Instagram</a>
        </div>
        <p className='pb-1 pt-3 text-[#873cc3]'>Made with anger</p>
        <a className='font-poppins font-semibold text-[18px] hover:text-[#b078de] sm:text-[20px]' href="https://github.com/mayankified/">@mayankified</a>
    </div>  
  )
}

export default Footer