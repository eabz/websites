"use client";

import { useState } from 'react';
import styles from './enerkia.module.css';

export default function EnerkiaPage() {
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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap');
      `}</style>
            <header className={styles.header}>
                <div className={styles.logo}>ENERKIA <span>22</span></div>
                <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
                <nav>
                    <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`} id="nav-list">
                        <li><button className={`${styles.navLink} ${activeTab === 'inicio' ? styles.navLinkActive : ''}`} onClick={() => showPage('inicio')}>HUB Central</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'productos' ? styles.navLinkActive : ''}`} onClick={() => showPage('productos')}>Tecnología</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'nosotros' ? styles.navLinkActive : ''}`} onClick={() => showPage('nosotros')}>ADN 22</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'contacto' ? styles.navLinkActive : ''}`} onClick={() => showPage('contacto')}>Conexión</button></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                {activeTab === 'inicio' && (
                    <section className={styles.sectionInicio}>
                        <div className={styles.circuitBg}></div>
                        <div className={styles.heroContent}>
                            <h1>ENERKIA <span style={{ color: 'white', WebkitTextStroke: '1px var(--neon-blue)' }}>22</span></h1>
                            <div className={styles.heroSubtitle}>Comercializadora de Tecnología Avanzada</div>
                            <br />
                            <button onClick={() => showPage('productos')} className={styles.btnTech}>EXPLORAR CATÁLOGO</button>
                        </div>
                    </section>
                )}

                {activeTab === 'productos' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Nuestras Verticales</h2>

                            <div className={styles.techGrid}>
                                <div className={styles.techCard}>
                                    <div className={styles.techIcon}>⚡</div>
                                    <h4 className={styles.heading}>Hardware Empresarial</h4>
                                    <p>Servidores, estaciones de trabajo de alto rendimiento y componentes para infraestructura crítica.</p>
                                </div>
                                <div className={styles.techCard}>
                                    <div className={styles.techIcon}>🖥️</div>
                                    <h4 className={styles.heading}>Computación Personal</h4>
                                    <p>Laptops ultraligeras, equipos AiO y periféricos de última generación para productividad.</p>
                                </div>
                                <div className={styles.techCard}>
                                    <div className={styles.techIcon}>📡</div>
                                    <h4 className={styles.heading}>Redes & Conectividad</h4>
                                    <p>Soluciones de networking, routers industriales y cableado estructurado certificado.</p>
                                </div>
                                <div className={styles.techCard}>
                                    <div className={styles.techIcon}>🔋</div>
                                    <h4 className={styles.heading}>Energía & Respaldo</h4>
                                    <p>UPS, reguladores y sistemas de energía ininterrumpida para proteger su inversión.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'nosotros' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentContainer}>
                            <div className={styles.aboutSplit}>
                                <div>
                                    <h2 className={styles.heading}>La Visión Enerkia</h2>
                                    <p style={{ marginBottom: '1.5rem' }}>Somos el puente entre la innovación global y la implementación local. En Enerkia 22, no solo vendemos cajas; comercializamos el futuro de su empresa.</p>
                                    <p>Nuestra filosofía se basa en la velocidad de respuesta y la precisión técnica. Entendemos que en el mundo digital, cada segundo cuenta.</p>

                                    <div className={styles.statsBox}>
                                        <div className={styles.stat}>
                                            <strong>100%</strong>
                                            <span>Garantía Tech</span>
                                        </div>
                                        <div className={styles.stat}>
                                            <strong>24h</strong>
                                            <span>Respuesta</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ background: 'var(--bg-light)', padding: '2rem', border: '1px dashed var(--dim-blue)', textAlign: 'center' }}>
                                    <h3 className={styles.heading} style={{ marginBottom: '1rem' }}>Partners</h3>
                                    <p style={{ opacity: 0.7 }}>Trabajamos con las marcas líderes del silicio.</p>
                                    <div style={{ marginTop: '2rem', fontSize: '2rem', opacity: 0.5 }}>
                                        INTEL • AMD • CISCO • DELL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Iniciar Protocolo de Contacto</h2>

                            <div className={styles.contactBox}>
                                <div className={styles.infoPanel}>
                                    <h3>Datos Operativos</h3>
                                    <p style={{ marginBottom: '2rem' }}>Solicite cotizaciones o asesoría técnica especializada.</p>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <label style={{ color: 'var(--dim-blue)', fontSize: '0.9rem' }}>EMAIL ENCRIPTADO</label>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>atencion@enerkia22.com</div>
                                    </div>

                                    <label style={{ color: 'var(--dim-blue)', fontSize: '0.9rem' }}>HORARIO DE OPERACIONES</label>
                                    <div className={styles.timeSlot}>
                                        <strong>Lunes a Viernes</strong><br />
                                        <span style={{ fontSize: '1.3rem', color: 'var(--neon-blue)' }}>10:00 AM - 03:00 PM</span>
                                        <p style={{ fontSize: '0.8rem', marginTop: '5px', opacity: 0.7 }}>Horario optimizado para logística y envíos.</p>
                                    </div>
                                </div>

                                <div className={styles.formPanel}>
                                    <form onSubmit={(e) => { e.preventDefault(); alert('Datos transmitidos a la central de Enerkia 22.'); }}>
                                        <input type="text" placeholder="ID / Nombre de Empresa" required className={styles.formInput} />
                                        <input type="email" placeholder="Correo de Contacto" required className={styles.formInput} />
                                        <textarea rows={4} placeholder="Requerimientos de Hardware/Software" required className={styles.formTextarea}></textarea>
                                        <button type="submit" className={styles.btnTech} style={{ width: '100%' }}>TRANSMITIR DATOS</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className={styles.footer}>
                <p>SYSTEM ONLINE // &copy; 2025 ENERKIA 22. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
