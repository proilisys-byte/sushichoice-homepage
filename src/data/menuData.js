// Menu Dataset for SUSHI CHOICE

// ─── Nigiri (초밥) ───
import salmonNigiriImg from '../assets/images/menu/salmon_nigiri.jpg';
import salmonBellyNigiriImg from '../assets/images/menu/salmon_belly_nigiri.jpg';
import flatfishNigiriImg from '../assets/images/menu/flatfish_nigiri.jpg';
import flatfishAgedKimchiImg from '../assets/images/menu/flatfish_aged_kimchi.jpg';
import seabreamNigiriImg from '../assets/images/menu/seabream_nigiri.jpg';
import croakerNigiriImg from '../assets/images/menu/croaker_nigiri.jpg';
import surfClamNigiriImg from '../assets/images/menu/surf_clam_nigiri.jpg';
import conchNigiriImg from '../assets/images/menu/conch_nigiri.jpg';
import cuttlefishNigiriImg from '../assets/images/menu/cuttlefish_nigiri.jpg';
import abaloneNigiriImg from '../assets/images/menu/abalone_nigiri.jpg';
import mackerelBozushiImg from '../assets/images/menu/mackerel_bozushi.jpg';
import sweetShrimpNigiriImg from '../assets/images/menu/sweet_shrimp_nigiri.jpg';
import soyShrimpNigiriImg from '../assets/images/menu/soy_shrimp_nigiri.jpg';
import steamedShrimpNigiriImg from '../assets/images/menu/steamed_shrimp_nigiri.jpg';
import eggNigiriImg from '../assets/images/menu/egg_nigiri.jpg';

// ─── Grilled (직화구이) ───
import grilledWagyuRibeyeImg from '../assets/images/menu/grilled_wagyu_ribeye.jpg';
import grilledBeefShortPlateImg from '../assets/images/menu/grilled_beef_short_plate.jpg';
import grilledSeabreamBellyImg from '../assets/images/menu/grilled_seabream_belly.jpg';
import grilledEelImg from '../assets/images/menu/grilled_eel.jpg';
import grilledConchImg from '../assets/images/menu/grilled_conch.jpg';
import grilledCuttlefishImg from '../assets/images/menu/grilled_cuttlefish.jpg';
import grilledSpottedShrimpImg from '../assets/images/menu/grilled_spotted_shrimp.jpg';
import grilledSteamedShrimpImg from '../assets/images/menu/grilled_steamed_shrimp.jpg';
import grilledSalmonImg from '../assets/images/menu/grilled_salmon.jpg';
import grilledRawShrimpImg from '../assets/images/menu/grilled_raw_shrimp.jpg';

// ─── Roll (롤) ───
import salmonRollImg from '../assets/images/menu/salmon_roll.jpg';
import cheeseShrimpRollImg from '../assets/images/menu/cheese_shrimp_roll.jpg';
import tamagoEelRollImg from '../assets/images/menu/tamago_eel_roll.jpg';
import crabmeatAlmondRollImg from '../assets/images/menu/crabmeat_almond_roll.jpg';
import salmonCrabmeatRollImg from '../assets/images/menu/salmon_crabmeat_roll.jpg';

// ─── Gunkan (군함) ───
import takowasabiGunkanImg from '../assets/images/menu/takowasabi_gunkan.jpg';
import beefTartareGunkanImg from '../assets/images/menu/beef_tartare_gunkan.jpg';
import flyingFishRoeGunkanImg from '../assets/images/menu/flying_fish_roe_gunkan.jpg';

// ─── Side (사이드) ───
import yakitoriImg from '../assets/images/menu/yakitori.jpg';
import menboshaImg from '../assets/images/menu/menbosha.jpg';
import friedCrabLegsImg from '../assets/images/menu/fried_crab_legs.jpg';
import friedChickenDrumetteImg from '../assets/images/menu/fried_chicken_drumette.jpg';

