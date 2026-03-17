import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lugia Foods | Comercializadora de Alimentos e Insumos',
    description: 'Comercializadora líder de alimentos e insumos de primer nivel, abasteciendo las cocinas y empresas más exigentes.',
    keywords: ['alimentos', 'insumos', 'comercializadora', 'distribución', 'lugia foods'],
    openGraph: {
        title: 'Lugia Foods | Alimentos e Insumos',
        description: 'Frescura y calidad que llegan a tu negocio.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/lugia.png',
    },
};

export default function LugiaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
