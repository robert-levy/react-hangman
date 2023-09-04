module.exports = {
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/require-default-props": [
      "error",
      { ignoreFunctionalComponents: true },
    ],
    "@typescript-eslint/quotes": ["error", "double"],
    "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ["**/*.config.ts", "setupTests.ts"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
}
