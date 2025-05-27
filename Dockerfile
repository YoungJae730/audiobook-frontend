# 1. 리눅스 기반 node 이미지 사용
FROM node:20-alpine

# 2. 앱 코드 넣을 작업 디렉토리
WORKDIR /app

# 3. package.json 복사 후 의존성 설치
COPY package*.json ./
RUN npm install --legacy-peer-deps

# 4. 소스코드 복사
COPY . .

# 5. 포트 열기
EXPOSE 3000

# 6. 개발 모드 실행 (hot reload)
CMD ["npm", "run", "dev"]
