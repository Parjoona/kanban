const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [cssnano(), postcssPresetEnv()],
};