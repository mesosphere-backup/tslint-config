module.exports = {
  "extends": [
    "tslint:latest",
    "tslint-react",
    "tslint-eslint-rules",
    "tslint-config-prettier",
    "tslint-plugin-prettier"
  ],
  "rules": {
    "no-var-requires": false,
    "no-implicit-dependencies": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "ter-arrow-parens": [
      false
    ],
    "variable-name": [
      false
    ],
    "trailing-comma": false,
    "no-console": true,
    "triple-equals": [
      true,
      "allow-null-check",
      "allow-undefined-check"
    ],
    "whitespace": [
      false
    ],
    "ter-no-mixed-spaces-and-tabs": {
      "type": "tabs"
    },
    "no-empty": [
      true,
      "allow-empty-catch"
    ],
    "no-inner-declarations": [
      true,
      "both"
    ],
    "valid-jsdoc": [
      false,
      {
        "requireReturn": false,
        "requireParamDescription": false
      }
    ],
    "no-consecutive-blank-lines": [
      true
    ],
    "no-trailing-whitespace": [
      true,
      "ignore-blank-lines"
    ],
    "no-use-before-declare": false,
    "quotemark": [
      false
    ],
    "semicolon": [
      true
    ],
    "comment-format": [
      true
    ],
    "ter-arrow-body-style": [
      false
    ],
    "ter-arrow-spacing": [
      false
    ],
    "switch-default": false,
    "ter-max-len": [
      false
    ],
    "label-position": false,
    "no-construct": false,
    "no-shadowed-variable": false,
    "no-var-keyword": false,
    "object-curly-spacing": [
      false
    ],
    "one-variable-per-declaration": false,
    "ter-padded-blocks": false,
    "ter-prefer-arrow-callback": [
      false
    ],
    "prefer-const": [
      false,
      {
        "destructuring": "all"
      }
    ],
    "object-literal-key-quotes": [
      false
    ],
    "space-in-parens": [
      false
    ],
    "member-access": [
      false
    ],
    "interface-name": [
      true,
      "never-prefix"
    ],
    // Prettier
    "prettier": true,
    // TS React plugin
    "jsx-wrap-multiline": true,
    "jsx-curly-spacing": "never",
    "jsx-boolean-value": "never",
    "jsx-equals-spacing": "never",
    "jsx-no-lambda": true
  }
};
