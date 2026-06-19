const SETTING_POPUP_KEY = 'sushichoice-setting-popup-dismissed';

let listenersBound = false;

function isHomePath() {
  const path = window.location.pathname.split('?')[0].split('#')[0].toLowerCase().replace(/\/$/, '') || '/';
  return path === '/';
}

function isDismissedToday() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    return localStorage.getItem(SETTING_POPUP_KEY) === today;
  } catch {
    return true;
  }
}

function bindPopupListeners(popup) {
  if (listenersBound) return;
  listenersBound = true;

  const confirmBtn = document.querySelector('#setting-popup-confirm');
  const backdrop = document.querySelector('#setting-popup-backdrop');
  const dismissCheckbox = document.querySelector('#setting-popup-dismiss');

  const closePopup = () => {
    try {
      if (dismissCheckbox?.checked) {
        localStorage.setItem(SETTING_POPUP_KEY, new Date().toISOString().slice(0, 10));
      }
    } catch {
      // ignore storage errors
    }
    popup.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  confirmBtn?.addEventListener('click', closePopup);
  backdrop?.addEventListener('click', closePopup);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') closePopup();
  };
  document.addEventListener('keydown', onKeyDown);

  window.addEventListener('pageLoaded', function cleanup(e) {
    if (e.detail && e.detail.path !== '/') {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      window.removeEventListener('pageLoaded', cleanup);
    }
  });
}

function openPopup(popup) {
  popup.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function showPopupWhenReady(popup) {
  if (popup.classList.contains('is-open')) return;

  const img = popup.querySelector('#setting-popup-image');
  if (!img) {
    openPopup(popup);
    return;
  }

  if (img.complete && img.naturalWidth > 0) {
    openPopup(popup);
    return;
  }

  const reveal = () => openPopup(popup);
  img.addEventListener('load', reveal, { once: true });
  img.addEventListener('error', reveal, { once: true });
}

export function initSettingPopup() {
  if (!isHomePath() || isDismissedToday()) return;

  const popup = document.querySelector('#setting-popup');
  if (!popup) return;

  bindPopupListeners(popup);
  showPopupWhenReady(popup);
}
