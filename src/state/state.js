/* eslint-disable global-require */
const roomsOptions = [
  {
    slides: [
      { src: require('../components/image-slider/img/01.webp'), alt: '123' },
      { src: require('../components/image-slider/img/02.webp'), alt: '321' },
      { src: require('../components/image-slider/img/03.webp'), alt: '321' },
      { src: require('../components/image-slider/img/04.webp'), alt: '321' },
    ],
    roomNumber: 888,
    isLux: true,
    price: 9990,
    stars: 5,
    reviewsQuantity: 145,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/02.webp'), alt: '123' },
      { src: require('../components/image-slider/img/04.webp'), alt: '321' },
      { src: require('../components/image-slider/img/01.webp'), alt: '321' },
      { src: require('../components/image-slider/img/08.webp'), alt: '321' },
    ],
    roomNumber: 840,
    isLux: false,
    price: 9900,
    stars: 4,
    reviewsQuantity: 65,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/04.webp'), alt: '123' },
      { src: require('../components/image-slider/img/09.webp'), alt: '321' },
      { src: require('../components/image-slider/img/07.webp'), alt: '321' },
      { src: require('../components/image-slider/img/12.webp'), alt: '321' },
    ],
    roomNumber: 980,
    isLux: true,
    price: 8500,
    stars: 3,
    reviewsQuantity: 35,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/03.webp'), alt: '123' },
      { src: require('../components/image-slider/img/01.webp'), alt: '321' },
      { src: require('../components/image-slider/img/06.webp'), alt: '321' },
      { src: require('../components/image-slider/img/11.webp'), alt: '321' },
    ],
    roomNumber: 856,
    isLux: false,
    price: 7300,
    stars: 5,
    reviewsQuantity: 19,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/05.webp'), alt: '123' },
      { src: require('../components/image-slider/img/09.webp'), alt: '321' },
      { src: require('../components/image-slider/img/03.webp'), alt: '321' },
      { src: require('../components/image-slider/img/01.webp'), alt: '321' },
    ],
    roomNumber: 740,
    isLux: false,
    price: 6000,
    stars: 4,
    reviewsQuantity: 44,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/06.webp'), alt: '123' },
      { src: require('../components/image-slider/img/05.webp'), alt: '321' },
      { src: require('../components/image-slider/img/11.webp'), alt: '321' },
      { src: require('../components/image-slider/img/02.webp'), alt: '321' },
    ],
    roomNumber: 982,
    isLux: false,
    price: 5800,
    stars: 3,
    reviewsQuantity: 56,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/07.webp'), alt: '123' },
      { src: require('../components/image-slider/img/01.webp'), alt: '321' },
      { src: require('../components/image-slider/img/04.webp'), alt: '321' },
      { src: require('../components/image-slider/img/06.webp'), alt: '321' },
    ],
    roomNumber: 678,
    isLux: false,
    price: 5500,
    stars: 5,
    reviewsQuantity: 45,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/08.webp'), alt: '123' },
      { src: require('../components/image-slider/img/09.webp'), alt: '321' },
      { src: require('../components/image-slider/img/05.webp'), alt: '321' },
      { src: require('../components/image-slider/img/12.webp'), alt: '321' },
    ],
    roomNumber: 450,
    isLux: false,
    price: 5300,
    stars: 4,
    reviewsQuantity: 39,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/09.webp'), alt: '123' },
      { src: require('../components/image-slider/img/07.webp'), alt: '321' },
      { src: require('../components/image-slider/img/04.webp'), alt: '321' },
      { src: require('../components/image-slider/img/08.webp'), alt: '321' },
    ],
    roomNumber: 350,
    isLux: false,
    price: 5000,
    stars: 3,
    reviewsQuantity: 77,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/10.webp'), alt: '123' },
      { src: require('../components/image-slider/img/03.webp'), alt: '321' },
      { src: require('../components/image-slider/img/05.webp'), alt: '321' },
      { src: require('../components/image-slider/img/07.webp'), alt: '321' },
    ],
    roomNumber: 666,
    isLux: false,
    price: 5000,
    stars: 5,
    reviewsQuantity: 25,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/11.webp'), alt: '123' },
      { src: require('../components/image-slider/img/10.webp'), alt: '321' },
      { src: require('../components/image-slider/img/04.webp'), alt: '321' },
      { src: require('../components/image-slider/img/08.webp'), alt: '321' },
    ],
    roomNumber: 444,
    isLux: false,
    price: 5000,
    stars: 3,
    reviewsQuantity: 15,
    link: 'room.html',
  },
  {
    slides: [
      { src: require('../components/image-slider/img/12.webp'), alt: '123' },
      { src: require('../components/image-slider/img/02.webp'), alt: '321' },
      { src: require('../components/image-slider/img/03.webp'), alt: '321' },
      { src: require('../components/image-slider/img/04.webp'), alt: '321' },
    ],
    roomNumber: 352,
    isLux: false,
    price: 5000,
    stars: 3,
    reviewsQuantity: 55,
    link: 'room.html',
  },
];

