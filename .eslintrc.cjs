module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: 'vue*',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'pages',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'components',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'assets',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/**',
            group: 'index',
            position: 'after'
          }
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          'object',
          'type'
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['vue*']
      }
    ]
  }
};
