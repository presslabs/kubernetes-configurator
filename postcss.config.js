/* eslint no-unused-vars: ["error", {"args": "none"}] */
module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.scss' ? 'postcss-scss' : false,
  plugins: {
    'postcss-cssnext': {
      warnForDuplicates: false,
    },
    'postcss-pxtorem': {
      rootValue: 16,
    },
    cssnano: env === 'production' ? {} : false,
  },
})
