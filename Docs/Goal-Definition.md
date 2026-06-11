# /goal

# SUSHI CHOICE Brand Platform v2.0

## 1) 작업 핵심 목표 및 범위

### Ultimate Goal

- 목표: SUSHI CHOICE 프리미엄 브랜드 웹사이트를 Vite + Vanilla JS 기반으로 구축하여, `npm run build` exits 0 이고 Lighthouse Performance ≥ 95, SEO = 100, Accessibility ≥ 95, Best Practices = 100 을 달성한다.
- 시작 지점: `e:\0000_Sushichoice_Brand_v1.0` (Vite 프로젝트 초기화 완료, 디자인 토큰/글로벌 스타일 구축 완료, 메인 코드 미구현 상태)
- 작업 대상: 아래 Phase별 작업 범위에 명시된 파일 및 디렉토리
- 작업 자율성: 디자인 토큰·컬러·타이포그래피 변경, 신규 외부 패키지 도입, 기존 `Docs/` 내 기획서 수정은 사용자 확인 필요. 그 외 `src/`, `public/`, `index.html` 내 구현은 자율 진행.

---

### Brand Goal

스시초이스를 단순 초밥 전문점이 아닌

"Premium Rotary Sushi Experience Brand"

로 포지셔닝한다.

---

### Business Goal

홈페이지를 단순 홍보 사이트가 아닌

* 고객 유입 플랫폼
* 브랜드 플랫폼
* 프랜차이즈 모집 플랫폼
* 채용 플랫폼
* SEO 플랫폼
* GEO(AI 검색) 플랫폼

으로 구축한다.

---

### User Goal

사용자는 홈페이지 방문 후 5초 이내에 다음을 이해해야 한다.

* 회전초밥 전문 브랜드
* 프리미엄 품질
* 다양한 메뉴
* 가족 외식 적합
* 가까운 매장 존재
* 가맹 모집 진행
* 직원 채용 진행

---

### Project Scope

구현 대상

* 홈페이지 (HOME — 10개 섹션)
* 브랜드 페이지
* 메뉴 페이지
* 매장 페이지
* 리뷰 페이지
* 프랜차이즈 페이지
* 채용 페이지
* FAQ 페이지
* 문의 페이지

---

구현 제외

* ERP
* POS
* 회원 시스템
* 주문 시스템
* 배달 시스템
* CRM 고도화
* 지식베이스(Knowledge Base)

---

### Phase별 작업 범위

| Phase | 범위 | 작업 대상 디렉토리/파일 |
|:---|:---|:---|
| **Phase 1** | 프로젝트 초기화 및 환경 설정 | `index.html`, `src/main.js`, `src/style.css`, `src/styles/`, `src/pages/`, `src/components/`, `src/data/`, `src/utils/` |
| **Phase 2** | 공통 컴포넌트 설계 및 구현 | `src/components/Header.js`, `src/components/Footer.js`, `src/styles/header.css`, `src/styles/footer.css` |
| **Phase 3** | HOME 페이지 구현 (10개 섹션) | `src/pages/Home.js`, `src/styles/hero.css` 등 섹션별 스타일 |
| **Phase 4** | 서브 페이지 구현 | `src/pages/Brand.js`, `src/pages/Menu.js`, `src/pages/Store.js` 등 |
| **Phase 5** | SEO · GEO 최적화 | `public/sitemap.xml`, `public/robots.txt`, Structured Data JSON-LD |
| **Phase 6** | 성능 최적화 및 품질 검증 | 이미지 최적화, Critical CSS, ARIA, 키보드 네비게이션 |
| **Phase 7** | 배포 및 자산화 | 프로덕션 빌드, 배포 설정, 문서화 |

---

## 2) 작업 세부 규칙

### Design Philosophy

Apple 90%

Ferrari 10%

* Large Typography
* Spacious Layout
* Storytelling Scroll
* Premium Product Presentation
* Elegant Motion
* Minimal UI
* Dark Luxury
* Strong Visual Impact (과도한 스포츠카 느낌은 배제)

---

### 워크플로 / 사이클

각 Phase는 **섹션 단위 점진적 구현** 방식을 따른다:

