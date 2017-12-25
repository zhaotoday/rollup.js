const {plugins, external, globals} = require('./utils/rollup.config')
const argv = require('yargs').argv
const rollup = require('rollup')
const libs = argv._
const watch = require('watch')
const notice = require('./utils/notice')

let cache

const build = () => {
  libs.forEach((lib) => {
    // 按 UMD、CommonJS 规范构建
    ['umd', 'cjs'].forEach((format) => {
      // UMD 需要把依赖包打进目标文件
      // CommonJS 需要将依赖包申明为外部依赖
      rollup.rollup(Object.assign(
        // 公用配置
        {
          entry: `src/${lib}/index.js`,
          plugins,
          cache
        },
        // CommonJS 独有配置
        format === 'cjs' ? {
          external,
          globals
        } : null)
      ).then(function (bundle) {
        cache = bundle

        bundle.write({
          format,
          sourceMap: true,
          moduleName: lib,
          dest: `libs/${lib}/index${format === 'umd' ? '.umd' : ''}.js`
        }).then(() => {
          notice.success((format === 'umd' ? 'AMD' : 'CommonJS') + ' - built successfully!')
        })
      }).catch(notice.error)
    })
  })
}

if (!libs.length) {
  notice.error('Please add your library name after command "npm run build".')
} else {
  if (process.env.BUILD === 'production') {
    build()
  } else {
    // 监听 src 文件夹下的文件变更
    watch.watchTree('src', (f, curr, prev) => {
      if (typeof f === 'object' && prev === null && curr === null) {
        notice.info('Start watching file changes, you can press "ctrl+c" to cancel.')
        build()
      } else if (prev === null) {
      } else if (curr.nlink === 0) {
      } else {
        notice.info('File changes, start building.')
        build()
      }
    })
  }
}
