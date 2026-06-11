# 계정 변경 및 연동 관리 가이드 (Git & Notion & AI Agent)

본 문서는 Windows 개발 환경에서 **Git 계정**, **Notion CLI 계정**이 변경되거나 **AI 에이전트(모델/계정) 세션이 전환**될 때, 작업 연결이 끊기지 않고 원활히 진행될 수 있도록 하는 가이드라인 및 조치 사항을 정의합니다.

---

## 1. Git 계정 변경 및 로컬 연동 관리

개발 중 GitHub/GitLab 등 원격 저장소의 계정을 전환할 때 발생할 수 있는 인증 에러 및 커밋 작성자 불일치 문제를 해결하기 위한 방법입니다.

### A. 리포지토리 로컬(Local) 사용자 설정
글로벌(Global) Git 계정 설정과 별개로, 본 프로젝트 저장소에만 특정 Git 계정을 적용합니다.
이 설정을 통해 다른 계정으로 커밋이 작성되어 잔디(Contribution)가 누락되는 현상을 방지합니다.

```powershell
# 현재 리포지토리에 사용할 이름과 이메일 설정 (로컬 범위)
git config --local user.name "Your GitHub Name"
git config --local user.email "your-email@example.com"

# 설정 확인
git config --local --list
```

### B. Windows 자격 증명 관리자(Windows Credential Manager) 초기화
HTTPS 방식으로 Git을 연동할 때, Windows 자격 증명에 이전 계정이 저장되어 있어 `Permission to user denied` 오류가 발생할 수 있습니다.

1. **시작 메뉴**에서 `자격 증명 관리자 (Credential Manager)` 검색 및 실행
2. **Windows 자격 증명** 선택
3. **일반 자격 증명** 목록에서 `git:https://github.com` 관련 항목을 찾아 **제거**
4. 다음 `git push` 또는 `git fetch` 시점에 브라우저 인증 창이 뜨며 새로운 GitHub 계정으로 로그인 가능

### C. SSH 키를 활용한 다중 계정 분리 (권장)
동일한 PC에서 개인 계정과 회사 계정을 모두 사용할 때 가장 안전한 방법입니다.

1. 계정별로 별도의 SSH 키를 생성합니다:
   ```powershell
   # 개인 계정용 SSH 키 생성
   ssh-keygen -t ed25519 -C "personal@email.com" -f "$HOME/.ssh/id_ed25519_personal"
   # 회사/기타 계정용 SSH 키 생성
   ssh-keygen -t ed25519 -C "work@email.com" -f "$HOME/.ssh/id_ed25519_work"
   ```
2. `$HOME/.ssh/config` 파일을 생성하거나 수정하여 호스트 별칭을 설정합니다:
   ```text
   # 개인 GitHub 계정
   Host github.com-personal
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_ed25519_personal

   # 작업용 GitHub 계정
   Host github.com-work
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_ed25519_work
   ```
3. 원격 저장소를 등록할 때 호스트 별칭을 사용합니다:
   ```powershell
   # 개인 계정용으로 연결할 때
   git remote add origin git@github.com-personal:username/repository.git
   ```

---

## 2. Notion CLI (ntn) 계정 및 워크스페이스 전환

본 프로젝트는 Notion CLI (`ntn`)와 연계할 수 있는 인프라가 준비되어 있습니다. Notion 계정이나 워크스페이스가 변경되었을 때 조치하는 방법입니다.

### A. 현재 상태 및 토큰 진단
```powershell
ntn doctor
```
* **Token valid** 와 **Default workspace** 항목이 현재 사용하고자 하는 계정 정보와 일치하는지 확인합니다.

### B. 로그아웃 및 재로그인 (계정 전환)
```powershell
# 기존 세션 로그아웃
ntn logout

# 새 계정으로 로그인 (인증 토큰 발급 프로세스 진행)
ntn login
```

### C. 환경 변수를 통한 즉각적인 토큰/워크스페이스 재정의
프로젝트의 `.env` 파일 또는 시스템 환경 변수를 설정하여, CLI 로그인을 유지한 채 임시로 다른 계정/워크스페이스를 바라보게 할 수 있습니다.

* **Windows PowerShell**:
  ```powershell
  $env:NOTION_API_TOKEN="your_notion_api_token_here"
  $env:NOTION_WORKSPACE_ID="your_target_workspace_id_here"
  ```
* **Windows CMD**:
  ```cmd
  set NOTION_API_TOKEN=your_notion_api_token_here
  set NOTION_WORKSPACE_ID=your_target_workspace_id_here
  ```

---

## 3. AI 에이전트(Antigravity) 세션 및 모델 변경 시 작업 연결

작업 중 AI 모델이 변경되거나(Gemini 3.5 Flash 등으로 전환), 새로운 컨텍스트 창이 생성될 때 **작업 상태의 연속성**을 보장하기 위해 에이전트는 다음과 같이 행동합니다.

### A. 작업 현황 실시간 동기화 (`task.md`)
* 모든 개발 단계는 [task.md](file:///C:/Users/eunsi/.gemini/antigravity-ide/brain/26ae74ba-1493-4298-8de1-be5025800d47/task.md) 파일에 세부 체크리스트로 관리됩니다.
* 작업이 완료되거나 진행 중일 때 수시로 해당 파일의 상태(`[x]`, `[/]`, `[ ]`)를 갱신하여, 어떤 에이전트가 오더라도 즉시 이어서 개발할 수 있습니다.

### B. 기획 및 설계 준수 (`implementation_plan.md`)
* 전체 아키텍처와 세부 요구사항은 [implementation_plan.md](file:///e:/0000_Sushichoice_Brand_v1.0/Docs/implementation_plan.md)에 상세히 문서화되어 있습니다.
* 세션이 초기화되더라도 이 계획서에 정의된 컴포넌트, 색상 토큰, 모션 규칙을 바탕으로 일관된 코딩 스타일을 유지합니다.

### C. 이력 기록 (`walkthrough.md`)
* 큰 작업이 끝날 때마다 [walkthrough.md](file:///C:/Users/eunsi/.gemini/antigravity-ide/brain/26ae74ba-1493-4298-8de1-be5025800d47/walkthrough.md)에 변경 이력과 현재 구현 상태를 요약해 둡니다.

---

## 4. 로컬 Git 계정 빠른 설정을 위한 스크립트

아래 제공된 `setup_git_account.ps1` 스크립트를 실행하면 현재 리포지토리의 로컬 Git 계정을 신속하게 변경할 수 있습니다.
