const {plugins, external, globals} = require('./utils/rollup.config')
const rollup = require('rollup')
const watch = require('watch')
const notice = require('./utils/notice')
const pkg = require('../package.json')

let caches = {}

const build = () => {
  // 按 umd、cjs 包格式构建
  // umd 需要把依赖包打进目标文件
  // cjs 需要将依赖包申明为外部依赖
  ['umd', 'cjs'].forEach(async format => {
    const bundle = await rollup.rollup(Object.assign(
      // 公用配置
      {input: 'src/index.js', plugins, cache: caches[format]},
      // cjs 独有配置
      format === 'cjs' ? {external, output: globals} : null)
    )

    caches[format] = bundle

    await bundle.write({
      format,
      sourcemap: true,
      name: pkg.moduleName || pkg.name,
      file: `dist/index${format === 'umd' ? '.umd' : ''}.js`
    })

    notice.success(`The ${format} format package built successfully!`)
  })
}

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
