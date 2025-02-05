import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'esm',
        },
    ],
    plugins: [
        typescript(),
        postcss({
            extract: 'styles.css',
        }),
        copy({
            targets: [
                { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' },
            ],
        }),
    ],
};
