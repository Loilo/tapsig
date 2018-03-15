import alias from 'rollup-plugin-alias'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/browser.min.js',
    format: 'iife',
    name: 'tapsig'
  },
  plugins: [
    alias({
      '@debugger': './log.browser.js'
    }),
    uglify()
  ]
}
