'use strict'
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const defaultSettings = require('./src/settings')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const cdn = [
  'https://unpkg.com/vue@2.6.14/dist/vue.min.js',
  'https://unpkg.com/vue-router@3.6.5/dist/vue-router.min.js',
  'https://unpkg.com/vuex@3.6.2/dist/vuex.min.js',
  'https://unpkg.com/element-ui@2.15.13/lib/index.js',
  'https://unpkg.com/axios@1.3.6/dist/axios.min.js',
  'https://unpkg.com/js-cookie@2.2.1/src/js.cookie.js'
]

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  'element-ui': 'ELEMENT',
  axios: 'axios',
  'js-cookie': 'Cookies'
}

const name = defaultSettings.title || 'wu Element Admin' // page title
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    // 配置代理跨域
    proxy: {
      '/dev-api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        pathRewrite: { '^/dev-api': '' }
      }
    }
  },
  chainWebpack (config) {
    // // it can improve the speed of the first screen, it is recommended to turn on preload
    // config.plugin('preload').tap(() => [
    //   {
    //     rel: 'preload',
    //     // to ignore runtime.js
    //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
    //     include: 'initial'
    //   }
    // ])

    config.plugins.delete('prefetch')

    if (process.env.NODE_ENV !== 'development') {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
      config.externals(externals)
    }

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
    config.optimization.runtimeChunk('single')
  }
})
