const roomsOptions = [
  { 
    slides: [
      { src: require('../components/image-slider/img/01.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/02.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/03.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/04.jpg'), alt: '321' }
    ],
    roomNumber: 888, 
    isLux: true,
    price: 9990,
    stars: 5,
    reviewsQuantity: 145,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/02.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/04.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/01.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/08.jpg'), alt: '321' }
    ],
    roomNumber: 840, 
    isLux: false,
    price: 9900,
    stars: 4,
    reviewsQuantity: 65,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/04.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/09.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/07.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/12.jpg'), alt: '321' }
    ],
    roomNumber: 980, 
    isLux: true,
    price: 8500,
    stars: 3,
    reviewsQuantity: 35,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/03.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/01.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/06.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/11.jpg'), alt: '321' }
    ],
    roomNumber: 856, 
    isLux: false,
    price: 7300,
    stars: 5,
    reviewsQuantity: 19,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/05.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/09.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/03.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/01.jpg'), alt: '321' }
    ],
    roomNumber: 740, 
    isLux: false,
    price: 6000,
    stars: 4,
    reviewsQuantity: 44,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/06.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/05.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/11.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/02.jpg'), alt: '321' }
    ],
    roomNumber: 982, 
    isLux: false,
    price: 5800,
    stars: 3,
    reviewsQuantity: 56,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/07.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/01.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/04.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/06.jpg'), alt: '321' }
    ],
    roomNumber: 678, 
    isLux: false,
    price: 5500,
    stars: 5,
    reviewsQuantity: 45,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/08.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/09.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/05.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/12.jpg'), alt: '321' }
    ],
    roomNumber: 450, 
    isLux: false,
    price: 5300,
    stars: 4,
    reviewsQuantity: 39,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/09.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/07.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/04.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/08.jpg'), alt: '321' }
    ],
    roomNumber: 350, 
    isLux: false,
    price: 5000,
    stars: 3,
    reviewsQuantity: 77,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/10.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/03.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/05.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/07.jpg'), alt: '321' }
    ],
    roomNumber: 666, 
    isLux: false,
    price: 5000,
    stars: 5,
    reviewsQuantity: 25,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/11.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/10.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/04.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/08.jpg'), alt: '321' }
    ],
    roomNumber: 444, 
    isLux: false,
    price: 5000,
    stars: 3,
    reviewsQuantity: 15,
    link: 'room.html'
  },
  { 
    slides: [
      { src: require('../components/image-slider/img/12.jpg'), alt: '123' }, 
      { src: require('../components/image-slider/img/02.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/03.jpg'), alt: '321' }, 
      { src: require('../components/image-slider/img/04.jpg'), alt: '321' }
    ],
    roomNumber: 352, 
    isLux: false,
    price: 5000,
    stars: 3,
    reviewsQuantity: 55,
    link: 'room.html'
  },
]

const checkboxButtonsOptions = {
  title: 'правила дома', 
  items: [
    {name: 'smoke', text: 'Можно курить'}, 
    {name: 'pets', checked: true, text: 'Можно с питомцами'}, 
    {name: 'guests', checked: true, text: 'Можно пригласить гостей (до 10 человек)'}
  ]
}

const richCheckboxButtonsOptions = {
  title: 'доступность', itemOptions: [
    {
      name: 'corridorWidth', 
      checked: false, 
      title: 'Широкий коридор', 
      text: 'Ширина коридоров в номере не мение 91 см.'
    }, 
    {
      name: 'halperForinvalids', 
      checked: false, 
      title: 'Помощник для инвалидов', 
      text: 'На 1 этаже вас встретит специалист и проводит до номера'
    }
  ]
}

const expandableCheckboxListOptions = {
  title: 'дополнительные удобства', 
  itemOptions: [
    { checkboxName: 'breakfast', checkboxChecked: false, itemText: 'Завтрак' }, 
    { checkboxName: 'desk', checkboxChecked: true, itemText: 'Письменный стол' }, 
    { checkboxName: 'feedingChair', checkboxChecked: true, itemText: 'Стул для кормления' }, 
    { checkboxName: 'ded', checkboxChecked: true, itemText: 'Кроватка' }, 
    { checkboxName: 'tv', checkboxChecked: false, itemText: 'Телевизор' }, 
    { checkboxName: 'Shampoo', checkboxChecked: false, itemText: 'Шампунь' }
  ]
}

const informationItems = [
  {
    img: require('../components/information-block/img/smile.png'), 
    alt: 'comfort', 
    title: 'Комфорт', 
    text: 'Шумопоглощающие стены'
  },
  {
    img: require('../components/information-block/img/windows.png'), 
    alt: 'windows', 
    title: 'Удобство', 
    text: 'Окно в каждой из спален'}, 
  {
    img: require('../components/information-block/img/fire.png'), 
    alt: 'cosiness', 
    title: 'Уют', 
    text: 'Номер оснащён камином'
  }
]

const reviewsData = [
  {
    photo: require('../components/reviews/img/user1.jpg'), 
    name: 'Мурад Сарафанов', 
    publicationDate: '5 дней назад', 
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.', 
    quantityLikes: 12, 
    liked: true
  },
  {
    photo: require('../components/reviews/img/user2.jpg'), 
    name: 'Патрисия Стёклышкова', 
    publicationDate: 'Неделю назад', 
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент', 
    quantityLikes: 2, 
    liked: false
  }
]

const rulesItems = [
  'Нельзя с питомцами', 
  'Без вечеринок и мероприятий', 
  'Время прибытия — после 13:00, а выезд до 12:00'
]

const roomGalleryData = [
  {
    src: require('../components/room-gallery/img/room-01.jpg'), 
    alt: 'room01'
  }, 
  {
    src: require('../components/room-gallery/img/room-02.jpg'), 
    alt: 'room02'
  }, 
  {
    src: require('../components/room-gallery/img/room-03.jpg'), 
    alt: 'room03'
  },
]

const backgroundSliderOptions = [
  {
    src: require('../components/slider-of-background/img/01.jpg'), 
    alt: 'room01'
  }, 
  {
    src: require('../components/slider-of-background/img/02.jpg'), 
    alt: 'room02'
  }, 
  {
    src: require('../components/slider-of-background/img/03.jpg'), 
    alt: 'room03'
  },
]

const backgroundSliderRegistrationOptions = [
  {
    src: require('../components/slider-of-background/img/04.png'), 
    alt: 'room01'
  }, 
  {
    src: require('../components/slider-of-background/img/01.jpg'), 
    alt: 'room02'
  }, 
  {
    src: require('../components/slider-of-background/img/02.jpg'), 
    alt: 'room03'
  },
]

export { 
  roomsOptions, checkboxButtonsOptions, richCheckboxButtonsOptions, expandableCheckboxListOptions,
  informationItems, reviewsData, rulesItems, roomGalleryData, backgroundSliderOptions,
  backgroundSliderRegistrationOptions
}