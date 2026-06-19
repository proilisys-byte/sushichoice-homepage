// Home Page Component for SUSHI CHOICE

import { menuData } from '../data/menuData';
import { storeData } from '../data/storeData';
import { reviewData } from '../data/reviewData';

// Image & Video Imports
import heroVideo from '../assets/images/hero/hero-video.mp4';
import heroPoster from '../assets/images/hero/hero-poster.jpg';

import rotaryVideo from '../assets/images/rotary/rotary-video.mp4';
import rotaryChoose from '../assets/images/rotary/rotary-choose.jpg';
import rotaryEnjoy from '../assets/images/rotary/rotary-enjoy.jpg';

import chefShari from '../assets/images/chef/chef-shari.jpg';
import chefKnife from '../assets/images/chef/chef-knife.jpg';
import chefRice from '../assets/images/chef/chef-rice.jpg';
import chefPhilosophy from '../assets/images/chef/chef-philosophy-clean.jpg';
import chefCraftNew from '../assets/images/chef/chef-craft-new.jpg';

import sigSalmon from '../assets/images/signature/sig-salmon.jpg';
import sigTunaLeft from '../assets/images/signature/sig-tuna-left.jpg';
import sigTunaRight from '../assets/images/signature/sig-tuna-right.jpg';
import sigShrimp from '../assets/images/signature/sig-shrimp.jpg';
import sigWagyu from '../assets/images/signature/sig-wagyu.jpg';
import sigSeasonal from '../assets/images/signature/sig-seasonal.jpg';

import franchiseBg from '../assets/images/franchise/franchise-bg.jpg';
import careersBg from '../assets/images/careers/careers-bg.jpg';
import settingPaper from '../assets/images/promo/setting-paper.jpg';

