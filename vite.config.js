import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuetify } from 'vuetify';
import path from 'path';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'


export default defineConfig({
  plugins: [
		vue(),
		createVuetify(),
		vuetify({ autoImport: true }),
	],
  css: {
    preprocessorOptions: {
      css: {
        // Custom CSS options, if needed
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
})
