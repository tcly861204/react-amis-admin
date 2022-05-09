const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  mock: false,
  plugins: [],
  outputDir: 'dist',
  devPublicPath: '/',
  publicPath: './',
  define: {
    BASE_URL: isProd ? './' : '/',
  },
  minify: {
    type: 'terser',
    options: {
      compress: {
        drop_console: true,
      },
    },
  },
};
