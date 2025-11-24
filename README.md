# Perplexity & YouTube API 샘플 프로젝트

Perplexity API와 YouTube Data API를 활용한 교육용 웹 애플리케이션입니다.

## 📋 프로젝트 개요

이 프로젝트는 두 가지 주요 API를 활용한 예시 애플리케이션을 제공합니다:

1. **Perplexity API 샘플**: Perplexity API와 GPT API의 성능을 비교하는 기능
2. **YouTube Data API 샘플**: YouTube Data API를 활용한 다양한 기능들

## 🚀 주요 기능

### Perplexity API 샘플
- Perplexity API와 GPT API의 동향 검색 결과 비교
- 실시간 API Key 검증
- 양쪽 결과를 동시에 표시하여 비교 가능

### YouTube Data API 샘플
- **키워드 기반 인기 영상 검색**: 상위 10개 영상을 썸네일, 제목, 채널명, 조회수와 함께 표시
- **여러 채널 데이터 비교**: 구독자 수, 조회수, 업로드 수를 테이블로 비교
- **업로드 패턴 분석**: 최근 50개 영상의 업로드 패턴을 요일/시간대별로 시각화

## 🛠️ 기술 스택

- **HTML5**: 마크업
- **CSS3**: 스타일링 (그라데이션, 반응형 디자인)
- **JavaScript (Vanilla)**: 클라이언트 사이드 로직
- **Chart.js**: 데이터 시각화 (업로드 패턴 분석)
- **Vite**: 빌드 도구 및 개발 서버

## 📦 설치 및 실행

### 사전 요구사항

- Node.js 16.x 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (http://localhost:3000)
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 미리보기

```bash
# 빌드된 파일 미리보기
npm run preview
```

## 🌐 Netlify 배포

### 방법 1: Netlify CLI 사용

```bash
# Netlify CLI 설치 (전역)
npm install -g netlify-cli

# Netlify 로그인
netlify login

# 배포
npm run build
netlify deploy --prod
```

### 방법 2: GitHub 연동

1. GitHub에 프로젝트 푸시
2. [Netlify](https://www.netlify.com/)에 로그인
3. "Add new site" → "Import an existing project" 선택
4. GitHub 저장소 선택
5. 빌드 설정:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. "Deploy site" 클릭

### 방법 3: 드래그 앤 드롭

```bash
# 빌드 실행
npm run build

# dist 폴더를 Netlify 대시보드에 드래그 앤 드롭
```

## 🔑 API Key 설정

이 프로젝트는 환경변수를 사용하지 않고, 사용자가 직접 프론트엔드에서 API Key를 입력하여 사용합니다.

### 필요한 API Key

1. **Perplexity API Key**
   - [Perplexity API](https://www.perplexity.ai/settings/api-keys)에서 발급
   - Perplexity API 샘플 페이지에서 입력

2. **OpenAI API Key** (GPT API)
   - [OpenAI Platform](https://platform.openai.com/api-keys)에서 발급
   - Perplexity API 샘플 페이지에서 입력

3. **YouTube Data API Key**
   - [Google Cloud Console](https://console.cloud.google.com/)에서 발급
   - YouTube Data API v3 활성화 필요
   - YouTube Data API 샘플 페이지에서 입력

## 📁 프로젝트 구조

```
perplexity-youtube-api-sample/
├── index.html                      # 메인 페이지
├── perplexity-api-sample.html      # Perplexity API 샘플
├── youtube-data-api-sample.html    # YouTube Data API 샘플
├── public/
│   ├── how-to-find-channel-id.png  # 채널 ID 확인 가이드 이미지
│   └── vite.svg
├── src/                            # Vite 기본 파일들 (사용 안 함)
├── dist/                           # 빌드 출력 폴더
├── vite.config.js                  # Vite 설정
├── package.json
└── README.md
```

## 🎯 사용 방법

### Perplexity API 샘플

1. 메인 페이지에서 "Perplexity API" 카드 클릭
2. Perplexity API Key와 GPT API Key 입력 (자동 검증)
3. 검색어 입력 후 검색 버튼 클릭
4. 양쪽 결과를 비교하여 확인

### YouTube Data API 샘플

1. 메인 페이지에서 "YouTube Data API" 카드 클릭
2. YouTube Data API Key 입력 (자동 검증)
3. 원하는 기능 탭 선택:
   - **영상 검색**: 키워드 입력 후 검색
   - **채널 비교**: 채널 ID 추가 후 자동 비교
   - **업로드 패턴**: 채널 ID 입력 후 분석 시작

## 📝 참고사항

- 모든 API Key는 브라우저에만 저장되며 서버로 전송되지 않습니다
- API 호출은 클라이언트 사이드에서 직접 이루어집니다
- CORS 정책에 따라 일부 브라우저에서 API 호출이 제한될 수 있습니다
- YouTube Data API는 일일 할당량이 있습니다 (기본 10,000 units/day)

## 🤝 기여

이슈나 개선 사항이 있으면 언제든지 제안해주세요!

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

## 🔗 관련 링크

- [Perplexity API 문서](https://docs.perplexity.ai/)
- [YouTube Data API 문서](https://developers.google.com/youtube/v3)
- [OpenAI API 문서](https://platform.openai.com/docs)
- [Vite 문서](https://vitejs.dev/)
- [Netlify 문서](https://docs.netlify.com/)


