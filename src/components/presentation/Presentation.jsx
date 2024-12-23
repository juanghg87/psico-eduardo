import React from 'react';
import "../presentation/presentation.scss";
import foto from "../../assets/eduardo.jpg"

const Presentation = () => {
    return (
        <>
            <div className='presentation'>
                <p className='text-1'>
                    <h3>
                        Mi psicoterapia se centra en el desarrollo de tu Salud Mental, desarrollando tu potencial personal:

                    </h3>

                    <br />
                    <br />
                    Mejorando tu relación contigo mismo y tu autoconocimiento.
                    <br />
                    <br />
                    Gestionando y regulando tus emociones de forma distinta.
                    <br />
                    <br />
                    Comprendiendo tus vínculos afectivos pasados y actuales.
                </p>
                <p className='text-2'>
                    Construyendo nuevos sentidos y significados de vida.
                    <br />
                    <br />
                    Avanzando hacia diferentes formas de relacionamiento de pareja y familiares, más estables y duraderas.
                </p>
                <img src={foto} alt="" className='foto' />
            </div>

            <section>
                <article>
                    <h3>
                        Mi psicoterapia se centra en el desarrollo de tu Salud Mental, desarrollando tu potencial personal:

                    </h3>
                    <p className='text-presentation'>
                        <span>
                            Mejorando tu relación contigo mismo y tu autoconocimiento.
                        </span>
                        <span>
                            Gestionando y regulando tus emociones de forma distinta.
                        </span>
                        <span>
                            Gestionando y regulando tus emociones de forma distinta.
                        </span>
                        <span>
                            Construyendo nuevos sentidos y significados de vida.
                        </span>
                        <span>
                            Avanzando hacia diferentes formas de relacionamiento de pareja y familiares, más estables y duraderas.
                        </span>
                    </p>
                </article>
                <img src={foto} alt="" className='foto'/>
            </section>
        </>
    )
}

export default Presentation