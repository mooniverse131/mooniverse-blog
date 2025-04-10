module.exports = {
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    requireConfigFile: false // Babel 설정 파일을 강제로 찾지 않도록 설정
  },
  rules: {
    // 필요한 규칙들 추가 가능
  }
}
