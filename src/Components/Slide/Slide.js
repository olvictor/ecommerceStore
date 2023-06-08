import React, { useState } from 'react'
import styles from './Slide.module.css'
import slide0 from '../../assets/slider/slider0.jpg'
import slide1 from '../../assets/slider/slider1.jpg'
import slide2 from '../../assets/slider/slider2.jpg'
import slide3 from '../../assets/slider/slider3.jpg'



const Slide = () => {
  const arraySlide = [
    {
      img : slide0,
      category: 'Showes Fashion',
      slideTitleh3: 'Come and Get It !',
      slideTitleh2: 'BRAND NEWS SHOES',
      button:'Shop Now'
    },
    {
      img : slide1,
      category: 'Quick Fashion',
      slideTitleh3: 'Fit Your wardrobe',
      slideTitleh2: 'WHIT lUXURY ITEMS',
      button:'Shop Now'
    },
    {
      img : slide2,
      category: 'Quick Offer',
      slideTitleh3: 'Wooden Minimal Sofa',
      slideTitleh2: 'EXTRA 50% OFF',
      button:'Shop Now'
    },
    {
      img : slide3,
      category: 'Best Deals',
      slideTitleh3: 'Home Workout Acessories',
      slideTitleh2: 'PUSH THE LIMIT',
      button:'Shop Now'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(1)
  console.log(arraySlide[currentSlide])
  const nextSlide = () =>{
    if(currentSlide < arraySlide.length -1){
      setCurrentSlide(currentSlide+1)
    }
    if(currentSlide === arraySlide.length-1){
      setCurrentSlide(0)
    }
  }

  return (
 
    <div className={styles.slide} onClick={nextSlide}>
        <img  src={arraySlide[currentSlide].img}/>
        <div className={styles.slideText}>
            <p>{arraySlide[currentSlide].category}</p>
            <h3>{arraySlide[currentSlide].slideTitleh3}</h3>
            <h2>{arraySlide[currentSlide].slideTitleh2}</h2>
            <button>{arraySlide[currentSlide].button}</button>
        </div>       
    </div>
  )
}

export default Slide