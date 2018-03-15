import alias from 'rollup-plugin-alias'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/node.cjs.js',
    format: 'cjs'
  },
  plugins: [
    alias({
      '@debugger': './log.node.js'
    })
  ]
}