const checkboxButtonsOptions = {
  title: 'правила дома',
  items: [
    { name: 'smoke', text: 'Можно курить' },
    { name: 'pets', checked: true, text: 'Можно с питомцами' },
    { name: 'guests', checked: true, text: 'Можно пригласить гостей (до 10 человек)' },
  ],
};

const richCheckboxButtonsOptions = {
  title: 'доступность',
  modifier: 'rich',
  items: [
    {
      name: 'corridorWidth',
      checked: false,
      title: 'Широкий коридор',
      text: 'Ширина коридоров в номере не мение 91 см.',
      modifier: 'rich',
    },
    {
      name: 'halperForinvalids',
      checked: false,
      title: 'Помощник для инвалидов',
      text: 'На 1 этаже вас встретит специалист и проводит до номера',
      modifier: 'rich',
    },
  ],
};

const expandableCheckboxListOptions = {
  title: 'дополнительные удобства',
  modifier: 'expandable',
  items: [
    { name: 'breakfast', checked: false, text: 'Завтрак' },
    { name: 'desk', checked: true, text: 'Письменный стол' },
    { name: 'feedingChair', checked: true, text: 'Стул для кормления' },
    { name: 'ded', checked: true, text: 'Кроватка' },
    { name: 'tv', checked: false, text: 'Телевизор' },
    { name: 'Shampoo', checked: false, text: 'Шампунь' },
  ],
};

const informationItems = [
  {
    img: require('../components/information-block/img/smile.svg'),
    alt: 'comfort',
    title: 'Комфорт',
    text: 'Шумопоглощающие стены',
  },
  {
    img: require('../components/information-block/img/windows.svg'),
    alt: 'windows',
    title: 'Удобство',
    text: 'Окно в каждой из спален' },
  {
    img: require('../components/information-block/img/fire.svg'),
    alt: 'cosiness',
    title: 'Уют',
    text: 'Номер оснащён камином',
  },
];

const reviewsData = [
  {
    photo: require('../components/reviews/img/user1.webp'),
    name: 'Мурад Сарафанов',
    publicationDate: '5 дней назад',
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    quantityLikes: 12,
    liked: true,
  },
  {
    photo: require('../components/reviews/img/user2.webp'),
    name: 'Патрисия Стёклышкова',
    publicationDate: 'Неделю назад',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    quantityLikes: 2,
    liked: false,
  },
];

const rulesItems = [
  'Нельзя с питомцами',
  'Без вечеринок и мероприятий',
  'Время прибытия — после 13:00, а выезд до 12:00',
];

const roomGalleryData = [
  {
    src: require('../components/room-gallery/img/room-01.webp'),
    alt: 'room01',
  },
  {
    src: require('../components/room-gallery/img/room-02.webp'),
    alt: 'room02',
  },
  {
    src: require('../components/room-gallery/img/room-03.webp'),
    alt: 'room03',
  },
];

const sliderOfBackgroundOptions = [
  {
    src: require('../components/slider-of-background/img/01.webp'),
    alt: 'room01',
  },
  {
    src: require('../components/slider-of-background/img/02.webp'),
    alt: 'room02',
  },
  {
    src: require('../components/slider-of-background/img/03.webp'),
    alt: 'room03',
  },
];

const sliderOfBackgroundRegistrationOptions = [
  {
    src: require('../components/slider-of-background/img/04.webp'),
    alt: 'room01',
  },
  {
    src: require('../components/slider-of-background/img/01.webp'),
    alt: 'room02',
  },
  {
    src: require('../components/slider-of-background/img/02.webp'),
    alt: 'room03',
  },
];

export {
  roomsOptions, checkboxButtonsOptions, richCheckboxButtonsOptions, expandableCheckboxListOptions,
  informationItems, reviewsData, rulesItems, roomGalleryData, sliderOfBackgroundOptions,
  sliderOfBackgroundRegistrationOptions,
};
