import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // 정적 사이트 빌드를 위한 설정
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 소스맵 생성 (선택사항)
    sourcemap: false,
    // 청크 크기 경고 제한
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // HTML 파일들을 엔트리 포인트로 지정
      input: {
        main: './index.html',
        perplexity: './perplexity-api-sample.html',
        youtube: './youtube-data-api-sample.html',
      },
    },
  },
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true,
  },
  // 정적 파일 처리
  publicDir: 'public',
  // Netlify 배포를 위한 최적화
  base: './',
});

