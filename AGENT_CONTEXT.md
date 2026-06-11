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

### ✅ Phase 0: 기획 — 완료

| 완료 항목 | 파일 |
|:---|:---|
| 프로젝트 전체 기획서 | `Docs/project.md` |
| 홈페이지 상세 기획서 (V3×V4 하이브리드, 10개 섹션) | `Docs/implementation_plan.md` |
| 워크플로우 (7 Phase 정의) | `Docs/workflow.md` |
| 목표 정의 (/goal 구조, 종료 조건 포함) | `Docs/Goal-Definition.md` |
| 셰프 철학 원문 | `Docs/Chef-Philosophy.md` |
| Git/Notion 계정 가이드 | `Docs/Git-Notion-Account-Guide.md` |
| 의사결정 로그 | `Docs/DECISION_LOG.md` |

### ✅ Phase 1: 프로젝트 초기화 — 부분 완료 (약 60%)

| 완료 항목 | 파일 |
|:---|:---|
| Vite 프로젝트 초기화 | `package.json` (Vite 8.x) |
| 디자인 토큰 정의 | `src/styles/tokens.css` (122줄, 컬러/타이포/스페이싱/그림자/트랜지션/z-index) |
| 글로벌 스타일 구현 | `src/styles/global.css` (396줄, 리셋/유틸리티/버튼/리빌/골드프레임) |
| 파비콘 | `public/favicon.svg` |
| goal-setting 스킬 설치 | `.cursor/skills/goal-setting/SKILL.md` |

### ❌ Phase 1: 미완료 항목 (다음에 할 일)

| 미완료 항목 | 상태 | 설명 |
|:---|:---|:---|
| `index.html` | ❌ 보일러플레이트 | lang="en" → "ko", SEO 메타태그 없음, 타이틀 미설정 |
| `src/main.js` | ❌ 보일러플레이트 | Vite 기본 카운터 코드 그대로, `global.css` 미연결 |
| `src/style.css` | ❌ 보일러플레이트 | Vite 기본 테마, 삭제 또는 교체 필요 |
| `src/counter.js` | ❌ 삭제 대상 | Vite 기본 파일 |
| `src/assets/` | ❌ 기본 에셋 | hero.png, javascript.svg, vite.svg → 삭제 필요 |
| 디렉토리 구조 | ❌ 미생성 | `src/pages/`, `src/components/`, `src/data/`, `src/utils/` |
| 라우팅 구조 | ❌ 미결정 | SPA vs MPA vs SPA+Prerender (사용자 결정 필요) |
| Git 초기 커밋 | ❌ 미수행 | master 브랜치에 커밋 0건 |

### ❌ Phase 2~7: 전혀 미착수

---

## 3. 다음 작업 (NEXT ACTION)

```
Phase 1 마무리 → Phase 2 공통 컴포넌트 → Phase 3 HOME 페이지 10개 섹션
```

### 즉시 실행 가능한 작업 (Phase 1 마무리):

1. `index.html` — `lang="ko"`, SEO 메타태그, 폰트 프리로드 추가
2. `src/main.js` — 보일러플레이트 제거, `global.css` import, 앱 초기화
3. `src/style.css` — 삭제 또는 프로젝트 스타일로 교체
4. `src/counter.js` — 삭제
5. `src/assets/` — Vite 기본 이미지 삭제
6. 디렉토리 생성: `src/pages/`, `src/components/`, `src/data/`, `src/utils/`
7. Git 초기 커밋

### 사용자 확인이 필요한 미결 사항:

1. **라우팅 구조**: SPA(Hash 라우터) vs MPA(Vite MPA) vs SPA+Prerender?
2. **implementation_plan.md 미결 5개 항목** (593~606행):
   - Section 06(Chef's Craft) 위치: 현재(섹션05 뒤) vs 섹션03 직후?
   - Rotary Experience 인터랙션: 가로 스크롤 패럴랙스 vs 세로 스크롤 트리거?
   - 고객 리뷰: 실제 임베드 vs 카드 재구성?
   - Brand 페이지: 추가 요소 필요?
   - 실제 매장 메뉴 데이터 공유 가능?

---

## 4. 핵심 참조 파일 맵

```
e:\0000_Sushichoice_Brand_v1.0\
│
├── AGENT_CONTEXT.md              ← 🤖 이 파일 (현재 상태 + 다음 작업)
│
├── Docs/
│   ├── project.md                ← 📋 프로젝트 전체 기획서 (Single Source of Truth)
│   ├── implementation_plan.md    ← 📐 홈페이지 상세 기획 (10개 섹션 카피/인터랙션/비주얼)
│   ├── workflow.md               ← 🔄 7 Phase 워크플로우 정의
│   ├── Goal-Definition.md        ← 🎯 /goal 구조 (4섹션 + 종료조건 + 제약)
│   ├── Chef-Philosophy.md        ← 🍣 셰프 철학 원문
│   ├── DECISION_LOG.md           ← 📝 의사결정 기록 (CORE: 0, MINOR: 1)
│   └── Git-Notion-Account-Guide.md
│
├── src/
│   ├── styles/
│   │   ├── tokens.css            ← 🎨 디자인 토큰 (컬러/타이포/간격/그림자)
│   │   └── global.css            ← 🌐 글로벌 스타일 (리셋/유틸리티/버튼)
│   ├── main.js                   ← ⚠️ Vite 보일러플레이트 (교체 필요)
│   ├── style.css                 ← ⚠️ Vite 보일러플레이트 (삭제 필요)
│   └── counter.js                ← ⚠️ Vite 보일러플레이트 (삭제 필요)
│
├── .cursor/skills/goal-setting/
│   └── SKILL.md                  ← 🛠 goal-setting 스킬
│
├── package.json                  ← Vite 8.x, npm scripts: dev/build/preview
└── index.html                    ← ⚠️ 보일러플레이트 (수정 필요)
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

1. 작업 시작 전 **이 파일을 먼저 읽고** 현재 Phase와 다음 작업을 확인한다.
2. 모든 스타일은 `src/styles/tokens.css`의 CSS 변수를 사용한다 (하드코딩 금지).
3. CORE 의사결정은 `Docs/DECISION_LOG.md`에 기록하고 사용자 확인을 받는다.
4. `Docs/` 내 기획서는 사용자 승인 없이 수정하지 않는다.
5. 섹션 단위 점진적 구현 — 한 번에 전체 페이지를 만들지 않는다.
6. 각 작업 완료 후 이 파일의 **"2. 현재 진행 상태"**를 업데이트한다.
7. 상세 기획은 `Docs/implementation_plan.md`를 참조한다.

---

## 8. 새 세션 시작 시 Quick Start

```
1. 이 파일(AGENT_CONTEXT.md) 읽기
2. "3. 다음 작업" 확인
3. 사용자에게 미결 사항 확인 (필요 시)
4. 해당 Phase 작업 시작
5. 완료 후 이 파일 업데이트 + Git 커밋
```
