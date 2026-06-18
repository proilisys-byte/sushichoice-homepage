// Custom Vanilla JS History-based Router for SUSHI CHOICE

let routes = {};
const appContainer = document.querySelector('#app');
const transitionOverlay = document.querySelector('#page-transition');

/**
 * Registers a route and its rendering component.
 * @param {string} path - URL path (e.g. '/brand')
 * @param {Function} component - JS class or function returning HTML string or DOM Node
 */
export function addRoute(path, component) {
  routes[path] = component;
}

/**
 * Navigates to a specific path using HTML5 History API.
 * Triggers premium curtain transition.
 * @param {string} path 
 */
export async function navigateTo(path) {
  // Push state to browser history
  window.history.pushState(null, null, path);
  await handleRouting(path);
}

/**
 * Executes routing logic, rendering, and dynamic SEO updates.
 * Includes page transitions.
 */
async function handleRouting(path = window.location.pathname) {
  // Normalize path
  let currentPath = path.toLowerCase();
  
  // Clean trailing slash unless it is root
  if (currentPath.length > 1 && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }

  // Find matching route or fallback to Home (/) or 404
  let component = routes[currentPath];
  
  // If not found, check if it fits a store dynamic route: /store/:id
  if (!component) {
    if (currentPath.startsWith('/store/') && currentPath.length > 7) {
      component = routes['/store/:id'];
    } else {
      component = routes['/'] || (() => '<h2>Page Not Found</h2>');
    }
  }

  // Trigger page transition curtain overlay
  if (transitionOverlay) {
    transitionOverlay.classList.add('is-active');
    // Wait for the curtain to close (500ms)
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Clear container
  appContainer.innerHTML = '';

  // Render component
  try {
    const content = await component();
    if (typeof content === 'string') {
      appContainer.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      appContainer.appendChild(content);
    }
  } catch (error) {
    console.error('Error rendering page:', error);
    appContainer.innerHTML = `<div class="container" style="padding: 100px 0; text-align: center;"><h2>페이지 로드 중 오류가 발생했습니다.</h2><a href="/" data-link>홈으로 돌아가기</a></div>`;
  }

  // Dynamic SEO Updates (will be imported dynamically or globally)
  if (window.updateSEO) {
    window.updateSEO(currentPath);
  }

  // Scroll to top
  window.scrollTo(0, 0);

  // Initialize Page Interactivity and Scroll Reveal Observers
  setTimeout(() => {
    initializePageInteractivity();
    if (transitionOverlay) {
      transitionOverlay.classList.remove('is-active');
    }
  }, 100);
}

/**
 * Hook to initialize scroll reveal, carousel handlers, calculators, etc.
 * on new page load.
 */
function initializePageInteractivity() {
  // Trigger intersection observer for scroll reveals
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once visible, stop observing
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // Bind links to prevent default load and trigger custom routing
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href !== window.location.pathname) {
        navigateTo(href);
      }
    });
  });

  // Re-run any page-specific initializer functions
  const event = new CustomEvent('pageLoaded', { detail: { path: window.location.pathname } });
  window.dispatchEvent(event);

  // Update nav links active styling
  document.querySelectorAll('.nav__link').forEach(navLink => {
    const href = navLink.getAttribute('href');
    if (href === window.location.pathname) {
      navLink.classList.add('nav__link--active');
    } else {
      navLink.classList.remove('nav__link--active');
    }
  });
}

// Global router initial setup
export function initRouter() {
  // Handle back/forward navigation
  window.addEventListener('popstate', () => {
    handleRouting();
  });

  // Intercept all clicks on links with data-link
  document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href !== window.location.pathname) {
        navigateTo(href);
      }
    }
  });

  handleRouting();
}
