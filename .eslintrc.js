module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true
    },

    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],

    overrides: [],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },

    plugins: ['vue', '@typescript-eslint'],

    rules: {
        'prefer-const': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'space-before-function-paren': 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
        'vue/require-default-prop': 'off'
    },

    globals: {
        uni: true,
        UniApp: true,
        wx: true
    }
};
