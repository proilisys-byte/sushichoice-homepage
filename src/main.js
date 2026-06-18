/* ============================================
   SUSHI CHOICE — Main Application Entry Point
   ============================================ */

// ─── Import Global Styles ───
import './styles/global.css';
import './styles/components/header.css';
import './styles/components/footer.css';
import './styles/components/home.css';
import './styles/components/pages.css';

// ─── Import Common Layout Components ───
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';

// ─── Import Custom Router ───
import { addRoute, initRouter } from './utils/router.js';

// ─── Import dynamic SEO updater (runs globally) ───
import './utils/seo.js';

// ─── Import Page Templates ───
import { renderHome } from './pages/Home.js';
import { renderBrand } from './pages/Brand.js';
import { renderMenu } from './pages/Menu.js';
import { renderStore } from './pages/Store.js';
import { renderFranchise } from './pages/Franchise.js';
import { renderCareers } from './pages/Careers.js';
import { renderReview } from './pages/Review.js';
import { renderFaq } from './pages/Faq.js';
import { renderContact } from './pages/Contact.js';

// ─── Register Application Routes ───
// Core Pages
addRoute('/', renderHome);
addRoute('/brand', renderBrand);
addRoute('/menu', renderMenu);
addRoute('/store', renderStore);

// Business & Partnership Pages
addRoute('/franchise', renderFranchise);
addRoute('/careers', renderCareers);
addRoute('/review', renderReview);
addRoute('/faq', renderFaq);
addRoute('/contact', renderContact);

// ─── Initialize Core Layout & Router ───
document.addEventListener('DOMContentLoaded', () => {
  // Render common header
  const headerNode = renderHeader();
  document.body.insertBefore(headerNode, document.querySelector('#app'));

  // Render common footer
  const footerNode = renderFooter();
  document.body.appendChild(footerNode);

  // Initialize router (listens to clicks and routes to correct component)
  initRouter();
});
