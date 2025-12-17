# GitHub Pages 배포 가이드

## 배포 방법

### 방법 1: GitHub Actions 자동 배포 (권장)

1. GitHub에 저장소를 생성합니다.
2. 저장소 이름을 `arkfully-website`로 설정합니다.
3. 코드를 푸시하면 자동으로 배포됩니다.

**주의사항:**
- 저장소 이름이 `arkfully-website`가 아닌 경우, `vite.config.js`의 `base` 경로를 변경해야 합니다.
- 예: 저장소 이름이 `my-arkfully`인 경우, `base: '/my-arkfully/'`로 변경

### 방법 2: 수동 배포

```bash
# 의존성 설치
npm install

# 빌드
npm run build

# gh-pages로 배포 (gh-pages 브랜치에 배포)
npm run deploy
```

### 방법 3: GitHub Pages 설정

1. GitHub 저장소의 Settings > Pages로 이동
2. Source를 "GitHub Actions"로 선택 (방법 1 사용 시)
   또는 "gh-pages branch"로 선택 (방법 2 사용 시)
3. 저장소 이름에 맞게 `vite.config.js`의 `base` 경로 확인

## 저장소 이름 변경 시

만약 GitHub 저장소 이름이 `arkfully-website`가 아닌 경우:

1. `vite.config.js` 파일의 `base` 값을 변경
2. `package.json`의 `deploy` 스크립트 확인
3. `App.jsx`의 `Router`의 `basename` 값 변경

예시:
```javascript
// vite.config.js
base: '/your-repo-name/'

// App.jsx
<Router basename="/your-repo-name">
```

