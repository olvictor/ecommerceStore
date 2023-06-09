import React from 'react'
import styles from './TrendingProducts.module.css'
import ProductOffer from './ProductOffer'
import ProductCatalog from './ProductCatalog'

const TrendingProducts = () => {
  return (
    <div className={styles.TrendingProducts}>
        <h2>Trending Products</h2>
        <ProductOffer />
        <ProductCatalog />
    </div>
  )
}

export default TrendingProducts