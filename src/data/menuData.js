// Menu Dataset for SUSHI CHOICE
// 메뉴판(메뉴1·메뉴2) 기준 구성: 특초밥 / 초밥류 / 군함류 / 직화구이 / 롤 / 튀김류

// ─── 특초밥 (2접시 가격 · 4,000원) ───
import otoroNigiriImg from '../assets/images/menu/otoro_nigiri.jpg';
import steamedAbaloneImg from '../assets/images/menu/steamed_abalone.jpg';
import uniGunkanImg from '../assets/images/menu/uni_gunkan.jpg';
import salmonRoeGunkanImg from '../assets/images/menu/salmon_roe_gunkan.jpg';

// ─── 초밥류 (Nigiri) ───
import swordfishNigiriImg from '../assets/images/menu/swordfish_nigiri.jpg';
import bigeyeTunaNigiriImg from '../assets/images/menu/bigeye_tuna_nigiri.jpg';
import swordfishBellyNigiriImg from '../assets/images/menu/swordfish_belly_nigiri.jpg';
import flatfishNigiriImg from '../assets/images/menu/flatfish_nigiri.jpg';
import seabreamNigiriImg from '../assets/images/menu/seabream_nigiri.jpg';
import croakerNigiriImg from '../assets/images/menu/croaker_nigiri.jpg';
import flatfishAgedKimchiImg from '../assets/images/menu/flatfish_aged_kimchi.jpg';
import salmonBellyNigiriImg from '../assets/images/menu/salmon_belly_nigiri.jpg';
import salmonNigiriImg from '../assets/images/menu/salmon_nigiri.jpg';
import salmonDressingImg from '../assets/images/menu/salmon_dressing.jpg';
import conchNigiriImg from '../assets/images/menu/conch_nigiri.jpg';
import spottedShrimpNigiriImg from '../assets/images/menu/spotted_shrimp_nigiri.jpg';
import soyShrimpNigiriImg from '../assets/images/menu/soy_shrimp_nigiri.jpg';
import steamedShrimpNigiriImg from '../assets/images/menu/steamed_shrimp_nigiri.jpg';
import sweetShrimpNigiriImg from '../assets/images/menu/sweet_shrimp_nigiri.jpg';
import amaebiNigiriImg from '../assets/images/menu/amaebi_nigiri.jpg';
import scallopNigiriImg from '../assets/images/menu/scallop_nigiri.jpg';
import cuttlefishNigiriImg from '../assets/images/menu/cuttlefish_nigiri.jpg';
import inariNigiriImg from '../assets/images/menu/inari_nigiri.jpg';
import eggNigiriImg from '../assets/images/menu/egg_nigiri.jpg';
import surfClamNigiriImg from '../assets/images/menu/surf_clam_nigiri.jpg';
import squidNigiriImg from '../assets/images/menu/squid_nigiri.jpg';
import mackerelBozushiImg from '../assets/images/menu/mackerel_bozushi.jpg';

// ─── 군함류 (Gunkan) ───
import flyingRoeTemakiImg from '../assets/images/menu/flying_roe_temaki.jpg';
import takowasabiGunkanImg from '../assets/images/menu/takowasabi_gunkan.jpg';
import beefTartareGunkanImg from '../assets/images/menu/beef_tartare_gunkan.jpg';
import idoGunkanImg from '../assets/images/menu/ido_gunkan.jpg';
import flyingFishRoeGunkanImg from '../assets/images/menu/flying_fish_roe_gunkan.jpg';

