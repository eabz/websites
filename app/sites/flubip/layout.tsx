import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Flubip Lead | Consultoría Estratégica',
    description: 'Somos la consultoría estratégica preparada para optimizar, escalar y darle a tus operaciones la ventaja competitiva definitiva.',
    keywords: ['consultoría', 'estrategia', 'negocios', 'optimización', 'flubip'],
    openGraph: {
        title: 'Flubip Lead | Consultoría Estratégica',
        description: 'Ese plus que tu negocio necesita.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/flubip.png',
    },
};

export default function FlubipLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
