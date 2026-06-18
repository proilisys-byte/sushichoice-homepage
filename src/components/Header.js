// Header (Navigation) Component for SUSHI CHOICE

import logoImg from '../assets/images/brand/logo.png';
import logoEmblem from '../assets/images/brand/logo-emblem.png';

export function renderHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.id = 'main-header';

  header.innerHTML = `
    <div class="header__container container container--wide">
      <!-- Logo -->
      <a href="/" class="header__logo" data-link>
        <img src="${logoImg}" alt="SUSHI CHOICE" class="logo-desktop" />
        <img src="${logoEmblem}" alt="SUSHI CHOICE" class="logo-mobile" />
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-desktop">
        <ul class="nav__list">
          <li><a href="/brand" class="nav__link" data-link>브랜드 소개</a></li>
          <li><a href="/menu" class="nav__link" data-link>미식 메뉴</a></li>
          <li><a href="/store" class="nav__link" data-link>매장 안내</a></li>
          <li><a href="/franchise" class="nav__link" data-link>가맹 창업</a></li>
          <li><a href="/careers" class="nav__link" data-link>인재 채용</a></li>
          <li><a href="/review" class="nav__link" data-link>고객 후기</a></li>
          <li><a href="/faq" class="nav__link" data-link>자주 묻는 질문</a></li>
          <li><a href="/contact" class="nav__link btn-cta" data-link>문의하기</a></li>
        </ul>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button class="menu-toggle" aria-label="메뉴 열기" aria-expanded="false">
        <span class="menu-toggle__line"></span>
        <span class="menu-toggle__line"></span>
        <span class="menu-toggle__line"></span>
      </button>

      <!-- Mobile Nav Overlay -->
      <nav class="nav-mobile">
        <div class="nav-mobile__container">
          <ul class="nav-mobile__list">
            <li><a href="/brand" class="nav-mobile__link" data-link>브랜드 소개</a></li>
            <li><a href="/menu" class="nav-mobile__link" data-link>미식 메뉴</a></li>
            <li><a href="/store" class="nav-mobile__link" data-link>매장 안내</a></li>
            <li><a href="/franchise" class="nav-mobile__link" data-link>가맹 창업</a></li>
            <li><a href="/careers" class="nav-mobile__link" data-link>인재 채용</a></li>
            <li><a href="/review" class="nav-mobile__link" data-link>고객 후기</a></li>
            <li><a href="/faq" class="nav-mobile__link" data-link>자주 묻는 질문</a></li>
            <li><a href="/contact" class="nav-mobile__link btn-cta-mobile" data-link>문의하기</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `;

  // Attach scroll listener to add glassmorphism on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // Attach hamburger menu toggle click listener
  setTimeout(() => {
    const toggleBtn = header.querySelector('.menu-toggle');
    const navMobile = header.querySelector('.nav-mobile');
    
    if (toggleBtn && navMobile) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = navMobile.classList.contains('is-open');
        if (isOpen) {
          navMobile.classList.remove('is-open');
          toggleBtn.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        } else {
          navMobile.classList.add('is-open');
          toggleBtn.classList.add('is-open');
          toggleBtn.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
      });

      // Close mobile menu when nav link is clicked
      navMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMobile.classList.remove('is-open');
          toggleBtn.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
  }, 100);

  return header;
}
