# 🌙 mooniverse-blog

A full-stack blog platform built with **React**, **Vue**, **Spring Boot**, and **Docker**.  
It features a Markdown-based blog UI and an admin dashboard with post management.

> 🎯 포트폴리오 및 실무 연습을 겸한 개인 프로젝트입니다.

---

## 🛠️ Tech Stack

### Frontend
- **React (Next.js)**: 블로그 사용자 화면
- **Vue 3**: 관리자 전용 대시보드
- **Tailwind CSS**: 빠르고 유연한 반응형 스타일링
- **Axios**: API 통신

### Backend
- **Spring Boot**: REST API 서버
- **Spring Security + JWT**: 인증/인가
- **JPA + MySQL**: 데이터베이스 연동

### DevOps
- **Docker & Docker Compose**: 컨테이너 기반 개발 환경
- **AWS EC2**: 최종 배포 환경 (예정)

---

## 📦 프로젝트 구조

```bash
mooniverse-blog/
├── client/      # React 기반 블로그
├── admin/       # Vue 기반 관리자 대시보드
├── server/      # Spring Boot API 서버
├── docs/        # 구조도, 기획서, API 명세 등
├── docker-compose.yml
└── README.md
