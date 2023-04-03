module.exports = {
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    extends: [
        "airbnb-base",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    plugins: ["prettier", "react"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "prettier/prettier": "error",
        "linebreak-style": 2,
        "class-methods-use-this": "off",
        "no-param-reassign": 0,
        camelcase: "off",
        "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
        // radix: 0,
        "no-console": ["error", { allow: ["warn", "error", "debug", "log"] }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
    },
};
