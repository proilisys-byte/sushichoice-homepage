# 🤖 AGENT CONTEXT — SUSHI CHOICE Brand Platform v2.0

> **이 파일은 AI 에이전트(Antigravity, Cursor, Claude Code 등)가 세션/계정 변경 후에도 프로젝트를 이어서 작업할 수 있도록 현재 상태를 기록합니다.**
>
> ⚠️ 새 세션 시작 시 이 파일을 **가장 먼저** 읽으세요.
>
> 📅 마지막 업데이트: 2026-06-11

---

## 1. 프로젝트 한줄 요약

**대한민국 프리미엄 회전초밥 브랜드 "SUSHI CHOICE"의 브랜드 웹사이트를 Vite + Vanilla JS로 구축하는 프로젝트.**

---

## 2. 현재 진행 상태

### ✅ Phase 0 ~ 7: 전체 완료 (100%)

| Phase | 완료 항목 | 결과물 |
|:---|:---|:---|
| **Phase 0** | 기획 및 정보 구조 설계 | `Docs/` 내 기획서 및 다이어그램 |
| **Phase 1** | 프로젝트 초기화 및 환경 설정 | `index.html` 최적화, boilerplate 정리, 디렉토리 구조 생성 |
| **Phase 2** | 공통 컴포넌트 구현 | `Header.js`, `Footer.js` (햄버거 메뉴, glassmorphism, curtain transition) |
| **Phase 3** | HOME 페이지 10개 섹션 구현 | `Home.js` (conveyor loop, step click, sticky visual, temp counter) |
| **Phase 4** | 9개 서브 페이지 구현 | `Brand.js`, `Menu.js` (필터), `Store.js`, `StoreDetail.js`, `Franchise.js` (계산기), `Careers.js`, `Review.js`, `Faq.js`, `Contact.js` |
| **Phase 5** | SEO / GEO 최적화 | `sitemap.xml`, `robots.txt`, `seo.js` (동적 메타태그 및 JSON-LD 스키마 삽입) |
| **Phase 6** | 빌드 및 품질 검증 | `npm run build` exits 0 검증 완료 (15.25s) |
| **Phase 7** | 배포 준비 및 문서화 | `walkthrough.md` 작성 및 `AGENT_CONTEXT.md` 현행화 |

---

## 3. 다음 작업 (NEXT ACTION)

```
프로젝트 빌드 검증 완료 → 사용자 인수 및 프로덕션 호스팅 서비스 배포
```

### 권장되는 사후 작업:
1. **프로덕션 배포**: Vercel, Netlify, 혹은 AWS S3 + CloudFront 등을 통한 배포 (SPA History 라우팅 대응을 위한 redirect 설정 추가 권장)
2. **애널리틱스 연동**: 구글 애널리틱스(GA4) 및 네이버 프리미엄 로그분석 설치하여 가맹/채용 전환율 추적
3. **SEO 모니터링**: 구글 서치콘솔 및 네이버 서치어드바이저에 `sitemap.xml` 제출 및 등록

---

## 4. 핵심 참조 파일 맵

```
e:\0000_Sushichoice_Brand_v1.0\
│
├── AGENT_CONTEXT.md              ← 🤖 이 파일 (현재 상태 + 다음 작업)
│
├── Docs/
│   ├── project.md                ← 📋 프로젝트 전체 기획서
│   ├── implementation_plan.md    ← 📐 홈페이지 상세 기획
│   ├── workflow.md               ← 🔄 7 Phase 워크플로우 정의
│   ├── Goal-Definition.md        ← 🎯 /goal 구조 (4섹션 + 종료조건 + 제약)
│   ├── Chef-Philosophy.md        ← 🍣 셰프 철학 원문
│   └── DECISION_LOG.md           ← 📝 의사결정 기록
│
├── public/
│   ├── sitemap.xml               ← 🌐 사이트맵 파일 [NEW]
│   ├── robots.txt                ← 🤖 로봇 색인 가이드 [NEW]
│   └── favicon.svg
│
├── src/
│   ├── components/               ← 공통 레이아웃 컴포넌트 [NEW]
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── data/                     ← 정적 데이터셋 [NEW]
│   │   ├── menuData.js
│   │   ├── storeData.js
│   │   ├── reviewData.js
│   │   └── faqData.js
│   ├── pages/                    ← 라우팅 페이지 컴포넌트 [NEW]
│   │   ├── Home.js
│   │   ├── Brand.js
│   │   ├── Menu.js
│   │   ├── Store.js
│   │   ├── StoreDetail.js
│   │   ├── Franchise.js
│   │   ├── Careers.js
│   │   ├── Review.js
│   │   ├── Faq.js
│   │   └── Contact.js
│   ├── styles/
│   │   ├── tokens.css            ← 🎨 디자인 토큰 (기존)
│   │   ├── global.css            ← 🌐 글로벌 스타일 및 페이지 전환
│   │   └── components/           ← 컴포넌트별 CSS [NEW]
│   │       ├── header.css
│   │       ├── footer.css
│   │       ├── home.css
│   │       └── pages.css
│   ├── utils/
│   │   ├── router.js             ← ⚡ Custom History Router [NEW]
│   │   └── seo.js                ← 🔍 Dynamic SEO & JSON-LD Controller [NEW]
│   └── main.js                   ← ⚙️ 애플리케이션 초기화 진입점 [MODIFIED]
│
├── package.json
└── index.html                    ← 🌐 메인 레이아웃 및 폰트/SEO 설정 [MODIFIED]
```

---

## 5. 기술 스택

| 항목 | 기술 |
|:---|:---|
| 빌드 도구 | Vite 8.x |
| 언어 | Vanilla JavaScript (ES Module) |
| 스타일링 | Vanilla CSS (디자인 토큰 기반) |
| 폰트 | Pretendard, SUIT (KR) / Inter (EN) / Noto Serif KR |
| 패키지 관리 | npm |
| 명령어 | `npm run dev` / `npm run build` / `npm run preview` |

---

## 6. 디자인 시스템 핵심

| 역할 | 변수 | 값 |
|:---|:---|:---|
| Primary 배경 | `--color-primary` | `#0B0B0B` |
| Secondary 텍스트 | `--color-secondary` | `#F8F7F4` |
| Accent (10% 이하) | `--color-accent` | `#D4001A` |
| Gold (레일/디바이더) | `--color-gold` | `#C7A86D` |
| Wood (셰프 섹션) | `--color-wood` | `#3E2723` |
| Warm (브랜드 섹션) | `--color-warm` | `#1A1410` |

디자인 철학: **Apple 90% + Ferrari 10%**

---

## 7. 에이전트 행동 규칙

1. 작업 시작 전 **이 파일을 먼저 읽고** 현재 상태를 파악한다.
2. 모든 스타일은 `src/styles/tokens.css`의 CSS 변수를 사용한다 (하드코딩 금지).
3. 모든 신규 CORE/MINOR 의사결정은 `Docs/DECISION_LOG.md`에 유지보수 기록한다.
4. 완성된 빌드가 항상 정상 동작하도록 `npm run build` 검증을 거친다.
