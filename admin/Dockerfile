# 1. Node.js 공식 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 파일을 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 프로젝트 파일을 모두 복사
COPY . .

# 6. 빌드
RUN npm run build

# 7. 서버가 실행될 포트 설정
EXPOSE 8080

# 8. 컨테이너 실행 시 실행할 명령어
CMD ["npm", "run", "serve"]
