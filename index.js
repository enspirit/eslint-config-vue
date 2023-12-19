const consoleLogRule = process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : ['warn'];

module.exports = {
  'extends': [
    'plugin:vue/vue3-recommended',
    '@enspirit/eslint-config-node'
  ],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/this-in-template': ['error', 'never']
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
