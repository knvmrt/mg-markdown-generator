import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Kök dizini "src" olarak ayarla
  build: {
    outDir: '../public', // Çıktı dizinini public olarak ayarla
    assetsDir: 'assets', // Assetlerinizi burada tutmak için
    emptyOutDir: true, // Eski dosyaları temizle
  },
  resolve: {
    alias: {
      '@assets': '/src/assets', // assets için alias tanımla
      '@scripts': '/src/scripts/js', // JS için alias tanımla
      '@styles': '/src/styles/css', // CSS için alias tanımla
      '@pages': '/src/pages/', // CSS için alias tanımla
    },
  },
  server: {
    port: 3000, // Port ayarı (isteğe bağlı)
  },
});