export const menuData = [
  // ───────────────────────────────────────────
  // 1. 초밥 (니기리)
  // ───────────────────────────────────────────
  {
    id: 1,
    name: '연어초밥',
    englishName: 'Salmon Nigiri',
    category: 'salmon',
    price: 2000,
    description: '대서양 청정 해역에서 공수한 기름진 생연어를 부드러운 샤리 위에 올린 스시초이스의 대표 초밥.',
    allergens: '생선, 쌀',
    image: salmonNigiriImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 2,
    name: '연어대뱃살',
    englishName: 'Salmon Belly Nigiri',
    category: 'salmon',
    price: 2000,
    description: '입안에서 사르르 녹는 최고급 연어 대뱃살(하라스) 부위만을 두툼하게 올린 프리미엄 초밥.',
    allergens: '생선, 쌀',
    image: salmonBellyNigiriImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 3,
    name: '광어초밥',
    englishName: 'Flatfish Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '쫄깃하고 담백한 자연산 활광어를 정성껏 손질하여 올린 흰살 생선의 정석 초밥.',
    allergens: '생선, 쌀',
    image: flatfishNigiriImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 4,
    name: '광어묵은지',
    englishName: 'Flatfish & Aged Kimchi Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '담백한 광어 위에 잘 익은 묵은지를 곁들여 깔끔하고 새콤한 풍미가 일품인 이색 초밥.',
    allergens: '생선, 대두, 쌀',
    image: flatfishAgedKimchiImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 5,
    name: '참돔초밥',
    englishName: 'Sea Bream Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '은은한 단맛과 탄력 있는 식감을 자랑하는 봄철 제철 참돔을 올린 고급 흰살 초밥.',
    allergens: '생선, 쌀',
    image: seabreamNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 6,
    name: '점성어초밥',
    englishName: 'Croaker Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '쫀득한 식감과 깊은 감칠맛이 매력적인 점성어를 신선하게 손질하여 올린 활어 초밥.',
    allergens: '생선, 쌀',
    image: croakerNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 7,
    name: '갑오징어초밥',
    englishName: 'Cuttlefish Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '칼집을 넣어 부드럽게 씹히는 쫄깃한 갑오징어의 단맛을 그대로 살린 담백한 초밥.',
    allergens: '연체류/오징어, 쌀',
    image: cuttlefishNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 8,
    name: '참소라초밥',
    englishName: 'Conch Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '오독오독 씹는 맛이 일품인 신선한 참소라를 슬라이스하여 올린 바다 향 가득한 초밥.',
    allergens: '조개류/소라, 쌀',
    image: conchNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 9,
    name: '북방조개초밥',
    englishName: 'Surf Clam Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '쫄깃한 식감과 은은한 단맛이 살아있는 북방조개(홍조개)를 올린 신선한 조개 초밥.',
    allergens: '조개류, 쌀',
    image: surfClamNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 10,
    name: '전복초밥',
    englishName: 'Abalone Nigiri',
    category: 'flatfish',
    price: 2000,
    description: '쫄깃하게 손질한 싱싱한 활전복을 통째로 올려 바다의 영양과 풍미를 담은 보양 초밥.',
    allergens: '조개류/전복, 쌀',
    image: abaloneNigiriImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 11,
    name: '고등어봉초밥',
    englishName: 'Mackerel Bo-zushi',
    category: 'flatfish',
    price: 2000,
    description: '식초에 살짝 절여 비린 맛 없이 고소한 고등어를 길게 눌러 만든 일본식 봉초밥.',
    allergens: '생선, 대두, 쌀',
    image: mackerelBozushiImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 12,
    name: '청미새우',
    englishName: 'Sweet Shrimp Nigiri',
    category: 'shrimp',
    price: 2000,
    description: '투명하고 탱글한 생새우의 폭발하는 단맛을 그대로 느낄 수 있는 신선한 생새우 초밥.',
    allergens: '갑각류, 쌀',
    image: sweetShrimpNigiriImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 13,
    name: '간장새우',
    englishName: 'Soy-marinated Shrimp Nigiri',
    category: 'shrimp',
    price: 2000,
    description: '특제 간장에 숙성시킨 새우를 올려 짭조름하고 감칠맛 깊은 풍미를 살린 초밥.',
    allergens: '갑각류, 대두, 밀, 쌀',
    image: soyShrimpNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 14,
    name: '찐새우초밥',
    englishName: 'Steamed Shrimp Nigiri',
    category: 'shrimp',
    price: 2000,
    description: '담백하게 자숙한 통통한 찐새우를 올려 남녀노소 누구나 부담 없이 즐기는 초밥.',
    allergens: '갑각류, 쌀',
    image: steamedShrimpNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 15,
    name: '계란초밥',
    englishName: 'Tamago (Egg) Nigiri',
    category: 'side',
    price: 2000,
    description: '폭신하고 달콤하게 구워낸 일식 계란말이를 샤리 위에 올린 부드러운 정통 타마고 초밥.',
    allergens: '계란, 대두, 쌀',
    image: eggNigiriImg,
    isSignature: false,
    tag: ''
  },

  // ───────────────────────────────────────────
  // 2. 직화구이
  // ───────────────────────────────────────────
  {
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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

  // ───────────────────────────────────────────
  // 3. 롤 · 군함
  // ───────────────────────────────────────────
  {
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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

  // ───────────────────────────────────────────
  // 4. 사이드
  // ───────────────────────────────────────────
  {
    id: 32,
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
    id: 33,
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
  {
    id: 34,
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

  // ───────────────────────────────────────────
  // 5. 준비 중 메뉴 (실사진 준비 예정)
  // ───────────────────────────────────────────
  {
    id: 35,
    name: '연어직화',
    englishName: 'Grilled Salmon',
    category: 'salmon',
    price: 2000,
    description: '생연어 위에 소스를 얹고 직화 토칭하여 기름진 고소함과 불향을 극대화한 스시.',
    allergens: '생선, 대두, 쌀',
    image: grilledSalmonImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 36,
    name: '생새우직화',
    englishName: 'Grilled Raw Shrimp',
    category: 'shrimp',
    price: 2000,
    description: '신선하고 투명한 생새우에 비법 치즈마요 소스를 얹어 토치로 직화 구이한 스시.',
    allergens: '갑각류, 우유, 쌀',
    image: grilledRawShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 37,
    name: '닭봉튀김',
    englishName: 'Fried Chicken Drumette',
    category: 'side',
    price: 2000,
    description: '짭조름하게 염지한 닭봉 부위를 바삭하게 튀겨내 맥주와 잘 어울리는 사이드 튀김.',
    allergens: '닭고기, 밀',
    image: friedChickenDrumetteImg,
    isSignature: false,
    tag: ''
  }
];
