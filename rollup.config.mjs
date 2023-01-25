import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './viewer.js',
  output: [
    {
      format: 'esm',
      file: './bundle_viewer.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};