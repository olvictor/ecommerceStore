import React, { useState } from 'react'
import imgOffer from '../../assets/products/apparel4.jpg'
import styles from './TrendingProducts.module.css'
import {AiFillStar} from 'react-icons/ai'


const ProductOffer = () => {
    const [starQuantity,setStarQuantity] = useState(5);

  return (
    <div className={styles.cardProductOffer}>
        <h3>OFFER END AT</h3>
        <div className='countDown'>
            <p><span> 1 </span> : <span> 15 </span> :<span> 27 </span> : <span> 60 </span></p>
        </div>
        <img src={imgOffer} alt='Product Offer'/>
        <div className={styles.cardProductOfferText}>
            <div style={{display:'flex'}}>
                {[...Array(starQuantity)].map((star)=>{
                    return <AiFillStar fill='gold' />
                })}
            </div>
            <h4>Happy Salled Womens Summer Boho FLoral</h4>
            <p className={styles.cardProductOfferPrice}>$129.99</p> 
            <div className={styles.productCount}>
                <p style={{color:'green'}}>Stock: 107</p>
                <p style={{color:'tomato'}}>Sold: 1033</p>
            </div>
            <progress min='0' max='100'  value='50'></progress>
        </div>
    </div>
  )
}

export default ProductOffer