import React from 'react'
import asus from '../../assets/brands/asus.png'
import dng from '../../assets/brands/dng.png'
import hurley from '../../assets/brands/hurley.png'
import oppo from '../../assets/brands/oppo.png'
import samsung from '../../assets/brands/samsung.png'
import zara from '../../assets/brands/zara.png'
import styles from './Partners.module.css'
const Partners = () => {
    const Partners = [
        {
          img: asus
        },
        {
          img: dng
        },
        {
         img:hurley
        },
        {
          img:oppo
        },
        {
          img:samsung
        },
        {
          img:zara
        },    
    
    ]

  return (
    <div className={styles.Partners}>
        {Partners.map((partner,index) => 
        <img  key={index} src={partner.img}/>
        )}
    </div>
  )
}

export default Partners