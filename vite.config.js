import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
export default defineConfig({
  resolve:{
    alias:{
      "~": path.resolve(__dirname, "src")
    }
  },
  plugins: [vue(), WindiCSS()],
  server: {
    host: '0.0.0.0'
  },
})
