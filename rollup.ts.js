import ts from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

export default {
    input: './src/main.tsx',
    output: [
        {file: '_ROLLUP/ts-ts.js',format: 'es'}
    ],
    plugins: [
        ts({typescript: require('typescript')}),
        //babel({extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"]}),
        terser()
    ]
}