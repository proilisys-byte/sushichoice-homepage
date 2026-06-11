# setup_git_account.ps1
# 로컬 Git 계정 정보를 쉽고 올바르게 설정하기 위한 스크립트

Write-Host "==============================================" -ForegroundColor Goldenrod
Write-Host "  SUSHI CHOICE — Git Local Account Setup Helper" -ForegroundColor Goldenrod
Write-Host "==============================================" -ForegroundColor Goldenrod
Write-Host ""

# Git 리포지토리 확인
if (!(Test-Path .git)) {
    Write-Error "현재 디렉토리에 .git 폴더가 존재하지 않습니다. Git 리포지토리 루트에서 실행해 주세요."
    Exit
}

# 현재 로컬 설정 가져오기
$currentName = git config --local user.name
$currentEmail = git config --local user.email

Write-Host "현재 설정된 로컬 Git 정보:" -ForegroundColor Cyan
Write-Host " - 이름  : $currentName"
Write-Host " - 이메일: $currentEmail"
Write-Host ""

# 새로운 이름 입력 받기
$newName = Read-Host "새로운 Git 사용자 이름 입력 (Enter 누르면 기존 유지: '$currentName')"
if ([string]::IsNullOrEmpty($newName)) {
    $newName = $currentName
}

# 새로운 이메일 입력 받기
$newEmail = Read-Host "새로운 Git 이메일 주소 입력 (Enter 누르면 기존 유지: '$currentEmail')"
if ([string]::IsNullOrEmpty($newEmail)) {
    $newEmail = $currentEmail
}

# Git 로컬 계정 업데이트
git config --local user.name "$newName"
git config --local user.email "$newEmail"

Write-Host ""
Write-Host "성공적으로 로컬 설정을 업데이트했습니다!" -ForegroundColor Green
Write-Host "업데이트된 설정 정보:" -ForegroundColor Cyan
Write-Host " - 이름  : $(git config --local user.name)"
Write-Host " - 이메일: $(git config --local user.email)"
Write-Host ""
Write-Host "이제 본 리포지토리에서 발생하는 모든 커밋은 이 계정 정보로 기록됩니다." -ForegroundColor White
Write-Host "Windows 자격 증명 관련 상세 가이드는 Docs/Git-Notion-Account-Guide.md를 참조하세요." -ForegroundColor Gray
Write-Host "==============================================" -ForegroundColor Goldenrod
