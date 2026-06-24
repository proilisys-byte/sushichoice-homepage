// General Contact Page Component for SUSHI CHOICE

export async function renderContact() {
  setTimeout(() => {
    initContactInteractivity();
  }, 100);

  return `
    <main class="page-contact">
      <section class="section section--dark" style="padding-top: calc(var(--header-height) + var(--space-3xl)); min-height: 85vh;">
        <div class="container container--narrow">
          <!-- Page Header -->
          <div class="section-header text-center reveal">
            <span class="section-label">CONTACT US</span>
            <h1 class="section-title">문의 접수 센터</h1>
            <p class="section-subtitle">서비스 제안, 고객 칭찬/불만 접수, 입점 제휴 등 소중한 의견을 남겨주시면 정성껏 검토 후 피드백 드리겠습니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Contact Form -->
          <form class="contact-form reveal gold-frame" id="general-contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-name">고객/기업명 *</label>
                <input type="text" id="contact-name" required placeholder="이름 또는 회사명을 입력하세요" />
              </div>
              <div class="form-group">
                <label for="contact-tel">연락처 *</label>
                <input type="tel" id="contact-tel" required placeholder="010-0000-0000" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="contact-email">이메일 주소 *</label>
                <input type="email" id="contact-email" required placeholder="example@email.com" />
              </div>
              <div class="form-group">
                <label for="contact-type">문의 분류 *</label>
                <select id="contact-type" required>
                  <option value="">선택하세요</option>
                  <option value="고객 칭찬 및 건의">고객 소리함 (칭찬 및 매장 개선 건의)</option>
                  <option value="가맹 창업 상담">가맹 창업 신규 개설 문의</option>
                  <option value="채용 관련 문의">인재 채용 및 구직 문의</option>
                  <option value="마케팅 및 사업 제휴">식자재 납품 / 마케팅 / 입점 제휴 문의</option>
                </select>
              </div>
            </div>

            <div class="form-group" id="contact-store-group" style="display: none;">
              <label for="contact-store">관련 지점 선택</label>
              <select id="contact-store">
                <option value="선택 안 함">지점 선택 안 함 (공통)</option>
                <option value="송내본점">송내본점 (부천)</option>
                <option value="시흥은계점">시흥은계점 (시흥)</option>
                <option value="송도점">송도점 (인천 연수구)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contact-msg">상세 문의 내용 *</label>
              <textarea id="contact-msg" required rows="6" placeholder="상세한 문의 사항을 입력해주세요. 제휴 제안서 파일 등은 contact@sushichoice.co.kr 메일로 직접 전달해주시면 더욱 신속하게 처리 가능합니다."></textarea>
            </div>

            <!-- Privacy Policy Checkbox -->
            <div class="form-checkbox">
              <input type="checkbox" id="contact-agree" required />
              <label for="contact-agree">개인정보 수집 및 이용약관 동의 (필수) *</label>
              <a href="#" class="privacy-detail-link" id="privacy-trigger">[전문보기]</a>
            </div>

            <button type="submit" class="btn btn--primary btn--large" style="width: 100%; justify-content: center; margin-top: var(--space-md);">문의사항 제출하기</button>
          </form>
        </div>
      </section>

      <!-- Privacy Modal -->
      <div class="menu-modal" id="privacy-modal">
        <div class="menu-modal__backdrop" id="privacy-backdrop"></div>
        <div class="menu-modal__content gold-frame" style="max-width: 500px;">
          <button class="menu-modal__close" id="privacy-close">&times;</button>
          <div class="menu-modal__body" style="padding: var(--space-lg);">
            <h3>개인정보 수집 및 이용동의</h3>
            <div class="divider-gold"></div>
            <div style="font-size: 13px; color: var(--color-text-muted); line-height: 1.6; max-height: 250px; overflow-y: auto;">
              <p>주식회사 스시초이스는 고객 문의 접수 및 원활한 상담 처리를 위해 아래와 같이 개인정보를 수집 및 이용합니다.</p><br/>
              <strong>1. 수집하는 개인정보 항목</strong><br/>
              - 필수항목: 이름/기업명, 연락처, 이메일 주소, 문의 유형, 문의 내용<br/><br/>
              <strong>2. 수집 및 이용목적</strong><br/>
              - 고객 식사 불편/칭찬 접수 피드백, 가맹점 상담 및 점포 조건 검토, 채용 안내 심사 연락, 제휴 제안 타당성 검토 연락망 구축<br/><br/>
              <strong>3. 보유 및 이용기간</strong><br/>
              - 개인정보 수집 및 이용목적이 달성된 후(상담 종결 시) 또는 이용자의 동의 철회 시 지체 없이 파기합니다. (최대 1년 보관)<br/><br/>
              <strong>4. 동의 거부 권리</strong><br/>
              - 귀하는 개인정보 수집 및 이용에 동의하지 않을 권리가 있으나, 동의하지 않으시는 경우 본 온라인 접수 시스템의 이용 및 상담에 제한이 발생합니다.
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}

function initContactInteractivity() {
  const form = document.querySelector('#general-contact-form');
  const typeSelect = document.querySelector('#contact-type');
  const storeGroup = document.querySelector('#contact-store-group');

  // Toggle store selector display based on inquiry type selection
  if (typeSelect && storeGroup) {
    typeSelect.addEventListener('change', () => {
      const val = typeSelect.value;
      if (val === '고객 칭찬 및 건의' || val === '채용 관련 문의') {
        storeGroup.style.display = 'block';
      } else {
        storeGroup.style.display = 'none';
      }
    });
  }

  // Handle Privacy Policy Modal Toggles
  const privacyModal = document.querySelector('#privacy-modal');
  const privacyTrigger = document.querySelector('#privacy-trigger');
  const privacyClose = document.querySelector('#privacy-close');
  const privacyBackdrop = document.querySelector('#privacy-backdrop');

  if (privacyTrigger && privacyModal) {
    privacyTrigger.addEventListener('click', e => {
      e.preventDefault();
      privacyModal.classList.add('is-open');
    });

    const closePrivacy = () => privacyModal.classList.remove('is-open');
    privacyClose.addEventListener('click', closePrivacy);
    privacyBackdrop.addEventListener('click', closePrivacy);
  }

  // Handle submission
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.querySelector('#contact-name').value;
      const type = document.querySelector('#contact-type').value;

      alert(`[문의 접수 완료]\n\n신청자/회사명: ${name}님\n문의분야: ${type}\n\n고객 제휴 문의가 안전하게 접수되었습니다. 기재해주신 연락처 및 이메일 주소로 영업일 기준 48시간 이내에 세부 답변을 드리겠습니다.`);
      form.reset();
      if (storeGroup) storeGroup.style.display = 'none';
    });
  }
}
