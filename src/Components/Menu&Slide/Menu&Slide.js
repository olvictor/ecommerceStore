import React from 'react'
import styles from './Menu&Slide.module.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {LuShirt} from 'react-icons/lu'
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
                        <LuShirt />
                       <p>Eletronic</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Women's Fashion</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Men's Fashion</p>
                     </div>
                  
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Girl's Fashion</p>
                     </div>
                 
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Boy's Fashion</p>
                     </div>
                   
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Health & Household</p>
                     </div>
                    
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Home & Kitchen</p>
                     </div>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Pet Supplies</p>
                     </div>
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
                       <p>Sports</p>
                     </div>
                </li>
                <li>
                    <div className={styles.sectionMenuIcon}>
                        <LuShirt />
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