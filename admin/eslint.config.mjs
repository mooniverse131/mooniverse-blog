import babelEslint from 'babel-eslint';  // babel-eslint를 import

export default {
  parser: babelEslint,  // Babel을 위한 파서를 지정
  parserOptions: {
    requireConfigFile: false,  // Babel 설정 파일을 강제로 찾지 않도록 설정
  },
  extends: [
    'plugin:vue/essential',  // Vue 관련 기본 ESLint 설정
    'eslint:recommended'      // 기본 ESLint 설정
  ],
  rules: {
    // 추가적인 ESLint 규칙을 여기에 정의할 수 있음
  }
}
