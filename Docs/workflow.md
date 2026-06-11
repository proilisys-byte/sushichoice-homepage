# SUSHI CHOICE Brand Platform — AI 에이전트 협업 워크플로우

본 워크플로우는 **project.md**를 기반으로 AI 에이전트(Antigravity)와 협업하여 **SUSHI CHOICE 프리미엄 브랜드 웹사이트**를 구축하는 **표준 실행 절차(Standard Execution Process)**를 정의합니다.

---

## 프로젝트 개요

| 항목 | 내용 |
| :-- | :-- |
| **프로젝트명** | SUSHI CHOICE Brand Platform v2.0 |
| **프로젝트 성격** | 프리미엄 회전초밥 브랜드 웹사이트 (프론트엔드 중심) |
| **디자인 철학** | Apple 90% + Ferrari 10% |
| **기술 스택** | HTML / CSS / JavaScript (Vite 기반) |
| **핵심 목표** | 브랜드 경험 / SEO·GEO 최적화 / 가맹·채용 플랫폼 |
| **성능 목표** | Lighthouse Performance 95+ / SEO 100 / Accessibility 95+ / Best Practices 100 |

---

## 1. 워크플로우 단계별 실행 가이드

각 단계는 **'기획(Planning) → 설계(Design) → 구현(Implementation) → 검증(Verification)'** 순환 구조를 따르며, 에이전트에게 명확한 역할과 범위를 부여합니다.

---

### PHASE 1 — 프로젝트 초기화 및 환경 설정

| 항목 | 내용 |
| :-- | :-- |
| **목적** | 프로젝트 구조 생성 및 기술 환경 구축 |
| **에이전트 지시** | "project.md를 기반으로 Vite 프로젝트를 초기화하고, 디자인 시스템(Color, Typography, Layout) 기초를 설정해줘." |

**에이전트 수행 항목:**

- [ ] Vite 프로젝트 초기화 (Vanilla JS)
- [ ] 디렉토리 구조 설계 (pages / components / assets / styles / data)
- [ ] 디자인 토큰 정의 (`styles/tokens.css`)
  - Color: `#0B0B0B` / `#F8F7F4` / `#D4001A` / `#C7A86D`
  - Typography: Pretendard, SUIT (KR) / SF Pro Display, Inter (EN)
- [ ] 글로벌 리셋 및 기본 스타일 (`styles/global.css`)
- [ ] 라우팅 구조 설계 (SPA 라우터 또는 MPA 구조 결정)

**검증 기준:**
- `npm run dev` 정상 실행
- 디자인 토큰이 전 페이지에 일관 적용

---

### PHASE 2 — 공통 컴포넌트 설계 및 구현

| 항목 | 내용 |
| :-- | :-- |
| **목적** | 전 페이지에 재사용되는 공통 UI 구현 |
| **에이전트 지시** | "project.md의 디자인 철학(Apple 90% + Ferrari 10%)을 반영하여 Header, Footer, Navigation 등 공통 컴포넌트를 구현해줘." |

**에이전트 수행 항목:**

- [ ] **Header / Navigation**
  - 로고, 메뉴(Brand / Menu / Store / Franchise / Careers / Review / FAQ / Contact)
  - 모바일 햄버거 메뉴
  - 스크롤 시 배경 변화 (Glassmorphism)
- [ ] **Footer**
  - 브랜드 정보, 매장 링크, SNS, 저작권
- [ ] **공통 UI 요소**
  - CTA 버튼 스타일
  - 섹션 전환 애니메이션 (Scroll Reveal)
  - 반응형 그리드 시스템 (Desktop / Tablet / Mobile)

**검증 기준:**
- 3개 브레이크포인트에서 레이아웃 정상 동작
- 모든 공통 컴포넌트가 디자인 토큰 준수

---

### PHASE 3 — HOME 페이지 구현 (핵심)

| 항목 | 내용 |
| :-- | :-- |
| **목적** | 브랜드 첫인상 — 5초 이내 핵심 메시지 전달 |
| **에이전트 지시** | "project.md의 HOME PAGE 섹션(01~10)을 순서대로 구현해줘. Apple 제품 소개 방식의 대형 이미지 + 스크롤 인터랙션을 적용해." |

**에이전트 수행 항목:**

- [ ] **Section 01 — Hero**
  - Full-screen 비디오 배경 (또는 이미지 슬라이드)
  - Headline: "SUSHI CHOICE — 회전초밥의 새로운 기준"
  - Sub: "Premium Rotary Sushi Experience"
  - CTA: 매장 찾기 / 메뉴 보기 / 가맹 문의
- [ ] **Section 02 — Rotary Experience**
  - 스크롤 인터랙션: 보고 → 고르고 → 주문하고 → 즐긴다
- [ ] **Section 03 — Why Sushi Choice**
  - 5대 차별화 카드: Freshness / Variety / Value / Experience / Family Dining
- [ ] **Section 04 — Today's Top 10**
  - 인기 메뉴 랭킹 (실시간 느낌의 UI)