// ─── 직화구이 (Grilled) ───
import grilledWagyuRibeyeImg from '../assets/images/menu/grilled_wagyu_ribeye.jpg';
import grilledBeefShortPlateImg from '../assets/images/menu/grilled_beef_short_plate.jpg';
import grilledSalmonImg from '../assets/images/menu/grilled_salmon.jpg';
import grilledSeabreamBellyImg from '../assets/images/menu/grilled_seabream_belly.jpg';
import grilledEelImg from '../assets/images/menu/grilled_eel.jpg';
import grilledConchImg from '../assets/images/menu/grilled_conch.jpg';
import grilledCuttlefishImg from '../assets/images/menu/grilled_cuttlefish.jpg';
import grilledSpottedShrimpImg from '../assets/images/menu/grilled_spotted_shrimp.jpg';
import grilledAmaebiImg from '../assets/images/menu/grilled_amaebi.jpg';
import grilledSoyShrimpImg from '../assets/images/menu/grilled_soy_shrimp.jpg';
import grilledSteamedShrimpImg from '../assets/images/menu/grilled_steamed_shrimp.jpg';
import grilledSwordfishImg from '../assets/images/menu/grilled_swordfish.jpg';
import grilledSquidImg from '../assets/images/menu/grilled_squid.jpg';
import grilledScallopAdductorImg from '../assets/images/menu/grilled_scallop_adductor.jpg';
import grilledScallopImg from '../assets/images/menu/grilled_scallop.jpg';
import grilledEggImg from '../assets/images/menu/grilled_egg.jpg';
import grilledEggShrimpImg from '../assets/images/menu/grilled_egg_shrimp.jpg';
import yakitoriImg from '../assets/images/menu/yakitori.jpg';

// ─── 롤 (Roll) ───
import salmonCrabmeatRollImg from '../assets/images/menu/salmon_crabmeat_roll.jpg';
import salmonRollImg from '../assets/images/menu/salmon_roll.jpg';
import tamagoEelRollImg from '../assets/images/menu/tamago_eel_roll.jpg';
import cheeseShrimpRollImg from '../assets/images/menu/cheese_shrimp_roll.jpg';
import crabmeatAlmondRollImg from '../assets/images/menu/crabmeat_almond_roll.jpg';

// ─── 튀김류 (Fried) ───
import friedKingShrimpImg from '../assets/images/menu/fried_king_shrimp.jpg';
import friedCrabLegsImg from '../assets/images/menu/fried_crab_legs.jpg';
import friedChickenWingImg from '../assets/images/menu/fried_chicken_wing.jpg';
import menboshaImg from '../assets/images/menu/menbosha.jpg';

