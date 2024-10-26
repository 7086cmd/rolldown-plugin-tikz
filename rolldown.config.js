import { defineConfig } from 'rolldown'

export default defineConfig({
    input: 'src/main.ts',
    output: {
        dir: 'dist'
    },
    platform: 'node',
    external: ['node-tikzjax'],
})