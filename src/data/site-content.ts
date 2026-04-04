import {
  type BranchLocation,
  type DoctorProfile,
  type FooterLink,
  type Locale,
  type NavigationItem,
  type ProcedureItem,
  type SocialLink,
  type ServiceCategory,
  type SiteCopy,
} from "@/types/site";

export const locales: Locale[] = ["ua", "ru", "en"];

export const siteCopy: Record<Locale, SiteCopy> = {
  ru: {
    topBar: "Працюємо при відключеннях електрики",
    chooseLanguage: "Выберите язык",
    brandName: "Karina Estetic Studio",
    clinicLabel: "Эстетическая косметологическая клиника",
    heroTitle: "Современная косметология, которая работает на красоту и уверенность.",
    heroDescription:
      "Karina Estetic Studio в Днепре сочетает медицинскую экспертность, современные технологии и деликатный персональный подход к каждому пациенту.",
    requestCall: "Заказать звонок",
    watchPresentation: "Смотреть презентацию",
    chooseDistrict: "Связаться с клиникой",
    servicesMenu: "Услуги",
    popularTitle: "Популярные процедуры",
    aboutEyebrow: "О клинике",
    aboutTitle: "Центр эстетической косметологической клиники «Карина Естетик Б'ЮТІ»",
    aboutBody:
      "Центр эстетической косметологической клиники «Карина Естетик Б'ЮТІ» — это современное пространство красоты в городе Днепр, где объединяются передовые технологии, медицинская экспертность и индивидуальный подход к каждому пациенту. Клиника специализируется на решении эстетических проблем кожи, борьбе с признаками старения, омоложении и подтяжке лица, а также коррекции фигуры без хирургического вмешательства.",
    missionTitle: "Миссия",
    missionQuote:
      "Наша миссия — помочь каждому пациенту выглядеть молодо, ухоженно и уверенно в себе.",
    specialistsTitle: "Врачи и специалисты",
    specialistsBody:
      "На главной странице уже выделен основной специалист Karina Asieieva. Ее биография может быть добавлена позже без перестройки макета.",
    equipmentTitle: "Оборудование и лицензии",
    equipmentBody:
      "Наличие лицензии МОЗ Украины позволяет безопасно выполнять инъекционные и лазерные процедуры. Ниже показан реальный сертификат клиники.",
    certificatePlaceholder: "Сертификат клиники",
    videoPlaceholder: "Здесь будет видео-презентация Karina Estetic Studio",
    doctorsPlaceholder: "Фото доктора будет добавлено здесь",
    licenseLabel: "Лицензия МОЗ Украины",
    hoursLabel: "Время работы",
    hoursValue: "Пн-Вс с 10.00 до 21.00",
    quickLinksLabel: "Быстрые ссылки",
    branchesLabel: "Контакты клиники",
    footerNote: "© 2026 Karina Estetic Studio. All rights reserved.",
    navServicesPlaceholder: "Выберите интересующую услугу. Временные страницы уже подготовлены под статус «Скоро будет».",
    introVideoLabel: "Видео клиники",
    yearsPracticeLabel: "Современные методики",
    branchCountLabel: "1",
    licensedClinicLabel: "Клиника с лицензией МОЗ",
    serviceComingSoon: "Скоро будет",
    serviceSectionBody: "Список услуг уже включен в меню и секцию главной страницы. Пока каждая услуга ведет на временное состояние, пока мы не подготовим отдельные страницы.",
    popularSectionBody: "Ключевые направления клиники собраны здесь, чтобы посетитель сразу видел основные запросы и специализацию студии.",
    teamEyebrow: "Главный специалист",
    teamNeedsTitle: "Что еще можно добавить позже",
    licenseNotice: "Официальный сертификат клиники, размещенный на главной странице.",
    mapCardTitle: "Google Maps",
    mapCardBody: "Откройте точку клиники на карте или сразу постройте маршрут до Karina Estetic Studio.",
    openMapLabel: "Открыть карту",
    navigationLabel: "Маршрут",
  },
  ua: {
    topBar: "Працюємо при відключеннях електрики",
    chooseLanguage: "Оберіть мову",
    brandName: "Karina Estetic Studio",
    clinicLabel: "Центр естетичної косметології",
    heroTitle: "Сучасна косметологія для краси, молодості та впевненості.",
    heroDescription:
      "Karina Estetic Studio у Дніпрі поєднує медичну експертність, сучасні технології та індивідуальний підхід до кожного пацієнта.",
    requestCall: "Замовити дзвінок",
    watchPresentation: "Дивитися презентацію",
    chooseDistrict: "Зв'язатися з клінікою",
    servicesMenu: "Послуги",
    popularTitle: "Популярні процедури",
    aboutEyebrow: "Про клініку",
    aboutTitle: "Центр естетичної косметологічної клініки «Карина Естетик Б'ЮТІ»",
    aboutBody:
      "Центр естетичної косметологічної клініки «Карина Естетик Б'ЮТІ» — це сучасний простір краси в місті Дніпро, де поєднуються передові технології, медична експертність та індивідуальний підхід до кожного пацієнта. Наша клініка спеціалізується на вирішенні естетичних проблем шкіри, боротьбі з ознаками старіння, омолодженні та підтяжці обличчя, а також корекції фігури без хірургічного втручання.",
    missionTitle: "Місія",
    missionQuote:
      "Наша місія — допомогти кожному пацієнту виглядати молодо, доглянуто та впевнено у собі.",
    specialistsTitle: "Лікарі та спеціалісти",
    specialistsBody:
      "На головній сторінці вже виділений головний спеціаліст Karina Asieieva. Її детальну біографію та додаткові сертифікати можна додати пізніше без зміни структури сторінки.",
    equipmentTitle: "Обладнання та ліцензії",
    equipmentBody:
      "Наявність ліцензії МОЗ України дозволяє безпечно виконувати ін'єкційні та лазерні процедури. Нижче показано реальний сертифікат клініки.",
    certificatePlaceholder: "Сертифікат клініки",
    videoPlaceholder: "Тут буде відео-презентація Karina Estetic Studio",
    doctorsPlaceholder: "Фото лікаря буде додано тут",
    licenseLabel: "Ліцензія МОЗ України",
    hoursLabel: "Години роботи",
    hoursValue: "Пн-Нд з 10.00 до 21.00",
    quickLinksLabel: "Швидкі посилання",
    branchesLabel: "Контакти клініки",
    footerNote: "© 2026 Karina Estetic Studio. Усі права захищені.",
    navServicesPlaceholder: "Оберіть потрібну послугу. Для кожної вже підготовлено тимчасовий стан «Скоро буде».",
    introVideoLabel: "Відео клініки",
    yearsPracticeLabel: "Сучасні методики",
    branchCountLabel: "1",
    licensedClinicLabel: "Клініка з ліцензією МОЗ",
    serviceComingSoon: "Скоро буде",
    serviceSectionBody: "Список послуг уже винесено в меню та на головну сторінку. Поки що кожна послуга веде до тимчасового стану, доки ми не підготуємо окремі сторінки.",
    popularSectionBody: "Ключові напрями клініки зібрані тут, щоб відвідувач одразу бачив основні запити та спеціалізацію студії.",
    teamEyebrow: "Головний спеціаліст",
    teamNeedsTitle: "Що ще можна додати пізніше",
    licenseNotice: "Офіційний сертифікат клініки, розміщений на головній сторінці.",
    mapCardTitle: "Google Maps",
    mapCardBody: "Відкрийте точку клініки на карті або одразу побудуйте маршрут до Karina Estetic Studio.",
    openMapLabel: "Відкрити карту",
    navigationLabel: "Навігація",
  },
  en: {
    topBar: "We work during power outages",
    chooseLanguage: "Choose language",
    brandName: "Karina Estetic Studio",
    clinicLabel: "Aesthetic cosmetology clinic",
    heroTitle: "Modern cosmetology for beauty, confidence, and healthy skin.",
    heroDescription:
      "Karina Estetic Studio in Dnipro combines medical expertise, advanced technologies, and an individual approach for every patient.",
    requestCall: "Request a call",
    watchPresentation: "Watch presentation",
    chooseDistrict: "Contact the clinic",
    servicesMenu: "Services",
    popularTitle: "Popular procedures",
    aboutEyebrow: "About the clinic",
    aboutTitle: "Karina Estetic Studio aesthetic cosmetology clinic",
    aboutBody:
      "Karina Estetic Studio is a modern beauty and aesthetic clinic in Dnipro, where advanced technology, medical expertise, and an individual patient approach work together. The clinic focuses on skin concerns, anti-aging, facial rejuvenation, and non-surgical body contouring.",
    missionTitle: "Mission",
    missionQuote:
      "Our mission is to help every patient look younger, feel cared for, and stay confident.",
    specialistsTitle: "Doctors and specialists",
    specialistsBody:
      "Karina Asieieva is already featured on the homepage as the lead specialist. A full biography can be added later without changing the layout structure.",
    equipmentTitle: "Equipment and certificates",
    equipmentBody:
      "The clinic operates under a Ministry of Health of Ukraine medical license, allowing safe injectable and laser procedures. The real clinic certificate is shown below.",
    certificatePlaceholder: "Clinic certificate",
    videoPlaceholder: "Karina Estetic Studio presentation video goes here",
    doctorsPlaceholder: "Doctor portrait will be added here",
    licenseLabel: "Ministry of Health of Ukraine license",
    hoursLabel: "Working hours",
    hoursValue: "Mon-Sun from 10:00 to 21:00",
    quickLinksLabel: "Quick links",
    branchesLabel: "Clinic contacts",
    footerNote: "© 2026 Karina Estetic Studio. All rights reserved.",
    navServicesPlaceholder: "Choose a service. Each one is already prepared with a temporary coming soon state.",
    introVideoLabel: "Clinic video",
    yearsPracticeLabel: "Modern methods",
    branchCountLabel: "1",
    licensedClinicLabel: "Licensed clinic",
    serviceComingSoon: "Coming soon",
    serviceSectionBody: "The service list is already placed in the menu and on the homepage. Each item currently leads to a temporary coming soon state until separate pages are prepared.",
    popularSectionBody: "The core clinic directions are gathered here so visitors can immediately understand the studio's main expertise.",
    teamEyebrow: "Lead specialist",
    teamNeedsTitle: "Can be added later",
    licenseNotice: "Official clinic certificate displayed on the homepage.",
    mapCardTitle: "Google Maps",
    mapCardBody: "Open the clinic pin on the map or start turn-by-turn navigation to Karina Estetic Studio.",
    openMapLabel: "Open map",
    navigationLabel: "Directions",
  },
};

