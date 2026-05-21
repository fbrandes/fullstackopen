import js from '@eslint/js'
import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin';
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
        ],
        languageOptions: {
            sourceType: 'commonjs',
            globals: {...globals.node},
            ecmaVersion: 'latest',
        },
        plugins: {
            '@stylistic/js': stylisticJs,
        },
        rules: {
            '@stylistic/js/indent': [
                'error',
                2,
                {flatTernaryExpressions: false, offsetTernaryExpressions: true},
            ],
            '@stylistic/js/linebreak-style': ['error', 'unix'],
            '@stylistic/js/quotes': ['error', 'single'],
            '@stylistic/js/semi': ['error', 'always'],
            eqeqeq: ['error', 'always', {null: 'ignore'}],
            'no-trailing-spaces': 'error',
            'object-curly-spacing': ['error', 'always'],
            'arrow-spacing': ['error', {before: true, after: true}],
            'no-console': 'off',
        },
    },
])
