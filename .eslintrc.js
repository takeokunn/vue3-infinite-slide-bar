module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-strongly-recommended', 'prettier'],
    plugins: ['vue'],
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: [['estree', { classFeatures: true }]],
            },
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'generator-star-spacing': 'off',
        'vue/html-self-closing': ['error', { html: { void: 'always' } }],
        'vue/attribute-hyphenation': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': ['error', 4],
    },
}
