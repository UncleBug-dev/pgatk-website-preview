import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/',
  
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://pgatk.by',
      dynamicRoutes: [
        '/news',
        '/specialties',
        '/abiturientam',
        '/kolledg/administraciy',
        '/kolledg/nashi-kontakty',
        '/odno-okno',
        '/kolledg/istoriy-kolledga',
      ]
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script', // Автоматически инжектим скрипт регистрации SW в index.html
      workbox: {
        // Кешируем основные ресурсы для оффлайн работы
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50 MB
      },
      manifest: {
        name: '#ПГАТККЛЕЩЕВА',
        short_name: '#ПГАТККЛЕЩЕВА',
        description: 'Пинский государственный аграрный технологический колледж',
        theme_color: '#0ea5e9',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/images/logo/logo_pgatkk.webp',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/logo/logo_pgatkk.webp',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});