import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    scss({
      output: 'dist/index.css',
    }),
  ],
}; 