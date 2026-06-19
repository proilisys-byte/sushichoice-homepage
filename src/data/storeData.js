// Store Dataset for SUSHI CHOICE

import songnaeExt from '../assets/images/store/store-songnae-ext.jpg';
import songnaeInt from '../assets/images/store/store-songnae-int.jpg';
import songnaeLoc from '../assets/images/store/store-songnae-loc.png';
import songnaeMap from '../assets/images/store/store-songnae-map.jpg';

import eungyeExt from '../assets/images/store/store-eungye-ext.jpg';
import eungyeInt from '../assets/images/store/store-eungye-int.jpg';
import eungyeLoc from '../assets/images/store/store-eungye-loc.png';
import eungyeMap from '../assets/images/store/store-eungye-map.jpg';

import songdoExt from '../assets/images/store/store-songdo-ext.jpg';
import songdoInt from '../assets/images/store/store-songdo-int.jpg';
import songdoLoc from '../assets/images/store/store-songdo-loc.png';
import songdoMap from '../assets/images/store/store-songdo-map.jpg';

import incheonExt from '../assets/images/store/store-incheon-ext.jpg';
import incheonInt from '../assets/images/store/store-incheon-int.jpg';
import incheonLoc from '../assets/images/store/store-incheon-loc.png';
import incheonMap from '../assets/images/store/store-incheon-map.jpg';

export const storeData = [
  {
    id: 'songnae',
    name: '송내본점',
    englishName: 'Songnae Headquarters',
    address: '경기 부천시 원미구 부일로243번길 52-4 (1호선,송내역 3번 출구에서 613m)',
    addressLot: '경기도 부천시 원미구 상동 441-1',
    tel: '0507-1436-9955',
    hours: '매일 11:30 - 21:30 (평일 Break 15:00~17:00 / 주말 Break 없음, 라스트 오더 21:00)',
    parking: '매장앞 주차가능',
    seats: '다찌(회전 레일 바) 18석, 독립 부스형 4인 패밀리 테이블 6개 (총 42석)',
    description: '스시초이스의 시작과 브랜드 철학이 시작된 본점입니다. 저희 스시초이스는 회전초밥 전문점 으로 한접시당 2,000원 균일가로 맛있고 좋은 가성비로 고객들을 만족시켜드리는 초밥맛집으로 당일 공급받은 최상의 활어만을 사용하며 고퀄리티하이앤드 오마카세 공법으로 숙달된 쉐프들이 직접손으로 쥐어 제공해 드리고있습니다.정성가득하고 가성비 좋은 정통 초밥의 맛을 느껴보세요.',
    mapUrl: 'https://map.naver.com/p/entry/place/1325888474',
    imageExt: songnaeExt,
    imageLoc: songnaeLoc,
    imageInt: songnaeInt,
    imageMap: songnaeMap
  },
  {
    id: 'eungye',
    name: '시흥은계점',
    englishName: 'Siheung Eungye Store',
    address: '경기 시흥시 은계로 142번길 7-11 1층',
    tel: '031-313-1309',
    hours: '매일 11:30 - 21:30 (평일 Break 15:00~17:00 / 주말 Break 없음, 라스트 오더 21:00)',
    parking: '매장앞 주차가능',
    seats: '다찌 16석, 독립 부스형 4인 테이블 8개, 아기 동반 전용 좌식 패밀리 존 2개 (총 56석)',
    description: '은계지구 중심가에 위치하여 어린아이를 동반한 가족 외식 고객을 최우선으로 배려한 쾌적한 매장 설계와 균일가 접시당 2,000원 고퀄리티와 맛을 자랑하는 회전초밥전문점입니다. 쉐프들이 오마카세(당일준비한 신선한재료를 직접손으로 쥔초밥)방식으로 당일들어온 엄선된 제철의 신선한 재료만을 제공하고있으며 가족들이 드신다는 마음갖음으로 가족모임이나 연인들의 사랑을 받고있는 초밥맛집입니다.',
    mapUrl: 'https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1661169536',
    imageExt: eungyeExt,
    imageLoc: eungyeLoc,
    imageInt: eungyeInt,
    imageMap: eungyeMap
  },
  {
    id: 'songdo',
    name: '송도점',
    englishName: 'Songdo Store',
    address: '인천 연수구 컨벤시아대로 81 1층 128호',
    tel: '0507-1427-4500',
    hours: '매일 11:30 - 21:30 (라스트 오더 21:00)',
    parking: '지하 주차장 입차 후 매장 결제 시 최대 3시간 무료 주차 등록',
    seats: '다찌 20석, 2인 프라이빗 부스 4개, 4인 패밀리 테이블 8개 (총 60석)',
    description: '송도 센트럴파크의 수려한 뷰와 함께 즐기는 어반 시크 다이닝. 모던 럭셔리 디자인과 연인/친구와 데이트하기 좋은 2인 전용 부스석이 인기입니다.',
    mapUrl: 'https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1807470923',
    imageExt: songdoExt,
    imageLoc: songdoLoc,
    imageInt: songdoInt,
    imageMap: songdoMap
  },
  {
    id: 'incheon',
    name: '인천서구점',
    englishName: 'Incheon Seogu Store',
    address: '인천 서구 염곡로498번안길 11 1층',
    tel: '0507-1481-8853',
    hours: '매일 11:30 - 21:30 (라스트 오더 21:00)',
    parking: '매장 전면 지상 주차구역 및 건물 뒷편 무료 주차장 완비',
    seats: '다찌 14석, 4인 패밀리 테이블 6개 (총 38석)',
    description: '청라국제도시 및 검단지구 초입에 인접하여 접근성이 매우 뛰어난 매장입니다. 엄격한 콜드체인을 통해 당일 배송된 신선한 활어 위주의 미식을 선사합니다.',
    mapUrl: 'https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%B4%88%EC%9D%B4%EC%8A%A4/place/1028288848',
    imageExt: incheonExt,
    imageLoc: incheonLoc,
    imageInt: incheonInt,
    imageMap: incheonMap
  }
];
