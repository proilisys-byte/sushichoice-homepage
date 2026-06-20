// Customer Reviews Gallery Page Component for SUSHI CHOICE

import { reviewData } from '../data/reviewData';

export async function renderReview() {
  setTimeout(() => {
    initReviewInteractivity();
  }, 100);

  return `
    <main class="page-review">
      <section class="section section--dark" style="padding-top: calc(var(--header-height) + var(--space-3xl));">
        <div class="container">
          <!-- Page Header -->
          <div class="section-header text-center reveal">
            <span class="section-label">REAL VOICES</span>
            <h1 class="section-title">스시초이스 고객 만족 후기</h1>
            <p class="section-subtitle">고객님이 직접 남겨주신 네이버 예약, 블로그 미식기, 인스타그램 해시태그 후기를 소개합니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Review Summary Dashboard -->
          <div class="review-dashboard reveal gold-frame">
            <div class="rev-stat-box">
              <span class="rev-stat-num text-gold">4.93<small>/5</small></span>
              <p>네이버 지도 별점 평점</p>
              <span>실제 방문 인증 리뷰 4,280건 기준</span>
            </div>
            <div class="rev-stat-box">
              <span class="rev-stat-num text-gold">15,400+</span>
              <p>인스타그램 누적 해시태그</p>
              <span>#스시초이스 #송도회전초밥 등</span>
            </div>
            <div class="rev-stat-box">
              <span class="rev-stat-num text-gold">99.2%</span>
              <p>가족 재방문 의사율</p>
              <span>분기별 설문참여 800가구 기준</span>
            </div>
          </div>

          <!-- Reviews Gallery Grid -->
          <div class="reviews-grid reveal" id="reviews-grid">
            <!-- Dynamically populated -->
          </div>

          <!-- Bottom CTA to submit review -->
          <div class="review-bottom-cta reveal text-center">
            <h3>방문하신 경험을 네이버 영수증 리뷰로 자랑해보세요!</h3>
            <p>네이버 영수증 포토 리뷰를 남겨주신 전원에게 다음 방문 시 음료 또는 디저트 한 접시를 서비스로 제공해 드립니다.</p>
            <a href="https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1325888474" target="_blank" class="btn btn--primary">
              <span>네이버에 방문자 리뷰 작성하기</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

function initReviewInteractivity() {
  const grid = document.querySelector('#reviews-grid');

  grid.innerHTML = reviewData.map(rev => {
    const starsHtml = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
    let sourceName = 'Naver';
    let sourceClass = 'source-naver';
    if (rev.source === 'instagram') {
      sourceName = 'Instagram';
      sourceClass = 'source-insta';
    } else if (rev.source === 'blog') {
      sourceName = 'Naver Blog';
      sourceClass = 'source-blog';
    }

    return `
        <div class="review-gallery-card gold-frame reveal">
          <div class="rev-card-header">
            <div class="rev-author-info">
              <span class="rev-author">${rev.author}</span>
              <span class="rev-date">${rev.date}</span>
            </div>
            <span class="rev-source ${sourceClass}">${sourceName}</span>
          </div>
          <div class="rev-stars">${starsHtml}</div>
          <h3 class="rev-title">${rev.title}</h3>
          <p class="rev-text">"${rev.text}"</p>
        </div>
      `;
  }).join('');
}