1. 구현할 섹션/페이지 범위 확인
2. 디자인 토큰(`tokens.css`) 기반 스타일 구현 (하드코딩 금지)
3. 반응형 3단 검증 (Desktop 1280px+ / Tablet 768~1279px / Mobile ~767px)
4. `npm run dev` 정상 실행 확인
5. 다음 섹션으로 이동

---

### 디자인 토큰 일관성 유지

모든 색상, 타이포그래피, 간격은 반드시 `src/styles/tokens.css`에 정의된 CSS 변수를 사용한다.

| 역할 | 변수명 | 값 |
|:---|:---|:---|
| Primary | `--color-primary` | `#0B0B0B` |
| Secondary | `--color-secondary` | `#F8F7F4` |
| Accent | `--color-accent` | `#D4001A` (사용 비중 10% 이하) |
| Premium | `--color-gold` | `#C7A86D` |
| Wood | `--color-wood` | `#3E2723` |
| Warm | `--color-warm` | `#1A1410` |

---

### Typography

| 용도 | 폰트 |
|:---|:---|
| Korean | `--font-kr`: Pretendard, SUIT |
| English | `--font-en`: SF Pro Display, Inter |
| Serif | `--font-serif`: Noto Serif KR |

---

### SEO/GEO 통합 검증

기능 구현과 동시에 SEO 메타 태그, Structured Data, 시맨틱 HTML을 적용한다. 별도 단계로 미루지 않는다.

---

### Website Structure

```
/                    → HOME (10개 섹션)
/brand               → 브랜드 소개
/menu                → 메뉴 페이지
/store               → 매장 페이지
/store/songnae       → 송내본점
/store/eungye        → 은계점
/store/songdo        → 송도점
/store/incheon       → 인천서구점
/franchise           → 가맹 페이지
/careers             → 채용 페이지
/review              → 리뷰 통합 페이지
/faq                 → FAQ 허브
/contact             → 문의 페이지
```

---

### 도구·명령 사용 규칙

- 패키지 관리: `npm` (package.json 기준)
- 개발 서버: `npm run dev` (Vite)
- 프로덕션 빌드: `npm run build` (Vite)
- 프리뷰: `npm run preview`

---

### 의사결정 기록

- 모든 CORE 의사결정(아키텍처·라우팅 구조·외부 패키지 도입·디자인 시스템 변경)은 `Docs/DECISION_LOG.md`에 기록한다.
- MINOR 의사결정(네이밍·레이아웃 디테일·애니메이션 타이밍)은 코드 내 주석으로 기록한다.
- grep 가능한 카운터를 `CORE: N` · `MINOR: M` 으로 유지한다.

---

## 3) 종료 조건 및 종료 방법

### 종료 조건 (아래 중 하나라도 충족되는 순간 해당 Phase의 루프를 즉시 멈춘다):

#### Phase 1 종료 조건
- `npm run dev` exits 0 이고 브라우저에서 빈 화면 없이 SUSHI CHOICE 기본 레이아웃이 렌더링됨 → STOP REASON: PHASE1_COMPLETE
- 평가-진행 라운드(turn) 누적 15회 도달 → STOP REASON: TURN_CAP

#### Phase 2 종료 조건
- Header, Footer 컴포넌트가 구현되어 3개 브레이크포인트에서 정상 렌더링됨 → STOP REASON: PHASE2_COMPLETE
- 평가-진행 라운드(turn) 누적 20회 도달 → STOP REASON: TURN_CAP

#### Phase 3 종료 조건
- HOME 페이지 10개 섹션이 모두 구현되어 `npm run dev` exits 0 이고 스크롤 인터랙션이 동작함 → STOP REASON: PHASE3_COMPLETE
- 평가-진행 라운드(turn) 누적 40회 도달 → STOP REASON: TURN_CAP

#### Phase 4 종료 조건
- 모든 서브 페이지(9개)가 구현되어 라우팅이 정상 동작함 → STOP REASON: PHASE4_COMPLETE
- 평가-진행 라운드(turn) 누적 50회 도달 → STOP REASON: TURN_CAP

#### Phase 5 종료 조건
- 모든 페이지에 Structured Data(JSON-LD)가 적용되고 SEO 메타 태그가 설정됨 → STOP REASON: PHASE5_COMPLETE
- 평가-진행 라운드(turn) 누적 20회 도달 → STOP REASON: TURN_CAP

