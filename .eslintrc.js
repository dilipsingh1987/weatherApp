module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@env$'], // <-- Add this line
      },
    ],
  },
  settings: {
   'import/resolver': {
    typescript: {},
    node: {
      paths: ['src'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  },
};
