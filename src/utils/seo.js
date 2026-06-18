// Dynamic SEO/GEO & JSON-LD Schema Controller for SUSHI CHOICE
import logoImg from '../assets/images/brand/logo.png';
import songnaeExt from '../assets/images/store/store-songnae-ext.jpg';
import eungyeExt from '../assets/images/store/store-eungye-ext.jpg';
import songdoExt from '../assets/images/store/store-songdo-ext.jpg';
import incheonExt from '../assets/images/store/store-incheon-ext.jpg';

const DEFAULT_TITLE = '스시초이스 | Premium Rotary Sushi Experience';
const DEFAULT_DESC = '움직이는 예술, 장인의 온도. 대한민국 프리미엄 회전초밥 브랜드 스시초이스(SUSHI CHOICE). 신선한 재료와 15년 경력 장인의 36.5°C 정성을 담은 미식 경험을 제공합니다.';
const DEFAULT_KEYWORDS = '스시초이스, 회전초밥, 회전초밥 맛집, 프리미엄 회전초밥, 초밥 맛집, 가족외식 맛집';

const SEO_DATA = {
  '/': {
    title: '스시초이스 | Premium Rotary Sushi Experience',
    desc: '움직이는 예술, 장인의 온도. 대한민국 프리미엄 회전초밥 브랜드 스시초이스. 신선함은 돌고 만족은 남습니다.',
    keywords: '스시초이스, 회전초밥, 회전초밥 맛집, 프리미엄 회전초밥, 초밥 맛집, 가족외식 맛집',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        'name': '스시초이스 송내본점',
        'image': `https://sushichoice.co.kr${logoImg}`,
        'url': 'https://sushichoice.co.kr',
        'telephone': '0507-1436-9955',
        'priceRange': '$$',
        'servesCuisine': 'Japanese, Sushi',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '부일로243번길 52-4',
          'addressLocality': '부천시 원미구',
          'addressRegion': '경기도',
          'postalCode': '14622',
          'addressCountry': 'KR'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '11:30',
            'closes': '21:30'
          }
        ],
        'menu': 'https://sushichoice.co.kr/menu'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': '스시초이스',
        'url': 'https://sushichoice.co.kr',
        'logo': `https://sushichoice.co.kr${logoImg}`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '0507-1436-9955',
          'contactType': 'customer service'
        }
      }
    ]
  },
  '/brand': {
    title: '브랜드 철학 | 스시초이스',
    desc: '신선함은 돌고, 만족은 남습니다. 36.5°C 장인의 손끝이 빚어내는 스시초이스의 원칙과 스토리를 소개합니다.',
    keywords: '스시초이스 철학, 스시초이스 스토리, 회전초밥 역사, 장인의 온도',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': '스시초이스 브랜드 소개',
        'description': '36.5°C 장인의 온도로 신선한 스시를 빚는 스시초이스의 브랜드 철학.'
      }
    ]
  },
  '/menu': {
    title: '미식 메뉴 | 스시초이스',
    desc: '대서양 연어부터 최고급 와규까지, 80여 가지 이상의 다채롭고 신선한 초밥을 골든 레일 위에서 즐기세요.',
    keywords: '스시초이스 메뉴, 연어초밥, 참치초밥, 생새우초밥, 육회초밥, 군함말이, 와규초밥',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'MenuPage',
        'name': '스시초이스 미식 메뉴판',
        'description': '스시초이스의 80여 가지 이상의 회전초밥 메뉴 정보'
      }
    ]
  },
  '/store': {
    title: '매장 안내 | 스시초이스',
    desc: '가까운 스시초이스 매장을 찾아보세요. 송내본점, 은계점, 송도점, 인천서구점에서 프리미엄 회전초밥을 만나실 수 있습니다.',
    keywords: '스시초이스 매장, 송내 스시초이스, 은계 스시초이스, 송도 스시초이스, 인천 스시초이스',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'url': 'https://sushichoice.co.kr/store/songnae',
            'name': '스시초이스 송내본점'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'url': 'https://sushichoice.co.kr/store/eungye',
            'name': '스시초이스 은계점'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'url': 'https://sushichoice.co.kr/store/songdo',
            'name': '스시초이스 송도점'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'url': 'https://sushichoice.co.kr/store/incheon',
            'name': '스시초이스 인천서구점'
          }
        ]
      }
    ]
  },
  '/store/songnae': {
    title: '송내본점 | 스시초이스 - 송내역 회전초밥 맛집',
    desc: '스시초이스 송내본점. 송내역 대표 프리미엄 회전초밥 전문점. 무료 주차 지원, 넓은 테이블석 완비, 가족 외식 및 모임 최적화.',
    keywords: '송내 회전초밥, 송내역 초밥 맛집, 부천 회전초밥, 상동 회전초밥, 송내 가족외식',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        'name': '스시초이스 송내본점',
        'image': `https://sushichoice.co.kr${songnaeExt}`,
        'telephone': '0507-1436-9955',
        'url': 'https://sushichoice.co.kr/store/songnae',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '부일로243번길 52-4',
          'addressLocality': '부천시 원미구',
          'addressRegion': '경기도',
          'postalCode': '14622',
          'addressCountry': 'KR'
        },
        'hasMap': 'https://map.naver.com/p/entry/place/1325888474',
        'openingHours': 'Mo-Su 11:30-21:30'
      }
    ]
  },
  '/store/eungye': {
    title: '시흥은계점 | 스시초이스 - 은계지구 회전초밥 맛집',
    desc: '스시초이스 시흥은계점. 은계지구 대표 프리미엄 회전초밥 전문점. 쾌적한 인테리어와 키즈 동반 가족 식사에 어울리는 최상의 편의 제공.',
    keywords: '은계 회전초밥, 시흥은계 초밥 맛집, 은계지구 맛집, 은계 가족외식, 시흥 회전초밥',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        'name': '스시초이스 시흥은계점',
        'image': `https://sushichoice.co.kr${eungyeExt}`,
        'telephone': '031-311-6616',
        'url': 'https://sushichoice.co.kr/store/eungye',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '은행동 646-12 2층',
          'addressLocality': '시흥시',
          'addressRegion': '경기도',
          'postalCode': '14902',
          'addressCountry': 'KR'
        },
        'hasMap': 'https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1661169536',
        'openingHours': 'Mo-Su 11:30-21:30'
      }
    ]
  },
  '/store/songdo': {
    title: '송도점 | 스시초이스 - 송도 센트럴파크 회전초밥 맛집',
    desc: '스시초이스 송도점. 송도국제도시 센트럴파크 주변 데이트 및 모임하기 좋은 모던 럭셔리 회전초밥 맛집. 최고 등급 원재료 사용.',
    keywords: '송도 회전초밥, 송도 초밥 맛집, 센트럴파크 맛집, 송도 데이트 맛집, 인천송도 일식',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        'name': '스시초이스 송도점',
        'image': `https://sushichoice.co.kr${songdoExt}`,
        'telephone': '032-832-8318',
        'url': 'https://sushichoice.co.kr/store/songdo',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '송도동 22-21 2층',
          'addressLocality': '연수구',
          'addressRegion': '인천광역시',
          'postalCode': '21997',
          'addressCountry': 'KR'
        },
        'hasMap': 'https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1807470923',
        'openingHours': 'Mo-Su 11:30-21:30'
      }
    ]
  },
  '/store/incheon': {
    title: '인천서구점 | 스시초이스 - 청라 검단 회전초밥 맛집',
    desc: '스시초이스 인천서구점. 신선하고 대중적인 고품질 스시를 즐길 수 있는 인천 서구 대표 회전초밥 다이닝.',
    keywords: '인천서구 회전초밥, 인천 서구 초밥 맛집, 검단 회전초밥, 청라 회전초밥 맛집',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        'name': '스시초이스 인천서구점',
        'image': `https://sushichoice.co.kr${incheonExt}`,
        'telephone': '032-562-1028',
        'url': 'https://sushichoice.co.kr/store/incheon',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '서구 심곡동 246-8 1층',
          'addressLocality': '서구',
          'addressRegion': '인천광역시',
          'postalCode': '22718',
          'addressCountry': 'KR'
        },
        'hasMap': 'https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1028288848',
        'openingHours': 'Mo-Su 11:30-21:30'
      }
    ]
  },
  '/franchise': {
    title: '가맹 창업 안내 | 스시초이스',
    desc: '월 3억 매출 신화, 검증된 시스템! 스시초이스와 함께 성공적인 일식 회전초밥 창업을 시작하세요. 체계적인 본사 지원 시스템 운영.',
    keywords: '회전초밥 창업, 일식 창업, 외식 프랜차이즈, 초밥 체인점, 스시초이스 가맹문의',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': '스시초이스 프랜차이즈 창업 기획관',
        'description': '스시초이스 가맹 개설 조건 및 예상 수익 계산 제공'
      }
    ]
  },
  '/careers': {
    title: '인재 채용 | 스시초이스',
    desc: '좋은 스시는 좋은 사람이 만듭니다. 스시초이스와 함께 성장할 홀 매니저, 전문 셰프 및 파트타이머를 상시 모집합니다.',
    keywords: '스시초이스 채용, 일식 셰프 구직, 홀서빙 구직, 외식업 채용, 주방 보조 구인',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': '스시초이스 채용 안내관',
        'description': '스시초이스 정규직 및 파트타이머 입사지원'
      }
    ]
  },
  '/review': {
    title: '고객 리뷰 | 스시초이스',
    desc: '방문 고객님들이 직접 작성해주신 진심 가득한 네이버, 인스타그램, 블로그 미식 경험 리뷰를 확인하세요.',
    keywords: '스시초이스 후기, 스시초이스 리뷰, 스시초이스 방문기, 회전초밥 맛 평가',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'UserComments',
        'name': '스시초이스 고객 만족 평가'
      }
    ]
  },
  '/faq': {
    title: '자주 묻는 질문(FAQ) | 스시초이스',
    desc: '스시초이스 이용 팁! 가격 정보, 주차 정보, 유아 전용 시설, 포장/배달 여부 및 창업 관련 자주 묻는 질문을 모았습니다.',
    keywords: '스시초이스 가격, 스시초이스 주차, 스시초이스 포장, 유아동반 초밥집',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '스시초이스 접시당 가격은 어떻게 되나요?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '스시초이스는 일반 접시당 2,000원의 가성비 뛰어난 균일가 제도를 바탕으로, 최고급 블랙 플레이트 스페셜 등 다양한 라인업을 제공하여 합리적인 선택을 도모하고 있습니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '포장이나 배달 주문도 가능한가요?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '네, 가능합니다. 매일 배달의민족, 쿠팡이츠 등 배달 플랫폼을 통해 신선하고 꼼꼼한 포장 배달 서비스를 제공하며, 매장 유선 전화를 통한 픽업 포장도 적극 지원합니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '가족 단위 외식에 아이들과 같이 가도 괜찮나요?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '물론입니다. 스시초이스는 어린이를 동반한 3~4인 가족 고객분들이 편안하게 대화하며 식사할 수 있도록 아늑한 독립형 테이블 부스석과 어린이 전용 의자, 맵지 않은 와사비 조절 초밥을 완비하고 있습니다.'
            }
          }
        ]
      }
    ]
  },
  '/contact': {
    title: '고객 및 제휴 문의 | 스시초이스',
    desc: '스시초이스 서비스 피드백, 단체 예약, 마케팅 제휴 및 기타 궁금한 사항이 있으시다면 간편하게 메시지를 남겨주세요.',
    keywords: '스시초이스 고객센터, 단체 예약 문의, 스시초이스 제휴, 일식 마케팅 제휴'
  }
};

