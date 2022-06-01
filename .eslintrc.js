module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'promise',
    'node',
    'standard',
    'compat',
    'security',
    'unicorn',
  ],
  extends: [
    // Typescript recommended rules
    'plugin:@typescript-eslint/recommended',
    // Standardjs JavaScript Coding Style
    'standard',
    'standard-jsx',
    // Error when using features not supported by browserlist selection (see package.json)
    'plugin:compat/recommended',
    // Some useful rules to avoid JavaScript security issues
    'plugin:security/recommended',
    // A mishmash of useful rules
    'plugin:unicorn/recommended',
    // Unsets rules that conflict with Prettier
    // _MUST_ always come last
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'SequenceExpression',
        message:
          'Sequence expressions (the comma operator) are not allowed. See eslint no-sequences.',
      },
    ],
  },
  ignorePatterns: ['!.eslintrc.js', 'dist/**'],
};