export const navigation: NavigationItem[] = [
  {
    label: { ru: "Главная", ua: "Головна", en: "Home" },
    href: "#home",
  },
  {
    label: { ru: "Услуги", ua: "Послуги", en: "Services" },
    href: "#services",
  },
  {
    label: { ru: "Цены", ua: "Ціни", en: "Prices" },
    href: "#prices",
  },
  {
    label: { ru: "Фото", ua: "Фото", en: "Photos" },
    href: "#photos",
  },
  {
    label: { ru: "Акции", ua: "Акції", en: "Promotions" },
    href: "#promotions",
  },
  {
    label: { ru: "Отзывы", ua: "Відгуки", en: "Reviews" },
    href: "#reviews",
  },
  {
    label: { ru: "Специалисты", ua: "Спеціалісти", en: "Specialists" },
    href: "#specialists",
  },
  {
    label: { ru: "Контакты", ua: "Контакти", en: "Contacts" },
    href: "#contacts",
  },
];

export const assetPaths = {
  doctorPhoto: "/images/doctors/karina-asieieva.jpg",
  clinicCertificate: "/images/certificates/clinic-license.jpg",
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: {
      ru: "Косметология лица",
      ua: "Косметологія обличчя",
      en: "Face cosmetology",
    },
    summary: {
      ru: "Уходовые процедуры для кожи и индивидуальные программы омоложения.",
      ua: "Доглядові процедури для шкіри та індивідуальні програми омолодження.",
      en: "Skin care procedures and personalized rejuvenation programs.",
    },
    placeholderItems: [
      {
        ru: "Скоро будет",
        ua: "Скоро буде",
        en: "Coming soon",
      },
    ],
  },
  {
    title: {
      ru: "Биоревитализация",
      ua: "Біоревіталізація",
      en: "Biorevitalization",
    },
    summary: {
      ru: "Глубокое увлажнение кожи и улучшение тонуса и эластичности.",
      ua: "Глибоке зволоження шкіри та покращення тонусу й еластичності.",
      en: "Deep skin hydration with improved tone and elasticity.",
    },
    placeholderItems: [
      {
        ru: "Скоро будет",
        ua: "Скоро буде",
        en: "Coming soon",
      },
    ],
  },
  {
    title: {
      ru: "Пилинг",
      ua: "Пілінг",
      en: "Peeling",
    },
    summary: {
      ru: "Обновление, очищение и выравнивание тона кожи.",
      ua: "Оновлення, очищення та вирівнювання тону шкіри.",
      en: "Skin renewal, cleansing, and tone correction.",
    },
    placeholderItems: [
      {
        ru: "Скоро будет",
        ua: "Скоро буде",
        en: "Coming soon",
      },
    ],
  },
  {
    title: {
      ru: "Трихология",
      ua: "Трихологія",
      en: "Trichology",
    },
    summary: {
      ru: "Диагностика состояния волос и кожи головы, лечение выпадения волос.",
      ua: "Діагностика стану волосся та шкіри голови, лікування випадіння волосся.",
      en: "Hair and scalp diagnostics with support for hair loss treatment.",
    },
    placeholderItems: [
      {
        ru: "Скоро будет",
        ua: "Скоро буде",
        en: "Coming soon",
      },
    ],
  },
  {
    title: {
      ru: "Эндосфера",
      ua: "Ендосфера",
      en: "Endospheres",
    },
    summary: {
      ru: "Коррекция фигуры, улучшение микроциркуляции и тонуса кожи.",
      ua: "Корекція фігури, покращення мікроциркуляції та тонусу шкіри.",
      en: "Body contouring with improved microcirculation and skin tone.",
    },
    placeholderItems: [
      {
        ru: "Скоро будет",
        ua: "Скоро буде",
        en: "Coming soon",
      },
    ],
  },
  {
    title: {
      ru: "Лазерная эпиляция",
      ua: "Лазерна епіляція",
      en: "Laser hair removal",
    },
    summary: {
      ru: "Безопасное и эффективное удаление волос современными методиками.",
      ua: "Безпечне та ефективне видалення волосся сучасними методиками.",
      en: "Safe and effective hair removal with modern methods.",
    },
    placeholderItems: [
      {
        ru: "Скоро будет",
        ua: "Скоро буде",
        en: "Coming soon",
      },
    ],
  },
];

