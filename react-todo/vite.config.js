import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚡️ تنظیمات Vite برای GitHub Pages
export default defineConfig({
  plugins: [react()],
  // ❗️ اینجا حتماً اسم ریپازیتوری‌ت رو بذار
  base: '/todo/',
  server: {
    port: 3000,
    open: true,
  },
})