export async function renderHome() {
  // Setup interactivity after rendering
  setTimeout(() => {
    initHomeInteractivity();
  }, 100);

  // Top 10 items for the Golden Plate Conveyor Belt
  const top10Menu = menuData.filter(item => item.isSignature).slice(0, 10);

  // Filter 4 reviews for display
  const homeReviews = reviewData.slice(0, 4);

  return `
    <main class="page-home">
      <!-- Section 01 — HERO: 흐르는 럭셔리 -->
      <section class="hero-section">
        <div class="hero-video-wrapper" style="background-image: url(${heroPoster}); background-size: cover; background-position: center;">
          <video class="hero-video" autoplay loop muted playsinline preload="auto" poster="${heroPoster}">
            <source src="${heroVideo}" type="video/mp4" />
          </video>
          <div class="hero-overlay"></div>
        </div>

        <div class="hero-content container reveal">
          <span class="hero-subtitle text-en">OUR STORY</span>
          <h1 class="hero-title">내 가족이 먹는다는 마음으로,<br/>신선함과 정성을 매일 담습니다.</h1>
          <p class="hero-desc">대한민국 프리미엄 회전초밥의 기준,<br/>스시초이스의 시작과 신념</p>
          
          <div class="hero-ctas">
            <a href="/store" class="btn btn--primary" data-link>매장 찾기</a>
            <a href="/menu" class="btn btn--secondary" data-link>메뉴 보기</a>
            <a href="/franchise" class="btn btn--ghost" data-link>가맹 문의 &rarr;</a>
          </div>
        </div>

        <!-- Scroll down indicator with Gold Rail Motif -->
        <div class="hero-scroll-indicator">
          <span>SCROLL DOWN</span>
          <div class="indicator-rail">
            <div class="indicator-plate"></div>
          </div>
        </div>
      </section>

      <!-- Section 02 — ROTARY EXPERIENCE: 보고, 고르고, 즐기다 -->
      <section class="section section--dark rotary-experience-section">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">ROTARY EXPERIENCE</span>
            <h2 class="section-title">보고, 고르고, 즐긴다</h2>
            <p class="section-subtitle">골든 레일 위에서 펼쳐지는 스시초이스만의 역동적인 4단계 미식 시퀀스</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Rotary Interactive Steps Container -->
          <div class="rotary-steps-container reveal">
            <!-- Left Side: Graphic / Image / Video according to steps -->
            <div class="rotary-steps__visual gold-frame">
              <div class="visual-panel active" id="rot-vis-1">
                <video src="${rotaryVideo}" autoplay loop muted playsinline class="rotary-video"></video>
              </div>
              <div class="visual-panel" id="rot-vis-2">
                <img src="${rotaryChoose}" alt="고르다" loading="lazy" />
              </div>
              <div class="visual-panel" id="rot-vis-3">
                <img src="${chefKnife}" alt="주문하다" loading="lazy" />
              </div>
              <div class="visual-panel" id="rot-vis-4">
                <img src="${rotaryEnjoy}" alt="즐기다" loading="lazy" />
              </div>
            </div>

            <!-- Right Side: Details list -->
            <div class="rotary-steps__content">
              <div class="rotary-step-item active" data-step="1">
                <span class="step-num text-en">01</span>
                <h3>보다 (SEE)</h3>
                <p>눈앞에서 빛나는 예술품처럼 흐르는 초밥의 신선함을 먼저 눈으로 맛보세요. 대서양의 붉은 연어와 완도의 투명한 광어가 골든 레일 위에서 미식가를 기다립니다.</p>
              </div>
              
              <div class="rotary-step-item" data-step="2">
                <span class="step-num text-en">02</span>
                <h3>고르다 (CHOOSE)</h3>
                <p>마음이 이끄는 대로, 당신만의 접시를 선택해 식탁으로 데려오세요. 색깔별로 펼쳐지는 정직한 균일가 접시들이 합리적이고 행복한 선택의 묘미를 보장합니다.</p>
              </div>

              <div class="rotary-step-item" data-step="3">
                <span class="step-num text-en">03</span>
                <h3>주문하다 (ORDER)</h3>
                <p>레일 너머 주방의 장인에게 직접 터치 패드로 필요한 스시를 주문해보세요. 차갑게 굳은 초밥이 아닌, 주문 즉시 36.5°C의 따뜻함을 머금은 채 조리하여 선사합니다.</p>
              </div>

              <div class="rotary-step-item" data-step="4">
                <span class="step-num text-en">04</span>
                <h3>즐기다 (ENJOY)</h3>
                <p>입안 가득 부드럽게 사르르 풀어지는 장인의 밥알 배합과 신선한 활어의 궁합을 편안하게 즐기세요. 아이부터 부모님까지 모두가 만족하는 다이닝이 완성됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 03 — WHY SUSHI CHOICE: 5대 차별점 -->
      <section class="section section--warm">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">WHY SUSHI CHOICE</span>
            <h2 class="section-title">스시초이스의 5대 약속</h2>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="why-grid reveal">
            <!-- Card 1 -->
            <div class="why-card gold-frame">
              <span class="why-card__num text-en">01</span>
              <h3>Freshness<br/>(신선함)</h3>
              <p>새벽 03:00 전국 포구에서 선적되어 당일 아침 매장에 도착하는 활어들만 고집하며, 당일 전량 소진의 원칙을 철저하게 준수합니다.</p>
            </div>
            <!-- Card 2 -->
            <div class="why-card gold-frame">
              <span class="why-card__num text-en">02</span>
              <h3>Variety<br/>(다양성)</h3>
              <p>기본 연어, 광어뿐 아니라 블랙 플레이트 스페셜 등 80여 가지 이상의 다채로운 수제 스시 라인업이 골든 레일 위에서 지루할 틈을 주지 않습니다.</p>
            </div>
            <!-- Card 3 -->
            <div class="why-card gold-frame">
              <span class="why-card__num text-en">03</span>
              <h3>Value<br/>(합리적 가치)</h3>
              <p>부담 없는 균일가 요금제를 기반으로 최상급 하이엔드 신동진 쌀, 천연 발효 식초만을 활용해 격조 높은 미식을 선사합니다.</p>
            </div>
            <!-- Card 4 -->
            <div class="why-card gold-frame">
              <span class="why-card__num text-en">04</span>
              <h3>Experience<br/>(경험의 즐거움)</h3>
              <p>레일을 흐르는 시각적 즐거움과 함께, 터치 패드를 통한 즉석 오더 및 셰프들의 친절하고 활력 있는 응대로 입과 눈이 모두 유쾌합니다.</p>
            </div>
            <!-- Card 5 -->
            <div class="why-card gold-frame">
              <span class="why-card__num text-en">05</span>
              <h3>Family<br/>(가족 친화)</h3>
              <p>영유아 동반 가족들이 편안하게 앉아 대화할 수 있는 여유로운 크기의 소파 테이블 부스석과 맵지 않은 와사비 조절 메뉴를 항시 마련하고 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 04 — TODAY'S GOLDEN PLATE: 인기 메뉴 10선 -->
      <section class="section section--dark menu-conveyor-section">
        <div class="container container--wide">
          <div class="section-header text-center reveal">
            <span class="section-label">TODAY'S GOLDEN PLATE</span>
            <h2 class="section-title">실시간 인기 메뉴 Top 10</h2>
            <p class="section-subtitle">지금 이 순간, 스시초이스 골든 레일 위에서 가장 많은 사랑을 받고 있는<br>10대 인기 스시입니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- CSS loop conveyor belt track -->
          <div class="conveyor-belt-wrapper reveal">
            <div class="conveyor-track">
              <!-- Render 2 sets of items for seamless infinite loops -->
              ${[...top10Menu, ...top10Menu].map((item, idx) => `
                <div class="conveyor-plate">
                  <div class="plate-ring">
                    <img src="${item.image}" alt="${item.name}" class="plate-sushi-img" loading="lazy" />
                    <span class="plate-rank text-en">${((idx) % 10) + 1}</span>
                  </div>
                  <div class="plate-info">
                    <h4>${item.name}</h4>
                    <span class="text-en">${item.category.toUpperCase()}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Section 05 — SIGNATURE COLLECTION: 시그니처 메뉴 프레젠테이션 -->
      <section class="section section--dark sig-presentation-section">
        <!-- Parallax slide 1: Salmon -->
        <div class="sig-slide" style="background-image: linear-gradient(rgba(11, 11, 11, 0.65), rgba(11, 11, 11, 0.65)), url(${sigSalmon});">
          <div class="sig-slide__content container reveal">
            <span class="sig-slide__num text-en">COLLECTION 01</span>
            <h2>Premium Salmon</h2>
            <p class="sig-slide__tagline">"대서양 청정 해역의 품격을 한 점에 담다"</p>
            <p class="sig-slide__desc">기름진 살결이 일품인 생연어 뱃살, 겉을 가볍게 구워 불 향을 입힌 아부리, 깊은 훈제의 맛까지 연어 매니아를 위한 대서양 최고급 시그니처 라인업.</p>
            <a href="/menu" class="btn btn--secondary" data-link>연어 컬렉션 보기</a>
          </div>
        </div>

        <!-- Parallax slide 2: Tuna -->
        <div class="sig-slide sig-slide--split">
          <div class="sig-slide__bg-left" style="background-image: url(${sigTunaLeft});"></div>
          <div class="sig-slide__bg-right" style="background-image: url(${sigTunaRight});"></div>
          <div class="sig-slide__overlay"></div>
          <div class="sig-slide__content container reveal">
            <span class="sig-slide__num text-en">COLLECTION 02</span>
            <h2>Premium Tuna</h2>
            <p class="sig-slide__tagline">"참다랑어의 진가, 붉은 적신부터 눈부신 오토로까지"</p>
            <p class="sig-slide__desc">참다랑어 본연의 담백한 산미를 담아낸 아카미 적신과 화려한 마블링에서 녹아내리는 육즙의 극한을 선사하는 최고급 참치 대뱃살 컬렉션.</p>
            <a href="/menu" class="btn btn--secondary" data-link>참치 컬렉션 보기</a>
          </div>
        </div>

        <!-- Parallax slide 3: Shrimp -->
        <div class="sig-slide" style="background-image: linear-gradient(rgba(11, 11, 11, 0.65), rgba(11, 11, 11, 0.65)), url(${sigShrimp});">
          <div class="sig-slide__content container reveal">
            <span class="sig-slide__num text-en">COLLECTION 03</span>
            <h2>Premium Shrimp</h2>
            <p class="sig-slide__tagline">"투명하고 탱글한 동해바다의 선물, 단새우와 생새우"</p>
            <p class="sig-slide__desc">입안에 닿는 순간 쫀득한 점성과 함께 폭발적인 단맛을 뿜어내는 생 단새우와 싱싱한 자숙새우 및 치즈 새우 아부리 등 다채로운 새우의 축제.</p>
            <a href="/menu" class="btn btn--secondary" data-link>새우 컬렉션 보기</a>
          </div>
        </div>

        <!-- Parallax slide 4: Wagyu -->
        <div class="sig-slide" style="background-image: linear-gradient(rgba(11, 11, 11, 0.65), rgba(11, 11, 11, 0.65)), url(${sigWagyu});">
          <div class="sig-slide__content container reveal">
            <span class="sig-slide__num text-en">COLLECTION 04</span>
            <h2>Wagyu & Special</h2>
            <p class="sig-slide__tagline">"레일 위에서 펼쳐지는 블랙 라벨 마블링의 정수"</p>
            <p class="sig-slide__desc">A5 최고 등급 와규를 토치로 즉각 요리한 스테이크 스시와 고소하게 양념된 수제 육회 군함말이 등 육고기 매니아를 감동시키는 프레스티지 스시.</p>
            <a href="/menu" class="btn btn--secondary" data-link>와규 컬렉션 보기</a>
          </div>
        </div>

        <!-- Parallax slide 5: Seasonal -->
        <div class="sig-slide" style="background-image: linear-gradient(rgba(11, 11, 11, 0.65), rgba(11, 11, 11, 0.65)), url(${sigSeasonal});">
          <div class="sig-slide__content container reveal">
            <span class="sig-slide__num text-en">COLLECTION 05</span>
            <h2>Seasonal Limited</h2>
            <p class="sig-slide__tagline">"지금 이 계절, 바다가 단 한순간만 허락한 맛"</p>
            <p class="sig-slide__desc">제주 은갈치 아부리, 겨울철 고소한 방어 대뱃살, 봄철 도미 마스까와 등 삼면 바다의 사계절 제철 해산물을 엄선하여 기획한 시즌 리미티드 스시.</p>
            <a href="/menu" class="btn btn--secondary" data-link>시즌 컬렉션 보기</a>
          </div>
        </div>
      </section>

      <!-- Section 06 — CHEF'S CRAFT: 장인의 온도 (V4 핵심 스플릿) -->
      <section class="section section--wood chef-craft-section">
        <div class="container">
          <div class="chef-craft-layout">
            <!-- Left Side Pinned Image Frame -->
            <div class="chef-craft__sticky-visual gold-frame reveal">
              <img src="${chefCraftNew}" alt="쉐프의 철학" class="chef-visual-img chef-visual-img--philosophy active" id="chef-img-1" loading="lazy" />
              <img src="${chefCraftNew}" alt="칼의 각도" class="chef-visual-img chef-visual-img--philosophy" id="chef-img-2" loading="lazy" />
              <img src="${chefCraftNew}" alt="쌀의 고집" class="chef-visual-img chef-visual-img--philosophy" id="chef-img-3" loading="lazy" />
              
              <!-- Dynamic Temperature Counter Overlay -->
              <div class="temp-indicator-badge">
                <span class="temp-label">SHARI TEMP</span>
                <div class="temp-value">
                  <strong class="temp-number" id="temp-counter">20.0</strong><strong class="temp-unit">°C</strong>
                </div>
              </div>
            </div>

            <!-- Right Side Scrolling Story Content -->
            <div class="chef-craft__scroll-text">
              <div class="chef-text-block active" data-chef-step="1">
                <span class="text-gold text-en">PART 01</span>
                <h2>가족을 위한 36.5°C 장인의 철학</h2>
                <div class="divider-gold"></div>
                <p>"나의 가족들이 먹는다"는 기본적인 생각을 바탕으로, 부모님과 나의 아이들이 맛있고 건강하게 먹을 수 있도록 오직 신선한 재료와 차별화된 조리법만을 고집합니다.</p>
                <p>스시초이스가 고집하는 36.5°C는 단순히 가장 맛있는 밥알의 온도를 넘어, 내 가족에게 대접하는 정성과 따뜻한 진심의 온도입니다. 차가운 기계식 조리가 아닌 장인의 체온이 실린 초밥은 입안에서 사르르 풀어지며 깊은 감동을 선사합니다.</p>
              </div>

              <div class="chef-text-block" data-chef-step="2">
                <span class="text-gold text-en">PART 02</span>
                <h2>一刀一點, 칼 끝의 과학</h2>
                <div class="divider-gold"></div>
                <p>신선한 활어일수록 칼날의 섬세한 각도가 식감을 지배합니다. 경력 15년 이상의 숙련된 일식 장인들의 칼날이 활어의 미세한 섬유질 결을 정교하게 읽어냅니다.</p>
                <p>생선의 맛과 양념의 결합을 돕는 정밀한 1mm 칼집의 조절. 한 점 한 점에 담긴 칼끝 기술은 오차 없이 기분 좋은 오독오독함과 찰진 식감을 보증합니다.</p>
              </div>

              <div class="chef-text-block" data-chef-step="3">
                <span class="text-gold text-en">PART 03</span>
                <h2>단 한 톨의 타협도 없는 쌀에 대한 집착</h2>
                <div class="divider-gold"></div>
                <p>스시 맛의 절반은 쌀이 결정합니다. 스시초이스는 단가를 줄이기 위해 단립종 저품질 쌀을 절대 혼합하지 않습니다. 오직 국내 단일 품종 중 쌀알이 굵고 찰기가 뛰어난 최상급 신동진 쌀만을 100% 매일 정량 조리합니다.</p>
                <p>여기에 3년간 간수를 뺀 국내산 천일염과 인공 방부제를 뺀 천연 발효 양조 식초 배합이 어우러져, 기계가 범접할 수 없는 고급 전통 가마솥 쌀밥 본연의 고소함을 완성합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 07 — STORE PREVIEW: 매장 안내 -->
      <section class="section section--dark">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">OUR STORES</span>
            <h2 class="section-title">가까운 스시초이스 안내</h2>
            <p class="section-subtitle">서울/경기/인천 수도권 핵심 상권에서 프리미엄 회전초밥의 감동을 누려보세요.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="store-grid reveal">
            ${storeData.map(store => `
              <div class="home-store-card gold-frame">
                <div class="home-store-card__img-wrapper">
                  <img src="${store.imageLoc}" alt="${store.name} 위치" loading="lazy" />
                </div>
                <div class="home-store-card__info">
                  <h3>${store.name}</h3>
                  <p class="home-store-card__address">${store.address}</p>
                  <div class="home-store-card__meta">
                    <span>📞 ${store.tel}</span>
                    <span>🚗 무료 주차 가능</span>
                  </div>
                  <div class="home-store-card__actions">
                    <a href="/store?id=${store.id}" class="btn btn--secondary btn--large" data-link>매장 상세 가이드</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 08 — CUSTOMER VOICE: 고객 리뷰 -->
      <section class="section section--light">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">CUSTOMER VOICE</span>
            <h2 class="section-title">미식가들의 솔직한 이야기</h2>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <!-- Reviews carousel track -->
          <div class="reviews-slider-wrapper reveal">
            <div class="reviews-slider">
              ${homeReviews.map(rev => {
    const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
    let badge = 'Naver';
    let bClass = 'source-naver';
    if (rev.source === 'instagram') { badge = 'Instagram'; bClass = 'source-insta'; }
    else if (rev.source === 'blog') { badge = 'Blog'; bClass = 'source-blog'; }

    return `
                  <div class="home-review-card gold-frame">
                    <div class="rev-card-header" style="margin-bottom: var(--space-sm);">
                      <div class="rev-author-info">
                        <strong>${rev.author}</strong>
                        <span class="rev-date" style="color: rgba(11,11,11,0.5);">${rev.date}</span>
                      </div>
                      <span class="rev-source ${bClass}">${badge}</span>
                    </div>
                    <div class="rev-stars" style="margin-bottom: var(--space-sm);">${stars}</div>
                    <p style="font-size: var(--text-base); line-height: 1.7; font-style: italic; color: #333; word-break: keep-all;">"${rev.text}"</p>
                  </div>
                `;
  }).join('')}
            </div>
          </div>

          <div class="text-center reveal" style="margin-top: var(--space-2xl);">
            <a href="/review" class="btn btn--secondary" data-link>더 많은 리뷰 보기</a>
          </div>
        </div>
      </section>

      <!-- Section 09 — FRANCHISE CTA: 가맹 문의 -->
      <section class="section section--dark home-franchise-section" style="background-image: linear-gradient(rgba(11, 11, 11, 0.75), rgba(11, 11, 11, 0.75)), url(${franchiseBg});">
        <div class="container text-center reveal">
          <span class="section-label">FRANCHISE INQUIRY</span>
          <h2>성공적인 창업 파트너, 스시초이스</h2>
          <p class="home-cta-desc">HACCP 물류 가동률 100%, 15년 검증 일식 전문 주방 구인 대행 시스템까지.<br/>불황에도 타격 없는 탄탄한 가맹점주 상생 모델을 제시해 드립니다.</p>
          <div class="divider-gold divider-gold--center divider-gold--wide"></div>
          <a href="/franchise" class="btn btn--primary btn--large" data-link>가맹 상담 및 개설 가이드 &rarr;</a>
        </div>
      </section>

      <!-- Section 10 — CAREERS CTA: 채용 안내 -->
      <section class="section section--warm home-careers-section" style="background-image: linear-gradient(rgba(11, 11, 11, 0.75), rgba(11, 11, 11, 0.75)), url(${careersBg});">
        <div class="container text-center reveal">
          <span class="section-label">CAREERS WITH US</span>
          <h2>당신의 열정으로 쥐어내는 가치</h2>
          <p class="home-cta-desc">업계 최고 수준의 복지 혜택과 성과 연동 인센티브 보너스 제도를 가동 중입니다.<br/>스시초이스 크루로 합류하여 일식 외식 산업의 트렌드를 함께 주도해 갈 인재를 찾습니다.</p>
          <div class="divider-gold divider-gold--center divider-gold--wide"></div>
          <a href="/careers" class="btn btn--primary btn--large" data-link>채용공고 확인 및 즉시 지원 &rarr;</a>
        </div>
      </section>

      <!-- Setting Paper Promo Popup -->
      <div class="menu-modal promo-popup" id="setting-popup">
        <div class="menu-modal__backdrop" id="setting-popup-backdrop"></div>
        <div class="menu-modal__content promo-popup__content">
          <button class="menu-modal__close promo-popup__close" id="setting-popup-close" aria-label="닫기">&times;</button>
          <div class="menu-modal__body">
            <img src="${settingPaper}" alt="스시초이스 메뉴 및 세팅지 안내" class="promo-popup__image" />
            <div class="promo-popup__footer">
              <label class="promo-popup__dismiss">
                <input type="checkbox" id="setting-popup-dismiss" />
                오늘 하루 보지 않기
              </label>
              <button type="button" class="btn btn--secondary" id="setting-popup-confirm">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}

const SETTING_POPUP_KEY = 'sushichoice-setting-popup-dismissed';

function initSettingPopup() {
  const popup = document.querySelector('#setting-popup');
  if (!popup) return;

  const closeBtn = document.querySelector('#setting-popup-close');
  const confirmBtn = document.querySelector('#setting-popup-confirm');
  const backdrop = document.querySelector('#setting-popup-backdrop');
  const dismissCheckbox = document.querySelector('#setting-popup-dismiss');

  const today = new Date().toISOString().slice(0, 10);
  if (localStorage.getItem(SETTING_POPUP_KEY) === today) return;

  const closePopup = () => {
    if (dismissCheckbox?.checked) {
      localStorage.setItem(SETTING_POPUP_KEY, today);
    }
    popup.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  requestAnimationFrame(() => {
    popup.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener('click', closePopup);
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

function initHomeInteractivity() {
  initSettingPopup();

  // 0. Kick off hero video playback as early as possible
  const heroVideoEl = document.querySelector('.hero-video');
  if (heroVideoEl) {
    heroVideoEl.load();
    const tryPlay = () => {
      const p = heroVideoEl.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    tryPlay();
    heroVideoEl.addEventListener('canplay', tryPlay, { once: true });
  }

  // 1. Step interactivity inside Section 02 (Rotary Experience)
  const steps = document.querySelectorAll('.rotary-step-item');
  const visuals = document.querySelectorAll('.visual-panel');

  let currentStepIndex = 0;

  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      currentStepIndex = index; // Synchronize index when user clicks manually
      
      // Toggle Active Step text
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      // Toggle Active step visual panel
      visuals.forEach(v => v.classList.remove('active'));
      const activeVis = document.querySelector(`#rot-vis-${index + 1}`);
      if (activeVis) activeVis.classList.add('active');
    });
  });

  // Automatically cycle Section 02 steps every 1 second unless hovered (desktop only)
  let stepCycleInterval;
  const stepsContainer = document.querySelector('.rotary-steps-container');

  function startStepCycle() {
    stepCycleInterval = setInterval(() => {
      currentStepIndex = (currentStepIndex + 1) % 4;
      steps[currentStepIndex].click();
    }, 1000);
  }

  function stopStepCycle() {
    clearInterval(stepCycleInterval);
  }

  if (stepsContainer && steps.length > 0) {
    startStepCycle();
  }

  // 2. Split Pinned Scroll Interactivity for Section 06 (Chef's Craft)
  const textBlocks = document.querySelectorAll('.chef-text-block');
  const chefImages = document.querySelectorAll('.chef-visual-img');
  const tempCounter = document.querySelector('#temp-counter');
  const stickyVisual = document.querySelector('.chef-craft__sticky-visual');

  // Simple Scroll spy inside Chef's Craft split section
  let activeCraftStep = 1;
  let isCounting = false;

  // All parts use the same image style — apply fit-philosophy always
  if (stickyVisual) {
    stickyVisual.classList.add('fit-philosophy');
  }

  function handleChefScrollSpy() {
    textBlocks.forEach((block, idx) => {
      const rect = block.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the block center is near the viewport center, trigger change
      if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
        const stepNum = idx + 1;
        if (activeCraftStep !== stepNum) {
          activeCraftStep = stepNum;

          // Cross-fade images
          chefImages.forEach(img => img.classList.remove('active'));
          const targetImg = document.querySelector(`#chef-img-${stepNum}`);
          if (targetImg) targetImg.classList.add('active');

          // Highlight text blocks
          textBlocks.forEach(tb => tb.classList.remove('active'));
          block.classList.add('active');

          // Trigger temperature count-up when step 1 is active
          if (stepNum === 1 && !isCounting) {
            triggerTempCounter();
          }
        }
      }
    });
  }

  function triggerTempCounter() {
    if (!tempCounter) return;
    isCounting = true;
    let currentTemp = 20.0;
    const targetTemp = 36.5;
    const increment = 0.5;
    const speed = 30; // ms

    const interval = setInterval(() => {
      if (currentTemp >= targetTemp) {
        tempCounter.textContent = targetTemp.toFixed(1);
        clearInterval(interval);
        // Reset check after 5s to allow trigger again if scrolled away
        setTimeout(() => { isCounting = false; }, 5000);
      } else {
        currentTemp += increment;
        tempCounter.textContent = currentTemp.toFixed(1);
      }
    }, speed);
  }

  // Initial call and attach event
  window.addEventListener('scroll', handleChefScrollSpy);

  // Trigger initial count-up
  setTimeout(() => {
    triggerTempCounter();
  }, 1000);

  // Clean scroll listener on route navigation
  window.addEventListener('pageLoaded', function cleanup(e) {
    if (e.detail && e.detail.path !== '/') {
      window.removeEventListener('scroll', handleChefScrollSpy);
      stopStepCycle();
      window.removeEventListener('pageLoaded', cleanup);
    }
  });
}
