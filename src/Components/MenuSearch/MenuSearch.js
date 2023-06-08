import React from 'react'
import styles from './MenuSearch.module.css'

const MenuSearch = () => {
  return (
    <div className={styles.MenuSearch}>
        <div className={styles.allDepartamentsBox}>
            <h3>All Departaments</h3>
            <p>Total 1059 Products</p>
        </div>

        <div className={styles.searchBox}>
            <input type='text' placeholder='Search for products'></input>
            <button>Search</button>
        </div>
    </div>
  )
}

export default MenuSearch