/**
 * Updates dynamic meta tags and JSON-LD scripts based on current route path.
 * @param {string} rawPath 
 */
export function updateSEO(rawPath) {
  let path = rawPath.toLowerCase();
  // Handle store detail matching
  if (path.startsWith('/store/') && path.length > 7) {
    path = '/store/:id';
    
    // Dynamic replacement of specific store titles if possible
    const storeId = rawPath.split('/').pop().toLowerCase();
    const storeKeys = {
      'songnae': '/store/songnae',
      'eungye': '/store/eungye',
      'songdo': '/store/songdo',
      'incheon': '/store/incheon'
    };
    if (storeKeys[storeId]) {
      path = storeKeys[storeId];
    }
  }

  const data = SEO_DATA[path] || SEO_DATA['/'];

  // 1. Update document title
  document.title = data.title;

  // 2. Update meta tags
  updateMeta('description', data.desc);
  updateMeta('keywords', data.keywords);
  
  // OG & Twitter Meta
  updateMeta('og:title', data.title, 'property');
  updateMeta('og:description', data.desc, 'property');
  updateMeta('twitter:title', data.title);
  updateMeta('twitter:description', data.desc);

  // 3. Update Canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', `https://sushichoice.co.kr${rawPath === '/' ? '' : rawPath}`);

  // 4. Update JSON-LD Script tag
  // Remove existing dynamic schemas
  document.querySelectorAll('script[type="application/ld+json"].dynamic-schema').forEach(el => el.remove());

  // Inject new schemas
  if (data.schemas) {
    data.schemas.forEach(schemaObj => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-schema';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });
  }
}

/**
 * Helper to update or create a meta tag.
 */
function updateMeta(name, content, attrType = 'name') {
  let element = document.querySelector(`meta[${attrType}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrType, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

// Make globally available so it can be called from router.js
window.updateSEO = updateSEO;
