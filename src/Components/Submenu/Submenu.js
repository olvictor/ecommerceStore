import React from 'react'
import styles from './Submenu.module.css';
import {AiOutlineHeart} from 'react-icons/ai'
import {BiCart} from 'react-icons/bi'
import {RiArrowDownSLine} from 'react-icons/ri'

const Submenu = () => {
  return (
    <header className={styles.Submenu}>
        <ul>
            <h2>.Store</h2>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Women <RiArrowDownSLine /></a></li>
            <li><a href='#'>Men</a></li>
            <li><a href='#'>Sports  </a></li>
        </ul>

        <ul className={styles.SubmenuIcons}>
            <li><a href='#'><AiOutlineHeart /></a></li>
            <li className={styles.SubmenuCart}>
              <BiCart />
              <div>
                <p>Total</p>
                <h4>$0.00</h4>
              </div>
            </li>
        </ul>
    </header>
  )
}

export default Submenu