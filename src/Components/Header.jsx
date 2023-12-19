import React, { useState } from 'react'
import styles from '../Styles/styles'
import { close, bitcoin, menu } from '../assets'
import { HashLink } from 'react-router-hash-link'

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "trending",
    title: "Trending",
  },
  {
    id: "coin",
    title: "Coins",
  },
  {
    id: "about",
    title: "Contact us",
  },
];

const Header = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <div className='bg-primary w-full overflow-hidden sm:px-10 px-4' id='home'>

      <div className={`sm:px-16 px-4 flex justify-center items-center `}>
        <div className={`${styles.boxWidth} w-full  flex py-6 justify-between items-center `}>
          <img src={bitcoin} alt="" className='w-[32px] h-[32px] mx-2' />
          <h2 className='text-[32px] w-fit textp font-bold'>CrypTinu</h2>

          <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {
              navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins text-white font-normal text-[16px] hover:text-dimWhite ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                  <HashLink to={`/#${nav.id}`}>{nav.title}</HashLink>
                </li>
              ))
            }
          </ul>

          <div className=' flex sm:hidden flex-1 justify-end items-center'>
            <img src={Toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle((z) => !z)}
            />
          </div>
          <div className={`${Toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 bg-black-gradient min-w-[140px] rounded-xl sidebar `}>

            <ul className='list-none flex-col flex justify-end items-center flex-1'>
              {
                navLinks.map((nav, index) => (
                  <li key={nav.id} onClick={()=>setToggle(false)} className={`font-poppins text-white font-normal text-[16px] mb-4 hover:text-dimWhite`}>
                    <HashLink to={`/#${nav.id}`} >{nav.title}</HashLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
