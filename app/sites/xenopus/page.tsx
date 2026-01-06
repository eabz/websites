"use client";

import { useState } from 'react';
import Head from 'next/head';
import styles from './xenopus.module.css';

export default function XenopusPage() {
    const [activeTab, setActiveTab] = useState('inicio');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const showPage = (pageId: string) => {
        setActiveTab(pageId);
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;700&display=swap');
      `}</style>
            <header className={styles.header}>
                <div className={styles.navCapsule}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>✦</span> XENOPUS
                    </div>
                    <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
                    <nav>
                        <ul className={`${styles.navUl} ${menuOpen ? styles.show : ''}`}>
                            <li><button className={styles.navLink} onClick={() => showPage('inicio')} style={{ background: 'none', border: 'none' }}>Inicio</button></li>
                            <li><button className={styles.navLink} onClick={() => showPage('filosofia')} style={{ background: 'none', border: 'none' }}>Filosofía</button></li>
                            <li><button className={styles.navLink} onClick={() => showPage('soluciones')} style={{ background: 'none', border: 'none' }}>Soluciones</button></li>
                            <li><button className={styles.navLink} onClick={() => showPage('contacto')} style={{ background: 'none', border: 'none' }}>Atención</button></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                {activeTab === 'inicio' && (
                    <section className={`${styles.pageSection} ${styles.sectionInicio}`}>
                        <h1 className={styles.heroTitle}>Evolución <br /><span>Corporativa Natural</span></h1>
                        <p className={styles.heroText}>
                            En un ecosistema empresarial cambiante, la supervivencia depende de la adaptabilidad.
                            Ayudamos a tu organización a transformarse con la sabiduría de la naturaleza y la precisión de la estrategia.
                        </p>
                        <button className={styles.btnOrganic} onClick={() => showPage('soluciones')}>Explorar Nuestro Ecosistema</button>
                        <div style={{ marginTop: '3rem', opacity: 0.6 }}>
                            <p style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>ESTRATEGIA • ADAPTABILIDAD • RESILIENCIA</p>
                        </div>
                    </section>
                )}

                {activeTab === 'filosofia' && (
                    <section className={styles.pageSection}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 className={styles.heading}>Nuestra Naturaleza</h2>
                            <p style={{ maxWidth: '600px', margin: '10px auto' }}>Entendemos las empresas como organismos vivos que necesitan equilibrio para crecer.</p>
                        </div>

                        <div className={styles.organicGrid}>
                            <div className={styles.organicCard}>
                                <div className={styles.iconCircle}>🌱</div>
                                <h3 className={styles.heading}>Crecimiento Orgánico</h3>
                                <p>No forzamos resultados artificiales. Cultivamos estructuras sólidas desde la raíz para un éxito sostenible a largo plazo.</p>
                            </div>
                            <div className={styles.organicCard}>
                                <div className={styles.iconCircle}>💧</div>
                                <h3 className={styles.heading}>Fluidez Estratégica</h3>
                                <p>Como el agua, nuestras soluciones se adaptan al recipiente. Gestionamos el cambio con suavidad pero con fuerza erosiva ante los obstáculos.</p>
                            </div>
                            <div className={styles.organicCard}>
                                <div className={styles.iconCircle}>🐸</div>
                                <h3 className={styles.heading}>Metamorfosis</h3>
                                <p>La transformación es inevitable. Acompañamos a tu empresa en su evolución, asegurando que cada etapa sea más fuerte que la anterior.</p>
                            </div>
                        </div>

                        <div className={styles.highlightBox}>
                            <h3>El Método Xenopus</h3>
                            <p>Aplicamos precaución analítica. Antes de cualquier salto estratégico, estudiamos el entorno, medimos los riesgos y preparamos el terreno. Creemos en la sutileza de los datos y la contundencia de las acciones bien planeadas.</p>
                        </div>
                    </section>
                )}

                {activeTab === 'soluciones' && (
                    <section className={styles.pageSection}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 className={styles.heading}>Soluciones Evolutivas</h2>
                            <p>Consultoría diseñada para la adaptación.</p>
                        </div>

                        <div className={styles.organicGrid}>
                            <div className={styles.organicCard}>
                                <h3 className={styles.heading}>Consultoría de Procesos</h3>
                                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Optimizamos el flujo de trabajo eliminando fricciones innecesarias, permitiendo que la energía de la empresa circule libremente.</p>
                            </div>
                            <div className={styles.organicCard}>
                                <h3 className={styles.heading}>Gestión del Cambio</h3>
                                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Preparamos a tu capital humano para nuevos entornos, reduciendo la resistencia natural y fomentando la adopción orgánica.</p>
                            </div>
                            <div className={styles.organicCard}>
                                <h3 className={styles.heading}>Análisis de Riesgo</h3>
                                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Con la precaución que nos define, detectamos amenazas en el entorno antes de que afecten el núcleo de tu negocio.</p>
                            </div>
                            <div className={styles.organicCard}>
                                <h3 className={styles.heading}>Desarrollo de Cultura</h3>
                                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Nutrimos los valores y comportamientos que definen la identidad de tu "especie" corporativa.</p>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 className={styles.heading}>Conectemos</h2>
                            <p>Estamos listos para escuchar las necesidades de tu ecosistema.</p>
                        </div>

                        <div className={styles.contactContainer}>
                            <div className={styles.contactDetails}>
                                <h3>Datos de Contacto</h3>
                                <p>Escríbenos directamente o visítanos.</p>

                                <div style={{ margin: '20px 0' }}>
                                    <strong>Correo Electrónico:</strong><br />
                                    <a href="mailto:atencion@consulxenopus.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>atencion@consulxenopus.com</a>
                                </div>

                                <div className={styles.scheduleBox}>
                                    <h4 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Horario de Atención</h4>
                                    <div className={styles.scheduleItem}>
                                        <span>Lunes - Jueves</span>
                                        <strong>09:00 AM - 05:00 PM</strong>
                                    </div>
                                    <div className={styles.scheduleItem}>
                                        <span>Viernes</span>
                                        <strong>09:00 AM - 01:00 PM</strong>
                                    </div>
                                    <div className={`${styles.scheduleItem} ${styles.scheduleItemClosed}`}>
                                        <span>Sábado - Domingo</span>
                                        <span>Cerrado</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form">
                                <form onSubmit={(e) => { e.preventDefault(); alert('Gracias por contactar a Xenopus Consultores. Analizaremos tu mensaje con precaución y te responderemos en breve.'); }}>
                                    <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginLeft: '5px' }}>Nombre</label>
                                    <input type="text" placeholder="Tu nombre o empresa" required className={styles.formInput} />

                                    <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginLeft: '5px' }}>Correo</label>
                                    <input type="email" placeholder="contacto@empresa.com" required className={styles.formInput} />

                                    <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginLeft: '5px' }}>Mensaje</label>
                                    <textarea rows={4} placeholder="¿En qué proceso de evolución se encuentra tu empresa?" required className={styles.formTextarea}></textarea>

                                    <button type="submit" className={styles.btnOrganic} style={{ width: '100%', borderRadius: '12px' }}>Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2025 Xenopus Consultores. Precaución, Estrategia y Naturaleza.</p>
            </footer>
        </div>
    );
}
