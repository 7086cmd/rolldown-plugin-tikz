import type {InputOption, Plugin} from "rolldown";
import { tex, load, dvi2svg } from "node-tikzjax";
import type { SvgOptions, TeXOptions } from "node-tikzjax";

let svgModuleType = 'text';

async function tex2svg(code: string, options?: SvgOptions & TeXOptions) {
    await load()
    const dvi = await tex(code, options)
    const svg = await dvi2svg(dvi, options)
    return svg
}

export default function (options?: SvgOptions & TeXOptions): Plugin {
    return {
        name: 'tikz',
        async options(options) {
            let svgType = options.moduleTypes?.svg
            if (!svgType) {
                console.error('You must specify SVG\'s module type for handling tikz!')
            }
        },
        async transform(code, id) {
            // Temporary we only support `.tikz` extension since we are only interested in TikZ code.
            const filter = /\.tikz$/;
            if (filter.test(id)) {
                const svg = await tex2svg(code, {
                    // showConsole: true,
                    ...options
                })
                return {
                    code: svg,
                    moduleType: svgModuleType,

                }
            }
        }
    }
}