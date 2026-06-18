// Menu Dataset for SUSHI CHOICE

// Import fallbacks for desserts/other uses if needed
import flatfishImg from '../assets/images/menu/menu-02-flatfish.jpg';

// Import newly cropped images
import grilledWagyuRibeyeImg from '../assets/images/menu/grilled_wagyu_ribeye.jpg';
import grilledBeefShortPlateImg from '../assets/images/menu/grilled_beef_short_plate.jpg';
import grilledSalmonImg from '../assets/images/menu/grilled_salmon.jpg';
import grilledSeabreamBellyImg from '../assets/images/menu/grilled_seabream_belly.jpg';
import grilledEelImg from '../assets/images/menu/grilled_eel.jpg';
import grilledConchImg from '../assets/images/menu/grilled_conch.jpg';
import grilledCuttlefishImg from '../assets/images/menu/grilled_cuttlefish.jpg';
import grilledRawShrimpImg from '../assets/images/menu/grilled_raw_shrimp.jpg';
import grilledSpottedShrimpImg from '../assets/images/menu/grilled_spotted_shrimp.jpg';
import grilledSteamedShrimpImg from '../assets/images/menu/grilled_steamed_shrimp.jpg';
import grilledSwordfishImg from '../assets/images/menu/grilled_swordfish.jpg';
import salmonRollImg from '../assets/images/menu/salmon_roll.jpg';
import cheeseShrimpRollImg from '../assets/images/menu/cheese_shrimp_roll.jpg';
import tamagoEelRollImg from '../assets/images/menu/tamago_eel_roll.jpg';
import crabmeatAlmondRollImg from '../assets/images/menu/crabmeat_almond_roll.jpg';
import salmonCrabmeatRollImg from '../assets/images/menu/salmon_crabmeat_roll.jpg';
import takowasabiGunkanImg from '../assets/images/menu/takowasabi_gunkan.jpg';
import beefTartareGunkanImg from '../assets/images/menu/beef_tartare_gunkan.jpg';
import flyingFishRoeGunkanImg from '../assets/images/menu/flying_fish_roe_gunkan.jpg';
import idoGunkanImg from '../assets/images/menu/ido_gunkan.jpg';
import yakitoriImg from '../assets/images/menu/yakitori.jpg';
import menboshaImg from '../assets/images/menu/menbosha.jpg';
import friedKingShrimpImg from '../assets/images/menu/fried_king_shrimp.jpg';
import friedCrabLegsImg from '../assets/images/menu/fried_crab_legs.jpg';
import friedChickenDrumetteImg from '../assets/images/menu/fried_chicken_drumette.jpg';

