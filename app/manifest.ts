import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Serena Davet Evi',
        short_name: 'Serena',
        description: 'Antalya Kepez\'de 200 kişilik boutique davet salonu. Söz, nişan, kına gecesi organizasyonları.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFDF7', // cream-50
        theme_color: '#D4AF37', // gold-400
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
