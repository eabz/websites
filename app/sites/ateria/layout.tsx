import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ateria Logística | Transporte y Fletes en Querétaro',
    description: 'Soluciones logísticas integrales, transporte nacional, paquetería y fletes dedicados. Excelencia operativa desde el Bajío.',
    keywords: ['logística', 'transporte', 'fletes', 'querétaro', 'paquetería', 'envíos'],
    openGraph: {
        title: 'Ateria Logística y Traslados',
        description: 'Conectando familias y negocios con alcance nacional.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/ateria.png',
    },
};

export default function AteriaLayout({
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
