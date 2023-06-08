import React from 'react'
import styles from './Menu&Slide.module.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {LuShirt} from 'react-icons/lu'
import {BiBluetooth} from 'react-icons/bi'
import {RiTShirtAirLine} from 'react-icons/ri'
import {RiShirtLine} from 'react-icons/ri'
import {BsHeartPulse} from 'react-icons/bs'
import {GoHome} from 'react-icons/go'
import {MdOutlinePets} from 'react-icons/md'
import {BiFootball} from 'react-icons/bi'
import {BiBookmarkAltPlus} from 'react-icons/bi'
import {MdGirl} from 'react-icons/md'
import {MdBoy} from 'react-icons/md'
import Slide from '../Slide/Slide'

const MenuSlide = () => {
  return (
    <section className={styles.sectionMenuAndSlide}>
        <nav className={styles.sectionMenu}>
            <ul>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Beauty</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <BiBluetooth />
                       <p>Eletronic</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <RiTShirtAirLine />
                       <p>Women's Fashion</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <RiShirtLine />
                       <p>Men's Fashion</p>
                     </div>
                  
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <MdGirl />
                       <p>Girl's Fashion</p>
                     </div>
                 
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <MdBoy />
                       <p>Boy's Fashion</p>
                     </div>
                   
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <BsHeartPulse />
                       <p>Health & Household</p>
                     </div>
                    
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <GoHome />
                       <p>Home & Kitchen</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <MdOutlinePets />
                       <p>Pet Supplies</p>
                     </div>
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <BiFootball />
                       <p>Sports</p>
                     </div>
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <BiBookmarkAltPlus />
                       <p>Best Seller</p>
                     </div>   
                </li>
            </ul>
        </nav>
        <Slide />
    </section>
  )
}

export default MenuSlide