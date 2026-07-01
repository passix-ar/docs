// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.getpassix.com',
  integrations: [
    starlight({
      title: 'Passix',
      description: 'Documentación de Passix — la plataforma para vender entradas y validar con QR.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      logo: {
        light: './src/assets/icononegro.png',
        dark: './src/assets/iconoverde.png',
        alt: 'Passix',
        replacesTitle: false,
      },
      customCss: ['./src/styles/passix.css'],
      // Modo claro fijo.
      head: [
        {
          tag: 'script',
          content:
            "try{localStorage.setItem('starlight-theme','light');document.documentElement.dataset.theme='light';document.documentElement.style.colorScheme='light';}catch(e){}",
        },
      ],
      social: [
        { icon: 'external', label: 'Passix', href: 'https://getpassix.com' },
      ],
      lastUpdated: true,
      pagination: true,
      sidebar: [
        {
          label: 'Empezar',
          items: [
            { label: 'Bienvenido a Passix', link: '/' },
            { label: 'Crear tu cuenta', link: '/empezar/crear-cuenta/' },
            { label: 'Tu primer evento en 10 min', link: '/empezar/primer-evento/' },
            { label: 'Conceptos clave', link: '/empezar/conceptos/' },
          ],
        },
        { label: 'Configurar tu evento', autogenerate: { directory: 'evento' } },
        { label: 'Cobrar y pagos', autogenerate: { directory: 'pagos' } },
        { label: 'El día del evento', autogenerate: { directory: 'check-in' } },
        { label: 'Ventas y asistentes', autogenerate: { directory: 'ventas' } },
        { label: 'Tu organización', autogenerate: { directory: 'organizacion' } },
        { label: 'Para compradores', autogenerate: { directory: 'compradores' } },
        { label: 'Integraciones y API', autogenerate: { directory: 'tecnico' } },
      ],
    }),
  ],
});
