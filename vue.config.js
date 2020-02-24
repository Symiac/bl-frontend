module.exports = {
  lintOnSave: true,
  productionSourceMap: false,

  devServer: {
    port: 8888,
    host: '0.0.0.0',
    https: false,
    open: false,
    proxy: {
      '/ZY': {
        target: 'http://192.168.16.100:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ZY': ''
        }
      },
      '/HHC': {
        target: 'http://192.168.16.110:10012/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/HHC': ''
        }
      },
    }
  }
}