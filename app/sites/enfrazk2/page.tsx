"use client";

import { useState } from 'react';
import styles from './enfrazk2.module.css';

export default function Enfrazk2Page() {
    const [activeTab, setActiveTab] = useState('inicio');

    const showPage = (pageId: string) => {
        setActiveTab(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Open+Sans:wght@400;600&display=swap');
            `}</style>

            <header className={styles.header}>
                <div className={styles.logo}>Enfrazk<span>2</span></div>
                <nav className={styles.navMenu}>
                    <button onClick={() => showPage('inicio')}>Inicio</button>
                    <button onClick={() => showPage('nosotros')}>Nosotros</button>
                    <button onClick={() => showPage('servicios')}>Lo Que Hacemos</button>
                    <button onClick={() => showPage('contacto')}>Contacto</button>
                </nav>
            </header>

            <main className={styles.main}>

                {activeTab === 'inicio' && (
                    <section className={`${styles.pageSection} ${styles.inicio}`}>
                        <div className={styles.heroContainer}>
                            <div className={styles.heroText}>
                                <h1>La solucion que buscas.</h1>
                                <p>En Enfrazkdos te ayudamos a darte a conocer al mundo de manera eficiente, honesta y llena de creatividad. Tu marca está a punto de dar el gran salto.</p>
                                <button className={styles.btnCreative} onClick={() => showPage('servicios')}>Descubre cómo</button>
                            </div>
                            <div className={styles.heroImage}>
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Equipo Creativo Enfrazk2" />
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'nosotros' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Nuestra Filosofía</h2>
                        <p className={styles.sectionSubtitle}>Creatividad con los pies en la tierra y el corazón en tu marca.</p>

                        <div className={styles.grid2col}>
                            <div className={styles.cardFriendly}>
                                <h3>Nuestra Misión</h3>
                                <p>Convertirnos en la agencia donde encuentres a <strong>un amigo más</strong>. Nuestro propósito es ayudarte a darte a conocer al mundo a través de estrategias eficientes, procesos transparentes y, sobre todo, resultados honestos.</p>
                            </div>
                            <div className={styles.cardFriendlyRight}>
                                <h3 style={{ color: 'var(--ez-redwood)' }}>¿Por qué Enfrazk2?</h3>
                                <p>Porque entendemos que detrás de cada marca hay personas y sueños. No "vendemos publicidad", creamos conexiones reales. Trabajamos contigo codo a codo, celebrando tus logros como si fueran nuestros.</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '40px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Brainstorming creativo" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                    </section>
                )}

                {activeTab === 'servicios' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Lo que hacemos por ti</h2>
                        <p className={styles.sectionSubtitle}>Soluciones honestas para llevar tu mensaje al siguiente nivel.</p>

                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>💡</div>
                                <h3>Branding y Diseño</h3>
                                <p>Le damos una personalidad única a tu marca para que enamore a tu audiencia desde el primer vistazo.</p>
                            </div>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>🚀</div>
                                <h3>Estrategia Digital</h3>
                                <p>Campañas eficientes en redes sociales y buscadores que conectan tu producto con quien realmente lo necesita.</p>
                            </div>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>🤝</div>
                                <h3>Relaciones Públicas</h3>
                                <p>Construimos alianzas y te ayudamos a comunicarte con el mundo de forma auténtica y cercana.</p>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>¡Hablemos!</h2>
                        <p className={styles.sectionSubtitle}>Déjanos invitarte un café virtual y platicar sobre tu proyecto.</p>

                        <div className={styles.contactWrapper}>
                            <div className={styles.contactInfo}>
                                <h3>Nuestra Casa</h3>
                                <p><strong>📍 Domicilio:</strong><br />
                                    Avenida Armando Birlaing Shaffler 2001,<br />
                                    Torre 1, Piso 2B,<br />
                                    Colonia Centro Sur, C.P. 76090,<br />
                                    Querétaro, Querétaro, México.
                                </p>
                                <p><strong>✉️ Correo:</strong><br />
                                    <a href="mailto:contacto@enfrazk2publicidad.com" style={{ color: 'var(--ez-burnt-umber)', fontWeight: 'bold', textDecoration: 'none' }}>contacto@enfrazk2publicidad.com</a>
                                </p>
                                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'var(--ez-macadamia)', borderRadius: '15px' }}>
                                    <p style={{ margin: 0, fontSize: '0.95rem' }}><em>"En cualquier momento puedes dejarnos un mensaje. Nuestro equipo está listo para leerte y responderte de inmediato."</em></p>
                                </div>
                            </div>

                            <div className={styles.contactForm}>
                                <form onSubmit={(e) => { e.preventDefault(); alert('¡Qué emoción! Hemos recibido tu mensaje. Pronto un amigo de Enfrazk2 se pondrá en contacto contigo.'); }}>
                                    <input type="text" placeholder="¿Cómo te llamas?" required />
                                    <input type="email" placeholder="Tu mejor correo electrónico" required />
                                    <input type="text" placeholder="¿Cómo se llama tu proyecto/empresa?" />
                                    <textarea rows={5} placeholder="Cuéntanos, ¿en qué te podemos ayudar a conquistar el mundo?" required></textarea>
                                    <button type="submit" className={styles.btnCreative} style={{ width: '100%' }}>Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
}
