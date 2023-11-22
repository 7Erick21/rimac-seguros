import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint(), svgr()],
    resolve: {
        alias: {
            '@/models': resolve(__dirname, './src/api/models'),
            '@/services': resolve(__dirname, './src/api/services'),

            '@/assets': resolve(__dirname, './src/assets'),

            '@/components': resolve(__dirname, './src/components'),

            '@/routes': resolve(__dirname, './src/routes'),
            '@/zustand': resolve(__dirname, './src/zustand'),
            '@/views': resolve(__dirname, './src/views'),

            '@/constants': resolve(__dirname, './src/toolbox/constants'),
            '@/enums': resolve(__dirname, './src/toolbox/enums'),
            '@/icons': resolve(__dirname, './src/toolbox/assets/icons'),
            '@/images': resolve(__dirname, './src/toolbox/assets/images'),
            '@/hooks': resolve(__dirname, './src/toolbox/hooks'),
            '@/styles': resolve(__dirname, './src/toolbox/styles'),
            '@/interfaces': resolve(__dirname, './src/toolbox/interfaces'),
            '@/helpers': resolve(__dirname, './src/toolbox/helpers'),
            '@/toolbox': resolve(__dirname, './src/toolbox'),
        },
    },
    server: {
        port: 3001,
    },
})
