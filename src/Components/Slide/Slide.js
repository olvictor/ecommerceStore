import React from 'react'
import styles from './Slide.module.css'
import slide0 from '../../assets/slider/slider0.jpg'
import slide1 from '../../assets/slider/slider1.jpg'
import slide2 from '../../assets/slider/slider2.jpg'
import slide3 from '../../assets/slider/slider3.jpg'



const Slide = () => {
  return (
    <div className={styles.slide}>
        <img  src={slide0}/>
        <div className={styles.slideText}>
            <p>Showes Fashion</p>
            <h3>Come and Get It!</h3>
            <h2>BRAND NEWS SHOES</h2>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Slide