// @ts-check
import nextConfig from 'eslint-config-next/core-web-vitals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const config = [
  ...nextConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: { parser: tsParser },
    rules: {
      ...tseslint.configs['strict'].rules,
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
]

export default config