#### Phase 6 종료 조건
- `npm run build` exits 0 이고 Lighthouse Performance ≥ 95, SEO = 100, Accessibility ≥ 95, Best Practices = 100 → STOP REASON: PHASE6_COMPLETE
- 평가-진행 라운드(turn) 누적 25회 도달 → STOP REASON: TURN_CAP

#### Phase 7 종료 조건
- 프로덕션 빌드 완료, 배포 설정 완료, README.md 작성 완료 → STOP REASON: PHASE7_COMPLETE
- 평가-진행 라운드(turn) 누적 15회 도달 → STOP REASON: TURN_CAP

---

### 종료 방법

1) 해당 Phase 완료 시 `Docs/DECISION_LOG.md` 마지막 줄에 `STOP REASON: <원인 코드>` 한 줄을 덧붙인다.
2) 다음 검증 명령을 실행하여 출력을 대화에 surface한다:
   - `npm run build` exits 0 출력을 대화에 남김
   - `npm run dev` exits 0 이고 개발 서버 URL 출력을 대화에 남김
3) `cat Docs/DECISION_LOG.md` 를 실행해 `CORE: N` · `MINOR: M` 카운터 줄과 `STOP REASON:` 줄이 보이는 출력을 대화에 남긴다.

---

### Lighthouse 검증 기준 (Phase 6)

| 항목 | 목표 점수 |
|:---|:---|
| Performance | ≥ 95 |
| SEO | = 100 |
| Accessibility | ≥ 95 |
| Best Practices | = 100 |

---

## 4) 기타 제약조건

### 금지 행동

- `Docs/project.md`, `Docs/workflow.md`, `Docs/implementation_plan.md`, `Docs/Chef-Philosophy.md` 는 사용자 승인 없이 수정하지 않는다.
- `src/styles/tokens.css`의 기존 디자인 토큰 값을 사용자 확인 없이 변경하지 않는다.
- 새로운 npm 패키지를 사용자 확인 없이 설치하지 않는다.
- 기존 `Docs/` 폴더 내 기획서의 카피라이팅, 브랜드 메시지, 섹션 구성을 임의로 변경하지 않는다.

### 수정 금지 파일 (명시적 승인 없이)

- `Docs/project.md`
- `Docs/workflow.md`
- `Docs/implementation_plan.md`
- `Docs/Chef-Philosophy.md`
- `Docs/Git-Notion-Account-Guide.md`
- `.env.example`

### 변경 범위 제한

- 활성 Phase의 구현 범위 밖 파일은 수정하지 않는다.
- 단, 다음은 예외로 허용:
  - `Docs/DECISION_LOG.md` (의사결정 기록)
  - `Docs/Goal-Definition.md` (본 문서, Phase 진행 상태 업데이트)
  - `.gitignore` (빌드 산출물 추가)

---

## 5) 참조 자산 및 콘텐츠 소스

### 프로젝트 핵심 문서 (Single Source of Truth)

| 파일 | 용도 | 참조 시점 |
|:---|:---|:---|
| `Docs/project.md` | 프로젝트 전체 기획서 | 페이지 구조, 메뉴 카테고리, 매장 정보 참조 |
| `Docs/implementation_plan.md` | 홈페이지 상세 기획서 (V3×V4 하이브리드) | 각 섹션별 카피라이팅, 인터랙션, 비주얼 참조 |
| `Docs/workflow.md` | 워크플로우 정의 | Phase별 실행 절차, 에이전트 수행 항목 참조 |
| `Docs/Chef-Philosophy.md` | 셰프 철학 원문 | Brand/Chef 섹션 카피라이팅 참조 |

### 컬러 시스템

| 역할 | 컬러 | 용도 |
|:---|:---|:---|
| Primary | `#0B0B0B` (Obsidian Black) | 배경, 주 텍스트 |
| Secondary | `#F8F7F4` (Ivory White) | 보조 텍스트, 밝은 섹션 배경 |
| Accent | `#D4001A` (Ferrari Red) | CTA 호버, 긴급 알림 (10% 이하) |
| Premium | `#C7A86D` (Gold) | 레일 라인, 디바이더, 헤딩 액센트 |
| Wood | `#3E2723` (Dark Walnut) | 텍스처 배경, 셰프 섹션 |
| Warm | `#1A1410` (Dark Teak) | Philosophy/Brand 섹션 배경 |

