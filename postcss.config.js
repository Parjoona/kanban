const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  tailwindcss: {},
  autoprefixer: {},
  plugins: [cssnano(), postcssPresetEnv()],
};