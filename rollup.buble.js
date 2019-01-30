import ts from 'rollup-plugin-typescript'

import buble from 'rollup-plugin-buble'

export default {
    input: 'src/main.tsx',
    output: [
        {file: '_ROLLUP/buble/es.js',format: 'es'},
        {file: '_ROLLUP/buble/cjs.js',format: 'cjs'},
        {file: '_ROLLUP/buble/iife.js',format: 'iife', name: "MYBUNDLE"}
    ],
    plugins: [
        ts({typescript: require('typescript')}),
        buble({transforms: { templateString: false }})
    ]
}