- [ ] **Section 05 — Signature Menu**
  - Apple 스타일 대형 이미지 프레젠테이션
  - 컬렉션별: Salmon / Tuna / Shrimp / Wagyu / Seasonal
- [ ] **Section 06 — Live Sushi Bar**
  - 셰프 조리 과정 비주얼
- [ ] **Section 07 — Store Preview**
  - 4개 매장 카드 (사진 / 주소 / 영업시간 / 주차 / 길찾기)
- [ ] **Section 08 — Customer Reviews**
  - 리뷰 소스 통합 UI (네이버 / 블로그 / 인스타 / 영상)
- [ ] **Section 09 — Franchise CTA**
  - "함께 성장할 파트너를 찾습니다" + 가맹 상담 신청 버튼
- [ ] **Section 10 — Careers CTA**
  - "좋은 사람으로부터 시작됩니다" + 채용공고 보기 버튼

**검증 기준:**
- 5초 이내 핵심 메시지(회전초밥 / 다양한 메뉴 / 신선함 / 가족외식 / 매장 / 가맹 / 채용) 인지 가능
- 스크롤 인터랙션 부드러운 동작
- 모바일 반응형 완벽 대응

---

### PHASE 4 — 서브 페이지 구현

| 항목 | 내용 |
| :-- | :-- |
| **목적** | project.md에 정의된 전체 페이지 구현 |
| **에이전트 지시** | "각 서브 페이지를 project.md 정의에 따라 구현해줘. 각 페이지별 SEO 메타 태그를 반드시 포함해." |

**에이전트 수행 항목:**

- [ ] **/brand** — 브랜드 소개 (Vision / Mission / Story)
- [ ] **/menu** — 메뉴 페이지
  - 카테고리 필터: 전체 / 연어 / 참치 / 새우 / 와규 / 군함 / 롤 / 사이드 / 음료 / 디저트
  - 메뉴 상세: 사진 / 설명 / 원재료 / 추천메뉴 / 알레르기 정보
- [ ] **/store** — 매장 페이지
  - 지도 기반 Store Locator
  - 매장 상세: 소개 / 주소 / 전화 / 주차 / 좌석수 / 오시는 길 / 사진
- [ ] **/store/songnae, /store/eungye, /store/songdo, /store/incheon**
  - 각 매장별 Local SEO 랜딩 페이지
- [ ] **/franchise** — 가맹 페이지
  - Competitive Advantages (6개 항목)
  - Franchise Process (6단계)
  - Revenue Calculator (예상 수익 계산기)
  - Inquiry Form (이름 / 연락처 / 희망지역 / 예산 / 문의내용)
- [ ] **/careers** — 채용 페이지
  - 정규직 (점장 / 매니저 / 주방 / 홀)
  - 아르바이트 (홀서빙 / 주방보조)
  - Employee Story / Benefits
  - Apply Form (이름 / 연락처 / 지원분야 / 지원매장 / 이력서)
- [ ] **/review** — 리뷰 통합 페이지
  - 필터: 가족외식 / 데이트 / 혼밥 / 아이동반
- [ ] **/faq** — FAQ 허브
  - 100개 이상 Q&A
  - FAQ Schema(JSON-LD) 적용
- [ ] **/contact** — 문의 페이지
  - 카테고리별 폼: 고객 / 가맹 / 채용 / 제휴

**검증 기준:**
- 모든 페이지 라우팅 정상 동작
- 각 페이지별 고유 SEO 메타 태그 적용
- 반응형 레이아웃 3단 검증 (Desktop / Tablet / Mobile)

---

### PHASE 5 — SEO · GEO 최적화

| 항목 | 내용 |
| :-- | :-- |
| **목적** | 검색엔진 + AI 검색 노출 최적화 |
| **에이전트 지시** | "project.md의 SEO/GEO Strategy를 기반으로 Structured Data, 메타 태그, Sitemap, robots.txt를 구현해줘." |

**에이전트 수행 항목:**

- [ ] **Structured Data (JSON-LD)**
  - FAQ Schema
  - Restaurant Schema
  - LocalBusiness Schema
  - Review Schema
  - Breadcrumb Schema
  - Organization Schema
  - Video Schema
- [ ] **SEO 메타 태그 전체 점검**
  - Primary Keywords: 스시초이스, 회전초밥, 회전초밥 맛집, 프리미엄 회전초밥
  - Local SEO: 송내/은계/송도/인천서구 + 회전초밥
  - Franchise SEO: 회전초밥 창업, 일식 창업, 외식 창업
- [ ] **Sitemap.xml 생성**
- [ ] **robots.txt 설정**
- [ ] **Open Graph / Twitter Card 메타 태그**
- [ ] **Canonical URL 설정**

**검증 기준:**
- Google Rich Results Test 통과
- Lighthouse SEO 100점
- 모든 페이지 Structured Data 유효성 검증

---

### PHASE 6 — 성능 최적화 및 품질 검증

