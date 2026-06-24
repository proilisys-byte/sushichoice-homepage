// Careers Page Component for SUSHI CHOICE

import careersBg from '../assets/images/careers/careers-bg.jpg';

export async function renderCareers() {
  setTimeout(() => {
    initCareersInteractivity();
  }, 100);

  return `
    <main class="page-careers">
      <!-- Careers Hero -->
      <section class="careers-hero" style="background-image: linear-gradient(rgba(11, 11, 11, 0.75), rgba(11, 11, 11, 0.75)), url(${careersBg});">
        <div class="careers-hero__content container reveal">
          <span class="careers-hero__label text-en">JOIN THE TEAM</span>
          <h1 class="careers-hero__title">좋은 회전초밥은<br/>좋은 사람으로부터 시작됩니다.</h1>
          <p class="careers-hero__desc">장인의 신념을 공유하고 고객과 따뜻한 소통을 이어갈 스시초이스의 주역을 모집합니다.</p>
          <div class="divider-gold divider-gold--center"></div>
          <a href="#jobs-section" id="jobs-cta" class="btn btn--primary">진행 중인 채용공고 보기</a>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="section section--dark">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">BENEFITS</span>
            <h2 class="section-title">스시초이스 크루 복지 혜택</h2>
            <p class="section-subtitle">구성원이 행복해야 고객에게 따뜻한 정성을 다할 수 있다고 굳게 믿습니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="benefits-grid reveal">
            <div class="benefit-card gold-frame">
              <div class="benefit-card__icon">💰</div>
              <h3>업계 최고 수준 급여 보장</h3>
              <p>기본급 외에 매월 매장 실적 달성률에 따른 투명한 인센티브 보너스를 실무자 전원에게 현금으로 정산하여 지급합니다.</p>
            </div>
            <div class="benefit-card gold-frame">
              <div class="benefit-card__icon">🍣</div>
              <h3>프리미엄 셰프 식사 제공</h3>
              <p>근무일마다 영양가 높은 특제 셰프 추천 초밥 및 따뜻한 일식을 풍부하게 무료 식사로 지원해 드립니다.</p>
            </div>
            <div class="benefit-card gold-frame">
              <div class="benefit-card__icon">🏖</div>
              <h3>안정적 휴식 및 휴가 보장</h3>
              <p>법정 연차 휴가는 물론, 3년/5년/10년 장기 근속자에게는 유급 휴가 보너스와 금전적 포상금을 함께 제공합니다.</p>
            </div>
            <div class="benefit-card gold-frame">
              <div class="benefit-card__icon">🚀</div>
              <h3>성장 및 지점 개설 지원</h3>
              <p>셰프로서의 기술 강화 교육 과정을 전액 무료로 지원하고, 본인 지점 개설 창업을 희망할 경우 로열티 전면 면제 등 혜택을 줍니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Jobs Section -->
      <section class="section section--warm" id="jobs-section">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">OPEN POSITIONS</span>
            <h2 class="section-title">진행 중인 채용공고</h2>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="jobs-list reveal">
            <!-- Job 1 -->
            <div class="job-card gold-frame">
              <div class="job-card__main">
                <span class="job-card__type text-en">FULL TIME</span>
                <h3>매장 매니저 / 점장 후보</h3>
                <p class="job-card__summary">매장 운영 전반 총괄, 매출 분석, 홀 직원 스케줄 관리 및 고객 응대 서비스 지휘</p>
                <div class="job-card__details">
                  <span>📍 전 지점 채용 진행 문의 바랍니다.</span>
                  <span>📞 담당자: 010-3307-7509</span>
                </div>
              </div>
              <button class="btn btn--secondary apply-trigger-btn" data-position="매장 매니저">지원하기</button>
            </div>

            <!-- Job 2 -->
            <div class="job-card gold-frame">
              <div class="job-card__main">
                <span class="job-card__type text-en">FULL TIME</span>
                <h3>초밥 전문 일식 조리사 (셰프)</h3>
                <p class="job-card__summary">활어 오로시 손질, 초밥 샤리 취사 및 조리, 골든 레일 서빙 및 실시간 주문 조리</p>
                <div class="job-card__details">
                  <span>📍 송내본점 / 송도점</span>
                  <span>📞 담당자: 010-3307-7509</span>
                </div>
              </div>
              <button class="btn btn--secondary apply-trigger-btn" data-position="일식 조리사">지원하기</button>
            </div>

            <!-- Job 3 -->
            <div class="job-card gold-frame">
              <div class="job-card__main">
                <span class="job-card__type text-en">FULL TIME</span>
                <h3>홀 서비스 및 안내 주임</h3>
                <p class="job-card__summary">테이블 부스 안내, 장국 및 밑반찬 세팅, 무인 태블릿 주문 지원 및 매장 청결 관리</p>
                <div class="job-card__details">
                  <span>📍 시흥은계점 / 인천서구점</span>
                  <span>📞 담당자: 010-3307-7509</span>
                </div>
              </div>
              <button class="btn btn--secondary apply-trigger-btn" data-position="홀 서비스 주임">지원하기</button>
            </div>

            <!-- Job 4 -->
            <div class="job-card gold-frame">
              <div class="job-card__main">
                <span class="job-card__type text-en">PART TIME</span>
                <h3>홀 및 주방보조 파트타이머 (알바)</h3>
                <p class="job-card__summary">요일/시간제 선택 가능. 설거지 및 조리 보조, 테이블 정리 및 식기 세척 관리</p>
                <div class="job-card__details">
                  <span>📍 전 지점 상시 모집</span>
                  <span>📞 담당자: 010-3307-7509</span>
                </div>
              </div>
              <button class="btn btn--secondary apply-trigger-btn" data-position="파트타이머">지원하기</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form Section -->
      <section class="section section--dark" id="apply-section">
        <div class="container container--narrow">
          <div class="section-header text-center reveal">
            <span class="section-label">APPLY NOW</span>
            <h2 class="section-title">온라인 입사지원서</h2>
            <p class="section-subtitle">스시초이스와 함께 성장할 열정적인 당신의 지원을 기다립니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <form class="careers-apply-form reveal gold-frame" id="careers-form">
            <div class="form-row">
              <div class="form-group">
                <label for="apply-name">지원자 성함 *</label>
                <input type="text" id="apply-name" required placeholder="성함을 입력하세요" />
              </div>
              <div class="form-group">
                <label for="apply-tel">연락처 *</label>
                <input type="tel" id="apply-tel" required placeholder="010-0000-0000" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="apply-position">지원 분야 *</label>
                <select id="apply-position" required>
                  <option value="">선택하세요</option>
                  <option value="매장 매니저">매장 매니저 / 점장 후보</option>
                  <option value="일식 조리사">초밥 전문 일식 조리사 (셰프)</option>
                  <option value="홀 서비스 주임">홀 서비스 및 안내 주임</option>
                  <option value="파트타이머">홀 및 주방보조 파트타이머</option>
                </select>
              </div>
              <div class="form-group">
                <label for="apply-store">근무 희망 매장 *</label>
                <select id="apply-store" required>
                  <option value="">선택하세요</option>
                  <option value="송내본점">송내본점 (부천 원미구)</option>
                  <option value="시흥은계점">시흥은계점 (시흥 은행동)</option>
                  <option value="송도점">송도점 (인천 연수구)</option>
                  <option value="인천서구점">인천서구점 (인천 서구)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="apply-cv">이력서 및 자기소개서 첨부 *</label>
              <div class="file-upload-wrapper">
                <input type="file" id="apply-cv" required accept=".pdf,.doc,.docx,.jpg,.png" />
                <span class="file-upload-desc">PDF, Word, 이미지 파일 첨부 가능 (최대 10MB)</span>
              </div>
            </div>

            <div class="form-group">
              <label for="apply-intro">한줄 자기소개</label>
              <textarea id="apply-intro" rows="4" placeholder="자신만의 장점 또는 관련 직무 경험이 있다면 간략하게 기술해주세요."></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--large" style="width: 100%; justify-content: center; margin-top: var(--space-md);">입사 지원 서류 접수하기</button>
          </form>
        </div>
      </section>
    </main>
  `;
}

