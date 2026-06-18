// FAQ Hub Page Component for SUSHI CHOICE

import { faqData } from '../data/faqData';

export async function renderFaq() {
  setTimeout(() => {
    initFaqInteractivity();
  }, 100);

  return `
    <main class="page-faq">
      <section class="section section--dark" style="padding-top: calc(var(--header-height) + var(--space-3xl)); min-height: 80vh;">
        <div class="container container--narrow">
          <!-- Page Header -->
          <div class="section-header text-center reveal">
            <span class="section-label">FAQ SYSTEM</span>
            <h1 class="section-title">자주 묻는 질문</h1>
            <p class="section-subtitle">스시초이스 이용 팁 및 창업 관련 단골 질문사항들을 편리하게 확인하실 수 있습니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Live Search Bar -->
          <div class="faq-search reveal gold-frame">
            <input type="text" id="faq-search-input" placeholder="키워드 또는 궁금하신 질문을 입력하세요 (예: 주차, 가격, 창업)" />
            <span class="faq-search__icon">🔍</span>
          </div>

          <!-- Accordion List -->
          <div class="faq-list reveal" id="faq-accordion-list">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>
    </main>
  `;
}

function initFaqInteractivity() {
  const listContainer = document.querySelector('#faq-accordion-list');
  const searchInput = document.querySelector('#faq-search-input');

  renderFaqItems('');

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      renderFaqItems(e.target.value.trim().toLowerCase());
    });
  }

  function renderFaqItems(keyword) {
    let filtered = faqData;
    if (keyword) {
      filtered = faqData.filter(item => 
        item.question.toLowerCase().includes(keyword) || 
        item.answer.toLowerCase().includes(keyword)
      );
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `<div class="faq-empty">검색어와 연관된 자주 묻는 질문이 없습니다.<br/>다른 키워드로 검색하시거나 [문의하기]를 이용해 주세요.</div>`;
      return;
    }

    listContainer.innerHTML = filtered.map(item => `
      <div class="faq-item gold-frame">
        <button class="faq-item__question" aria-expanded="false">
          <span>${item.question}</span>
          <span class="faq-item__toggle-icon">+</span>
        </button>
        <div class="faq-item__answer-wrapper">
          <div class="faq-item__answer">
            <p>${item.answer}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Bind accordion click events
    listContainer.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-item__question');
      const wrapper = item.querySelector('.faq-item__answer-wrapper');
      const icon = item.querySelector('.faq-item__toggle-icon');

      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close other FAQ items for exclusive accordion behavior
        listContainer.querySelectorAll('.faq-item__question[aria-expanded="true"]').forEach(openBtn => {
          if (openBtn !== btn) {
            openBtn.setAttribute('aria-expanded', 'false');
            openBtn.nextElementSibling.style.maxHeight = '0px';
            openBtn.querySelector('.faq-item__toggle-icon').textContent = '+';
          }
        });

        if (isOpen) {
          btn.setAttribute('aria-expanded', 'false');
          wrapper.style.maxHeight = '0px';
          icon.textContent = '+';
        } else {
          btn.setAttribute('aria-expanded', 'true');
          // Set max-height to scrollHeight to allow CSS animation transitions
          wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
          icon.textContent = '-';
        }
      });
    });
  }
}
