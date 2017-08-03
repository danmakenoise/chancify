import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import uglify from 'rollup-plugin-uglify';

const config = {
  entry: './src/chancify.js',
  plugins: [
    flow(),
    babel(),
    uglify(),
  ],
  targets: [
    { dest: './dist/chancify.js', format: 'cjs' },
  ]
};

export default config;
