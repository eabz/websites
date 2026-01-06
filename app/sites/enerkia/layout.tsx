import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enerkia 22 | Tecnología Avanzada y Hardware',
    description: 'Comercializadora de tecnología, hardware empresarial, servidores y soluciones de conectividad. Partners oficiales de Intel, AMD, Cisco.',
    keywords: ['tecnología', 'hardware', 'servidores', 'computación', 'networking', 'enerkia'],
    openGraph: {
        title: 'Enerkia 22 - Tecnología Avanzada',
        description: 'El futuro de su empresa comienza hoy. Hardware y soluciones tecnológicas.',
        type: 'website',
    },
};

export default function EnerkiaLayout({
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
