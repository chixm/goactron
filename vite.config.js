import { defineConfig } from 'vite'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    root: '.', // プロジェクトルート
    build: {
        outDir: 'dist',
        sourcemap: 'inline',
        rollupOptions: {
            input: './src/preload.ts',
            output: {
                entryFileNames: 'bundle.js',
            },
        },
        target: 'chrome105', // Electronのバージョンに合わせて調整
        emptyOutDir: false,
    },
    plugins: [tsconfigPaths()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})