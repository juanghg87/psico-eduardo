import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import "../button/button.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";

const variants = {
  initial: {
    x: -200,
    opacity: 0
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      type: "spring", stiffness: 19, damping: 5
    },
  })
};



const Button = () => {
  const email = "psicologo.eduardoospina@gmail.com";
  const subject = "Consulta";
  const body = "Con este correo quisiera tener un primer contacto para agendamiento de una consulta psicológica.";
  const [clic, setClick] = useState(false);

  const handleCrossClick = () => {
    setClick(!clic);
  };

  return (
    <>
      <div></div>
      <div className='btn-container'>
        <motion.a
          href="tel:+573147624948"
          target='blank'
          noopener noreferrer
          aria-label="Perfil de LinkedIn de Eduardo Andrés Ospina"
          title='Llamada a celular de Eduardo Ospina'
          custom={3}
          variants={variants}
          initial="initial"
          animate={clic ? "animate" : "initial"}
        >
          <FiPhoneCall className='media' />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/eduardo-andr%C3%A9s-o-68674755/"
          target='blank'
          noopener noreferrer
          aria-label="Perfil de LinkedIn de Eduardo Andrés"
          title='LinkedIn'
          custom={2}
          variants={variants}
          initial="initial"
          animate={clic ? "animate" : "initial"}
        >
          <TiSocialLinkedin className='media' />
        </motion.a>

        <motion.a
          href={`mailto: ${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)} `}
          target='blank'
          noopener noreferrer
          aria-label="Correo de Eduardo Andrés"
          title='Correo'
          custom={1}
          variants={variants}
          initial="initial"
          animate={clic ? "animate" : "initial"}
        >
          <CgMail className='media' />
        </motion.a>

        <motion.a
          href="https://wa.me/573147624948"
          target='blank'
          noopener noreferrer
          aria-label="WhatsApp de Eduardo Andrés"
          title='WhatsApp'
          custom={0}
          variants={variants}
          initial="initial"
          animate={clic ? "animate" : "initial"}
        >
          <AiOutlineWhatsApp className='media' />
        </motion.a>

        <span
          className='cross'
          onClick={handleCrossClick}
          whileTap={{
            backgroundColor: '#6c899b',
            color: '#fff',
            scale:(1.2),
            // rotate: 45,
          }}
        >¡Contáctame! </span>
      </div>
    </>
  );
};

export default Button;