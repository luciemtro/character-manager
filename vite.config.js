import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                single: resolve(__dirname, 'single.html'),
                creation: resolve(__dirname, 'creation.html'),
                update: resolve(__dirname, 'update.html')            
            }
        }
    }
}


