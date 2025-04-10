# 1. OpenJDK 17 이미지를 기반으로 사용
FROM openjdk:17-jdk-slim

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 빌드된 JAR 파일을 컨테이너에 복사
COPY build/libs/server-0.0.1-SNAPSHOT.jar /app/server.jar

# 4. JAR 파일 실행
CMD ["java", "-jar", "server.jar"]

# 5. 서버가 실행될 포트 설정 (Spring Boot 기본 포트는 8080)
EXPOSE 8080
