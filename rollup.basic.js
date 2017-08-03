const babel = require('rollup-plugin-babel');
const flow = require('rollup-plugin-flow');
const uglify = require('rollup-plugin-uglify');

const config = {
  entry: './src/basic/chancify.js',
  plugins: [
    flow(),
    babel(),
    uglify(),
  ],
  targets: [
    { dest: './basic/index.js', format: 'cjs' },
  ]
};

module.exports = config;
