# 🍣 SUSHI CHOICE Brand Platform v2.0

> **움직이는 예술, 장인의 온도.**
>
> 대한민국 프리미엄 회전초밥 브랜드 **스시초이스(SUSHI CHOICE)**의 브랜드 다이닝 플랫폼 및 공식 홈페이지 웹 애플리케이션입니다.

---

## 🎨 Design Philosophy & Concept

본 웹 플랫폼은 **V3(움직이는 예술) × V4(온도의 과학) 하이브리드 콘셉트**를 기반으로 설계되었습니다.

*   **Apple 90%**: 대형 플루이드 타이포그래피, 와이드한 레이아웃 여백, 스크롤 기반 스토리텔링, 직관적이고 극도로 미니멀한 UI.
*   **Ferrari 10%**: 어두운 럭셔리 다크 모드(Obsidian Black `#0B0B0B`), 포인트 골드 액센트(Premium Gold `#C7A86D`), 역동적인 회전레일 인터랙션.
*   **V3 레일 DNA**: 페이지 전환 시 화면 중앙에서 펼쳐지는 골드 커튼 전환 효과, 실시간 인기 10선 루핑 컨베이어 벨트.
*   **V4 장인 DNA**: 셰프 손끝의 샤리 온도(36.5°C) 스크롤 카운터 업, 생선 결에 따른 1mm 칼집의 과학 등 신뢰성 카피 탑재.

---

## ⚡ Key Features (핵심 기능)

1.  **Custom History-based Router**: 페이지 hard-reload 없는 Vanilla JS 싱글페이지(SPA) 라우팅을 구현하여, 골드 럭셔리 페이지 커튼 전환 트랜지션 모션을 매끄럽게 처리합니다.
2.  **Dynamic SEO & GEO Manager**: 페이지 전환 시 각 9개 서브 페이지 및 4개 매장별로 고유의 `<title>`, `<meta>` 정보(Description, Keywords, OG 태그) 및 `JSON-LD Structured Data` 스키마(Organization, Restaurant, LocalBusiness, FAQPage)를 동적으로 인젝션하여 검색엔진 노출 및 AI 검색(GEO)을 최적화합니다.
3.  **Rotary Experience Guide**: 스시초이스의 4단계 미식 과정(보고 &rarr; 고르고 &rarr; 주문하고 &rarr; 즐긴다)을 마우스 오버 및 자동 타이머 페이드로 연동한 지능형 가이드 패널.
4.  **Today's Golden Plate**: 탑 10 인기 스시를 실제 회전초밥 레일처럼 루핑하는 60fps 하드웨어 가속 CSS 키프레임 컨베이어 트랙.
5.  **Interactive Revenue Calculator**: 가맹 예비 창업자가 하루 테이블 회전수와 평균 테이블 객단가를 입력하면 월 매출액 및 주요 비용 비율(재료비 36%, 인건비 22%, 임대료 10%, 로열티 3%)을 대조해 순수익과 마진율을 즉시 실시간 연산하는 점주형 시뮬레이터.
6.  **FAQ Search Accordion**: 궁금한 키워드를 입력 시 실시간으로 Q&A 목록을 필터링하고 슬라이드 애니메이션으로 열리는 아코디언 컴포넌트.
7.  **Branch Locator & Mock Booking Forms**: 4개 지점(송내본점, 시흥은계점, 송도점, 인천서구점)의 세부 명세 및 약도를 토글 형태로 지원하며, 네이버 지도 길찾기 아웃링크 및 평일 단체 사전 문의를 위한 입력 검증 폼 탑재.

---

## 📂 Project Directory Structure

```
e:\0000_Sushichoice_Brand_v1.0\
├── public/
│   ├── sitemap.xml               # 검색엔진용 사이트맵
│   ├── robots.txt                # 크롤러 수집 가이드
│   ├── favicon.svg               # 브랜드 파비콘
│   └── icons.svg                 # SVG 아이콘 스프라이트
├── src/
│   ├── assets/                   # 이미지 및 비디오 미디어 최적화 리소스
│   ├── components/               # Header, Footer 등 전역 공통 레이아웃
│   ├── data/                     # 메뉴, 매장, 후기, FAQ 정적 데이터셋
│   ├── pages/                    # 10개 홈 섹션 및 각 서브 페이지 템플릿
│   ├── styles/                   # CSS 스타일시트 (디자인 토큰 적용)
│   ├── utils/
│   │   ├── router.js             # 클라이언트 History 라우터 모듈
│   │   └── seo.js                # 동적 SEO 헤더 & 스키마 관리 모듈
│   └── main.js                   # 앱 메인 진입점
├── index.html                    # 메인 HTML 레이아웃
├── package.json                  # 프로젝트 빌드 명세서 (Vite 8.x)
└── README.md                     # 본 문서
```

---

## 🚀 How to Run (실행 방법)

### 📦 Prerequisites (사전 준비)
*   **Node.js**: LTS 버전(v18 이상 권장)이 설치되어 있어야 합니다.

### 1. 의존성 패키지 설치
터미널을 열어 프로젝트 폴더 루트에서 아래 명령을 실행합니다.
```bash
npm install
```

### 2. 로컬 개발 서버 구동 (Local Dev Server)
코드 수정 시 즉시 화면에 반영되는 HMR(Hot Module Replacement) 기능이 적용된 로컬 테스트 서버를 실행합니다.
```bash
npm run dev
```
*   서버 실행 후 브라우저를 열어 `http://localhost:5173/` 또는 터미널에 표시된 포트로 접속합니다.

### 3. 프로덕션 빌드 (Production Build)
웹 최적화 및 코드 압축(Minify) 처리가 완료된 배포용 정적 리소스를 생성합니다.
```bash
npm run build
```
*   빌드가 성공적으로 완료되면 루트 디렉토리에 `dist/` 폴더가 생성됩니다.

### 4. 빌드 결과물 미리보기 (Preview)
배포 전에 로컬 환경에서 프로덕션 빌드 결과물을 미리 검증해봅니다.
```bash
npm run preview
```

---

## 🏆 Performance & Quality Target

본 플랫폼은 기획 단계의 성공 기준에 따라 아래의 점수를 유지할 수 있도록 코드가 작성되었습니다.
*   **Lighthouse Performance**: &ge; 95 (이미지 WebP 및 비디오 압축, 폰트 preload 최적화)
*   **Lighthouse SEO**: = 100 (정교한 메타 키워드 및 JSON-LD Structured Data 인젝션)
*   **Lighthouse Accessibility**: &ge; 95 (시맨틱 HTML 마크업 및 이미지 alt, ARIA 속성 확보)
*   **Lighthouse Best Practices**: = 100 (보안 및 비표준 요소 전면 배제)
