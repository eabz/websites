import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Xenopus Consultores | Evolución Corporativa Natural',
    description: 'Consultoría estratégica que adapta la sabiduría de la naturaleza a tu empresa. Gestión del cambio, procesos y análisis de riesgo.',
    keywords: ['consultoría', 'estrategia', 'naturaleza', 'xenopus', 'negocios', 'adaptabilidad'],
    openGraph: {
        title: 'Xenopus Consultores',
        description: 'Evolución Corporativa Natural. Estrategia y adaptabilidad para tu negocio.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/xenopus.png',
    },
};

export default function XenopusLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
