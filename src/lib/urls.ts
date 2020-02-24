const urls = {
  pro: 'http://localhost:3000',
  pro_prefix: '/Online',

  // dev: 'http://192.168.16.100:3000',
  // dev_prefix: '/ZY',
  
  dev: 'http://192.168.16.110:10012/',
  dev_prefix: '/HHC',
}

const proxyPrefix = process.env.NODE_ENV === 'production' ? urls.pro_prefix : urls.dev_prefix

export default urls
// export default proxyPrefix