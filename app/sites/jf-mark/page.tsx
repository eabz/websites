"use client";

import { useState } from 'react';
import styles from './jf-mark.module.css';

export default function JFMarkPage() {
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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
            <header className={styles.header}>
                <div className={styles.logo}>JF MARK <span>CONSULTORES</span></div>
                <div className={styles.menuIcon} onClick={toggleMenu}>{menuOpen ? '✕' : '☰'}</div>
                <nav>
                    <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`} id="nav-list">
                        <li><button className={styles.navLink} onClick={() => showPage('inicio')}>Inicio</button></li>
                        <li><button className={styles.navLink} onClick={() => showPage('nosotros')}>La Firma</button></li>
                        <li><button className={styles.navLink} onClick={() => showPage('servicios')}>Expertise</button></li>
                        <li><button className={styles.navLink} onClick={() => showPage('contacto')}>Contacto</button></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                {activeTab === 'inicio' && (
                    <section className={styles.sectionInicio}>
                        <div className={styles.carouselBg}></div>
                        <div className={styles.heroContent}>
                            <h1>Estrategia. Precisión. Resultados.</h1>
                            <p>Consultoría de alto nivel para empresas que definen el futuro.</p>
                            <button className={styles.btnGold} onClick={() => showPage('contacto')}>Agendar Consulta</button>
                        </div>
                    </section>
                )}

                {activeTab === 'nosotros' && (
                    <section className={styles.pageSection}>
                        <div className={styles.sectionContainer}>
                            <h2 className={styles.sectionTitle}>Nuestra Firma</h2>
                            <p className={styles.sectionSubtitle}>Redefiniendo el estándar de la consultoría estratégica.</p>

                            <div className={styles.gridAbout}>
                                <div className={styles.aboutCard}>
                                    <h3>Misión</h3>
                                    <p>Empoderar a las organizaciones mediante estrategias disruptivas y análisis precisos, garantizando un crecimiento sostenible en un mercado global competitivo.</p>
                                </div>
                                <div className={styles.aboutCard}>
                                    <h3>Visión</h3>
                                    <p>Consolidarnos como la firma consultora referente por excelencia, reconocida por transformar desafíos complejos en oportunidades de valor tangible.</p>
                                </div>
                                <div className={styles.aboutCard}>
                                    <h3>Valores</h3>
                                    <p>Integridad inquebrantable, excelencia analítica y confidencialidad absoluta. Son los pilares sobre los que construimos la confianza de nuestros socios.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'servicios' && (
                    <section className={styles.pageSection}>
                        <div className={styles.sectionContainer}>
                            <h2 className={styles.sectionTitle}>Áreas de Expertise</h2>
                            <p className={styles.sectionSubtitle}>Soluciones integrales diseñadas para la alta dirección.</p>

                            <div className={styles.servicesGrid}>
                                <div className={styles.serviceBox}>
                                    <span className={styles.serviceIcon}>⚖️</span>
                                    <h4>Consultoría Legal Corporativa</h4>
                                    <p>Blindaje jurídico y cumplimiento normativo para operaciones nacionales e internacionales.</p>
                                </div>
                                <div className={styles.serviceBox}>
                                    <span className={styles.serviceIcon}>📊</span>
                                    <h4>Estrategia Financiera</h4>
                                    <p>Análisis de riesgo, reestructuración de capital y optimización de recursos.</p>
                                </div>
                                <div className={styles.serviceBox}>
                                    <span className={styles.serviceIcon}>👥</span>
                                    <h4>Capital Humano</h4>
                                    <p>Desarrollo organizacional, headhunting ejecutivo y gestión del cambio.</p>
                                </div>
                                <div className={styles.serviceBox}>
                                    <span className={styles.serviceIcon}>📈</span>
                                    <h4>Desarrollo de Negocios</h4>
                                    <p>Expansión de mercado, fusiones, adquisiciones y alianzas estratégicas.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <div className={styles.sectionContainer}>
                            <h2 className={styles.sectionTitle}>Contacto</h2>
                            <p className={styles.sectionSubtitle}>Inicie la conversación con nuestros expertos.</p>

                            <div className={styles.contactLayout}>
                                <div className={styles.contactInfo}>
                                    <h3>Información Corporativa</h3>
                                    <p style={{ marginBottom: '2rem' }}>Estamos listos para analizar su caso con la discreción y profesionalismo que nos caracteriza.</p>

                                    <div className={styles.infoItem}>
                                        <label>Correo Electrónico</label>
                                        <span><a href="mailto:informes@consultoresjfmark.com" style={{ color: 'inherit', textDecoration: 'none' }}>informes@consultoresjfmark.com</a></span>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <label>Horario de Atención</label>
                                        <span>Lunes a Viernes, 09:00 - 15:00</span>
                                    </div>
                                </div>

                                <div className={styles.contactForm}>
                                    <form onSubmit={(e) => { e.preventDefault(); alert('Su solicitud ha sido recibida. Un consultor senior le contactará en breve.'); }}>
                                        <input type="text" placeholder="Nombre Completo" required className={styles.formInput} />
                                        <input type="email" placeholder="Correo Corporativo" required className={styles.formInput} />
                                        <input type="text" placeholder="Empresa / Organización" className={styles.formInput} />
                                        <textarea rows={4} placeholder="Breve descripción de su requerimiento" required className={styles.formTextarea}></textarea>
                                        <button type="submit" className={styles.btnSubmit}>Enviar Solicitud</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className={styles.footer}>
                <div className={styles.logo} style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#555' }}>JF MARK <span>CONSULTORES</span></div>
                <p>&copy; 2025 JF MARK Consultores. Todos los derechos reservados.</p>
                <p>Privacidad | Términos de Servicio</p>
            </footer>
        </div>
    );
}