export const menuData = [
  // 1. 적화구이류
  {
    id: 1,
    name: '꽃등심직화',
    englishName: 'Grilled Wagyu Ribeye',
    category: 'wagyu',
    price: 2000,
    description: '부드럽고 풍부한 마블링의 소고기 꽃등심을 직화로 구워 불향과 육즙이 가득한 프리미엄 스시.',
    allergens: '소고기, 대두, 밀, 쌀',
    image: grilledWagyuRibeyeImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 2,
    name: '우삼겹직화',
    englishName: 'Grilled Beef Short Plate',
    category: 'wagyu',
    price: 2000,
    description: '고소한 우삼겹을 불길로 빠르게 직화 조리하여 달콤 짭조름한 소스를 얹은 스시.',
    allergens: '소고기, 대두, 밀, 쌀',
    image: grilledBeefShortPlateImg,
    isSignature: false,
    tag: 'Popular'
  },
  {
    id: 3,
    name: '연어직화',
    englishName: 'Grilled Salmon',
    category: 'salmon',
    price: 2000,
    description: '생연어 위에 소스를 얹고 직화 토칭하여 기름진 고소함과 불향을 극대화한 스시.',
    allergens: '생선, 대두, 쌀',
    image: grilledSalmonImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 4,
    name: '도미뱃살양념구이',
    englishName: 'Seasoned Grilled Sea Bream Belly',
    category: 'flatfish',
    price: 2000,
    description: '단짠 달콤한 특제 양념을 발라 노릇하게 구워낸 부드러운 도미 뱃살 스시.',
    allergens: '생선, 대두, 밀, 쌀',
    image: grilledSeabreamBellyImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 5,
    name: '민물장어초밥',
    englishName: 'Grilled Freshwater Eel',
    category: 'flatfish',
    price: 2000,
    description: '한방 약재를 가미한 달콤한 양념 소스를 발라 구운 영양 만점의 민물장어 초밥.',
    allergens: '장어, 대두, 밀, 쌀',
    image: grilledEelImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 6,
    name: '참소라직화',
    englishName: 'Grilled Conch',
    category: 'flatfish',
    price: 2000,
    description: '쫄깃하고 담백한 참소라 슬라이스에 소스를 얹어 불꽃으로 향을 입힌 스시.',
    allergens: '조개류/소라, 대두, 쌀',
    image: grilledConchImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 7,
    name: '갑오징어직화',
    englishName: 'Grilled Cuttlefish',
    category: 'flatfish',
    price: 2000,
    description: '칼집을 낸 쫄깃한 갑오징어를 직화로 살짝 구워 부드러운 식감과 불향을 입힌 스시.',
    allergens: '연체류/오징어, 쌀',
    image: grilledCuttlefishImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 8,
    name: '생새우직화',
    englishName: 'Grilled Raw Shrimp',
    category: 'shrimp',
    price: 2000,
    description: '신선하고 투명한 생새우에 비법 치즈마요 소스를 얹어 토치로 직화 구이한 스시.',
    allergens: '갑각류, 우유, 쌀',
    image: grilledRawShrimpImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 9,
    name: '꽃새우직화',
    englishName: 'Grilled Spotted Shrimp',
    category: 'shrimp',
    price: 2000,
    description: '붉은 꽃새우의 단맛과 고소한 크림소스를 불길로 조화롭게 익혀낸 직화 스시.',
    allergens: '갑각류, 우유, 쌀',
    image: grilledSpottedShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 10,
    name: '찐새우직화',
    englishName: 'Grilled Steamed Shrimp',
    category: 'shrimp',
    price: 2000,
    description: '담백한 자숙 찐새우 위에 특제 소스를 얹고 불맛을 낸 남녀노소 즐기기 좋은 스시.',
    allergens: '갑각류, 대두, 쌀',
    image: grilledSteamedShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 11,
    name: '황새치직화',
    englishName: 'Grilled Swordfish',
    category: 'tuna',
    price: 2000,
    description: '흰살 참치인 황새치 뱃살 부위를 토치로 살짝 익혀 부드러운 맛을 끌어올린 스시.',
    allergens: '생선, 쌀',
    image: grilledSwordfishImg,
    isSignature: false,
    tag: ''
  },

  // 2. 롤 · 군함류
  {
    id: 12,
    name: '연어롤',
    englishName: 'Salmon Roll',
    category: 'roll',
    price: 2000,
    description: '신선한 생연어 슬라이스를 아낌없이 얹고 날치알과 아일랜드 드레싱을 조화시킨 대형 롤.',
    allergens: '생선, 우유, 계란, 쌀',
    image: salmonRollImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 13,
    name: '치즈새우롤',
    englishName: 'Cheese Shrimp Roll',
    category: 'roll',
    price: 2000,
    description: '롤 위에 고소한 찐새우와 부드러운 슬라이스 치즈를 올린 뒤 데리 소스를 곁들인 롤.',
    allergens: '갑각류, 우유, 대두, 쌀',
    image: cheeseShrimpRollImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 14,
    name: '계란장어롤',
    englishName: 'Tamago Eel Roll',
    category: 'roll',
    price: 2000,
    description: '달콤하고 촉촉한 계란과 고소한 양념 장어를 롤 위에 동시에 얹은 고급 롤.',
    allergens: '계란, 장어, 대두, 밀, 쌀',
    image: tamagoEelRollImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 15,
    name: '크랩맛살아몬드롤',
    englishName: 'Crab Meat Almond Roll',
    category: 'roll',
    price: 2000,
    description: '크랩 맛살 믹스를 가득 넣고 겉면에 고소하게 구운 아몬드 슬라이스를 뿌려 식감을 살린 롤.',
    allergens: '밀, 우유, 아몬드, 쌀',
    image: crabmeatAlmondRollImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 16,
    name: '연어게살말이',
    englishName: 'Salmon Crabmeat Roll',
    category: 'roll',
    price: 2000,
    description: '신선한 생연어로 감싸안은 속안에 샐러드 게살을 듬뿍 채워 한입 가득 즐기는 말이 스시.',
    allergens: '생선, 갑각류, 계란, 쌀',
    image: salmonCrabmeatRollImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 17,
    name: '타코와사비군함',
    englishName: 'Tako Wasabi Gunkan',
    category: 'gunkan',
    price: 2000,
    description: '쫄깃한 문어/낙지를 코가 찡한 알싸한 와사비 소스에 버무려 채운 군함.',
    allergens: '연체류, 와사비, 쌀',
    image: takowasabiGunkanImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 18,
    name: '육회군함',
    englishName: 'Beef Tartare Gunkan',
    category: 'gunkan',
    price: 2000,
    description: '마늘 참기름 양념으로 고소하게 무쳐낸 신선한 육회를 가득 올린 군함초밥.',
    allergens: '소고기, 참기름, 대두, 쌀',
    image: beefTartareGunkanImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 19,
    name: '날치알군함',
    englishName: 'Flying Fish Roe Gunkan',
    category: 'gunkan',
    price: 2000,
    description: '오독오독 씹히는 식감이 일품인 날치알을 김군함 속에 아낌없이 가득 채운 초밥.',
    allergens: '생선알, 쌀',
    image: flyingFishRoeGunkanImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 20,
    name: '이도군함(활어)',
    englishName: 'Ido Gunkan (Minced Fish)',
    category: 'gunkan',
    price: 2000,
    description: '신선하게 다진 활어 필렛에 다진 파와 참기름을 살짝 버무려 산뜻한 고소함을 담은 군함.',
    allergens: '생선, 참기름, 쌀',
    image: idoGunkanImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 21,
    name: '닭꼬치',
    englishName: 'Yakitori (Chicken Skewer)',
    category: 'side',
    price: 2000,
    description: '달콤 짭조름한 타레 소스를 덧발라 직화로 정성껏 구워낸 일식 닭꼬치구이.',
    allergens: '닭고기, 대두, 밀',
    image: yakitoriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 22,
    name: '멘보샤 튀김',
    englishName: 'Mienbaoxia (Fried Shrimp Toast)',
    category: 'side',
    price: 2000,
    description: '식빵 사이에 다진 새우살을 넣고 바삭하게 튀겨내 겉은 바삭하고 속은 촉촉한 새우 토스트.',
    allergens: '갑각류, 밀, 계란',
    image: menboshaImg,
    isSignature: false,
    tag: ''
  },

  // 3. 튀김류
  {
    id: 23,
    name: '왕새우튀김',
    englishName: 'Fried King Shrimp',
    category: 'side',
    price: 2000,
    description: '크고 살이 꽉 찬 왕새우를 일식 튀김옷으로 아주 바삭하고 부드럽게 튀겨낸 별미.',
    allergens: '갑각류, 밀, 계란',
    image: friedKingShrimpImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 24,
    name: '대게다리튀김',
    englishName: 'Fried Snow Crab Legs',
    category: 'side',
    price: 2000,
    description: '얇고 바삭한 튀김옷 속에 촉촉하고 통통한 대게 다리살이 그대로 들어간 튀김.',
    allergens: '갑각류, 밀',
    image: friedCrabLegsImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 25,
    name: '닭봉튀김',
    englishName: 'Fried Chicken Drumette',
    category: 'side',
    price: 2000,
    description: '짭조름하게 염지한 닭봉 부위를 바삭하게 튀겨내 맥주와 잘 어울리는 사이드 튀김.',
    allergens: '닭고기, 밀',
    image: friedChickenDrumetteImg,
    isSignature: false,
    tag: ''
  },

  // 4. 디저트 (기존 유지 및 가격 변경)
  {
    id: 26,
    name: '녹차 아이스크림',
    englishName: 'Green Tea Ice Cream',
    category: 'dessert',
    price: 2000,
    description: '쌉싸름하고 달콤한 정통 일본식 녹차 가루를 아낌없이 넣어 깔끔하게 마무리가 가능한 아이스크림 디저트.',
    allergens: '우유',
    image: flatfishImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 27,
    name: '멜론 디저트',
    englishName: 'Fresh Melon',
    category: 'dessert',
    price: 2000,
    description: '당도 높은 신선한 메론을 먹기 좋은 크기로 썰어 차갑게 제공하는 계절 디저트.',
    allergens: '',
    image: flatfishImg,
    isSignature: false,
    tag: ''
  }
];
