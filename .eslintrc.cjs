module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  root: true,
  // 启用 globals，去定义一些全局变量，eslint 会忽略
  // globals: {
  //   defineProps: true,
  //   defineEmits: true,
  //   ref: true,
  //   watch: true,
  //   reactive: true
  // },
  // 后面的配置会覆盖前者
  extends: ['eslint:recommended', 'eslint-config-standard', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // js 处理
    'no-unused-vars': 1, // 未使用的变量
    'comma-dangle': 0,
    'space-before-function-paren': 0, // function 前面的空格
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    indent: [2, 2],
    semi: [2, 'never'],
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'eol-last': 0, // 所有文件结尾必须包括换行
    // 异步处理
    'no-promise-executor-return': 2, // 禁止 promise 中使用 return
    'no-await-in-loop': 2, // 禁止循环中使用 await
    'max-nested-callbacks': ['error', 3], // 异步最大回调数
    'no-return-await': 2,
    'prefer-promise-reject-errors': 2, // 使用 new Error 追踪错误
    // vue 错误
    'vue/no-unused-vars': 1,
    'vue/component-tags-order': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    // typescript
    '@typescript-eslint/no-this-alias': 1, // 是否禁止 this 的别名
    '@typescript-eslint/no-unused-vars': 1, // 未使用的代码进行警告
    '@typescript-eslint/no-explicit-any': 1 // 使用 any 时进行警告
  }
}