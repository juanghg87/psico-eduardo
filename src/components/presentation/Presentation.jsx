import React from 'react';
import '../presentation/presentation.scss';
import foto from '../../assets/eduardo.jpg';
import useZIndexControl from './useZIndexControl';

const Presentation = () => {
    const { zIndexes, handleZIndexChange } = useZIndexControl();

    return (
        <>
            <section>
                <article>
                    <p className='p1' style={{ zIndex: zIndexes.p1 }}>
                        <h3>
                            Psicólogo clínico y psicoterapeuta
                        </h3>
                        <h3>
                            Magíster en Psicología y Salud Mental
                        </h3>
                        <h3>
                            Docente universitario de psicología clínica
                        </h3>

                        <ul>
                            <li>Maestrando en Investigación en Psicología – UNIR, 2024</li>
                            <br />
                            <li>Magíster en Psicología y salud Mental – Universidad Pontificia Bolivariana, 2022</li>
                            <br />
                            <li>Título: Psicólogo – Universidad Católica Luis Amigó, 2018</li>
                            <br />
                            <li>Historiador – Universidad Nacional de Colombia, 2012</li>
                        </ul>

                    </p>
                    <p className='p2' style={{ zIndex: zIndexes.p2 }}>
                        <h3>
                            Experiencia Profesional
                        </h3>
                        <h4>
                            Mi experticia me permite evaluar, conceptualizar, formular y planear un proceso personalizado, diseñado para tus necesidades de cambio y mejoría, buscando siempre que sean duraderas y a largo plazo.
                        </h4>
                        <ul>
                            <li>
                                Corporación Universitaria Minuto de Dios, Bello, Docente de psicología clínica.
                            </li>
                            <br />
                            <li>
                                Universidad del Sinú, Cartagena, Docente de psicología clínica y social.
                            </li>
                            <br />
                            <li>
                                Comfama, Envigado, Psicólogo Clínico y de la Salud.
                            </li>
                            <br />
                            <li>
                                Cuidadores de Vida (antes Corporación Ohkay Integral), Medellín, Psicólogo (atención de casos por riesgo de conducta suicida).
                            </li>
                            <br />
                            <li>
                                Promedan IPS, Itagüí, Psicólogo Clínico y de la Salud.
                                Corporación CIPPAZ Consultores, Medellín, Psicólogo Clínico.
                            </li>
                        </ul>
                    </p>
                    <p className='p3' style={{ zIndex: zIndexes.p3 }}>
                        <h3>
                            Diplomados
                        </h3>
                        <ul>
                            <li>Psicología Clínica y de la Salud.</li>
                            <br />
                            <li>Prevención e intervención psicosocial en familias, infancia y adolescencia.</li>
                            <br />
                            <li>Prevención y tratamiento de la conducta suicida.</li>
                            <br />
                            <li>Atención integral a víctimas de la violencia sexual.</li>
                            <br />
                            <li>Problemas emocionales en la infancia.</li>
                            <br />
                            <li>Salud Mental del Niño y el Adolescente.</li>
                            <br />
                            <li>Psicometría y administración integral de pruebas psicológicas</li><br />
                            <li>Operador terapéutico calificado en farmacodependencia y otras adicciones.</li>
                        </ul>
                    </p>
                    <p className='p4' style={{ zIndex: zIndexes.p4 }}>
                        <h3>
                            Cursos y Seminarios
                        </h3>
                        <ul>
                            <li>
                                Prácticas para la acción y la prevención frente a la explotación sexual comercial de niñas, niños y adolescentes, las violencias sexuales y el embarazo adolescente.
                            </li>
                            <br />
                            <li>
                                Formación psicológica para la respuesta emocional ante la crisis emocional ocasionada por la COVID-19.
                            </li>
                            <br />
                            <li>
                                Acompañamiento en la implementación del componente de salud mental de la RIAS: Promoción y Mantenimiento de la Salud.
                            </li>
                            <li>
                                Asesoría para prueba voluntaria (APV) para VIH e ITS.
                            </li>
                            <br />
                            <li>
                                Consejería corta y entrevista motivacional para cesación tabáquica.
                            </li>
                        </ul>
                    </p>
                    <div className='button-container'>
                        <button className='btn1' onClick={() => handleZIndexChange('p1')}>Estudios Académicos</button>
                        <button className='btn2' onClick={() => handleZIndexChange('p2')}>Experiencia profesional</button>
                        <button className='btn3' onClick={() => handleZIndexChange('p3')}>Diplomados</button>
                        <button className='btn4' onClick={() => handleZIndexChange('p4')}>Cursos</button>
                    </div>
                </article>
                <div className="img-container">
                    <img src={foto} alt="" className='foto' />
                </div>

            </section>
        </>
    );
};

export default Presentation;
