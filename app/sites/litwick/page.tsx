"use client";

import { useState } from 'react';
import styles from './litwick.module.css';

export default function LitwickPage() {
    const [activeTab, setActiveTab] = useState('inicio');

    const showPage = (pageId: string) => {
        setActiveTab(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Nunito+Sans:wght@300;400;700;900&display=swap');
            `}</style>

            <header className={styles.header}>
                <div className={styles.logo}>Litwick <span>Construcción</span></div>
                <nav className={styles.navMenu}>
                    <button onClick={() => showPage('inicio')}>Inicio</button>
                    <button onClick={() => showPage('nosotros')}>La Constructora</button>
                    <button onClick={() => showPage('proyectos')}>Proyectos y Catálogo</button>
                    <button onClick={() => showPage('contacto')}>Contacto</button>
                </nav>
            </header>

            <main className={styles.main}>

                {activeTab === 'inicio' && (
                    <section className={`${styles.pageSection} ${styles.inicio}`}>
                        <div className={styles.heroContainer}>
                            <h1>Construyendo tu refugio ideal</h1>
                            <p>Especialistas en crear espacios sólidos, cálidos y con alma. Diseños amaderados, acabados de lujo y construcción residencial que abraza tus sentidos.</p>
                            <button className={styles.btnWood} onClick={() => showPage('proyectos')}>Explorar Proyectos</button>
                        </div>
                    </section>
                )}

                {activeTab === 'nosotros' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Solidez y Calidez</h2>
                        <p className={styles.sectionSubtitle}>No solo levantamos muros; construimos hogares con esencia.</p>

                        <div className={styles.aboutGrid}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontFamily: 'Lora, serif', color: 'var(--lw-wood-dark)' }}>Nuestra Filosofía Litwick</h3>
                                <p style={{ marginBottom: '15px', fontSize: '1.1rem' }}>En <strong>Constructora Litwick</strong> tomamos inspiración de la naturaleza. Creemos que los espacios deben sentirse vivos y acogedores. Nos especializamos en incorporar tonos maderables, luces cálidas y arquitectura tipo cabaña en entornos urbanos y campestres.</p>
                                <p style={{ fontSize: '1.1rem' }}>Nuestros procesos son tan robustos como el roble. Garantizamos materiales de primera calidad, entregas puntuales y un acompañamiento cálido desde el primer boceto hasta la entrega de llaves.</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" alt="Arquitectura cálida Litwick" />
                        </div>
                    </section>
                )}

                {activeTab === 'proyectos' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Nuestro Trabajo</h2>
                        <p className={styles.sectionSubtitle}>Desliza para ver la magia de nuestros acabados.</p>

                        <h3 className={styles.carouselTitle}>Exteriores y Cabañas</h3>
                        <div className={styles.carouselWrapper}>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80" alt="Proyecto 1" />
                                <div className={styles.carouselItemOverlay}>Residencia Bosque Alto</div>
                            </div>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1440613905118-99b921706b5c?auto=format&fit=crop&w=600&q=80" alt="Proyecto 2" />
                                <div className={styles.carouselItemOverlay}>Cabaña Valle Verde</div>
                            </div>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=600&q=80" alt="Proyecto 3" />
                                <div className={styles.carouselItemOverlay}>Casa de Campo Nogal</div>
                            </div>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80" alt="Proyecto 4" />
                                <div className={styles.carouselItemOverlay}>Refugio Ámbar</div>
                            </div>
                        </div>

                        <h3 className={styles.carouselTitle}>Interiores y Acabados de Madera</h3>
                        <div className={styles.carouselWrapper}>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80" alt="Interior 1" />
                                <div className={styles.carouselItemOverlay}>Remodelación Rústica</div>
                            </div>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" alt="Interior 2" />
                                <div className={styles.carouselItemOverlay}>Sala Principal Madera</div>
                            </div>
                            <div className={styles.carouselItem}>
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Interior 3" />
                                <div className={styles.carouselItemOverlay}>Cocina Campestre</div>
                            </div>
                        </div>

                        <h2 className={styles.sectionTitle} style={{ marginTop: '60px' }}>Catálogo de Opciones</h2>
                        <div className={styles.catalogGrid}>
                            <div className={styles.catalogCard}>
                                <h3>Construcción de Cabañas</h3>
                                <p>Diseño y construcción de refugios rústicos y modernos en madera y piedra.</p>
                            </div>
                            <div className={styles.catalogCard}>
                                <h3>Construcción Residencial</h3>
                                <p>Casas habitación con detalles cálidos y estructura altamente resistente.</p>
                            </div>
                            <div className={styles.catalogCard}>
                                <h3>Remodelación Cálida</h3>
                                <p>Transformamos espacios fríos en áreas acogedoras con recubrimientos en madera y luz cálida.</p>
                            </div>
                            <div className={styles.catalogCard}>
                                <h3>Carpintería Fija</h3>
                                <p>Diseño de closets, cocinas y puertas con maderas nobles y acabados perfectos.</p>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <h2 className={styles.sectionTitle}>Comencemos a Construir</h2>
                        <p className={styles.sectionSubtitle}>Visítanos o escríbenos para cotizar tu proyecto.</p>

                        <div className={styles.contactContainer}>
                            <div className={styles.contactInfo}>
                                <div className={styles.infoCard}>
                                    <strong>📍 Dirección de Oficinas:</strong><br />
                                    Av. Armando Birlain Shaffler 2001, Torre 1, Piso 11A,<br />
                                    Colonia Centro Sur, C.P. 76090,<br />
                                    Querétaro, Querétaro, México.
                                </div>
                                <div className={styles.infoCard}>
                                    <strong>✉️ Correo de Atención:</strong><br />
                                    <a href="mailto:atencion@litwickconstruccion.com" style={{ color: 'var(--lw-wood-dark)', textDecoration: 'none' }}>atencion@litwickconstruccion.com</a>
                                </div>
                                <div className={styles.infoCardLight}>
                                    <strong>🕒 Horario de Atención Presencial:</strong><br />
                                    Lunes a Viernes de 9:00 AM a 2:00 PM
                                </div>
                                <div className={styles.alert247}>
                                    🌙 ¡No importa la hora! Nuestra caja de mensajes virtuales (aquí a la derecha) está disponible 24/7. Te leeremos a primera hora.
                                </div>
                            </div>

                            <div className={styles.contactForm}>
                                <form onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado a Litwick Construcción! Lo revisaremos lo antes posible.'); }}>
                                    <input type="text" placeholder="Tu Nombre Completo" required />
                                    <input type="email" placeholder="Tu Correo Electrónico" required />
                                    <input type="text" placeholder="Teléfono de Contacto" required />
                                    <textarea rows={5} placeholder="Cuéntanos sobre el espacio de tus sueños que quieres construir o remodelar..." required></textarea>
                                    <button type="submit" className={styles.btnWood} style={{ width: '100%' }}>Enviar Mensaje 24/7</button>
                                </form>
                            </div>
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
}