function scrollToSection(section) {
  if (!section) return;

  const headerH =
    parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 80;
  const top = section.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
  window.scrollTo({ top, behavior: 'smooth' });
}

function initCareersInteractivity() {
  const jobsCta = document.querySelector('#jobs-cta');
  const jobsSection = document.querySelector('#jobs-section');
  if (jobsCta && jobsSection) {
    jobsCta.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(jobsSection);
    });
  }

  const triggerBtns = document.querySelectorAll('.apply-trigger-btn');
  const positionSelect = document.querySelector('#apply-position');
  const applySection = document.querySelector('#apply-section');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const position = btn.getAttribute('data-position');
      if (positionSelect) {
        positionSelect.value = position;
      }
      scrollToSection(applySection);
    });
  });

  const form = document.querySelector('#careers-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.querySelector('#apply-name').value;
      const tel = document.querySelector('#apply-tel').value;
      const position = document.querySelector('#apply-position').value;
      const store = document.querySelector('#apply-store').value;

      alert(`[입사지원서 접수 완료]\n\n지원자: ${name}님\n연락처: ${tel}\n지원분야: ${position}\n희망매장: ${store}\n\n서류가 본사 인사 담당자 이메일로 안전하게 발송되었습니다. 영업일 기준 3일 이내에 서류 심사 결과 및 1차 면접 일정을 유선으로 전달해 드리겠습니다.`);
      form.reset();
    });
  }
}
