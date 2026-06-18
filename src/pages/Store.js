// Store Locator Page Component for SUSHI CHOICE

import { storeData } from '../data/storeData';

export async function renderStore() {
  // Parse query parameter to determine initial active store
  const urlParams = new URLSearchParams(window.location.search);
  const initialActiveId = urlParams.get('id') || storeData[0]?.id;

  setTimeout(() => {
    initStoreInteractivity();
  }, 100);

  return `
    <main class="page-store">
      <section class="section section--dark" style="padding-top: calc(var(--header-height) + var(--space-3xl));">
        <div class="container">
          <!-- Page Header -->
          <div class="section-header text-center reveal">
            <span class="section-label">STORE LOCATOR</span>
            <h1 class="section-title">스시초이스 매장 안내</h1>
            <p class="section-subtitle">전국의 스시초이스 매장을 소개합니다.<br/>가까운 지점에서 프리미엄 회전초밥의 감동을 느껴보세요.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Store Locator Layout -->
          <div class="store-locator reveal">
            <!-- Left Side: List and Details -->
            <div class="store-locator__list">
              <div class="store-tabs">
                ${storeData.map((store) => {
                  const isActive = store.id === initialActiveId;
                  return `
                    <button class="store-tab-btn ${isActive ? 'active' : ''}" data-store-id="${store.id}">
                      <span class="store-tab-btn__name">${store.name}</span>
                      <span class="store-tab-btn__addr">${store.address.split(' ').slice(0, 2).join(' ')}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Store Detail Panels -->
              <div class="store-panels">
                ${storeData.map((store) => {
                  const isActive = store.id === initialActiveId;
                  return `
                    <div class="store-panel ${isActive ? 'active' : ''}" id="panel-${store.id}">
                      <div class="store-panel__img-wrapper gold-frame">
                        <img src="${store.imageExt}" alt="${store.name} 전경" class="store-panel__img" loading="lazy" />
                      </div>
                      
                      <div class="store-panel__info">
                        <h2>스시초이스 ${store.name}</h2>
                        <p class="store-panel__desc">${store.description}</p>
                        
                        <div class="store-details-list">
                          <div class="store-detail-item">
                            <strong>주소:</strong>
                            <span>${store.address}</span>
                          </div>
                          <div class="store-detail-item">
                            <strong>전화번호:</strong>
                            <span><a href="tel:${store.tel}">${store.tel}</a></span>
                          </div>
                          <div class="store-detail-item">
                            <strong>영업시간:</strong>
                            <span>${store.hours}</span>
                          </div>
                          <div class="store-detail-item">
                            <strong>주차안내:</strong>
                            <span>${store.parking}</span>
                          </div>
                          <div class="store-detail-item">
                            <strong>좌석안내:</strong>
                            <span>${store.seats}</span>
                          </div>
                        </div>

                        <div class="store-panel__actions">
                          <a href="${store.mapUrl}" target="_blank" class="btn btn--primary">
                            <span>네이버 지도 길찾기</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Right Side: Store Map Preview Graphic -->
            <div class="store-locator__map gold-frame">
              <div class="map-container">
                ${storeData.map((store) => {
                  const isActive = store.id === initialActiveId;
                  return `
                    <img src="${store.imageMap}" alt="${store.name} 약도" class="store-map-img ${isActive ? 'active' : ''}" id="map-${store.id}" loading="lazy" />
                  `;
                }).join('')}
                <div class="map-overlay-info">
                  <span>지도를 누르시면 길찾기 링크로 새 창이 열립니다.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function initStoreInteractivity() {
  const tabBtns = document.querySelectorAll('.store-tab-btn');
  const panels = document.querySelectorAll('.store-panel');
  const maps = document.querySelectorAll('.store-map-img');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-store-id');

      // Toggle Active Tab Button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle Active Details Panel
      panels.forEach(p => p.classList.remove('active'));
      const activePanel = document.querySelector(`#panel-${targetId}`);
      if (activePanel) activePanel.classList.add('active');

      // Toggle Active Map Image
      maps.forEach(m => m.classList.remove('active'));
      const activeMap = document.querySelector(`#map-${targetId}`);
      if (activeMap) activeMap.classList.add('active');
    });
  });

  // Bind click on the map to open the active store's Naver Map url
  const mapContainer = document.querySelector('.map-container');
  if (mapContainer) {
    mapContainer.addEventListener('click', () => {
      const activeBtn = document.querySelector('.store-tab-btn.active');
      if (activeBtn) {
        const storeId = activeBtn.getAttribute('data-store-id');
        const store = storeData.find(s => s.id === storeId);
        if (store && store.mapUrl) {
          window.open(store.mapUrl, '_blank');
        }
      }
    });
  }
}
