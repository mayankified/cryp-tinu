import React from 'react'
import {Hero,Trending,Topcoins} from './index'
import styles from '../Styles/styles'

const Home = () => {
    return (
        <div className='bg-primary w-full px-10 '>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <Topcoins />
        </div>
    )
}

export default Home