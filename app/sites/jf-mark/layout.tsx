import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'JF MARK Consultores | Estrategia y Excelencia',
    description: 'Firma de consultoría de élite. Estrategia financiera, legal corporativa y capital humano para la alta dirección.',
    keywords: ['consultoría', 'legal', 'financiera', 'negocios', 'ejecutivo', 'estrategia'],
    openGraph: {
        title: 'JF MARK Consultores',
        description: 'Estrategia. Precisión. Resultados. Consultoría para líderes.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/jf-mark.png',
    },
};

export default function JFMarkLayout({
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
