module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': [0, 'error', 'windows'],
    'arrow-parens': ['error', 'as-needed'],
    'no-alert': 0,
    'no-console': 0,
    'no-unused-vars': 0
  }
};
