// Franchise Page Component for SUSHI CHOICE

import franchiseBg from '../assets/images/franchise/franchise-bg.jpg';

export async function renderFranchise() {
  setTimeout(() => {
    initFranchiseInteractivity();
  }, 100);

  return `
    <main class="page-franchise">
      <!-- Franchise Hero -->
      <section class="franchise-hero" style="background-image: linear-gradient(rgba(11, 11, 11, 0.75), rgba(11, 11, 11, 0.75)), url(${franchiseBg});">
        <div class="franchise-hero__content container reveal">
          <span class="franchise-hero__label text-en">SUSHI CHOICE PARTNERS</span>
          <h1 class="franchise-hero__title">성공하는 회전초밥 브랜드,<br/>함께 성장할 가맹점주를 모십니다.</h1>
          <p class="franchise-hero__desc">검증된 초밀착 점주 관리 시스템과 안정된 주 6회 산지 유통망으로 리스크를 최소화합니다.</p>
          <div class="divider-gold divider-gold--center"></div>
          <a href="#calculator-section" class="btn btn--primary">수익률 계산기 바로가기</a>
        </div>
      </section>

      <!-- Competitive Advantages Section -->
      <section class="section section--dark">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">ADVANTAGES</span>
            <h2 class="section-title">왜 스시초이스 창업일까요?</h2>
            <p class="section-subtitle">동종 외식 프랜차이즈 대비 압도적인 마진율과 초보 창업에 어울리는 최적의 자동화 설계를 완비했습니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="advantages-grid reveal">
            <!-- Adv 1 -->
            <div class="adv-card gold-frame">
              <div class="adv-card__icon">💰</div>
              <h3>안정적인 수익 보장</h3>
              <p>마진 타협을 위해 저품질 쌀을 섞지 않으면서도, 대규모 중앙 직구매 유통 협상력을 바탕으로 재료비를 36% 이내로 안정시켜 점주 순수익률 25% 이상을 달성합니다.</p>
            </div>
            <!-- Adv 2 -->
            <div class="adv-card gold-frame">
              <div class="adv-card__icon">🚛</div>
              <h3>주 6회 산지 배송</h3>
              <p>본사 소유 콜드체인 물류망을 가동하여 주 6일 매장 문 앞까지 신선 수산물을 직배송합니다. 재료 폐기율을 1% 미만으로 억제하는 자동 발주 시스템 연동.</p>
            </div>
            <!-- Adv 3 -->
            <div class="adv-card gold-frame">
              <div class="adv-card__icon">👨‍🍳</div>
              <h3>주방 전문 인력 채용 대행</h3>
              <p>점주님이 직접 주방에서 힘든 노동을 하지 않도록, 본사 구인 데이터베이스를 통해 경력 15년 이상의 전문 부장/과장급 일식 셰프 채용을 100% 매칭 및 지원해 드립니다.</p>
            </div>
            <!-- Adv 4 -->
            <div class="adv-card gold-frame">
              <div class="adv-card__icon">🛠</div>
              <h3>소자본 리모델링 지원</h3>
              <p>기존에 요식업을 하시던 점포인 경우, 쓸데없는 강제 인테리어 재시공 요구 없이 컨베이어 레일 안착 및 위생용 설비 교체 위주로 실비 리모델링 창업을 진행합니다.</p>
            </div>
            <!-- Adv 5 -->
            <div class="adv-card gold-frame">
              <div class="adv-card__icon">📊</div>
              <h3>통합 온라인 마케팅 대행</h3>
              <p>본사 내 SEO 전문 마케팅 부서가 직접 네이버 플레이스 순위 최적화, 지점 전용 로컬 블로그 체험단 운영, 인스타그램 광고 대행을 무료로 통합 지원합니다.</p>
            </div>
            <!-- Adv 6 -->
            <div class="adv-card gold-frame">
              <div class="adv-card__icon">🎓</div>
              <h3>본사 아카데미 밀착 교육</h3>
              <p>외식업 경험이 전혀 없는 왕초보 점주님이라도 경영, 인사, 세무, 서비스 관리를 능숙하게 수행하여 매니저를 통한 오토 매장을 완성할 수 있게 점주 밀착 교육을 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Franchise Process Section -->
      <section class="section section--warm">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">PROCESS</span>
            <h2 class="section-title">가맹 개설 프로세스</h2>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="process-timeline reveal">
            <div class="process-step">
              <span class="process-step__num">01</span>
              <h4>가맹 상담 신청</h4>
              <p>온라인 폼 접수 후 24시간 이내에 본사 전담 창업 컨설턴트 유선 배정 및 1차 면담</p>
            </div>
            <div class="process-step">
              <span class="process-step__num">02</span>
              <h4>상권 분석 및 점포 개발</h4>
              <p>예상 매출 검증을 위한 빅데이터 기반 유동 인구 분석 및 최적의 입지 추천</p>
            </div>
            <div class="process-step">
              <span class="process-step__num">03</span>
              <h4>가맹 계약 체결</h4>
              <p>공정거래위원회 정보공개서 전달 및 최종 사업 가맹 계약 체결</p>
            </div>
            <div class="process-step">
              <span class="process-step__num">04</span>
              <h4>인테리어 및 인력 매칭</h4>
              <p>전용 황금빛 컨베이어 레일 설계 착수 및 본사의 주방 셰프 인력 채용/선발</p>
            </div>
            <div class="process-step">
              <span class="process-step__num">05</span>
              <h4>가맹점주 교육 및 리허설</h4>
              <p>본사 아카데미 2주 교육 수료 후 오픈 3일 전 가오픈 리허설을 통한 위생/조리 점검</p>
            </div>
            <div class="process-step">
              <span class="process-step__num">06</span>
              <h4>그랜드 오프닝</h4>
              <p>본사 슈퍼바이저 파견 및 현지 로컬 SEO/블로그 마케팅 즉각 실행</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Revenue Calculator Section -->
      <section class="section section--dark" id="calculator-section">
        <div class="container container--narrow">
          <div class="section-header text-center reveal">
            <span class="section-label">REVENUE CALCULATOR</span>
            <h2 class="section-title">예상 모의 수익 계산기</h2>
            <p class="section-subtitle">하루 평균 테이블 회전수와 테이블당 객단가를 선택하여 월 예상 수익을 즉시 조회해보세요.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="calculator reveal gold-frame">
            <!-- Inputs -->
            <div class="calculator__inputs">
              <div class="calc-group">
                <label for="calc-tables">하루 평균 방문 테이블 수: <span id="tables-val" class="text-gold">60</span> 테이블</label>
                <input type="range" id="calc-tables" min="30" max="150" step="5" value="60" />
                <div class="calc-range-labels">
                  <span>30 (소형)</span>
                  <span>90 (중형)</span>
                  <span>150 (대형)</span>
                </div>
              </div>

              <div class="calc-group">
                <label for="calc-spend">테이블당 평균 객단가: <span id="spend-val" class="text-gold">45,000</span>원</label>
                <select id="calc-spend">
                  <option value="35000">35,000원 (합리적 미식가 중심)</option>
                  <option value="45000" selected>45,000원 (표준 가족 외식 중심)</option>
                  <option value="55000">55,000원 (프리미엄 블랙라벨 중심)</option>
                  <option value="70000">70,000원 (최고급 와인/사케 주류 결합)</option>
                </select>
              </div>
            </div>

            <!-- Results Display -->
            <div class="calculator__results">
              <div class="calc-result-row">
                <span>월 예상 총 매출액</span>
                <strong id="res-sales" class="text-white">81,000,000원</strong>
              </div>
              <div class="divider-gold"></div>
              
              <div class="calc-detail-costs">
                <div class="cost-row">
                  <span>식자재비 (36%)</span>
                  <span id="res-cost-food">29,160,000원</span>
                </div>
                <div class="cost-row">
                  <span>인건비 (22% - 주방 및 홀)</span>
                  <span id="res-cost-labor">17,820,000원</span>
                </div>
                <div class="cost-row">
                  <span>임차료 및 관리비 (10%)</span>
                  <span id="res-cost-rent">8,100,000원</span>
                </div>
                <div class="cost-row">
                  <span>프랜차이즈 로열티 (3%)</span>
                  <span id="res-cost-royalty">2,430,000원</span>
                </div>
              </div>
              
              <div class="divider-gold" style="margin: var(--space-sm) 0;"></div>
              
              <div class="calc-result-row calc-result-row--net">
                <span>월 예상 순수익 (마진율 <span id="res-margin" class="text-gold">29%</span>)</span>
                <strong id="res-net-profit" class="text-gold">23,490,000원</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Inquiry Submission Form -->
      <section class="section section--warm">
        <div class="container container--narrow">
          <div class="section-header text-center reveal">
            <span class="section-label">PARTNERSHIP INQUIRY</span>
            <h2 class="section-title">가맹 창업 상담 신청</h2>
            <p class="section-subtitle">문의사항을 성실하게 작성해주시면, 전담 지점 창업 설계사가 개설 희망 지역의 상권 검토서 초안을 준비하여 연락드리겠습니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <form class="franchise-inquiry-form reveal gold-frame" id="franchise-form">
            <div class="form-row">
              <div class="form-group">
                <label for="fran-name">신청자 성함 *</label>
                <input type="text" id="fran-name" required placeholder="성함을 입력하세요" />
              </div>
              <div class="form-group">
                <label for="fran-tel">연락처 *</label>
                <input type="tel" id="fran-tel" required placeholder="010-0000-0000" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="fran-area">창업 희망 지역 *</label>
                <input type="text" id="fran-area" required placeholder="예: 경기도 부천시 상동, 인천 송도 등" />
              </div>
              <div class="form-group">
                <label for="fran-budget">예상 창업 예산 *</label>
                <select id="fran-budget" required>
                  <option value="">선택하세요</option>
                  <option value="under-1">1억 원 미만 (리모델링형)</option>
                  <option value="1-1.5">1억 원 ~ 1억 5천만 원</option>
                  <option value="1.5-2">1억 5천만 원 ~ 2억 원</option>
                  <option value="over-2">2억 원 이상 (대형 매장 신규)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="fran-msg">상세 문의 내용</label>
              <textarea id="fran-msg" rows="4" placeholder="창업 경험 여부 또는 보유 중이신 상가 점포 평수 등 추가적인 상황을 적어주시면 상세 상담에 매우 큰 도움이 됩니다."></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--large" style="width: 100%; justify-content: center; margin-top: var(--space-md);">가맹 창업 신청 상담 접수</button>
          </form>
        </div>
      </section>
    </main>
  `;
}