export const menuData = [
  // ═══════════════════════════════════════════
  // 0. 특초밥 (SPECIAL · 2접시 가격 4,000원)
  // ═══════════════════════════════════════════
  {
    id: 57,
    name: '오도로',
    englishName: 'Otoro (Tuna Belly)',
    category: 'special',
    price: 4000,
    description: '참다랑어 대뱃살(오도로) 부위만을 두툼하게 올려 입안에서 사르르 녹는 최고급 초밥. 2접시 가격(4,000원) 특선 메뉴입니다.',
    allergens: '생선, 쌀',
    image: otoroNigiriImg,
    isSignature: true,
    tag: '특선'
  },
  {
    id: 58,
    name: '전복찜',
    englishName: 'Steamed Abalone Nigiri',
    category: 'special',
    price: 4000,
    description: '부드럽게 쪄낸 통전복을 올려 쫄깃한 식감과 바다의 영양을 그대로 담은 보양 초밥. 2접시 가격(4,000원) 특선 메뉴입니다.',
    allergens: '조개류/전복, 쌀',
    image: steamedAbaloneImg,
    isSignature: true,
    tag: '특선'
  },
  {
    id: 59,
    name: '성게알',
    englishName: 'Uni (Sea Urchin) Gunkan',
    category: 'special',
    price: 4000,
    description: '진하고 크리미한 성게알(우니)을 김군함 위에 가득 올린 바다의 풍미가 응축된 별미. 2접시 가격(4,000원) 특선 메뉴입니다.',
    allergens: '성게, 쌀',
    image: uniGunkanImg,
    isSignature: true,
    tag: '특선'
  },
  {
    id: 60,
    name: '연어알',
    englishName: 'Salmon Roe (Ikura) Gunkan',
    category: 'special',
    price: 4000,
    description: '톡톡 터지며 짭짤한 감칠맛이 입안 가득 퍼지는 연어알(이쿠라)을 듬뿍 올린 군함 초밥. 2접시 가격(4,000원) 특선 메뉴입니다.',
    allergens: '생선알, 쌀',
    image: salmonRoeGunkanImg,
    isSignature: true,
    tag: '특선'
  },
  {
    id: 24,
    name: '고등어봉초밥',
    englishName: 'Mackerel Bo-zushi',
    category: 'special',
    price: 4000,
    description: '식초에 살짝 절여 비린 맛 없이 고소한 고등어를 길게 눌러 만든 일본식 봉초밥. 2접시 가격(4,000원) 특선 메뉴입니다.',
    allergens: '생선, 대두, 쌀',
    image: mackerelBozushiImg,
    isSignature: false,
    tag: '특선'
  },

  // ═══════════════════════════════════════════
  // 1. 초밥류 (NIGIRI)
  // ═══════════════════════════════════════════
  {
    id: 1,
    name: '황새치초밥',
    englishName: 'Swordfish Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '흰살 참치로 불리는 황새치 살을 부드럽게 손질하여 올린 담백하고 고소한 초밥.',
    allergens: '생선, 쌀',
    image: swordfishNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 2,
    name: '눈다랑어초밥',
    englishName: 'Bigeye Tuna Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '선명한 붉은빛의 눈다랑어 적신을 올려 참치 특유의 담백한 산미와 감칠맛을 살린 초밥.',
    allergens: '생선, 쌀',
    image: bigeyeTunaNigiriImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 3,
    name: '황새치뱃살초밥',
    englishName: 'Swordfish Belly Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '기름이 오른 황새치 뱃살 부위를 올려 입안에서 부드럽게 녹아내리는 고소한 초밥.',
    allergens: '생선, 쌀',
    image: swordfishBellyNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 4,
    name: '광어초밥',
    englishName: 'Flatfish Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '쫄깃하고 담백한 자연산 활광어를 정성껏 손질하여 올린 흰살 생선의 정석 초밥.',
    allergens: '생선, 쌀',
    image: flatfishNigiriImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 5,
    name: '참돔초밥',
    englishName: 'Sea Bream Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '은은한 단맛과 탄력 있는 식감을 자랑하는 제철 참돔을 올린 고급 흰살 초밥.',
    allergens: '생선, 쌀',
    image: seabreamNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 6,
    name: '점성어초밥',
    englishName: 'Croaker Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '쫀득한 식감과 깊은 감칠맛이 매력적인 점성어를 신선하게 손질하여 올린 활어 초밥.',
    allergens: '생선, 쌀',
    image: croakerNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 7,
    name: '광어묵은지',
    englishName: 'Flatfish & Aged Kimchi Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '담백한 광어 위에 잘 익은 묵은지를 곁들여 깔끔하고 새콤한 풍미가 일품인 이색 초밥.',
    allergens: '생선, 대두, 쌀',
    image: flatfishAgedKimchiImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 8,
    name: '연어뱃살',
    englishName: 'Salmon Belly Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '입안에서 사르르 녹는 최고급 연어 뱃살(하라스) 부위만을 두툼하게 올린 프리미엄 초밥.',
    allergens: '생선, 쌀',
    image: salmonBellyNigiriImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 9,
    name: '연어초밥',
    englishName: 'Salmon Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '대서양 청정 해역에서 공수한 기름진 생연어를 부드러운 샤리 위에 올린 대표 초밥.',
    allergens: '생선, 쌀',
    image: salmonNigiriImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 10,
    name: '연어드레싱',
    englishName: 'Salmon with Dressing',
    category: 'nigiri',
    price: 2000,
    description: '생연어 위에 특제 드레싱 소스를 더해 고소함과 상큼함을 동시에 즐기는 연어 초밥.',
    allergens: '생선, 계란, 대두, 쌀',
    image: salmonDressingImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 11,
    name: '참소라초밥',
    englishName: 'Conch Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '오독오독 씹는 맛이 일품인 신선한 참소라를 슬라이스하여 올린 바다 향 가득한 초밥.',
    allergens: '조개류/소라, 쌀',
    image: conchNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 12,
    name: '꽃새우초밥',
    englishName: 'Spotted Shrimp Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '붉은빛이 고운 꽃새우를 올려 새우 특유의 단맛과 탱글한 식감을 살린 초밥.',
    allergens: '갑각류, 쌀',
    image: spottedShrimpNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 13,
    name: '간장새우초밥',
    englishName: 'Soy-marinated Shrimp Nigiri',
    category: 'nigiri',
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
    category: 'nigiri',
    price: 2000,
    description: '담백하게 자숙한 통통한 찐새우를 올려 남녀노소 누구나 부담 없이 즐기는 초밥.',
    allergens: '갑각류, 쌀',
    image: steamedShrimpNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 15,
    name: '청미새우초밥',
    englishName: 'Sweet Shrimp Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '투명하고 탱글한 생새우의 폭발하는 단맛을 그대로 느낄 수 있는 신선한 생새우 초밥.',
    allergens: '갑각류, 쌀',
    image: sweetShrimpNigiriImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 16,
    name: '단새우초밥',
    englishName: 'Amaebi (Sweet Shrimp) Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '쫀득하고 진한 단맛이 일품인 단새우를 올려 입안 가득 새우의 풍미가 퍼지는 초밥.',
    allergens: '갑각류, 쌀',
    image: amaebiNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 17,
    name: '가리비초밥',
    englishName: 'Scallop Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '싱싱한 가리비 관자를 올려 부드럽고 달큰한 바다의 풍미를 그대로 담은 초밥.',
    allergens: '조개류, 쌀',
    image: scallopNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 18,
    name: '갑오징어초밥',
    englishName: 'Cuttlefish Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '칼집을 넣어 부드럽게 씹히는 쫄깃한 갑오징어의 단맛을 그대로 살린 담백한 초밥.',
    allergens: '연체류/오징어, 쌀',
    image: cuttlefishNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 19,
    name: '유부초밥',
    englishName: 'Inari (Tofu Pouch) Sushi',
    category: 'nigiri',
    price: 2000,
    description: '달콤하게 조린 유부 주머니에 새콤한 초밥을 가득 채운 남녀노소 사랑받는 유부초밥.',
    allergens: '대두, 밀, 쌀',
    image: inariNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 20,
    name: '계란초밥',
    englishName: 'Tamago (Egg) Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '폭신하고 달콤하게 구워낸 일식 계란말이를 샤리 위에 올린 부드러운 정통 타마고 초밥.',
    allergens: '계란, 대두, 쌀',
    image: eggNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 21,
    name: '북방조개초밥',
    englishName: 'Surf Clam Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '쫄깃한 식감과 은은한 단맛이 살아있는 북방조개(홍조개)를 올린 신선한 조개 초밥.',
    allergens: '조개류, 쌀',
    image: surfClamNigiriImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 22,
    name: '한치초밥',
    englishName: 'Squid Nigiri',
    category: 'nigiri',
    price: 2000,
    description: '투명하고 부드러운 한치 살을 올려 깔끔하고 은은한 단맛이 매력적인 초밥.',
    allergens: '연체류/오징어, 쌀',
    image: squidNigiriImg,
    isSignature: false,
    tag: ''
  },

  // ═══════════════════════════════════════════
  // 2. 군함류 (GUNKAN)
  // ═══════════════════════════════════════════
  {
    id: 25,
    name: '날치알데마끼',
    englishName: 'Flying Fish Roe Temaki',
    category: 'gunkan',
    price: 2000,
    description: '바삭한 김에 밥과 톡톡 터지는 날치알을 듬뿍 채워 고깔 모양으로 말아낸 손말이 초밥.',
    allergens: '생선알, 쌀',
    image: flyingRoeTemakiImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 26,
    name: '타코와사비',
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
    id: 27,
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
    id: 28,
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
    id: 29,
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

  // ═══════════════════════════════════════════
  // 3. 직화구이 (GRILLED)
  // ═══════════════════════════════════════════
  {
    id: 30,
    name: '꽃등심직화',
    englishName: 'Grilled Wagyu Ribeye',
    category: 'grilled',
    price: 2000,
    description: '부드럽고 풍부한 마블링의 소고기 꽃등심을 직화로 구워 불향과 육즙이 가득한 프리미엄 스시.',
    allergens: '소고기, 대두, 밀, 쌀',
    image: grilledWagyuRibeyeImg,
    isSignature: true,
    tag: 'Best'
  },
  {
    id: 31,
    name: '우삼겹직화',
    englishName: 'Grilled Beef Short Plate',
    category: 'grilled',
    price: 2000,
    description: '고소한 우삼겹을 불길로 빠르게 직화 조리하여 달콤 짭조름한 소스를 얹은 스시.',
    allergens: '소고기, 대두, 밀, 쌀',
    image: grilledBeefShortPlateImg,
    isSignature: false,
    tag: 'Popular'
  },
  {
    id: 32,
    name: '연어직화',
    englishName: 'Grilled Salmon',
    category: 'grilled',
    price: 2000,
    description: '생연어 위에 소스를 얹고 직화 토칭하여 기름진 고소함과 불향을 극대화한 스시.',
    allergens: '생선, 대두, 쌀',
    image: grilledSalmonImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 33,
    name: '도미뱃살양념구이',
    englishName: 'Seasoned Grilled Sea Bream Belly',
    category: 'grilled',
    price: 2000,
    description: '단짠 달콤한 특제 양념을 발라 노릇하게 구워낸 부드러운 도미 뱃살 스시.',
    allergens: '생선, 대두, 밀, 쌀',
    image: grilledSeabreamBellyImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 34,
    name: '민물장어',
    englishName: 'Grilled Freshwater Eel',
    category: 'grilled',
    price: 2000,
    description: '한방 약재를 가미한 달콤한 양념 소스를 발라 구운 영양 만점의 민물장어 스시.',
    allergens: '장어, 대두, 밀, 쌀',
    image: grilledEelImg,
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 35,
    name: '참소라직화',
    englishName: 'Grilled Conch',
    category: 'grilled',
    price: 2000,
    description: '쫄깃하고 담백한 참소라 슬라이스에 소스를 얹어 불꽃으로 향을 입힌 스시.',
    allergens: '조개류/소라, 대두, 쌀',
    image: grilledConchImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 36,
    name: '갑오징어직화',
    englishName: 'Grilled Cuttlefish',
    category: 'grilled',
    price: 2000,
    description: '칼집을 낸 쫄깃한 갑오징어를 직화로 살짝 구워 부드러운 식감과 불향을 입힌 스시.',
    allergens: '연체류/오징어, 쌀',
    image: grilledCuttlefishImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 37,
    name: '꽃새우직화',
    englishName: 'Grilled Spotted Shrimp',
    category: 'grilled',
    price: 2000,
    description: '붉은 꽃새우의 단맛과 고소한 크림소스를 불길로 조화롭게 익혀낸 직화 스시.',
    allergens: '갑각류, 우유, 쌀',
    image: grilledSpottedShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 38,
    name: '단새우직화',
    englishName: 'Grilled Amaebi',
    category: 'grilled',
    price: 2000,
    description: '진한 단맛의 단새우에 특제 소스를 얹고 토치로 직화하여 풍미를 끌어올린 스시.',
    allergens: '갑각류, 대두, 쌀',
    image: grilledAmaebiImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 39,
    name: '새우장직화',
    englishName: 'Grilled Soy-marinated Shrimp',
    category: 'grilled',
    price: 2000,
    description: '간장에 숙성한 새우장을 직화로 살짝 구워 짭조름함과 불향이 어우러진 스시.',
    allergens: '갑각류, 대두, 밀, 쌀',
    image: grilledSoyShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 40,
    name: '찐새우직화',
    englishName: 'Grilled Steamed Shrimp',
    category: 'grilled',
    price: 2000,
    description: '담백한 자숙 찐새우 위에 특제 소스를 얹고 불맛을 낸 남녀노소 즐기기 좋은 스시.',
    allergens: '갑각류, 대두, 쌀',
    image: grilledSteamedShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 41,
    name: '황새치직화',
    englishName: 'Grilled Swordfish',
    category: 'grilled',
    price: 2000,
    description: '황새치 뱃살 부위를 토치로 살짝 익혀 부드러운 식감과 고소한 불향을 끌어올린 스시.',
    allergens: '생선, 대두, 쌀',
    image: grilledSwordfishImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 42,
    name: '한치직화',
    englishName: 'Grilled Squid',
    category: 'grilled',
    price: 2000,
    description: '부드러운 한치 살에 소스를 얹어 직화로 구워 은은한 단맛과 불향을 더한 스시.',
    allergens: '연체류/오징어, 대두, 쌀',
    image: grilledSquidImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 43,
    name: '키조개관자직화',
    englishName: 'Grilled Pen Shell Adductor',
    category: 'grilled',
    price: 2000,
    description: '쫄깃하고 두툼한 키조개 관자를 직화로 구워 고소함과 달큰한 풍미를 살린 스시.',
    allergens: '조개류, 대두, 쌀',
    image: grilledScallopAdductorImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 44,
    name: '가리비직화',
    englishName: 'Grilled Scallop',
    category: 'grilled',
    price: 2000,
    description: '싱싱한 가리비 관자에 소스를 얹어 직화로 구워 부드럽고 달큰하게 즐기는 스시.',
    allergens: '조개류, 대두, 쌀',
    image: grilledScallopImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 45,
    name: '계란직화',
    englishName: 'Grilled Tamago',
    category: 'grilled',
    price: 2000,
    description: '폭신한 계란말이에 소스를 발라 직화로 향을 입혀 달콤 고소하게 즐기는 스시.',
    allergens: '계란, 대두, 쌀',
    image: grilledEggImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 46,
    name: '계란새우직화',
    englishName: 'Grilled Tamago & Shrimp',
    category: 'grilled',
    price: 2000,
    description: '부드러운 계란말이 위에 새우를 올리고 직화로 마무리한 풍성한 한입 스시.',
    allergens: '계란, 갑각류, 대두, 쌀',
    image: grilledEggShrimpImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 47,
    name: '닭꼬치',
    englishName: 'Yakitori (Chicken Skewer)',
    category: 'grilled',
    price: 2000,
    description: '달콤 짭조름한 타레 소스를 덧발라 직화로 정성껏 구워낸 일식 닭꼬치구이.',
    allergens: '닭고기, 대두, 밀',
    image: yakitoriImg,
    isSignature: false,
    tag: ''
  },

  // ═══════════════════════════════════════════
  // 4. 롤 (ROLL)
  // ═══════════════════════════════════════════
  {
    id: 48,
    name: '연어게살말이',
    englishName: 'Salmon Crabmeat Roll',
    category: 'roll',
    price: 2000,
    description: '신선한 생연어로 감싸안은 속안에 샐러드 게살을 듬뿍 채워 한입 가득 즐기는 말이 스시.',
    allergens: '생선, 갑각류, 계란, 쌀',
    image: salmonCrabmeatRollImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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

  // ═══════════════════════════════════════════
  // 5. 튀김류 (FRIED)
  // ═══════════════════════════════════════════
  {
    id: 53,
    name: '왕새우튀김',
    englishName: 'Fried King Shrimp',
    category: 'fried',
    price: 2000,
    description: '크고 살이 꽉 찬 왕새우를 일식 튀김옷으로 아주 바삭하고 부드럽게 튀겨낸 별미.',
    allergens: '갑각류, 밀, 계란',
    image: friedKingShrimpImg,
    isSignature: true,
    tag: 'Popular'
  },
  {
    id: 54,
    name: '대게다리튀김',
    englishName: 'Fried Snow Crab Legs',
    category: 'fried',
    price: 2000,
    description: '얇고 바삭한 튀김옷 속에 촉촉하고 통통한 대게 다리살이 그대로 들어간 튀김.',
    allergens: '갑각류, 밀',
    image: friedCrabLegsImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 55,
    name: '닭봉날개튀김',
    englishName: 'Fried Chicken Wings',
    category: 'fried',
    price: 2000,
    description: '짭조름하게 염지한 닭봉과 날개를 바삭하게 튀겨내 맥주와 잘 어울리는 사이드 튀김.',
    allergens: '닭고기, 밀',
    image: friedChickenWingImg,
    isSignature: false,
    tag: ''
  },
  {
    id: 56,
    name: '멘보샤튀김',
    englishName: 'Mienbaoxia (Fried Shrimp Toast)',
    category: 'fried',
    price: 2000,
    description: '식빵 사이에 다진 새우살을 넣고 바삭하게 튀겨내 겉은 바삭하고 속은 촉촉한 새우 토스트.',
    allergens: '갑각류, 밀, 계란',
    image: menboshaImg,
    isSignature: false,
    tag: ''
  }
];
