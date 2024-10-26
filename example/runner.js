import t from "node-tikzjax";
import { readFileSync } from "node:fs";
import { resolve } from 'node:path'

async function main(code) {
    const svg = await t.default(code);
    console.log(svg)
}

const source = `\\begin{document}
\\begin{tikzpicture}
\\draw (0,0) circle (1in);
\\end{tikzpicture}
\\end{document}`;
main(source)