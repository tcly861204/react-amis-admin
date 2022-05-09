const { getESLintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getESLintConfig('react-ts', {
  rules: {
    '@iceworks/best-practices/recommend-functional-component': 'off',
    'no-param-reassign': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-template-curly-in-string': 'off',
    'no-console': 'off',
  },
});
