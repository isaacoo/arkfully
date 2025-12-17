# GitHub Pages 배포 가이드

## 배포 방법

### 방법 1: GitHub Actions 자동 배포 (권장)

1. GitHub에 저장소를 생성합니다.
2. 저장소 이름을 `arkfully-website`로 설정합니다.
3. 저장소 Settings > Pages로 이동하여 Source를 "GitHub Actions"로 설정합니다.
4. 코드를 푸시하면 자동으로 배포됩니다.

**주의사항:**
- 저장소 이름이 `arkfully-website`가 아닌 경우, `vite.config.js`의 `base` 경로를 변경해야 합니다.
- 예: 저장소 이름이 `my-arkfully`인 경우, `base: '/my-arkfully/'`로 변경
- 403 에러가 발생하는 경우, workflow 파일에 `permissions` 설정이 포함되어 있는지 확인하세요.

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

## 문제 해결

### 403 에러 (Write access to repository not granted)

이 에러는 GitHub Actions의 권한 문제입니다. 해결 방법:

1. **workflow 파일 확인**: `.github/workflows/deploy.yml` 파일에 `permissions` 설정이 포함되어 있는지 확인
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```

2. **GitHub Pages 설정 확인**:
   - 저장소 Settings > Pages로 이동
   - Source를 "GitHub Actions"로 설정
   - Actions 권한이 활성화되어 있는지 확인 (Settings > Actions > General)

3. **저장소 권한 확인**:
   - 저장소가 Private인 경우, GitHub Pro 계정이 필요할 수 있습니다
   - 저장소 Settings > Actions > General에서 "Workflow permissions"를 "Read and write permissions"로 설정

