import { expect, describe, it } from 'vitest'
import { rolldown } from 'rolldown'
import tikzPlugin from '../src/main.js'

describe('tikz', () => {
    it('should be handled default as text', async () => {
        const builder = await rolldown({
            input: ['./test/index.js'],
            platform: 'node',
            plugins: [tikzPlugin()],
        })
        let generated = await builder.generate()
        expect(generated.output[0].code).toMatchSnapshot()
    })

    it('should be handled as base64', async () => {
        const builder = await rolldown({
            input: ['./test/index.js'],
            plugins: [tikzPlugin()],
            platform: 'node',
            moduleTypes: {
                svg: 'base64'
            }
        })
        let generated = await builder.generate()
        expect(generated.output[0].code).toMatchSnapshot()
    })

    it('should be handled as dataurl', async () => {
        const builder = await rolldown({
            input: ['./test/index.js'],
            plugins: [tikzPlugin()],
            platform: 'node',
            moduleTypes: {
                svg: 'dataurl'
            }
        })
        let generated = await builder.generate()
        expect(generated.output[0].code).toMatchSnapshot()
    })
})
