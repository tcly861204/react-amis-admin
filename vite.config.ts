import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode })=> {
  const isProd = mode === 'production'
  return {
    base: isProd ? '/react-amis-admin/' : '/',
    server: {
      port: 3000,
      open: true,
      host: '0.0.0.0'
    },
    resolve: {
      alias: Object.assign(
        {
          '@': path.resolve(__dirname, 'src'),
        }
      ),
    },
    plugins: [react()],
  }
})
