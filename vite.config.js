import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://RussianBoy555.github.io/Rick-Morty-React/",
  plugins: [react()],
})
