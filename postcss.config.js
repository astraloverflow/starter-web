/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')({
        preset: 'default',
      }),
    ],
  };
} else {
  module.exports = {
    plugins: [require('autoprefixer')],
  };
}
