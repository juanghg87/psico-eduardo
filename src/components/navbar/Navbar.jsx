import React, { useState } from 'react';
import { motion } from "framer-motion";
import "../navbar/navbar.scss";
import logo from "../../assets/logo.PNG";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

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


const variantMenu = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


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
                        href="#"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        whileTap={{
                            scale: 0.55,
                            backgroundColor: '#6c899b',
                            color: '#fff'
                        }}
                        variants={variantsA}
                        className='nav-a'
                    >
                        Servicios
                    </motion.a>
                    <motion.a
                        href="#"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        whileTap={{
                            scale: 0.55,
                            backgroundColor: '#6c899b',
                            color: '#fff'
                        }}
                        variants={variantsA}
                        className='nav-a'
                    >
                        Psicoterapia
                    </motion.a>
                    <motion.a
                        href="#"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        whileTap={{
                            scale: 0.55,
                            backgroundColor: '#6c899b',
                            color: '#fff'
                        }}
                        variants={variantsA}
                        className='nav-a'
                    >
                        Blog
                    </motion.a>
                    <motion.a
                        href="#"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        whileTap={{
                            scale: 0.55,
                            backgroundColor: '#6c899b',
                            color: '#fff'
                        }}
                        variants={variantsA}
                        className='nav-a'
                    >
                        Online
                    </motion.a>
                    <motion.a
                        href="#"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        whileTap={{
                            scale: 0.55,
                            backgroundColor: '#6c899b',
                            color: '#fff'
                        }}
                        variants={variantsA}
                        className='nav-a contact'
                    >
                        Contáctame
                    </motion.a>
                </ul>
                <motion.div>
                    <div onClick={toggleMenu} className='menu-icon'
                    >
                        {isMenuOpen ? <MdClose className='close-menu' /> : <IoMenu className='menu' />}
                    </div>
                    {isMenuOpen && (
                        <motion.div className='menu-content'
                            initial="initial"
                            animate="animate"
                            variants={variantMenu}
                        >
                            <span>Servicios</span>
                            <span>Psicoterapia</span>
                            <span>Blog</span>
                            <span>Online</span>
                            <span>Contáctame</span>
                        </motion.div>
                    )}
                </motion.div>
            </nav>
        </>
    );
};

export default Navbar