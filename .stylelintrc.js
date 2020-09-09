module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'at-rules',
      'rules',
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
