import { defineConfig } from 'rolldown'
import UnpluginIsolatedDecl from 'unplugin-isolated-decl/rolldown'

export default defineConfig({
    input: 'src/main.ts',
    output: {
        dir: 'dist'
    },
    platform: 'node',
    plugins: [UnpluginIsolatedDecl()],
    external: ['node-tikzjax'],
})