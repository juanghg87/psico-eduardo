import "../hero/hero.scss";
import React, { useState } from 'react';
import { motion } from "framer-motion"; 

const Hero = () => {

    const [isPopoverVisible, setPopoverVisible] = useState(false);

    const togglePopover = () => {
        setPopoverVisible(!isPopoverVisible);
    };

    const fadeInOut = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 300 } },
    };

  return (
    <div className='main-video'>
                <h1 className='title-main'>
                    PSICOTERAPIA PARA TU SALUD MENTAL</h1>
                <div className="video-container">
                    <div className="video">
                        <iframe
                            height="315"
                            src="https://www.youtube.com/embed/KsThEXZS9wI?si=c3otqOWsIYGhzIBf"
                            title="psicoterapia, coaching, bienestar, salud mental, atención psicológica, psicoterapia, psicología clínica, acompañamiento infantil, acompañamiento adolescentes, acompañamiento adultos, acompañamiento pareja y familia familiar, Eduardo Ospina"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="pop-message">
                        <motion.button 
                        className='pop' 
                        onClick={togglePopover}
                        whileTap={{
                            scale: 1.2,
                            backgroundColor: '#6c899b', 
                            color: '#fff' 
                         }}
                        >
                            Emociones
                        </motion.button>
                        {isPopoverVisible && (
                            <motion.div
                                className='popover'
                                initial="hidden"
                                animate={isPopoverVisible ? "visible" : "hidden"}
                                variants={fadeInOut}
                            >
                                Gestionar bien las emociones es crucial porque impacta en la comunicación, las relaciones y la resiliencia. Esto nos permite enfrentar desafíos con equilibrio, tomar decisiones racionales y evitar impulsividad. Además, mejora el trabajo en equipo y el bienestar mental, reduciendo el riesgo de ansiedad y estrés.
                            </motion.div>
                        )}
                    </div>
                    <div className="maintext-video">
                        <h2>Consulta psicológica presencial, virtual y domiciliaria</h2>
                        <p className='text-video'>
                        Mi psicoterapia se centra en el desarrollo de tu Salud Mental, desarrollando tu potencial personal, mejorando tu relación contigo mismo y tu autoconocimiento, gestionando y regulando tus emociones de forma distinta, comprendiendo tus vínculos afectivos pasados y actuales, construyendo nuevos sentidos y significados de vida, además, de avanzar hacia diferentes formas de relacionamiento de pareja y familiares, más estables y duraderas.
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Hero