// Footer Component for SUSHI CHOICE

import logoImg from '../assets/images/brand/logo.png';

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer__container container">
      <div class="footer__top">
        <!-- Brand Section -->
        <div class="footer__brand">
          <img src="${logoImg}" alt="SUSHI CHOICE" class="footer__logo" loading="lazy" />
          <p class="footer__slogan">움직이는 예술, 장인의 온도</p>
          <p class="footer__promise">신선함은 돌고, 만족은 남습니다.</p>
          <div class="footer__socials">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="footer__social-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://blog.naver.com" target="_blank" aria-label="Naver Blog" class="footer__social-link">
              <!-- Custom Blog Emblem -->
              <span style="font-weight: 900; font-size: 13px; font-family: var(--font-en);">BLOG</span>
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube" class="footer__social-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.047 0 12 0 12s0 3.953.502 5.837a3.002 3.002 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107C24 15.953 24 12 24 12s0-3.953-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="footer__links">
          <div class="footer__col">
            <h4 class="footer__col-title">브랜드</h4>
            <ul>
              <li><a href="/brand" class="footer__link" data-link>철학 및 스토리</a></li>
              <li><a href="/review" class="footer__link" data-link>고객 후기</a></li>
              <li><a href="/faq" class="footer__link" data-link>자주 묻는 질문</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">메뉴 & 매장</h4>
            <ul>
              <li><a href="/menu" class="footer__link" data-link>미식 메뉴판</a></li>
              <li><a href="/store" class="footer__link" data-link>전체 매장 안내</a></li>
              <li><a href="/store/songnae" class="footer__link" data-link>송내본점</a></li>
              <li><a href="/store/songdo" class="footer__link" data-link>송도점</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">파트너</h4>
            <ul>
              <li><a href="/franchise" class="footer__link" data-link>가맹 창업 안내</a></li>
              <li><a href="/careers" class="footer__link" data-link>인재 채용</a></li>
              <li><a href="/contact" class="footer__link" data-link>문의 접수</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="footer__divider" />

      <div class="footer__bottom">
        <div class="footer__info">
          <p>
            <span>주식회사 스시초이스</span> | 
            <span>대표자: 성승준</span> | 
            <span>사업자등록번호: 123-45-67890</span> | 
            <span>통신판매업신고: 제 2026-경기부천-1234호</span>
          </p>
          <p>
            <span>주소: 경기도 부천시 원미구 부일로243번길 52-4</span> | 
            <span>대표번호: 0507-1436-9955</span> | 
            <span>가맹문의: 1661-8884</span>
          </p>
        </div>
        <div class="footer__copyright">
          <p>&copy; 2026 SUSHI CHOICE. All Rights Reserved. Designed with Apple & Ferrari Aesthetics.</p>
        </div>
      </div>
    </div>
  `;

  return footer;
}
