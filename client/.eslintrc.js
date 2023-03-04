module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    'alloy',
    'alloy/react',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 启用jsx
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {},
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        arrowParens: 'avoid',
        bracketSpacing: true,
        semi: false,
        singleQuote: true,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
    indent: ['error', 2, { SwitchCase: 1, flatTernaryExpressions: false }],
    complexity: ['warn', 50],
    'max-params': ['warn', 3],
    'no-param-reassign': 0,
    'default-case-last': 0,
    'no-irregular-whitespace': 0,

    // react 相关
    'react/prop-types': [0], // 防止在React组件定义中丢失props验证
    'react/no-deprecated': 0, // 不使用弃用的方法
    'react/no-did-mount-set-state': 0, // 防止在componentDidMount中使用setState
    'react/no-did-update-set-state': 0, // 防止在componentDidUpdate中使用setState
    'react/static-property-placement': 0,
    'no-invalid-this': 1,

    // recommend
    eqeqeq: 1,
    'no-var': 2,
    'no-unused-vars': 1,
    'no-eval': 2,
    'no-alert': 2,
    'no-debugger': 2,
    'prefer-const': 2,
    'no-inner-declarations': 2,
    'sort-vars': 2, // 变量申明必须排好序
    'use-isnan': 2, // 必须使用 isNaN(foo) 而不是 foo === NaN

    // format
    'spaced-comment': 2, // 注释的斜线或 * 后必须有空格

    // react
    'react/sort-comp': 2, // 强制组件生命周期方法顺序
    'react/self-closing-comp': 2, // 组件内没有 children 时，必须使用自闭合写法
    'react/no-string-refs': 2, // 禁用字符串 ref
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
  overrides: [],
}
