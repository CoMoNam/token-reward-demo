🛠 backend

이 문서는 보상 내역을 기록하기 위한 간단한 Express API 서버 구성에 대해 설명합니다.

📦 목적

설문 보상 트랜잭션 내역을 로그 파일에 기록 (또는 추후 DB로 확장)

보상 이력 조회, 중복 응답 방지, 관리자 페이지 구축 기반

🛠 기술 스택

Node.js + Express.js

파일 기반 JSON 로그 저장 (lowdb 또는 fs 사용 가능)

📁 기본 구조

/backend
  server.js
  /data
    logs.json