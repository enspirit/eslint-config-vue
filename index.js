const consoleLogRule = process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : ['warn'];

module.exports = {
  'extends': [
    'plugin:vue/recommended',
    '@enspirit/eslint-config-node'
  ],
  rules: {
    'vue/this-in-template': ['error', 'never']
  }
}