| 항목 | 내용 |
| :-- | :-- |
| **목적** | Lighthouse 목표 달성 및 최종 품질 보증 |
| **에이전트 지시** | "Lighthouse 기준 Performance 95+, Accessibility 95+, Best Practices 100을 달성하도록 최적화해줘." |

**에이전트 수행 항목:**

- [ ] **Performance 최적화**
  - 이미지 최적화 (WebP, lazy loading)
  - 폰트 최적화 (preload, font-display: swap)
  - CSS/JS 번들 최소화
  - Critical CSS 인라인
- [ ] **Accessibility 점검**
  - ARIA 라벨
  - 키보드 네비게이션
  - 색상 대비 (WCAG AA)
  - alt 텍스트
- [ ] **크로스 브라우저 테스트**
  - Chrome / Safari / Firefox / Edge
  - iOS Safari / Android Chrome
- [ ] **반응형 최종 점검**
  - 360px ~ 1920px 전 구간 검증

**검증 기준:**
- Lighthouse 4개 항목 모두 목표 달성
- 주요 브라우저 6종에서 정상 동작

---

### PHASE 7 — 배포 및 자산화

| 항목 | 내용 |
| :-- | :-- |
| **목적** | 프로덕션 빌드 및 배포, 프로젝트 문서화 |
| **에이전트 지시** | "프로덕션 빌드 후 배포하고, 프로젝트 전체 문서를 정리해줘." |

**에이전트 수행 항목:**

- [ ] **프로덕션 빌드** (`npm run build`)
- [ ] **배포** (Vercel / Netlify / Firebase Hosting 등)
- [ ] **최종 문서화**
  - README.md (프로젝트 설명, 실행 방법, 구조)
  - 페이지별 구현 명세
  - 디자인 시스템 문서
- [ ] **지식 자산화**
  - 개발 과정 가이드 정리
  - 재사용 가능한 컴포넌트 목록

**검증 기준:**
- 프로덕션 URL 정상 접속
- 모든 페이지/기능 최종 동작 확인

---

## 2. 에이전트 협업 5대 핵심 전략

AI 에이전트의 일관성과 품질을 보장하기 위한 필수 전략입니다.

---

### A. 프로젝트 문서 중심 개발 (Project-Driven Development)

모든 작업은 `project.md`를 **단일 진실 공급원(Single Source of Truth)**으로 삼습니다. 에이전트에게 지시할 때 반드시 project.md의 해당 섹션을 참조하도록 합니다.

> **효과:** 에이전트의 추측이나 환각을 방지하고, 기획 의도와 정확히 일치하는 결과물을 얻습니다.

---

### B. 설계 후 구현 원칙 (Design-First, Code-Later)

복잡한 섹션(Rotary Experience 인터랙션, Store Locator, Revenue Calculator 등)은 바로 코드를 요청하지 않고, **와이어프레임 또는 컴포넌트 구조도**를 먼저 설계한 후 구현합니다.

> **효과:** 시각적 구조를 먼저 합의하여 재작업을 방지하고, 디자인 철학(Apple 90% + Ferrari 10%)의 일관성을 유지합니다.

---

### C. 섹션 단위 점진적 구현 (Section-by-Section Iteration)

한 번에 전체 페이지를 요청하지 않고, **섹션 단위로 구현 → 검증 → 다음 섹션** 순서로 진행합니다.

> **효과:** 각 섹션의 품질을 개별 검증할 수 있어 누적 오류를 방지하고, 피드백 반영이 즉시 가능합니다.

---

### D. 디자인 토큰 일관성 유지 (Design Token Consistency)

모든 색상, 타이포그래피, 간격은 반드시 `tokens.css`에 정의된 변수를 사용합니다. 하드코딩된 값 사용을 금지합니다.

> **효과:** 브랜드 아이덴티티의 일관성을 보장하고, 이후 디자인 수정 시 토큰 변경만으로 전체 적용이 가능합니다.

---

### E. SEO/GEO 통합 검증 (Integrated SEO·GEO Verification)

기능 구현과 동시에 **SEO 메타 태그, Structured Data, 시맨틱 HTML**을 적용합니다. 별도 단계로 미루지 않습니다.

> **효과:** 개발 후반부에 SEO 요소를 추가하는 재작업을 방지하고, Lighthouse SEO 100점 목표를 안정적으로 달성합니다.

---

## 3. 주요 참조 자산

| 파일 | 용도 |
| :-- | :-- |
| `project.md` | 프로젝트 전체 기획서 (Single Source of Truth) |
| `workflow.md` | 본 워크플로우 (실행 절차) |
| `implementation_plan.md` | 에이전트가 생성하는 상세 구현 계획 |
| `task.md` | 에이전트가 관리하는 작업 체크리스트 |
| `walkthrough.md` | 완료 후 에이전트가 작성하는 변경 이력 |

---

## 4. 네이버 지도 매장 참조 링크

| 매장 | 네이버 지도 |
| :-- | :-- |
| 송내본점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1325888474) |
| 은계점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1661169536) |
| 송도점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1807470923) |
| 인천서구점 | [네이버 지도 링크](https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1028288848) |
