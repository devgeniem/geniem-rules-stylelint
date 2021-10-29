module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    extends: [
        'plugin:@wordpress/eslint-plugin/esnext',
        'stylelint',
    ],
    ignorePatterns: [
        'vendor',
        'node_modules',
        'dist',
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
        node: true,
    },
    globals: {
        window: true,
        document: true,
        wp: 'readonly',
    },
    rules: {
        'no-useless-constructor': [
            'warn',
        ],
        'no-console': [
            'warn',
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        yoda: [
            2,
            'never',
        ],
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
    },
};
