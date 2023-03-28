module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true
    },

    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],

    overrides: [],

    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },

    plugins: ['vue', '@typescript-eslint', 'prettier'],

    rules: {
        'prefer-const': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
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
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index']
            }
        ],
        'vue/require-default-prop': 'off',
        //在computed properties中禁用异步actions
        'vue/no-async-in-computed-properties': 'error',
        //不允许重复的keys
        'vue/no-dupe-keys': 'error',
        //不允许重复的attributes
        'vue/no-duplicate-attributes': 'error',
        //在 <template> 标签下不允许解析错误
        'vue/no-parsing-error': [
            'error',
            {
                'x-invalid-end-tag': false
            }
        ],
        //不允许覆盖保留关键字
        'vue/no-reserved-keys': 'error',
        //强制data必须是一个带返回值的函数
        // 'vue/no-shared-component-data': 'error',
        //不允许在computed properties中出现副作用。
        'vue/no-side-effects-in-computed-properties': 'error',
        //<template>不允许key属性
        'vue/no-template-key': 'error',
        //在 <textarea> 中不允许mustaches
        'vue/no-textarea-mustache': 'error',
        //不允许在v-for或者范围内的属性出现未使用的变量定义
        'vue/no-unused-vars': 'error',
        //<component>标签需要v-bind:is属性
        'vue/require-component-is': 'error',
        // render 函数必须有一个返回值
        'vue/require-render-return': 'error',
        //保证 v-bind:key 和 v-for 指令成对出现
        'vue/require-v-for-key': 'error',
        // 检查默认的prop值是否有效
        'vue/require-valid-default-prop': 'error',
        // 保证computed属性中有return语句
        'vue/return-in-computed-property': 'error',
        // 强制校验 template 根节点
        'vue/valid-template-root': 'error',
        // 强制校验 v-bind 指令
        'vue/valid-v-bind': 'error',
        // 强制校验 v-cloak 指令
        'vue/valid-v-cloak': 'error',
        // 强制校验 v-else-if 指令
        'vue/valid-v-else-if': 'error',
        // 强制校验 v-else 指令
        'vue/valid-v-else': 'error',
        // 强制校验 v-for 指令
        'vue/valid-v-for': 'error'
    },

    globals: {
        uni: true,
        UniApp: true,
        wx: true
    }
};
