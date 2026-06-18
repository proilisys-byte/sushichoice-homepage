// Store Detail (Local SEO Landing Page) Component for SUSHI CHOICE

import { storeData } from '../data/storeData';

export async function renderStoreDetail() {
  const path = window.location.pathname;
  const storeId = path.split('/').pop().toLowerCase();
  const store = storeData.find(s => s.id === storeId);

  if (!store) {
    return `
      <div class="container text-center" style="padding: 150px 0;">
        <h2>지점을 찾을 수 없습니다.</h2>
        <p>요청하신 지점이 존재하지 않거나 이전되었습니다.</p>
        <a href="/store" class="btn btn--primary" data-link style="margin-top: var(--space-md);">전체 매장 보기</a>
      </div>
    `;
  }

  // Setup local reservation form listeners
  setTimeout(() => {
    initLocalFormInteractivity(store.name);
  }, 100);

  // Localized Tagline & SEO Focus Paragraph
  const localizedTaglines = {
    'songnae': '부천 송내역 대표 프리미엄 회전초밥 전문점. 넓은 단독 부스석 완비로 송내 가족 모임과 단체 회식에 가장 어울리는 미식 공간입니다.',
    'eungye': '시흥 은계지구 중심가 랜드마크 스시 다이닝. 키즈 친화 시설과 유아 전용 좌식 패밀리 존 완비로 안심하고 즐기는 은계 회전초밥 맛집.',
    'songdo': '인천 송도 센트럴파크의 수려한 전망과 함께 즐기는 모던 럭셔리 스시 다이닝. 연인과의 시크한 송도 데이트 및 기념일 예약 추천.',
    'incheon': '인천 서구 심곡동, 청라 및 검단지구 초입에 위치하여 접근성이 뛰어나며 신선하고 꽉 찬 네타를 자랑하는 활어 위주 회전초밥 전문점.'
  };

  const tagLine = localizedTaglines[store.id] || store.description;

  return `
    <main class="page-store-detail">
      <!-- Store Hero -->
      <section class="store-detail-hero" style="background-image: linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url(${store.imageExt});">
        <div class="store-detail-hero__content container reveal">
          <span class="store-detail-hero__label text-en">SUSHI CHOICE ${store.id.toUpperCase()}</span>
          <h1 class="store-detail-hero__title">스시초이스 ${store.name}</h1>
          <p class="store-detail-hero__tagline">${tagLine}</p>
          <div class="divider-gold divider-gold--center"></div>
        </div>
      </section>

      <!-- Store Info & Map Split Grid -->
      <section class="section section--dark">
        <div class="container">
          <div class="store-detail-grid">
            <!-- Details List -->
            <div class="store-detail-info reveal">
              <span class="detail-section-label">INFORMATION</span>
              <h2 class="detail-section-title">매장 상세 정보</h2>
              <div class="divider-gold"></div>
              
              <div class="store-detail-rows">
                <div class="detail-row">
                  <div class="detail-row__icon">📍</div>
                  <div class="detail-row__text">
                    <strong>도로명 주소</strong>
                    <span>${store.address}</span>
                    ${store.addressLot ? `<span style="font-size: 0.85em; opacity: 0.7; margin-top: 2px;">(지번) ${store.addressLot}</span>` : ''}
                  </div>
                </div>
                <div class="detail-row">
                  <div class="detail-row__icon">📞</div>
                  <div class="detail-row__text">
                    <strong>전화번호</strong>
                    <span><a href="tel:${store.tel}">${store.tel}</a></span>
                  </div>
                </div>
                <div class="detail-row">
                  <div class="detail-row__icon">⏰</div>
                  <div class="detail-row__text">
                    <strong>영업시간 안내</strong>
                    <span>${store.hours}</span>
                  </div>
                </div>
                <div class="detail-row">
                  <div class="detail-row__icon">🚗</div>
                  <div class="detail-row__text">
                    <strong>주차 시설 정보</strong>
                    <span>${store.parking}</span>
                  </div>
                </div>
                <div class="detail-row">
                  <div class="detail-row__icon">🪑</div>
                  <div class="detail-row__text">
                    <strong>좌석 규모 구성</strong>
                    <span>${store.seats}</span>
                  </div>
                </div>
              </div>

              <div class="store-detail-actions">
                <a href="${store.mapUrl}" target="_blank" class="btn btn--primary">네이버 지도에서 길찾기</a>
              </div>
            </div>

            <!-- Static Map Box -->
            <div class="store-detail-map gold-frame reveal">
              <a href="${store.mapUrl}" target="_blank" title="네이버 지도로 보기">
                <img src="${store.imageMap}" alt="${store.name} 찾아오시는 길 약도" />
                <div class="map-link-overlay">
                  <span>큰 지도로 보기 (네이버 지도 이동)</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Interior Photo Show -->
      <section class="section section--warm">
        <div class="container">
          <div class="store-interior reveal">
            <div class="store-interior__image gold-frame">
              <img src="${store.imageInt}" alt="${store.name} 실내 인테리어" />
            </div>
            <div class="store-interior__text">
              <span class="detail-section-label">INTERIOR AESTHETICS</span>
              <h2>모던과 아늑함의 완벽한 밸런스</h2>
              <p>스시초이스 ${store.name}은 고객님이 식사하시는 동안 시각적 편안함을 극대화할 수 있도록 간접 골드 조명과 모던 다크 우드 톤의 마감재를 조화롭게 배치하였습니다.</p>
              <p>오픈 주방 구조로 셰프들의 청결한 조리 행위를 한눈에 관찰할 수 있으며, 회전 레일 양옆으로 아늑하게 구획된 소파 테이블 부스석은 타인의 시선을 신경 쓰지 않고 소중한 가족들과 담소를 나누며 균일가 미식을 즐길 수 있도록 배려한 설계입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Local Reservation Request Form -->
      <section class="section section--dark">
        <div class="container container--narrow">
          <div class="section-header text-center reveal">
            <span class="section-label">RESERVATION INQUIRY</span>
            <h2 class="section-title">실시간 예약 및 단체 문의</h2>
            <p class="section-subtitle">평일 단체석 예약 및 비즈니스 모임 문의를 남겨주시면, 담당 매니저가 확인 후 즉시 연락드리겠습니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <form class="local-booking-form reveal gold-frame" id="local-booking-form">
            <div class="form-row">
              <div class="form-group">
                <label for="book-name">예약자명 *</label>
                <input type="text" id="book-name" required placeholder="성함을 입력하세요" />
              </div>
              <div class="form-group">
                <label for="book-tel">연락처 *</label>
                <input type="tel" id="book-tel" required placeholder="010-0000-0000" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="book-date">희망 날짜 *</label>
                <input type="date" id="book-date" required />
              </div>
              <div class="form-group">
                <label for="book-count">방문 인원수 *</label>
                <select id="book-count" required>
                  <option value="">선택하세요</option>
                  <option value="4">4인 이내 (일반 대기 추천)</option>
                  <option value="5-8">5인 ~ 8인 (평일 부스석 예약)</option>
                  <option value="9-12">9인 ~ 12인 (평일 단체 단찌석)</option>
                  <option value="13+">13인 이상 (매장 사전 협의)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="book-memo">추가 요청 사항</label>
              <textarea id="book-memo" rows="4" placeholder="유아용 의자 필요 여부 또는 특정 음식 관련 알레르기 등 요청 사항을 적어주세요."></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--large" style="width: 100%; justify-content: center; margin-top: var(--space-md);">예약 상담 접수하기</button>
          </form>
        </div>
      </section>

      <!-- Trust Copy Banner -->
      <section class="section section--wood">
        <div class="container text-center reveal">
          <span class="section-label">SAFETY & TRUST</span>
          <h2>안심하고 즐기는 맛있는 식사</h2>
          <div class="divider-gold divider-gold--center"></div>
          <div class="trust-banners-grid">
            <div class="trust-banner-card">
              <h3>당일 배송 소진</h3>
              <p>새벽 03:00 산지 출발 → 오전 10:00 매장 입고. 당일 완판 원칙 준수</p>
            </div>
            <div class="trust-banner-card">
              <h3>실시간 안심 측정</h3>
              <p>수산물 입고 즉시 일본산 등 방사능 매일 3회 검사 완료 및 결과 투명 공지</p>
            </div>
            <div class="trust-banner-card">
              <h3>위생용 316L 레일</h3>
              <p>식품 등급 전용 최고사양 스테인리스 레일 도입 및 정기 매 시 정각 살균 관리</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function initLocalFormInteractivity(storeName) {
  const form = document.querySelector('#local-booking-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.querySelector('#book-name').value;
      const tel = document.querySelector('#book-tel').value;
      const date = document.querySelector('#book-date').value;
      const count = document.querySelector('#book-count').value;

      alert(`[${storeName}] 예약 문의가 성공적으로 접수되었습니다!\n\n예약자: ${name}님\n연락처: ${tel}\n날짜: ${date}\n인원: ${count}인 기준\n\n지점 매니저가 확인 후 30분 이내에 확정 전화를 드리겠습니다.`);
      form.reset();
    });
  }
}
