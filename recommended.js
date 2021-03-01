"use strict";

module.exports = {
  env: {
    es2021: true,
  },
  extends: ["eslint:recommended", require.resolve("eslint-config-prettier")],
  rules: {
    "accessor-pairs": "error",
    "class-methods-use-this": "error",
    "default-case": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "func-style": "error",
    "line-comment-position": "error",
    "max-depth": ["error", 3],
    "no-alert": "error",
    "no-await-in-loop": "error",
    "no-console": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-label-var": "error",
    "no-lonely-if": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": ["error", { enforceForJSX: true }],
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    "require-atomic-updates": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    strict: "error",
    "symbol-description": "error",
  },
};
