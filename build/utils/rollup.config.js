const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const uglify = require('rollup-plugin-uglify')
const path = require('path')
const postcss = require('rollup-plugin-postcss')
const json = require('rollup-plugin-json')
const simplevars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const cssModules = require('postcss-modules')
const url = require('postcss-url')
const pkg = require('../../package.json')
const external = Object.keys(pkg.dependencies)
const plugins = [,
  json({
    include: 'src/**',
    exclude: ['node_modules']
  }),
  postcss({
    plugins: [
      require('postcss-flexible')({remUnit: 75}),
      simplevars(),
      nested(),
      cssnext({warnForDuplicates: false}),
      cssnano(),
      url({
        url: 'copy',
        basePath: path.resolve('src/password/styles'),
        assetsPath: path.resolve('libs')
      }),
      cssModules({
        generateScopedName: '[local]__[hash:base64:5]'
      })
    ],
    extensions: ['.css']
  }),
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**' // 仅仅转译我们的源码
  }),
  uglify()
]

module.exports = {
  plugins: plugins,
  external: external,
  globals: Object.keys(external).map((value) => {
    return {[value]: value}
  })
}
