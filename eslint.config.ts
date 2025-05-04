import vueParser from 'vue-eslint-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import sortPlugin from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: ['webStorm.config.js', '**/dist/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
      },
    },
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': sortPlugin,
      import: importPlugin,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^\\u0000',
              '^node:',
              '^vue',
              '^@?\\w',
              '^@canvas-lib',
              '^@config-lib',
              '^src/',
              '^\\.',
            ],
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_|props',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/named': 'off',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'no-unused-vars': 'off',
    },
  },
];
