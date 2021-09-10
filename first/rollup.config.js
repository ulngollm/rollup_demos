import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
  input: "index.mjs",
  output: {
    file: 'bundle.js',
  },
  plugins: [nodeResolve()]
};
