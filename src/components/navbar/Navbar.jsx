import React, { useState } from 'react';
import { motion } from "framer-motion";
import "../navbar/navbar.scss";
import logo from "../../assets/logo.PNG";
import { type } from '@testing-library/user-event/dist/type';

;

const variantsA = {
    initial: {
        color: '#6c899b',
        backgroundColor: '#fff',
        display: 'inline-block'

    },
    animate: {
        color: '#fff',
        backgroundColor: '#6c899b',
        y: -10,
        scale: 1.1,
        borderRadius: "10px",
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 100
        }
    }
}

const Navbar = () => {
  

    return (
        <>
            <nav className='nav-container'>
                <div className="logo-container">
                    <img src={logo} alt="Logo Eduardo Ospina" className='img-logo' />
                </div>
                <ul className="a-container">
                    {/* <motion.a
                        href=""
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        variants={variantsA}
                        className='nav-a'
                    >
                        Coaching
                    </motion.a> */}
                    <motion.a
                        href=""
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        variants={variantsA}
                        className='nav-a'
                    >
                        Servicios
                    </motion.a>
                    <motion.a
                        href=""
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        variants={variantsA}
                        className='nav-a'
                    >
                        Psicoterapia
                    </motion.a>
                    <motion.a
                        href=""
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        variants={variantsA}
                        className='nav-a'
                    >
                        Blog
                    </motion.a>
                    <motion.a
                        href=""
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        variants={variantsA}
                        className='nav-a'
                    >
                        Online
                    </motion.a>
                    <motion.a
                        href=""
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        variants={variantsA}
                        className='nav-a'
                    >
                        Contacto
                    </motion.a>
                </ul>
            </nav>
        </>
    );
};

export default Navbar