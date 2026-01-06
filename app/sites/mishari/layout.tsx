import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mischari Comercializadora | Solidez Industrial',
    description: 'Distribución de materiales industriales, aceros, herramientas y polímeros. Abastecimiento estratégico en el Bajío.',
    keywords: ['industrial', 'acero', 'herramientas', 'polímeros', 'distribuidor', 'mischari'],
    openGraph: {
        title: 'Mischari Comercializadora',
        description: 'Solidez, Calidad y Compromiso Industrial.',
        type: 'website',
    },
};

export default function MischariLayout({
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
