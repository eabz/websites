"use client";

import { useState, useEffect } from 'react';
import styles from './mishari.module.css';

export default function MischariPage() {
    const [activeTab, setActiveTab] = useState('inicio');
    // Carousel states
    const [heroSlideIndex, setHeroSlideIndex] = useState(0);
    const [smallSlideIndex, setSmallSlideIndex] = useState(0);
    // Modal state
    const [modalOpen, setModalOpen] = useState<string | null>(null);
    // Mobile Menu
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const heroImages = [
        '/images/mishari/hero.png',
        '/images/mishari/steel.png',
        '/images/mishari/engineers.png'
    ];

    const smallImages = [
        '/images/mishari/truck.png',
        '/images/mishari/shelves.png',
        '/images/mishari/tools.png'
    ];

    // Hero carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setHeroSlideIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Small carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setSmallSlideIndex((prev) => (prev + 1) % smallImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const showPage = (pageId: string) => {
        setActiveTab(pageId);
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openModal = (modalId: string) => setModalOpen(modalId);
    const closeModal = () => setModalOpen(null);

    return (
        <div className={styles.container}>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
      `}</style>
            <header className={styles.header}>
                <div className={styles.nav}>
                    <div className={styles.logo}>MISCHARI</div>
                    <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
                    <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
                        <li><button className={`${styles.navLink} ${activeTab === 'inicio' ? styles.navLinkActive : ''}`} onClick={() => showPage('inicio')}>Inicio</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'nosotros' ? styles.navLinkActive : ''}`} onClick={() => showPage('nosotros')}>Quiénes Somos</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'servicios' ? styles.navLinkActive : ''}`} onClick={() => showPage('servicios')}>Servicios</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'materiales' ? styles.navLinkActive : ''}`} onClick={() => showPage('materiales')}>Materiales</button></li>
                        <li><button className={`${styles.navLink} ${activeTab === 'contacto' ? styles.navLinkActive : ''}`} onClick={() => showPage('contacto')}>Contacto</button></li>
                    </ul>
                </div>
            </header>

            <main>
                {activeTab === 'inicio' && (
                    <section className={styles.sectionInicio}>
                        <div className={styles.carouselBg}>
                            {heroImages.map((src, idx) => (
                                <img key={idx} src={src} className={`${styles.carouselSlide} ${idx === heroSlideIndex ? styles.activeSlide : ''}`} alt="Slide" />
                            ))}
                        </div>
                        <div className={styles.overlayBg}></div>
                        <div className={styles.heroContent}>
                            <h1>MISCHARI</h1>
                            <p>SOLIDEZ, CALIDAD Y COMPROMISO INDUSTRIAL</p>
                            <br />
                            <button onClick={() => showPage('servicios')} className={styles.btn} style={{ background: 'white', color: 'var(--colorTaupe)' }}>Conocer Más</button>
                        </div>
                    </section>
                )}

                {activeTab === 'nosotros' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.sectionTitle}>Nuestra Esencia</h2>
                            <div className={styles.aboutGrid}>
                                <div className={styles.aboutText}>
                                    <p style={{ marginBottom: '20px' }}>En <strong>Mischari</strong>, no solo distribuimos materiales; forjamos alianzas estratégicas. Con años de experiencia en el sector del Bajío, entendemos que cada entrega cuenta para mantener al mundo girando.</p>
                                    <div className={styles.mvCard}>
                                        <h3 className={styles.heading}>Misión</h3>
                                        <p>Proveer soluciones materiales integrales de clase mundial que impulsen la eficiencia, seguridad y productividad de nuestros clientes.</p>
                                    </div>
                                    <div className={styles.mvCard}>
                                        <h3 className={styles.heading}>Visión</h3>
                                        <p>Consolidarnos como el distribuidor industrial más confiable de México, reconocidos por nuestra capacidad de respuesta y excelencia logística.</p>
                                    </div>
                                </div>
                                <div className={styles.smallCarouselContainer}>
                                    {smallImages.map((src, idx) => (
                                        <img key={idx} src={src} className={`${styles.smallSlide} ${idx === smallSlideIndex ? styles.activeSlide : ''}`} alt="About Slide" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'servicios' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.sectionTitle}>Soluciones Industriales</h2>

                            <div className={styles.serviceFeature}>
                                <div className={styles.serviceImgContainer}>
                                    <img src="/images/mishari/truck.png" alt="Logística Camión" />
                                </div>
                                <div className={styles.serviceText}>
                                    <h3 className={styles.heading}><i className="fas fa-truck-moving" style={{ marginRight: '10px' }}></i> Logística y Distribución</h3>
                                    <p>Contamos con una flota moderna y monitoreada vía GPS para garantizar que sus materiales lleguen seguros y a tiempo, sin importar la ubicación de su proyecto.</p>
                                    <ul className={styles.serviceList}>
                                        <li><i className="fas fa-check"></i> Cobertura nacional con énfasis en el Bajío.</li>
                                        <li><i className="fas fa-check"></i> Rastreo en tiempo real de pedidos.</li>
                                        <li><i className="fas fa-check"></i> Maniobras de carga y descarga especializada.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`${styles.serviceFeature} ${styles.serviceFeatureEven}`}>
                                <div className={styles.serviceImgContainer}>
                                    <img src="/images/mishari/shelves.png" alt="Almacén" />
                                </div>
                                <div className={styles.serviceText}>
                                    <h3 className={styles.heading}><i className="fas fa-boxes" style={{ marginRight: '10px' }}></i> Abastecimiento Estratégico</h3>
                                    <p>Sabemos que detener la línea de producción no es una opción. Gestionamos inventarios dedicados y entregas "Just-in-Time" para optimizar su flujo de trabajo.</p>
                                    <ul className={styles.serviceList}>
                                        <li><i className="fas fa-check"></i> Gestión de stock de seguridad.</li>
                                        <li><i className="fas fa-check"></i> Suministro programado para obras a largo plazo.</li>
                                        <li><i className="fas fa-check"></i> Adquisición de materiales difíciles de encontrar.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.serviceFeature}>
                                <div className={styles.serviceImgContainer}>
                                    <img src="/images/mishari/engineers.png" alt="Ingenieros" />
                                </div>
                                <div className={styles.serviceText}>
                                    <h3 className={styles.heading}><i className="fas fa-clipboard-check" style={{ marginRight: '10px' }}></i> Consultoría Técnica</h3>
                                    <p>No solo vendemos productos, ofrecemos experiencia. Nuestro equipo de ingenieros le asesora para seleccionar el material correcto que optimice costos y durabilidad.</p>
                                    <ul className={styles.serviceList}>
                                        <li><i className="fas fa-check"></i> Análisis de especificaciones técnicas.</li>
                                        <li><i className="fas fa-check"></i> Recomendación de materiales alternativos de alto rendimiento.</li>
                                        <li><i className="fas fa-check"></i> Certificaciones de calidad y normas ISO.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'materiales' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.sectionTitle}>Catálogo Especializado</h2>
                            <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>Seleccione una categoría para desplegar la ficha técnica detallada.</p>

                            <div className={styles.materialsGrid}>
                                <div className={styles.materialItem} onClick={() => openModal('modal-acero')}>
                                    <img src="/images/mishari/steel.png" alt="Vigas de Acero" />
                                    <div className={styles.materialOverlay}>
                                        <h3 className={styles.heading}>Aceros y Metales</h3>
                                        <div className={styles.clickHint}><i className="fas fa-plus"></i> Ver Ficha Técnica</div>
                                    </div>
                                </div>

                                <div className={styles.materialItem} onClick={() => openModal('modal-herramientas')}>
                                    <img src="/images/mishari/tools.png" alt="Herramientas" />
                                    <div className={styles.materialOverlay}>
                                        <h3 className={styles.heading}>Herramientas</h3>
                                        <div className={styles.clickHint}><i className="fas fa-plus"></i> Ver Ficha Técnica</div>
                                    </div>
                                </div>

                                <div className={styles.materialItem} onClick={() => openModal('modal-polimeros')}>
                                    <img src="/images/mishari/polymers.png" alt="Polímeros" />
                                    <div className={styles.materialOverlay}>
                                        <h3 className={styles.heading}>Polímeros Industriales</h3>
                                        <div className={styles.clickHint}><i className="fas fa-plus"></i> Ver Ficha Técnica</div>
                                    </div>
                                </div>

                                <div className={styles.materialItem} onClick={() => openModal('modal-construccion')}>
                                    <img src="/images/mishari/hero.png" alt="Construcción" />
                                    <div className={styles.materialOverlay}>
                                        <h3 className={styles.heading}>Insumos Construcción</h3>
                                        <div className={styles.clickHint}><i className="fas fa-plus"></i> Ver Ficha Técnica</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'contacto' && (
                    <section className={styles.pageSection}>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.sectionTitle}>Contáctanos</h2>
                            <div className={styles.contactContainer}>
                                <div className={styles.contactInfo}>
                                    <h3 className={styles.heading}>Atención Personalizada</h3>
                                    <p style={{ margin: '20px 0' }}>Estamos listos para cotizar su proyecto. Visítenos o escríbanos.</p>
                                    <p><strong>📍 Dirección:</strong><br />Blvd. Bernardo Quintana 7001-int 216,<br />Centro Sur, Santiago de Querétaro, Qro.</p>
                                    <br />
                                    <p><strong>📧 Correo:</strong> contacto@mischari.com.mx</p>
                                    <p><strong>⏰ Horario:</strong> Lun-Vie: 9am - 5pm</p>
                                    <div className={styles.mapFrame}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.630045145749!2d-100.37038872395758!3d20.562306003551785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34526d11f8b89%3A0x6a123f3f3f3f3f3f!2sBlvd.%20Bernardo%20Quintana%207001%2C%20Centro%20Sur%2C%2076090%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.%2C%20M%C3%A9xico!5e0!3m2!1ses!2s!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                                    </div>
                                </div>
                                <div className={styles.formContainer}>
                                    <form>
                                        <input type="text" placeholder="Nombre Completo" required className={styles.formInput} />
                                        <input type="email" placeholder="Correo Corporativo" required className={styles.formInput} />
                                        <input type="text" placeholder="Empresa / Asunto" className={styles.formInput} />
                                        <textarea rows={6} placeholder="Detalle su requerimiento o solicite cotización..." required className={styles.formTextarea}></textarea>
                                        <button type="submit" className={styles.btn} style={{ width: '100%', border: 'none', cursor: 'pointer' }}>Enviar Mensaje</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* MODALS */}
            {modalOpen === 'modal-acero' && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.heading}>Aceros y Metales</h2>
                            <span className={styles.closeModal} onClick={closeModal}>×</span>
                        </div>
                        <div className={styles.modalBody}>
                            <div>
                                <img src="/images/mishari/steel.png" className={styles.modalImgStyle} alt="Acero" />
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Distribuimos materiales certificados bajo normas ASTM y SAE.</p>
                            </div>
                            <div className={styles.modalInfo}>
                                <p>En Mischari somos especialistas en aceros de alto grado para estructuras críticas y manufactura.</p>

                                <h4>Inventario Principal</h4>
                                <ul>
                                    <li><strong>Estructural:</strong> Vigas IPR, IPS, Canales U, Ángulos.</li>
                                    <li><strong>Planos:</strong> Lámina negra, decapada, galvanizada y antiderrapante.</li>
                                    <li><strong>Tubular:</strong> PTR, Tubo mecánico, Cédula 40 y 80.</li>
                                    <li><strong>Especiales:</strong> Aceros inoxidables (304, 316) y grado herramienta.</li>
                                </ul>

                                <h4>Aplicaciones</h4>
                                <p>Naves industriales, puentes, maquinaria pesada y carrocerías.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen === 'modal-herramientas' && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.heading}>Herramientas Industriales</h2>
                            <span className={styles.closeModal} onClick={closeModal}>×</span>
                        </div>
                        <div className={styles.modalBody}>
                            <div>
                                <img src="/images/mishari/tools.png" className={styles.modalImgStyle} alt="Herramientas" />
                            </div>
                            <div className={styles.modalInfo}>
                                <p>Equipamiento de grado profesional diseñado para soportar las exigencias de líneas de producción continuas.</p>

                                <h4>Categorías</h4>
                                <ul>
                                    <li><strong>Eléctricas:</strong> Taladros, esmeriles, sierras de banco de alto rendimiento.</li>
                                    <li><strong>Neumáticas:</strong> Llaves de impacto, compresores y pistolas de aire.</li>
                                    <li><strong>Manuales:</strong> Juegos de llaves, dados y torquímetros certificados.</li>
                                    <li><strong>Seguridad (EPP):</strong> Cascos, guantes de corte, calzado dieléctrico.</li>
                                </ul>

                                <h4>Marcas</h4>
                                <p>Manejamos marcas líderes globales con garantía de fábrica y refacciones disponibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen === 'modal-polimeros' && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.heading}>Polímeros y Plásticos de Ingeniería</h2>
                            <span className={styles.closeModal} onClick={closeModal}>×</span>
                        </div>
                        <div className={styles.modalBody}>
                            <div>
                                <img src="/images/mishari/polymers.png" className={styles.modalImgStyle} alt="Polimeros" />
                            </div>
                            <div className={styles.modalInfo}>
                                <p>Materiales sintéticos avanzados para sustitución de piezas metálicas, aislamiento y resistencia química.</p>

                                <h4>Materiales Disponibles</h4>
                                <ul>
                                    <li><strong>Nylamid (NYLON):</strong> Barras, placas y bujes autolubricados.</li>
                                    <li><strong>PTFE (Teflón):</strong> Alta resistencia a temperatura y agentes químicos.</li>
                                    <li><strong>Policarbonato:</strong> Laminas sólidas y celulares de alto impacto.</li>
                                    <li><strong>UHMW-PE:</strong> Polietileno de ultra alto peso molecular para deslizamiento.</li>
                                </ul>

                                <h4>Presentaciones</h4>
                                <p>Venta por tramo, barra completa o placa cortada a medida según plano.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen === 'modal-construccion' && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.heading}>Insumos para Construcción</h2>
                            <span className={styles.closeModal} onClick={closeModal}>×</span>
                        </div>
                        <div className={styles.modalBody}>
                            <div>
                                <img src="/images/mishari/hero.png" className={styles.modalImgStyle} alt="Construccion" />
                            </div>
                            <div className={styles.modalInfo}>
                                <p>Soluciones completas para obra civil e industrial, desde la cimentación hasta los acabados.</p>

                                <h4>Catálogo General</h4>
                                <ul>
                                    <li><strong>Acero de Refuerzo:</strong> Varilla corrugada (G-42, G-50), alambrón, malla electrosoldada.</li>
                                    <li><strong>Cementantes:</strong> Cemento gris, mortero y agregados pétreos.</li>
                                    <li><strong>Químicos:</strong> Impermeabilizantes, aditivos para concreto y selladores.</li>
                                    <li><strong>Ligeros:</strong> Panel de yeso, perfiles galvanizados y plafones.</li>
                                </ul>

                                <h4>Logística a Obra</h4>
                                <p>Entregas programadas directamente a pie de obra con camiones de volteo o plataforma.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <footer className={styles.footer} id="main-footer" style={{ display: activeTab === 'inicio' ? 'none' : 'block' }}>
                <div className={styles.contentWrapper}>
                    <p>© 2025 Mischari Comercializadora. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
