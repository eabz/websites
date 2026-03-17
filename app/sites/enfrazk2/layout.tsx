import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enfrazk2 | Agencia Publicitaria',
    description: 'En Enfrazkdos te ayudamos a darte a conocer al mundo de manera eficiente, honesta y llena de creatividad.',
    keywords: ['publicidad', 'agencia', 'branding', 'marketing', 'enfrazk2'],
    openGraph: {
        title: 'Enfrazk2 | Agencia Publicitaria',
        description: 'La solución que buscas para tu marca.',
        type: 'website',
    },
    icons: {
        icon: '/favicons/enfrazk2.png',
    },
};

export default function Enfrazk2Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
