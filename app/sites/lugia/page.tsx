"use client";

import styles from './lugia.module.css';

export default function LugiaPage() {
    return (
        <div className={styles.body}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Nunito:wght@400;600;700&display=swap');
                html { scroll-behavior: smooth; scroll-padding-top: 80px; }
            `}</style>

            <header className={styles.header}>
                <div className={styles.logo}>lugia<span>foods</span></div>
                <nav className={styles.navMenu}>
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#insumos">Catálogo</a>
                    <a href="#contacto" className={styles.btnNav}>Hacer Pedido</a>
                </nav>
            </header>

            <section id="inicio" className={styles.sectionInicio}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h1>Frescura y calidad que llegan a <span>tu negocio</span></h1>
                        <p>Comercializadora líder de alimentos e insumos de primer nivel, abasteciendo las cocinas y empresas más exigentes con alcance logístico impecable.</p>
                        <a href="#insumos" className={styles.btnMain}>Ver Nuestros Productos</a>
                    </div>
                </div>
            </section>

            <section id="nosotros" className={styles.section}>
                <div className={styles.grid2col}>
                    <img src="https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=800&q=80" alt="Insumos Lugia Foods" className={styles.imageFood} />
                    <div className={styles.textBox}>
                        <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Conectamos el campo con tu cocina</h2>
                        <p>En <strong>Lugia Foods</strong> entendemos que el secreto de un gran producto final radica en la excelencia de sus ingredientes. Por eso, nos dedicamos a seleccionar, empacar y distribuir alimentos e insumos de la más alta calidad.</p>
                        <p>Nuestra red logística está diseñada para garantizar que tus productos lleguen a tiempo y en perfectas condiciones, cuidando la cadena de frío y el manejo adecuado de cada insumo.</p>
                        <div className={styles.coverageBadge}>
                            📍 Cobertura exclusiva en CDMX y Querétaro
                        </div>
                    </div>
                </div>
            </section>

            <section id="insumos" className={styles.sectionInsumos}>
                <div className={styles.insumosContainer}>
                    <h2 className={styles.sectionTitle}>Lo que comercializamos</h2>
                    <p className={styles.sectionSubtitle}>Soluciones integrales de abastecimiento para la industria alimentaria.</p>
                    <div className={styles.grid3col}>
                        <div className={styles.cardFood}>
                            <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80" alt="Alimentos Frescos" />
                            <div className={styles.cardFoodContent}>
                                <h3>Alimentos Frescos</h3>
                                <p>Selección premium de frutas, verduras y productos de la tierra con el mayor grado de frescura.</p>
                            </div>
                        </div>
                        <div className={styles.cardFood}>
                            <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80" alt="Abarrotes y Secos" />
                            <div className={styles.cardFoodContent}>
                                <h3>Abarrotes y Secos</h3>
                                <p>Insumos base para cualquier cocina comercial: semillas, granos, especias y productos no perecederos.</p>
                            </div>
                        </div>
                        <div className={styles.cardFood}>
                            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80" alt="Suministros" />
                            <div className={styles.cardFoodContent}>
                                <h3>Suministros Especializados</h3>
                                <p>Todo lo que tu restaurante o negocio necesita para operar, desde empaques hasta insumos de limpieza.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacto" className={styles.section}>
                <h2 className={styles.sectionTitle}>Haz tu pedido hoy</h2>
                <p className={styles.sectionSubtitle}>Cotiza tus insumos o resuelve cualquier duda con nuestro equipo.</p>

                <div className={styles.contactBox}>
                    <div className={styles.contactInfo}>
                        <h3>Detalles de Contacto</h3>
                        <p style={{ marginBottom: '25px' }}>Ya sea que estés en la Ciudad de México o en Querétaro, estamos listos para atender tu solicitud con la mayor rapidez.</p>

                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📍</span>
                            <div>
                                <strong>Oficina Central Querétaro:</strong><br />
                                Av. Armando Birlain Schaffler 2001,<br />
                                Torre 2, Mezanine, Oficina A,<br />
                                Colonia Centro Sur, C.P. 76090,<br />
                                Querétaro, Qro., México.
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>✉️</span>
                            <div>
                                <strong>Correo Institucional:</strong><br />
                                <a href="mailto:contacto@lugiafoods.com" style={{ color: 'var(--lg-appetite-red)', textDecoration: 'none', fontWeight: 'bold' }}>contacto@lugiafoods.com</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>🚚</span>
                            <div>
                                <strong>Rutas de Entrega:</strong><br />
                                Envíos y distribución garantizada en CDMX y todo el Estado de Querétaro.
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Hemos recibido tu solicitud. Nuestro equipo de ventas te contactará pronto.'); }}>
                            <input type="text" placeholder="Nombre completo o Empresa" required />
                            <input type="email" placeholder="Correo electrónico" required />
                            <input type="text" placeholder="Ciudad (Ej. CDMX o Querétaro)" required />
                            <textarea rows={4} placeholder="¿Qué insumos necesitas cotizar?" required></textarea>
                            <button type="submit" className={styles.btnSubmit}>Enviar Solicitud</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
