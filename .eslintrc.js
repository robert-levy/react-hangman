module.exports = {
  plugins: ["@typescript-eslint", "react", "import"],
  parser: "@typescript-eslint/parser",

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/require-default-props": [
      "error",
      { ignoreFunctionalComponents: true },
    ],
    "@typescript-eslint/quotes": ["error", "double"],
    // ... other rules (not including the 'import/no-extraneous-dependencies' rule here)
  },

  overrides: [
    {
      files: [".eslintrc.{js,cjs}", "**/*.config.js"], // target both .eslintrc and .config.js files
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
