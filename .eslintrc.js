module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 11,
    },
    rules: {
        'linebreak-style': 0,   // <----------
        'no-console': 0,
        'indent': 0,
        'key-spacing': 0,
        'no-trailing-spaces': 0,
        'eol-last': 0,
        'quote-props': 0,
        'comma-dangle': 0,
        'semi': 0,
        'no-multi-spaces': 0,
        'no-underscore-dangle': 0,
        'no-nested-ternary':0,
        'import/prefer-default-export':0,
        'import/extensions':0
    }
}