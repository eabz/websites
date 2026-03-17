import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Constructora Litwick | Calidez y Solidez',
    description: 'Especialistas en crear espacios sólidos, cálidos y con alma. Diseños amaderados, acabados de lujo y construcción residencial.',
    keywords: ['construcción', 'cabañas', 'residencial', 'remodelación', 'litwick'],
    openGraph: {
        title: 'Constructora Litwick | Calidez y Solidez',
        description: 'Construyendo tu refugio ideal.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/litwick.png',
    },
};

export default function LitwickLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
