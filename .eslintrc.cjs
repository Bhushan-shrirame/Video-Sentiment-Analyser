/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "off",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "off",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "off",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],

    // Disable all 'unsafe' rules
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
  "@typescript-eslint/no-inferrable-types": "off",
  "@typescript-eslint/await-thenable": "off",
  "@typescript-eslint/prefer-optional-chain": "off",
  "@typescript-eslint/no-floating-promises": "off",

  // React-specific escape warning
  "react/no-unescaped-entities": "off",
  },
};

module.exports = config;
