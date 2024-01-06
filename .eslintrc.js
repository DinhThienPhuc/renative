module.exports = {
  root: true,
  extends: ["@react-native", "plugin:json/recommended", "prettier"],
  rules: {
    indent: "off",
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-native/no-inline-styles": 0,
    "react/no-unstable-nested-components": [
      "warn",
      {
        allowAsProps: true,
      },
    ],
  },
};