### 네이버 지도 매장 참조 링크

| 매장 | 네이버 지도 |
|:---|:---|
| 송내본점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1325888474) |
| 은계점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1661169536) |
| 송도점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1807470923) |
| 인천서구점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1028288848) |

---

## 6) UX 목표 및 디자인 우선순위

### UX Goal

모든 페이지는 **3 Click Rule** 적용

사용자는 3회 이내 클릭으로 원하는 정보를 찾아야 한다.

### UI Goal 우선순위

1. Visual Impact
2. Conversion
3. Usability
4. Accessibility
5. Performance

### Design Goal

방문자가 5초 이내에 이해해야 한다.

1. 회전초밥 전문 브랜드
2. 메뉴가 다양하다
3. 신선하다
4. 가족 외식에 적합하다
5. 가까운 매장이 있다
6. 가맹 모집 중이다
7. 채용 중이다

---

## 7) SEO 및 GEO 전략

### SEO Goal

Google SEO / Naver SEO / Bing SEO 최적화

### GEO Goal

AI 검색 최적화 (ChatGPT / Gemini / Claude / Perplexity)

### 목표 키워드

| 구분 | 키워드 |
|:---|:---|
| Primary | 스시초이스, 회전초밥, 회전초밥 맛집, 프리미엄 회전초밥, 회전초밥 추천 |
| Local | 송내 회전초밥, 송도 회전초밥, 은계 회전초밥, 인천서구 회전초밥 |
| Franchise | 회전초밥 창업, 일식 창업, 외식 창업, 회전초밥 프랜차이즈 |

### 구현 필수 Structured Data

- FAQ Schema
- Restaurant Schema
- Review Schema
- Video Schema
- Organization Schema
- LocalBusiness Schema
- Breadcrumb Schema

---

## 8) 구현 우선순위

### Phase 1 — 브랜드 경험 구축

HOME / BRAND / MENU / STORE

### Phase 2 — 비즈니스 전환 구축

FRANCHISE / CAREERS / CONTACT

### Phase 3 — 검색 최적화 구축

FAQ / REVIEW / SEO / GEO / Schema

### Phase 4 — 고도화

Analytics / Conversion Tracking / A/B Test / Performance Optimization

---

## 9) 의사결정 규칙

### CORE (사용자 확인 필요)

* 브랜드 방향 변경
* 정보구조 변경
* 기술 아키텍처 변경
* SEO 전략 변경
* GEO 전략 변경
* 신규 패키지 도입

### MINOR (자율 진행 가능)

* 컴포넌트 네이밍
* 애니메이션 타이밍
* UI 디테일
* 레이아웃 미세 조정

### 판단 원칙

브랜드 가치 → 사용자 경험 → 전환율 → 기술 구현 순으로 우선 판단한다.

---

## 10) 성공 기준 (측정 가능한 boolean 조건)

| 기준 | 검증 방법 |
|:---|:---|
| Brand Success | 홈페이지 7대 메시지(회전초밥/프리미엄/다양한 메뉴/가족외식/매장/가맹/채용)가 HOME 페이지 스크롤 내에 모두 존재 — `grep` 또는 시각적 확인 |
| Build Success | `npm run build` exits 0 |
| Dev Server | `npm run dev` exits 0 |
| Lighthouse Performance | ≥ 95 |
| Lighthouse SEO | = 100 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | = 100 |
| Responsive | Desktop(1280px+), Tablet(768~1279px), Mobile(~767px) 3단에서 레이아웃 깨짐 없음 |
| SEO Schema | Google Rich Results Test 통과 |
| Pages | 9개 서브 페이지 라우팅 정상 동작 |

---

## Final Mission

SUSHI CHOICE는 단순한 초밥 브랜드가 아니다.

대한민국 최고의 **Premium Rotary Sushi Experience Brand** 를 구축한다.

모든 디자인, 개발, 콘텐츠, SEO, GEO, 전환 전략은 이 목표를 중심으로 실행한다.
