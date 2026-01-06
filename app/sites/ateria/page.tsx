"use client";

import { useState } from 'react';
import styles from './ateria.module.css';

export default function AteriaPage() {
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
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/logos/ateria.png" alt="Ateria Logo" className={styles.logoImg} />
                </div>
                <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
                <nav>
                    <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`} id="nav-list">
                        <li><button className={styles.navLink} onClick={() => showPage('inicio')}>Inicio</button></li>
                        <li><button className={styles.navLink} onClick={() => showPage('conocenos')}>Conócenos</button></li>
                        <li><button className={styles.navLink} onClick={() => showPage('servicios')}>Servicios</button></li>
                        <li><button className={styles.navLink} onClick={() => showPage('contacto')}>Contáctanos</button></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                {activeTab === 'inicio' && (
                    <section className={styles.sectionInicio}>
                        <div className={styles.carouselBg}></div>
                        <div className={styles.overlay}></div>
                        <div className={styles.heroContent}>
                            <h1>Ateria Logística y Traslados</h1>
                            <p>Excelencia queretana en movimiento. Conectando familias y negocios con alcance nacional.</p>
                            <button className={styles.btn} onClick={() => showPage('servicios')}>Ver Servicios</button>
                        </div>
                    </section>
                )}

                {activeTab === 'conocenos' && (
                    <section className={styles.pageSection}>
                        <div className={styles.containerPadding}>
                            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--colorPrimary)', fontSize: '2.5rem' }}>Nuestra Esencia</h2>
                            <div className={styles.gridConocenos}>
                                <div className={styles.card}>
                                    <h3>Misión</h3>
                                    <p>Brindar soluciones logísticas integrales y seguras que conecten a México, impulsadas por la calidez de nuestros valores familiares y la excelencia operativa.</p>
                                </div>
                                <div className={styles.card}>
                                    <h3>Visión</h3>
                                    <p>Ser el referente logístico más confiable del Bajío con proyección nacional, reconocidos por nuestra capacidad de respuesta y trato humano.</p>
                                </div>
                                <div className={styles.card}>
                                    <h3>Nuestro Propósito</h3>
                                    <p>Ofrecemos un servicio que honra nuestras raíces queretanas, entendiendo que detrás de cada carga hay una promesa que cumplir.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'servicios' && (
                    <section className={styles.pageSection}>
                        <div className={styles.containerPadding}>
                            <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--colorPrimary)', fontSize: '2.5rem' }}>Soluciones Profesionales</h2>
                            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '3rem' }}>Desde Querétaro para todo el país, movemos tu negocio con seguridad.</p>

                            <div className={styles.servicesContainer}>
                                <div className={styles.serviceItem}>
                                    <div className={styles.serviceIcon}>🚛</div>
                                    <h4>Transporte Nacional</h4>
                                    <p>Cobertura completa en las principales rutas de México con monitoreo 24/7.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <div className={styles.serviceIcon}>📦</div>
                                    <h4>Paquetería y Última Milla</h4>
                                    <p>Entregas precisas y puntuales para e-commerce y distribución retail.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <div className={styles.serviceIcon}>🏭</div>
                                    <h4>Logística Industrial</h4>
                                    <p>Soluciones especializadas para el corredor industrial del Bajío.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <div className={styles.serviceIcon}>🤝</div>
                                    <h4>Fletes Dedicados</h4>
                                    <p>Unidades exclusivas para tu carga, garantizando integridad y tiempos récord.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <div className={styles.containerPadding}>
                            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--colorPrimary)', fontSize: '2.5rem' }}>Contáctanos</h2>
                            <div className={styles.contactWrapper}>
                                <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                    Escríbenos para cotizar tu traslado o déjanos tus comentarios.
                                </p>
                                <form onSubmit={(e) => { e.preventDefault(); alert('Gracias por tu mensaje. Nos pondremos en contacto a la brevedad.'); }}>
                                    <div className={styles.formGroup}>
                                        <label>Nombre Completo</label>
                                        <input type="text" placeholder="Ej. Juan Pérez" required className={styles.formInput} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Correo Electrónico</label>
                                        <input type="email" placeholder="tu@email.com" required className={styles.formInput} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Mensaje / Comentarios</label>
                                        <textarea rows={5} placeholder="Cuéntanos tus necesidades logísticas..." required className={styles.formTextarea}></textarea>
                                    </div>
                                    <button type="submit" className={styles.btn} style={{ width: '100%' }}>Enviar Mensaje</button>
                                </form>

                                <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                    <p><strong>Ubicación:</strong> Santiago de Querétaro, Qro.</p>
                                    <p><strong>Email:</strong> <a href="mailto:informacion@aterialogistic.com" style={{ color: 'var(--colorPrimary)', textDecoration: 'none', fontWeight: 'bold' }}>informacion@aterialogistic.com</a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2025 Ateria Logística y Traslados. Orgullosamente Queretanos.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Contacto: informacion@aterialogistic.com</p>
            </footer>
        </div>
    );
}
