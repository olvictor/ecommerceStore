import React from 'react'
import styles from './Header.module.css'
import { RiArrowDownSLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header className={styles.header}>
        <ul>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Featured Products</a></li>
            <li><a href='#'>whishlist</a></li>
        </ul>

        <ul>
            <li><a href='#'>Sign Up</a></li>
            <li><a href='#'>My Account</a></li>
            <li><a href='#'>Order Tracking</a></li>
            <li><a href='#'>USD <RiArrowDownSLine /></a></li>
            <li><a href='#'>English <RiArrowDownSLine /></a></li>
        </ul>
    </header>
  )
}

export default Header