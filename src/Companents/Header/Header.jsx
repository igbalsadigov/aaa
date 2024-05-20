import React from 'react'
import style from '../Header/Header.module.css'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.containerNet}>
                <div className={style.contayner}>
                    <div className={style.icons}>
                    <FaTwitter/>
                    <CiFacebook/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                    </div>
                    <div className={style.text}>
                        <p>
                            Sponsor
                        </p>
                        <p className={style.tags}>
                            Login
                        </p>
                    </div>
                </div>

            </div>
            <div className={style.containerSecond}>
                <div className={style.containerThere}>
                <div>
                <h1>ADOPTED</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Adoption</a></li>
                    <li><a href="">Success stories</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
                </div>
          

            </div>
            
        </div>
    )
}

export default Header
