import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';


export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.system.js',
    format: 'system',
    globals: {
      'react': "React",
      'react-dom': "ReactDOM"
    }
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(), 
    commonjs(),
    nodePolyfills( /* options */ )
  ]
};
