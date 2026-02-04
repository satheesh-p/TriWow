import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                cars: resolve(__dirname, 'cars.html'),
                contact: resolve(__dirname, 'contact.html'),
                about: resolve(__dirname, 'about.html'),
            },
        },
    },
});
