// Menu Page Component for SUSHI CHOICE

import { menuData } from '../data/menuData';

export async function renderMenu() {
  // Let the browser load the HTML template first
  setTimeout(() => {
    initMenuInteractivity();
  }, 100);

  return `
    <main class="page-menu">
      <section class="section section--dark" style="padding-top: calc(var(--header-height) + var(--space-3xl));">
        <div class="container">
          <!-- Page Header -->
          <div class="section-header text-center reveal">
            <span class="section-label">CULINARY MENU</span>
            <h1 class="section-title">스시초이스 미식 메뉴판</h1>
            <p class="section-subtitle">골든 레일 위를 수놓는 80여 가지 이상의 신선한 걸작들. 카테고리별로 필터링하여 즐겨보세요.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Category Filters -->
          <div class="menu-filters reveal">
            <button class="menu-filter-btn active" data-category="all">전체</button>
            <button class="menu-filter-btn" data-category="salmon">연어</button>
            <button class="menu-filter-btn" data-category="tuna">참치</button>
            <button class="menu-filter-btn" data-category="shrimp">새우</button>
            <button class="menu-filter-btn" data-category="flatfish">광어/활어</button>
            <button class="menu-filter-btn" data-category="wagyu">와규</button>
            <button class="menu-filter-btn" data-category="gunkan">군함</button>
            <button class="menu-filter-btn" data-category="roll">롤</button>
            <button class="menu-filter-btn" data-category="side">사이드</button>
            <button class="menu-filter-btn" data-category="dessert">디저트/음료</button>
          </div>

          <!-- Menu Grid -->
          <div class="menu-grid reveal" id="menu-grid">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>

      <!-- Allergen & Detail Modal -->
      <div class="menu-modal" id="menu-modal">
        <div class="menu-modal__backdrop" id="modal-backdrop"></div>
        <div class="menu-modal__content gold-frame">
          <button class="menu-modal__close" id="modal-close" aria-label="닫기">&times;</button>
          <div class="menu-modal__body" id="modal-body">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>
    </main>
  `;
}

function initMenuInteractivity() {
  const menuGrid = document.querySelector('#menu-grid');
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  const modal = document.querySelector('#menu-modal');
  const modalClose = document.querySelector('#modal-close');
  const modalBackdrop = document.querySelector('#modal-backdrop');
  const modalBody = document.querySelector('#modal-body');

  // Initial populate (all items)
  renderItems('all');

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active styling
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      renderItems(category);
    });
  });

  // Render items based on category
  function renderItems(category) {
    let filteredData = menuData;
    if (category !== 'all') {
      if (category === 'dessert') {
        filteredData = menuData.filter(item => item.category === 'dessert' || item.category === 'drink');
      } else {
        filteredData = menuData.filter(item => item.category === category);
      }
    }

    if (filteredData.length === 0) {
      menuGrid.innerHTML = `<div class="menu-empty">선택하신 카테고리의 메뉴를 준비 중입니다.</div>`;
      return;
    }

    menuGrid.innerHTML = filteredData.map(item => {
      // Formatter for price
      const formattedPrice = item.price.toLocaleString();
      const tagHtml = item.tag ? `<span class="menu-card__tag">${item.tag}</span>` : '';
      
      return `
        <div class="menu-card gold-frame reveal" data-id="${item.id}">
          <div class="menu-card__img-container">
            <img src="${item.image}" alt="${item.name}" class="menu-card__img" loading="lazy" />
            ${tagHtml}
          </div>
          <div class="menu-card__info">
            <div class="menu-card__header">
              <span class="menu-card__cat text-en">${item.category.toUpperCase()}</span>
              <span class="menu-card__price">${formattedPrice}원</span>
            </div>
            <h3 class="menu-card__title">${item.name}</h3>
            <p class="menu-card__desc">${item.description}</p>
            <button class="menu-card__detail-btn">상세 정보 & 알레르기</button>
          </div>
        </div>
      `;
    }).join('');

    // Re-bind click events on menu card detail buttons
    menuGrid.querySelectorAll('.menu-card').forEach((card, index) => {
      const btn = card.querySelector('.menu-card__detail-btn');
      const itemId = parseInt(card.getAttribute('data-id'));
      
      const openModalHandler = () => openModal(itemId);
      
      btn.addEventListener('click', openModalHandler);
      card.querySelector('.menu-card__img-container').addEventListener('click', openModalHandler);

      // Reveal dynamically-rendered cards (the page-level reveal observer ran
      // before these cards existed, so trigger their fade-in here with a stagger).
      const delay = Math.min(index * 40, 600);
      setTimeout(() => card.classList.add('is-visible'), delay);
    });
  }

  // Open detail modal
  function openModal(id) {
    const item = menuData.find(m => m.id === id);
    if (!item) return;

    modalBody.innerHTML = `
      <div class="modal-detail">
        <div class="modal-detail__image">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="modal-detail__info">
          <span class="modal-detail__category text-en">${item.category.toUpperCase()}</span>
          <h2 class="modal-detail__title">${item.name}</h2>
          <span class="modal-detail__subtitle text-en">${item.englishName}</span>
          <p class="modal-detail__price">${item.price.toLocaleString()}원</p>
          <div class="divider-gold"></div>
          <p class="modal-detail__desc">${item.description}</p>
          
          <div class="modal-detail__meta">
            <div class="modal-detail__meta-row">
              <strong>알레르기 정보:</strong>
              <span class="allergen-tag">${item.allergens || '없음'}</span>
            </div>
            <div class="modal-detail__meta-row">
              <strong>추천 여부:</strong>
              <span>${item.isSignature ? '★ 셰프 추천 시그니처 메뉴' : '일반'}</span>
            </div>
            <div class="modal-detail__meta-row">
              <strong>위생 원칙:</strong>
              <span>HACCP 인증 온도 제어 유통 및 매일 3회 방사능 안전검사 통과</span>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  // Close modal functions
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
}
