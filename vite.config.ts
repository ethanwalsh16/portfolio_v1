import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    pluging: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = ''
  }

  return config
})