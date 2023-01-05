import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['ckeditor5-custom-build'],
  },
  build: {
    commonjsOptions: { exclude: ['ckeditor5-custom-build'], include: [] },
  }
})