export const popularProcedures: ProcedureItem[] = [
  {
    title: {
      ru: "Косметология лица",
      ua: "Косметологія обличчя",
      en: "Face cosmetology",
    },
    description: {
      ru: "Уходовые процедуры и персональные программы омоложения.",
      ua: "Доглядові процедури та персональні програми омолодження.",
      en: "Care procedures and personalized rejuvenation programs.",
    },
  },
  {
    title: { ru: "Биоревитализация", ua: "Біоревіталізація", en: "Biorevitalization" },
    description: {
      ru: "Глубокое увлажнение и улучшение тонуса кожи.",
      ua: "Глибоке зволоження та покращення тонусу шкіри.",
      en: "Deep hydration and improved skin tone.",
    },
  },
  {
    title: {
      ru: "Пилинг",
      ua: "Пілінг",
      en: "Peeling",
    },
    description: {
      ru: "Обновление, очищение и выравнивание кожи.",
      ua: "Оновлення, очищення та вирівнювання шкіри.",
      en: "Skin renewal, cleansing, and refinement.",
    },
  },
  {
    title: {
      ru: "Трихология",
      ua: "Трихологія",
      en: "Trichology",
    },
    description: {
      ru: "Диагностика волос и кожи головы.",
      ua: "Діагностика волосся та шкіри голови.",
      en: "Hair and scalp diagnostics.",
    },
  },
  {
    title: {
      ru: "Эндосфера",
      ua: "Ендосфера",
      en: "Endospheres",
    },
    description: {
      ru: "Коррекция фигуры и улучшение микроциркуляции.",
      ua: "Корекція фігури та покращення мікроциркуляції.",
      en: "Body contouring and microcirculation support.",
    },
  },
  {
    title: { ru: "Лазерная эпиляция", ua: "Лазерна епіляція", en: "Laser hair removal" },
    description: {
      ru: "Безопасное и эффективное удаление волос.",
      ua: "Безпечне та ефективне видалення волосся.",
      en: "Safe and effective hair removal.",
    },
  },
];