function initFranchiseInteractivity() {
  const tableInput = document.querySelector('#calc-tables');
  const spendInput = document.querySelector('#calc-spend');

  const tablesVal = document.querySelector('#tables-val');
  const spendVal = document.querySelector('#spend-val');

  const resSales = document.querySelector('#res-sales');
  const resFood = document.querySelector('#res-cost-food');
  const resLabor = document.querySelector('#res-cost-labor');
  const resRent = document.querySelector('#res-cost-rent');
  const resRoyalty = document.querySelector('#res-cost-royalty');
  const resNetProfit = document.querySelector('#res-net-profit');
  const resMargin = document.querySelector('#res-margin');

  function calculate() {
    const dailyTables = parseInt(tableInput.value);
    const avgSpend = parseInt(spendInput.value);

    // Update labels
    tablesVal.textContent = dailyTables;
    spendVal.textContent = avgSpend.toLocaleString();

    // Computing Monthly Revenue (30 days)
    const monthlySales = dailyTables * avgSpend * 30;

    // Costs calculations
    const costFood = Math.floor(monthlySales * 0.36);
    const costLabor = Math.floor(monthlySales * 0.22);
    const costRent = Math.floor(monthlySales * 0.10);
    const costRoyalty = Math.floor(monthlySales * 0.03);
    const netProfit = monthlySales - costFood - costLabor - costRent - costRoyalty;
    
    const marginPercent = Math.round((netProfit / monthlySales) * 100);

    // Write to DOM
    resSales.textContent = `${monthlySales.toLocaleString()}원`;
    resFood.textContent = `${costFood.toLocaleString()}원`;
    resLabor.textContent = `${costLabor.toLocaleString()}원`;
    resRent.textContent = `${costRent.toLocaleString()}원`;
    resRoyalty.textContent = `${costRoyalty.toLocaleString()}원`;
    resNetProfit.textContent = `${netProfit.toLocaleString()}원`;
    resMargin.textContent = `${marginPercent}%`;
  }

  if (tableInput && spendInput) {
    tableInput.addEventListener('input', calculate);
    spendInput.addEventListener('change', calculate);
    calculate(); // Trigger initially
  }

  // Inquiry form submit
  const form = document.querySelector('#franchise-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.querySelector('#fran-name').value;
      const tel = document.querySelector('#fran-tel').value;
      const area = document.querySelector('#fran-area').value;
      
      alert(`[가맹 상담 접수 완료]\n\n신청자: ${name}님\n연락처: ${tel}\n희망 지역: ${area}\n\n입력하신 정보가 본사 개발 본부로 즉시 전달되었습니다. 상권 검토 초안 분석 후 영업일 기준 24시간 이내에 개별 연락드리겠습니다.`);
      form.reset();
    });
  }
}
