"use client";

import { useState } from 'react';
import styles from './flubip.module.css';

export default function FlubipPage() {
    const [activeTab, setActiveTab] = useState('inicio');

    const showPage = (pageId: string) => {
        setActiveTab(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Roboto:wght@300;400;500&display=swap');
            `}</style>

            <header className={styles.header}>
                <div className={styles.logo}>Flubip Lead</div>
                <nav className={styles.navMenu}>
                    <button onClick={() => showPage('inicio')}>Inicio</button>
                    <button onClick={() => showPage('nosotros')}>Nosotros</button>
                    <button onClick={() => showPage('servicios')}>Especialidades</button>
                    <button onClick={() => showPage('contacto')}>Contacto</button>
                </nav>
            </header>

            <main className={styles.main}>

                {activeTab === 'inicio' && (
                    <section className={`${styles.pageSection} ${styles.inicio}`}>
                        <div className={styles.heroContainer}>
                            <div className={styles.heroContent}>
                                <h1>Ese plus que tu negocio necesita.</h1>
                                <p>Somos la consultoría estratégica preparada para optimizar, escalar y darle a tus operaciones la ventaja competitiva definitiva en el mercado actual.</p>
                                <button className={styles.btnModern} onClick={() => showPage('servicios')}>Conoce cómo trabajamos</button>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'nosotros' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Sobre Flubip Lead</h2>

                        <div className={styles.gridNosotros}>
                            <div>
                                <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>Entendemos que el crecimiento empresarial no ocurre por accidente. Requiere de visión, análisis profundo y una ejecución impecable. En <strong>Flubip Lead</strong>, nos convertimos en la extensión estratégica de tu empresa.</p>
                                <div className={styles.featureBox}>
                                    <h3>Visión Moderna</h3>
                                    <p>Dejamos atrás las consultorías rígidas. Nos adaptamos a tu modelo de negocio aportando soluciones ágiles y medibles.</p>
                                </div>
                                <div className={styles.featureBox}>
                                    <h3>El "Plus" Garantizado</h3>
                                    <p>No solo te entregamos un reporte; te acompañamos en la implementación para asegurar que ese <em>plus</em> se refleje en tus resultados reales.</p>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Consultoría Moderna" className={styles.woodImage} />
                        </div>
                    </section>
                )}

                {activeTab === 'servicios' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Nuestras Especialidades</h2>
                        <p style={{ marginTop: '15px', fontSize: '1.1rem' }}>Estrategias diseñadas a la medida para potenciar cada área de tu empresa.</p>

                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>📈</div>
                                <h3>Desarrollo de Negocios</h3>
                                <p>Identificamos nuevas oportunidades de mercado, optimizamos tus canales de venta y estructuramos planes de crecimiento escalable.</p>
                            </div>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>⚙️</div>
                                <h3>Optimización Operativa</h3>
                                <p>Analizamos y rediseñamos tus procesos internos para reducir costos, eliminar cuellos de botella y maximizar la eficiencia.</p>
                            </div>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>💡</div>
                                <h3>Innovación Estratégica</h3>
                                <p>Integramos metodologías modernas y transformación digital para que tu empresa se mantenga un paso adelante de la competencia.</p>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Inicia la Transformación</h2>
                        <p style={{ marginTop: '15px', fontSize: '1.1rem' }}>Agenda una sesión de diagnóstico y descubre el plus que podemos aportar.</p>

                        <div className={styles.contactLayout}>
                            <div className={styles.contactDetails}>
                                <h3 style={{ marginBottom: '25px' }}>Nuestras Oficinas</h3>
                                <p>
                                    <strong>✉️ Correo Electrónico:</strong><br />
                                    contacto@flubiplead.com
                                </p>
                                <br />
                                <p>
                                    <strong>📍 Dirección Corporativa:</strong><br />
                                    Av. Fray Luis de León 8002,<br />
                                    Piso 5,<br />
                                    Colonia Centro Sur, C.P. 76090,<br />
                                    Querétaro, Querétaro, México.
                                </p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--fl-wood-accent)', borderLeft: '3px solid var(--fl-wood-accent)', paddingLeft: '10px', marginTop: '-10px' }}>
                                    <em>Referencia: Entre Av. Colinas del Cimatario y Sin Nombre.</em>
                                </p>
                                <br />
                                <p>
                                    <strong>🕒 Horario de Consultoría:</strong><br />
                                    Lunes a Viernes de 9:00 AM a 3:00 PM
                                </p>
                            </div>

                            <div className={styles.contactForm}>
                                <form onSubmit={(e) => { e.preventDefault(); alert('Gracias por contactar a Flubip Lead. Un consultor estratégico se comunicará con usted en breve.'); }}>
                                    <div className={styles.formGroup}>
                                        <input type="text" placeholder="Nombre completo o Empresa" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input type="email" placeholder="Correo electrónico corporativo" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input type="text" placeholder="Sector o giro de su negocio" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <textarea rows={4} placeholder="¿En qué área busca darle un plus a su empresa?" required></textarea>
                                    </div>
                                    <button type="submit" className={styles.btnModern} style={{ width: '100%' }}>Solicitar Diagnóstico</button>
                                </form>
                            </div>
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
}