export const doctors: DoctorProfile[] = [
  {
    name: "Karina Asieieva",
    specialization: {
      ru: "Косметолог, beauty doctor",
      ua: "Косметолог, beauty doctor",
      en: "Cosmetologist, beauty doctor",
    },
    bio: {
      ru: "Краткая биография будет добавлена позже. Карточка уже подготовлена под реальное фото, описание и сертификаты врача.",
      ua: "Коротку біографію буде додано пізніше. Картка вже підготовлена під реальне фото, опис та сертифікати лікаря.",
      en: "A short biography will be added later. The card is already prepared for the real portrait, description, and certificates.",
    },
    branch: { ru: "Днепр", ua: "Дніпро", en: "Dnipro" },
    photoPosition: "center center",
    photoScale: 1,
  },
];

export const equipmentBrands = [
  "Косметологія обличчя",
  "Біоревіталізація",
  "Пілінги",
  "Трихологія",
  "Ендосфера-терапія",
  "Лазерна епіляція",
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/estetic_cosmetology_/",
  },
];

export const footerLinks: FooterLink[] = [
  {
    label: { ru: "Правила сайта", ua: "Правила сайту", en: "Site rules" },
    href: "#site-rules",
  },
  {
    label: { ru: "Наш блог", ua: "Наш блог", en: "Our blog" },
    href: "#blog",
  },
  {
    label: { ru: "Карта сайта", ua: "Мапа сайту", en: "Sitemap" },
    href: "#sitemap",
  },
  {
    label: {
      ru: "Конфиденциальность",
      ua: "Конфіденційність",
      en: "Privacy policy",
    },
    href: "#privacy",
  },
];

export const branches: BranchLocation[] = [
  {
    district: { ru: "Днепр", ua: "Дніпро", en: "Dnipro" },
    address: {
      ru: "г. Днепр, ул. Европейская, дом 11А",
      ua: "м. Дніпро, вул. Європейська, буд. 11А",
      en: "11A Yevropeiska Street, Dnipro",
    },
    phone: "+380668888838",
  },
];