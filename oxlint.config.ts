import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['node', 'oxc', 'typescript', 'unicorn'],
  rules: {
    'typescript/consistent-type-definitions': 'error',
  },
})
