var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SITE_URL: '"http://192.170.1.203:8090"',
  GATEWAY_WECHAT: '"wx"',
  GATEWAY_UC: '"uc"',
  LIMIT: '3'
})
