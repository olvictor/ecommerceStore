import React from 'react'
import styles from './TrendingProducts.module.css'
import {AiFillStar} from 'react-icons/ai'
import shoes1 from '../../assets/products/shoe1.jpg'
import shoes2 from '../../assets/products/shoe1-1.jpg'
import apparel1 from '../../assets/products/apparel1.jpg'
import apparel2 from '../../assets/products/apparel2.jpg'
import apparel3 from '../../assets/products/apparel3.jpg'
import home1 from '../../assets/products/home1.jpg'
import home2 from '../../assets/products/home2.jpg'
import home3 from '../../assets/products/home3.jpg'
import electronic1 from '../../assets/products/electronic1.jpg'
import electronic2 from '../../assets/products/electronic2.jpg'
import electronic3 from '../../assets/products/electronic3.jpg'



const ProductCatalog = () => {
  const ProductsCatalog = [
    {
        title:'Men Slip On Shoes Casual with Arch Support insoles',
        rating: 5,
        price: 119.00,
        sale: '32',
        sold: 2323,
        img: shoes1,
        category: 'shoes'
    },
    {
        title:'Men Slip On Shoes Casual with Arch Support insoles',
        rating: 5,
        price: 149.00,
        sale: '16',
        sold: 1523,
        img: shoes2,
        category: 'shoes'
    },
    {
        title:"Under Armour Men's Tech",
        rating: 4,
        price: 56.50,
        sale: '25',
        sold: 2504,
        img: apparel1,
        category: 'Men'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 37.50,
        sale: '47',
        sold: 1257,
        img: apparel3,
        category: 'Woman'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 57.50,
        sale: '37',
        sold: 1257,
        img: electronic3,
        category: 'electronic'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 37.50,
        sale: '47',
        sold: 1257,
        img: electronic2,
        category: 'electronic'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 37.50,
        sale: '47',
        sold: 1257,
        img: electronic1,
        category: 'electronic'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 37.50,
        sale: '47',
        sold: 1257,
        img: home3,
        category: 'Home'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 37.50,
        sale: '47',
        sold: 1257,
        img: home2,
        category: 'Home'
    },
    {
        title:"Black Women's Coat Dress",
        rating: 5,
        price: 37.50,
        sale: '47',
        sold: 1257,
        img: home1,
        category: 'Home'
    },

]  


  return (
    <section className={styles.ProductCatalog}>
        {ProductsCatalog.map((Product,index)=>(
            <div className={styles.ProductCard} key={index}>
                <img src={Product.img} alt={Product.title}/>
                <span>{Product.sale}%</span>
                <div className={styles.ProductCardText}>
                    <h4>{Product.title}</h4>
                    <div className={styles.star}>
                        {[...Array(Product.rating)].map((item)=>{
                            return <AiFillStar fill='gold'/>
                        })}
                    </div>
                     <p style={{color:'red',fontSize:'1.4rem'}}>${Product.price}</p>
                    <p>Sold:{Product.sold}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default ProductCatalog