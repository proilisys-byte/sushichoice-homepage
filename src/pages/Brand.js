// Brand Philosophy Page Component for SUSHI CHOICE

import logoEmblem from '../assets/images/brand/logo-emblem.png';
import brandChefBg from '../assets/images/chef/chef-ceo.jpg';

export async function renderBrand() {
  return `
    <main class="page-brand">
      <!-- Brand Hero Section -->
      <section class="brand-hero" style="background-image: linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url(${brandChefBg});">
        <div class="brand-hero__content container reveal">
          <img src="${logoEmblem}" alt="" class="brand-hero__emblem" />
          <span class="brand-hero__subtitle text-en">OUR STORY</span>
          <h1 class="brand-hero__title">내 가족이 먹는다는 마음으로,<br/>신선함과 정성을 매일 담습니다.</h1>
          <p class="brand-hero__desc">대한민국 프리미엄 회전초밥의 기준, 스시초이스의 시작과 신념</p>
          <div class="divider-gold divider-gold--center divider-gold--wide"></div>
        </div>
      </section>

      <!-- Vision & Mission Section -->
      <section class="section section--dark">
        <div class="container container--narrow text-center">
          <div class="section-header reveal">
            <span class="section-label">VISION & MISSION</span>
            <h2 class="section-title">스시초이스가 나아가는 방향</h2>
            <div class="divider-gold divider-gold--center"></div>
          </div>
          
          <div class="vision-grid reveal">
            <div class="vision-card gold-frame">
              <span class="vision-card__num text-en">01</span>
              <h3>BRAND VISION</h3>
              <p>대한민국 회전초밥 업계에서 가장 세련되고 고급스러운 프리미엄 브랜드 플랫폼을 구축하여 대중성과 품격의 완벽한 조화를 지향합니다.</p>
            </div>
            <div class="vision-card gold-frame">
              <span class="vision-card__num text-en">02</span>
              <h3>BRAND MISSION</h3>
              <p>좋은 재료 · 합리적인 가격 · 잊지 못할 즐거운 미식 경험. 이 세 가지 핵심 가치만큼은 어떤 타협도 없이 매일 약속하고 실행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Brand Philosophy Section -->
      <section class="section section--warm">
        <div class="container">
          <div class="section-header text-center reveal">
            <span class="section-label">BRAND PHILOSOPHY</span>
            <h2 class="section-title">장인의 3대 원칙</h2>
            <p class="section-subtitle">기계가 절대 흉내 낼 수 없는 영역, 정직함으로 승부합니다.</p>
            <div class="divider-gold divider-gold--center"></div>
          </div>

          <div class="philosophy-list">
            <!-- Principle 1 -->
            <div class="philosophy-item reveal">
              <div class="philosophy-item__text">
                <span class="philosophy-item__num text-en">PRINCIPLE 01</span>
                <h3>신선함은 타협하지 않습니다</h3>
                <p class="philosophy-item__bold">"새벽 03:00, 산지의 어선이 출항하기 전부터 스시초이스의 하루는 이미 시작됩니다."</p>
                <p>1등급 완도산 광어, 제주산 생참치, 동해산 단새우 등 전국 유명 포구에서 엄선한 최상급 수산물만을 매일 새벽 콜드체인을 통해 직송 받습니다. 당일 배송된 신선한 재료는 오전 중 장인들의 정교한 칼질로 전면 손질되어 당일 전량 소진을 원칙으로 삼습니다.</p>
              </div>
              <div class="philosophy-item__image-container gold-frame">
                <div class="philosophy-item__image" style="background-image: url(${brandChefBg});"></div>
              </div>
            </div>

            <!-- Principle 2 -->
            <div class="philosophy-item philosophy-item--reverse reveal">
              <div class="philosophy-item__text">
                <span class="philosophy-item__num text-en">PRINCIPLE 02</span>
                <h3>매일, 내 가족을 위해 준비합니다</h3>
                <p class="philosophy-item__bold">"부모님과 소중한 내 아이들이 건강하고 안전하게 미식을 즐길 수 있도록 만듭니다."</p>
                <p>스시초이스의 모든 음식에는 인공 화학 조미료(MSG)와 인공 방부제를 배제합니다. 천연 효모로 자연 발효시킨 특제 곡물식초로 샤리를 조리하고, 3년간 간수를 뺀 국내 신안 천일염으로 밥의 풍미를 돋웁니다. 단 단가 타협을 위해 저품질 쌀을 섞지 않으며, 오직 단일 품종 최고급 신동진 쌀만을 고집합니다.</p>
              </div>
              <div class="philosophy-item__image-container gold-frame">
                <div class="philosophy-item__image" style="background-image: url(${brandChefBg});"></div>
              </div>
            </div>

            <!-- Principle 3 -->
            <div class="philosophy-item reveal">
              <div class="philosophy-item__text">
                <span class="philosophy-item__num text-en">PRINCIPLE 03</span>
                <h3>정직한 맛은 손끝의 온도로 전해집니다</h3>
                <p class="philosophy-item__bold">"경력 15년 이상의 숙련된 일식 장인의 손을 거쳐 36.5°C의 따뜻한 감동을 쥐어냅니다."</p>
                <p>아침마다 가마솥 방식으로 정성스럽게 밥을 짓고, 셰프의 체온인 36.5°C에 맞춰 샤리를 레일 위에 서빙합니다. 기계로 딱딱하게 압착한 밥알은 초밥의 신선함을 저해합니다. 장인의 적당한 압력을 거친 샤리는 밥알 사이에 산소층을 품어, 혀끝에 닿는 순간 기분 좋게 풀어지는 극상의 텍스처를 완성합니다.</p>
              </div>
              <div class="philosophy-item__image-container gold-frame">
                <div class="philosophy-item__image" style="background-image: url(${brandChefBg});"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Brand Story Section -->
      <section class="section section--dark story-section">
        <div class="container container--narrow reveal">
          <h2 class="story-title text-center">왜 회전초밥은 가볍고<br/>대중적이기만 해야 할까?</h2>
          <div class="divider-gold divider-gold--center"></div>
          
          <div class="story-content">
            <p>스시초이스는 이 단순하지만 무거운 질문에서 첫걸음을 내딛었습니다.</p>
            <p>우리는 단순히 레일 위에 플라스틱 접시를 돌려 음식을 제공하는 식당이 아닙니다. 회전 레일이라는 플랫폼을 셰프와 고객이 역동적으로 시각적 소통을 나누는 <strong>'가장 호화로운 미식의 무대'</strong>로 재정의하고자 하였습니다.</p>
            <p>고급 일식 오마카세의 타협 없는 절대적인 식자재 퀄리티와 장인의 전통 방식 기법은 온전히 이식하되, 회전초밥만이 가질 수 있는 자유롭고 즐거운 외식 문화를 접목하였습니다.</p>
            <p>은은한 황금빛 레일 위를 지나가는 접시들은 단순한 상품이 아닌 장인의 고집이 담긴 개별 작품이며, 소중한 분들과 나누는 행복한 만찬을 향한 정성스러운 초대장입니다.</p>
          </div>
        </div>
      </section>
    </main>
  `;
}
