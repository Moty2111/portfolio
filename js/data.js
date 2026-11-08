/* ============================================================
   Moty — portfolio data
   Один источник правды для витрины. Правь тексты здесь.
   ============================================================ */

const CATEGORIES = [
  { id: "all",    ru: "Все работы",        en: "All work" },
  { id: "apps",   ru: "Веб-приложения",    en: "Web apps" },
  { id: "games",  ru: "Игры и 3D",         en: "Games & 3D" },
  { id: "cards",  ru: "Открытки",          en: "Greeting cards" },
  { id: "mobile", ru: "Мобильные",         en: "Mobile" },
  { id: "bots",   ru: "Боты",              en: "Bots" }
];

const UI = {
  ru: {
    title: "Мотя — портфолио",
    meta: "Портфолио Моти: веб-приложения, игры, 3D и интерактивные открытки. React, TypeScript, ASP.NET Core, Python.",
    navWorks: "Работы",
    navStack: "Стек",
    navAbout: "Обо мне",
    navContact: "Контакты",
    heroBadge: "Открыт к интересным проектам",
    heroTitle1: "Интерфейсы, которые",
    heroTitle2: "хочется трогать.",
    heroLead: "Меня зовут Мотя. Делаю веб-приложения, игры и интерактивные открытки — от базы данных и API до последнего пикселя анимации.",
    heroPrimary: "Смотреть работы",
    heroSecondary: "Профиль на GitHub",
    statWorks: "работ в витрине",
    statYears: "года в коде",
    statLangs: "языка в работе",
    statLive: "живых демо",
    role: "Fullstack-разработчик",
    location: "Челябинск · Россия",
    scroll: "Листай вниз",
    worksEyebrow: "Витрина",
    worksTitle: "Избранные работы",
    worksLead: "16 проектов: продуктовые веб-приложения, браузерные игры, мобильные приложения и открытки, нарисованные кодом.",
    searchPlaceholder: "Поиск по названию, стеку, идее…",
    allRepos: "Все репозитории",
    emptyTitle: "Ничего не нашлось",
    emptyText: "Попробуй другой запрос или сбрось фильтры.",
    reset: "Сбросить",
    stackEyebrow: "Инструменты",
    stackTitle: "Чем я работаю",
    stackLead: "Выбираю инструмент под задачу, а не наоборот. Ниже — то, что реально используется в проектах.",
    aboutEyebrow: "Обо мне",
    aboutTitle: "Код как способ делать красиво",
    aboutLead: "Учусь на разработчика и проверяю всё на живых проектах: система учёта волонтёров, магазин стройматериалов, мобильное приложение, 3D-гонки. Люблю, когда логика и визуал работают вместе.",
    aboutP1: "Начинал с открыток на чистом HTML и CSS — сейчас собираю fullstack-приложения с React, TypeScript, ASP.NET Core и SQL Server. Между большими задачами делаю небольшие эксперименты: игры, 3D-сцены, боты.",
    aboutP2: "Мне важны понятный код, аккуратная типографика и уважение к пользователю: быстрая загрузка, доступность, адаптивность и нормальные пустые состояния.",
    principlesTitle: "Принципы",
    principle1: "Сначала задача пользователя, потом эффекты",
    principle2: "Простой код, который легко читать",
    principle3: "Адаптивность и доступность по умолчанию",
    principle4: "Доводить до живого демо, а не до скриншота",
    timelineTitle: "Путь",
    t1: "Первый сайт на HTML и CSS — «Футбольный мир» с другом",
    t2: "Первые боты и адаптивные лендинги",
    t3: "3D-игры на Three.js и открытки на чистом CSS",
    t4: "Fullstack: React, TypeScript, ASP.NET Core, SQL Server",
    contactEyebrow: "Контакты",
    contactTitle: "Давай сделаем что-то классное",
    contactLead: "Открыт к стажировкам, фрилансу и совместным проектам. Отвечаю быстро — особенно если идея интересная.",
    contactEmail: "Написать на почту",
    contactTelegram: "Telegram",
    copy: "Скопировать",
    copied: "Почта скопирована",
    footerNote: "Собрано вручную на HTML, CSS и JavaScript. Без фреймворков и конструкторов.",
    footerWorks: "Работы",
    footerGithub: "GitHub",
    footerContact: "Связаться",
    view: "Смотреть",
    demo: "Демо",
    repo: "Код",
    details: "О проекте",
    stack: "Стек",
    year: "Год",
    roleLabel: "Роль",
    roleSolo: "Дизайн и разработка",
    prev: "Предыдущий",
    next: "Следующий",
    close: "Закрыть",
    results: "проектов",
    themeToLight: "Светлая тема",
    themeToDark: "Тёмная тема",
    openMenu: "Меню"
  },
  en: {
    title: "Moty — portfolio",
    meta: "Moty's portfolio: web apps, games, 3D and interactive greeting cards. React, TypeScript, ASP.NET Core, Python.",
    navWorks: "Work",
    navStack: "Stack",
    navAbout: "About",
    navContact: "Contact",
    heroBadge: "Open to interesting projects",
    heroTitle1: "Interfaces you",
    heroTitle2: "want to touch.",
    heroLead: "I'm Moty. I make web apps, games and interactive cards — from the database and API to the last pixel of animation.",
    heroPrimary: "View work",
    heroSecondary: "GitHub profile",
    statWorks: "projects on show",
    statYears: "years coding",
    statLangs: "languages in use",
    statLive: "live demos",
    role: "Fullstack developer",
    location: "Chelyabinsk · Russia",
    scroll: "Scroll down",
    worksEyebrow: "Showcase",
    worksTitle: "Selected work",
    worksLead: "16 projects: product web apps, browser games, mobile apps and cards drawn in code.",
    searchPlaceholder: "Search by name, stack, idea…",
    allRepos: "All repositories",
    emptyTitle: "Nothing found",
    emptyText: "Try another query or clear the filters.",
    reset: "Reset",
    stackEyebrow: "Tools",
    stackTitle: "What I work with",
    stackLead: "I pick the tool for the task, not the other way around. Below is what actually ships in the projects.",
    aboutEyebrow: "About",
    aboutTitle: "Code as a way to make things beautiful",
    aboutLead: "I study software development and test everything on real projects: a volunteer platform, a building supplies store, a mobile app, 3D racing. I love it when logic and visuals work together.",
    aboutP1: "I started with cards in plain HTML and CSS — now I build fullstack apps with React, TypeScript, ASP.NET Core and SQL Server. Between big tasks I make small experiments: games, 3D scenes, bots.",
    aboutP2: "I care about readable code, careful typography and respect for the user: fast loading, accessibility, responsiveness and proper empty states.",
    principlesTitle: "Principles",
    principle1: "User task first, effects second",
    principle2: "Simple code that is easy to read",
    principle3: "Responsive and accessible by default",
    principle4: "Ship a live demo, not a screenshot",
    timelineTitle: "Path",
    t1: "First site in HTML and CSS — “Football World” with a friend",
    t2: "First bots and responsive landing pages",
    t3: "3D games with Three.js and cards in pure CSS",
    t4: "Fullstack: React, TypeScript, ASP.NET Core, SQL Server",
    contactEyebrow: "Contact",
    contactTitle: "Let's make something great",
    contactLead: "Open to internships, freelance and collaborations. I reply fast — especially when the idea is interesting.",
    contactEmail: "Send an email",
    contactTelegram: "Telegram",
    copy: "Copy",
    copied: "Email copied",
    footerNote: "Hand-built with HTML, CSS and JavaScript. No frameworks, no page builders.",
    footerWorks: "Work",
    footerGithub: "GitHub",
    footerContact: "Get in touch",
    view: "View",
    demo: "Live demo",
    repo: "Code",
    details: "About the project",
    stack: "Stack",
    year: "Year",
    roleLabel: "Role",
    roleSolo: "Design & development",
    prev: "Previous",
    next: "Next",
    close: "Close",
    results: "projects",
    themeToLight: "Light theme",
    themeToDark: "Dark theme",
    openMenu: "Menu"
  }
};

const STACK = [
  {
    id: "frontend",
    ru: "Фронтенд",
    en: "Frontend",
    noteRu: "Интерфейсы, анимации, 3D в браузере",
    noteEn: "Interfaces, animation, 3D in the browser",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Three.js", "Vite", "Tailwind"]
  },
  {
    id: "backend",
    ru: "Бэкенд и данные",
    en: "Backend & data",
    noteRu: "API, бизнес-логика, базы данных",
    noteEn: "APIs, business logic, databases",
    items: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Node.js", "Python", "REST"]
  },
  {
    id: "mobile",
    ru: "Мобильные",
    en: "Mobile",
    noteRu: "Android и кроссплатформенные приложения",
    noteEn: "Android and cross-platform apps",
    items: ["Flutter", "Dart", "React Native", "Expo"]
  },
  {
    id: "tools",
    ru: "Инструменты",
    en: "Tools",
    noteRu: "То, что вокруг кода",
    noteEn: "Everything around the code",
    items: ["Git", "GitHub Actions", "Docker", "Figma", "VS Code", "Visual Studio"]
  }
];

const PROJECTS = [
  {
    id: "volunteersystem",
    name: "VolunteerSystem",
    year: 2026,
    category: "apps",
    featured: true,
    tags: ["React", "TypeScript", "ASP.NET Core", "EF Core", "SQL Server"],
    repo: "https://github.com/Moty2111/VolunteerSystem",
    demo: null,
    art: "dashboard",
    ru: {
      title: "Система учёта волонтёров",
      subtitle: "Fullstack-платформа для волонтёрских организаций",
      blurb: "Мероприятия на карте, запись, назначения, навыки, партнёры и отчёты. React и TypeScript на клиенте, ASP.NET Core и SQL Server на сервере.",
      details: [
        "Роли и права: администратор, организатор, волонтёр",
        "Карта мероприятий на OpenStreetMap и геокодинг Nominatim",
        "REST API на ASP.NET Core с EF Core и миграциями",
        "Демо-данные и инициализация базы при первом запуске"
      ]
    },
    en: {
      title: "Volunteer Management System",
      subtitle: "Fullstack platform for volunteer organisations",
      blurb: "Events on a map, sign-ups, assignments, skills, partners and reports. React and TypeScript on the client, ASP.NET Core and SQL Server on the server.",
      details: [
        "Roles and permissions: admin, organiser, volunteer",
        "Event map on OpenStreetMap with Nominatim geocoding",
        "REST API on ASP.NET Core with EF Core and migrations",
        "Demo data and database seeding on first launch"
      ]
    }
  },
  {
    id: "halloween-2026",
    name: "halloween-2026",
    year: 2026,
    category: "games",
    tags: ["HTML", "CSS", "JavaScript", "Canvas", "WebGL"],
    repo: "https://github.com/Moty2111/halloween-2026",
    demo: "https://moty2111.github.io/halloween-2026/",
    image: "assets/shots/halloween-card.jpg",
    gallery: ["assets/shots/halloween-card.jpg", "assets/shots/halloween-game.jpg", "assets/shots/halloween-2026.jpg"],
    ru: {
      title: "Ночь тыкв · Halloween 2026",
      subtitle: "Готическая сцена, аркада и открытка-конверт",
      blurb: "Интерактивная хэллоуин-сцена в готическом нуаре: кованые ворота в тумане, аркада «Сахарный Поймач» с физикой и открытка с восковой печатью. Вся графика — SVG и Canvas, без единой зависимости.",
      details: [
        "Сцена «Врата»: туман, фонари, кот и тыквы на Canvas",
        "Две аркады: «Сахарный Поймач» и «Котёл»",
        "Открытка-конверт с восковой печатью",
        "Чистые HTML, CSS и JavaScript без сборки"
      ]
    },
    en: {
      title: "Pumpkin Night · Halloween 2026",
      subtitle: "Gothic scene, arcade and an envelope card",
      blurb: "An interactive Halloween scene in gothic noir: wrought-iron gates in the fog, the Sugar Catcher arcade with physics and a card sealed with wax. All graphics are SVG and Canvas, zero dependencies.",
      details: [
        "The Gate scene: fog, lanterns, a cat and pumpkins on Canvas",
        "Two arcades: Sugar Catcher and Cauldron",
        "Envelope card with a wax seal",
        "Plain HTML, CSS and JavaScript, no build step"
      ]
    }
  },
  {
    id: "flowers",
    name: "Flowers-",
    year: 2026,
    category: "mobile",
    tags: ["Flutter", "Dart", "Android", "CI/CD"],
    repo: "https://github.com/Moty2111/Flowers-",
    demo: null,
    image: "assets/shots/flowers-flower_dark.jpg",
    phone: true,
    gallery: ["assets/shots/flowers-flower_dark.jpg", "assets/shots/flowers-horoscope.jpg", "assets/shots/flowers-tarot.jpg", "assets/shots/flowers-friends.jpg"],
    ru: {
      title: "Цветочек",
      subtitle: "Мобильное приложение с характером",
      blurb: "Выращивай цветок, поливай его, читай гороскоп, раскладывай Таро и обменивайся записками с подружками. Flutter, тёмная тема и релизные сборки через GitHub Actions.",
      details: [
        "Цветок, который растёт и реагирует на полив",
        "Гороскоп, Таро и записки между друзьями",
        "Светлая и ночная темы",
        "CI и релизные сборки Flutter в GitHub Actions"
      ]
    },
    en: {
      title: "Little Flower",
      subtitle: "A mobile app with a personality",
      blurb: "Grow a flower, water it, read your horoscope, draw tarot cards and swap notes with friends. Flutter, dark theme and release builds through GitHub Actions.",
      details: [
        "A flower that grows and reacts to watering",
        "Horoscope, tarot and notes between friends",
        "Light and night themes",
        "Flutter CI and release builds in GitHub Actions"
      ]
    }
  },
  {
    id: "monopolist",
    name: "Monopolist",
    year: 2026,
    category: "apps",
    tags: ["C#", "ASP.NET Core", "Razor Pages", "SQL"],
    repo: "https://github.com/Moty2111/Monopolist",
    demo: "https://moty2111.github.io/Monopolist/",
    image: "assets/shots/monopolist-card.jpg",
    ru: {
      title: "Моноплист",
      subtitle: "Управление строительным магазином",
      blurb: "Каталог товаров, клиенты, склад, заказы, поставщики и отчёты — в одном интерфейсе. Razor Pages, три языка, тёмная тема и двухфакторная аутентификация.",
      details: [
        "Каталог с поиском, фильтрами и загрузкой фото",
        "Клиенты, склад, заказы и поставщики",
        "Три языка: русский, английский, казахский",
        "Тёмная тема, компактный режим и 2FA"
      ]
    },
    en: {
      title: "Monopolist",
      subtitle: "Building supplies store management",
      blurb: "Catalogue, customers, stock, orders, suppliers and reports in a single interface. Razor Pages, three languages, dark theme and two-factor authentication.",
      details: [
        "Catalogue with search, filters and image upload",
        "Customers, stock, orders and suppliers",
        "Three languages: Russian, English, Kazakh",
        "Dark theme, compact mode and 2FA"
      ]
    }
  },
  {
    id: "katuysha",
    name: "Katuysha",
    year: 2026,
    category: "cards",
    tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    repo: "https://github.com/Moty2111/Katuysha",
    demo: "https://moty2111.github.io/Katuysha/",
    image: "assets/shots/katuysha-inside.jpg",
    ru: {
      title: "С днём рождения, Катя",
      subtitle: "Открытка с 3D-тортом и играми",
      blurb: "Интерактивная открытка: 3D-торт со свечой, Беззубик, шарики с конфетти, колесо желаний и секретная страница с признанием. Ванильный стек и Three.js.",
      details: [
        "3D-торт: задуй свечу кликом",
        "Беззубик, которого можно вращать",
        "Мини-игры: шарики, колесо желаний",
        "Музыка, анимации и секретная страница"
      ]
    },
    en: {
      title: "Happy Birthday, Katya",
      subtitle: "A card with a 3D cake and games",
      blurb: "An interactive card: a 3D cake with a candle, Toothless, balloons with confetti, a wish wheel and a secret page. Vanilla stack plus Three.js.",
      details: [
        "3D cake: blow out the candle with a click",
        "Toothless you can rotate",
        "Mini-games: balloons, wish wheel",
        "Music, animations and a secret page"
      ]
    }
  },
  {
    id: "mazegame",
    name: "MazeGame",
    year: 2026,
    category: "mobile",
    tags: ["React Native", "Expo", "GitHub Actions"],
    repo: "https://github.com/Moty2111/MazeGame",
    demo: null,
    art: "maze",
    ru: {
      title: "MazeGame",
      subtitle: "Лабиринт в кармане",
      blurb: "Мобильная игра-лабиринт на React Native и Expo: генерация уровней, управление жестами и автоматическая сборка APK через GitHub Actions.",
      details: [
        "Процедурная генерация лабиринтов",
        "Управление жестами на телефоне",
        "Expo и React Native",
        "Сборка APK в GitHub Actions"
      ]
    },
    en: {
      title: "MazeGame",
      subtitle: "A maze in your pocket",
      blurb: "A mobile maze game built with React Native and Expo: level generation, gesture controls and automatic APK builds via GitHub Actions.",
      details: [
        "Procedural maze generation",
        "Gesture controls on the phone",
        "Expo and React Native",
        "APK builds in GitHub Actions"
      ]
    }
  },
  {
    id: "bogdan",
    name: "Bogdan",
    year: 2026,
    category: "cards",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Moty2111/Bogdan",
    demo: "https://moty2111.github.io/Bogdan/",
    art: "gift",
    ru: {
      title: "Открытка для Богдана",
      subtitle: "Подарок, который нужно открыть",
      blurb: "Персональная открытка-подарок: коробка, которую нужно развернуть, фотографии и музыка. Тёмный атмосферный дизайн и анимации на чистом CSS.",
      details: [
        "Коробка с подарком и анимацией открытия",
        "Фотографии и музыка внутри",
        "Тёмная атмосферная палитра",
        "Чистый HTML, CSS и JavaScript"
      ]
    },
    en: {
      title: "A Card for Bogdan",
      subtitle: "A present you have to unwrap",
      blurb: "A personal birthday card: a gift box to unwrap, photos and music. Dark atmospheric design with pure CSS animations.",
      details: [
        "Gift box with an opening animation",
        "Photos and music inside",
        "Dark atmospheric palette",
        "Plain HTML, CSS and JavaScript"
      ]
    }
  },
  {
    id: "nika",
    name: "Nika",
    year: 2026,
    category: "cards",
    tags: ["HTML", "CSS", "PDF"],
    repo: "https://github.com/Moty2111/Nika",
    demo: "https://moty2111.github.io/Nika/",
    image: "assets/shots/nika-card.jpg",
    ru: {
      title: "Открытка для мамы",
      subtitle: "Тёплая история в страницах",
      blurb: "Поздравительная открытка «маме от дочери»: тёплые иллюстрации и PDF-страницы с пожеланиями, собранные в одну историю.",
      details: [
        "Иллюстрированная обложка",
        "PDF-страницы с пожеланиями",
        "Адаптивная вёрстка",
        "Тёплая пастельная палитра"
      ]
    },
    en: {
      title: "A Card for Mom",
      subtitle: "A warm story in pages",
      blurb: "A greeting card “from a daughter to her mom”: warm illustrations and PDF pages with wishes, gathered into one story.",
      details: [
        "Illustrated cover",
        "PDF pages with wishes",
        "Responsive layout",
        "Warm pastel palette"
      ]
    }
  },
  {
    id: "pasxa",
    name: "Pasxa",
    year: 2026,
    category: "cards",
    tags: ["HTML", "CSS", "CSS Art"],
    repo: "https://github.com/Moty2111/Pasxa",
    demo: "https://moty2111.github.io/Pasxa/",
    image: "assets/shots/pasxa-card.jpg",
    ru: {
      title: "Пасхальная открытка",
      subtitle: "Всё нарисовано кодом",
      blurb: "Пасхальная веб-открытка на чистом CSS: кулич со свечой, расписные яйца, кролик, веточки вербы и парящее конфетти.",
      details: [
        "Кулич со свечой и расписные яйца",
        "Кролик, верба и конфетти",
        "CSS-арт без картинок",
        "Адаптивность и лёгкая анимация"
      ]
    },
    en: {
      title: "Easter Card",
      subtitle: "Everything drawn in code",
      blurb: "An Easter web card in pure CSS: a kulich with a candle, painted eggs, a bunny, willow branches and floating confetti.",
      details: [
        "Kulich with a candle and painted eggs",
        "Bunny, willow and confetti",
        "CSS art without images",
        "Responsive and lightly animated"
      ]
    }
  },
  {
    id: "race",
    name: "Race",
    year: 2026,
    category: "games",
    tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    repo: "https://github.com/Moty2111/Race",
    demo: "demos/race/",
    image: "assets/shots/race-card.jpg",
    ru: {
      title: "3D Гонки",
      subtitle: "Кольцевая трасса в браузере",
      blurb: "Браузерная гонка на Three.js: кольцевая трасса, восемь соперников с ИИ, динамические эффекты и лучшее время круга.",
      details: [
        "3D-трасса и машина на Three.js",
        "Восемь соперников под управлением ИИ",
        "Эффекты скорости и освещение",
        "Замер времени круга"
      ]
    },
    en: {
      title: "3D Racing",
      subtitle: "A racetrack in your browser",
      blurb: "A browser racing game on Three.js: a ring track, eight AI rivals, dynamic effects and your best lap time.",
      details: [
        "3D track and car on Three.js",
        "Eight AI-controlled rivals",
        "Speed effects and lighting",
        "Lap time tracking"
      ]
    }
  },
  {
    id: "8marta",
    name: "8marta",
    year: 2026,
    category: "cards",
    tags: ["HTML", "CSS", "JavaScript", "3D CSS"],
    repo: "https://github.com/Moty2111/8marta",
    demo: "https://moty2111.github.io/8marta/",
    image: "assets/shots/8marta-card.jpg",
    ru: {
      title: "Живая 3D-открытка к 8 марта",
      subtitle: "Книга, которая перелистывается",
      blurb: "Открытка с эффектом перелистывания страниц: 3D-книга, анимированные лепестки, парящие цветы и праздничный сюрприз.",
      details: [
        "3D-книга с перелистыванием",
        "Анимированные лепестки и цветы",
        "Сюрприз в конце",
        "3D-трансформации на чистом CSS"
      ]
    },
    en: {
      title: "Live 3D Card for March 8",
      subtitle: "A book that turns its pages",
      blurb: "A card with a page-flip effect: a 3D book, animated petals, floating flowers and a festive surprise.",
      details: [
        "3D book with page turning",
        "Animated petals and flowers",
        "A surprise at the end",
        "3D transforms in pure CSS"
      ]
    }
  },
  {
    id: "strityxa",
    name: "Strityxa",
    year: 2025,
    category: "apps",
    tags: ["HTML", "CSS"],
    repo: "https://github.com/Moty2111/Strityxa",
    demo: "demos/strityxa/",
    image: "assets/shots/strityxa-card.jpg",
    ru: {
      title: "Футбольный мир",
      subtitle: "Мой первый сайт",
      blurb: "Сайт о футболе, сделанный вдвоём с другом на МДК: вёрстка на HTML и CSS без фреймворков, несколько страниц и своя навигация.",
      details: [
        "Первый опыт командной работы",
        "Несколько страниц и навигация",
        "Вёрстка на чистом HTML и CSS",
        "Футбольная тематика и свои материалы"
      ]
    },
    en: {
      title: "Football World",
      subtitle: "My very first website",
      blurb: "A football site made together with a friend for a college project: HTML and CSS without frameworks, several pages and custom navigation.",
      details: [
        "First team experience",
        "Several pages and navigation",
        "Layout in plain HTML and CSS",
        "Football theme with custom content"
      ]
    }
  },
  {
    id: "tgbot",
    name: "TG-Bot",
    year: 2025,
    category: "bots",
    tags: ["Python", "TeleBot", "API"],
    repo: "https://github.com/Moty2111/TG-Bot",
    demo: null,
    art: "chat",
    ru: {
      title: "JutliBot",
      subtitle: "Первый Telegram-бот",
      blurb: "Погода в Челябинске и шутки по кнопкам: первый бот на Python, практика TeleBot и работы с внешними API.",
      details: [
        "Погода через внешний API",
        "Шутки и кнопки в чате",
        "Python и TeleBot",
        "Первый опыт с ботами"
      ]
    },
    en: {
      title: "JutliBot",
      subtitle: "My first Telegram bot",
      blurb: "Weather in Chelyabinsk and jokes on buttons: my first Python bot, practice with TeleBot and external APIs.",
      details: [
        "Weather through an external API",
        "Jokes and inline buttons",
        "Python and TeleBot",
        "First bot experience"
      ]
    }
  },
  {
    id: "mysawes",
    name: "My-sawes",
    year: 2025,
    category: "apps",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Moty2111/My-sawes",
    demo: "https://moty2111.github.io/My-sawes/",
    image: "assets/shots/my-sawes-card.jpg",
    ru: {
      title: "BuildPro",
      subtitle: "Магазин стройматериалов",
      blurb: "Адаптивный прототип магазина стройматериалов и инструментов: каталог, карточки товаров и современный интерфейс.",
      details: [
        "Каталог и карточки товаров",
        "Адаптивная сетка",
        "Чистый HTML, CSS и JavaScript",
        "Живая версия на GitHub Pages"
      ]
    },
    en: {
      title: "BuildPro",
      subtitle: "Building supplies store",
      blurb: "A responsive prototype of a building materials and tools store: catalogue, product cards and a modern interface.",
      details: [
        "Catalogue and product cards",
        "Responsive grid",
        "Plain HTML, CSS and JavaScript",
        "Live version on GitHub Pages"
      ]
    }
  },
  {
    id: "mysawes2",
    name: "My-sawes2",
    year: 2025,
    category: "apps",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Moty2111/My-sawes2",
    demo: "https://moty2111.github.io/My-sawes2/",
    art: "swatches",
    ru: {
      title: "Напольные покрытия",
      subtitle: "253 товара в новой палитре",
      blurb: "Магазин напольных покрытий с градиентной темой на зелёном, жёлтом, оранжевом и синем: 253 товара и прототип реального сайта.",
      details: [
        "253 товара в каталоге",
        "Градиентная цветовая схема",
        "Альтернативная версия BuildPro",
        "Живая версия на GitHub Pages"
      ]
    },
    en: {
      title: "Flooring Store",
      subtitle: "253 products in a new palette",
      blurb: "A flooring store with a gradient theme in green, yellow, orange and blue: 253 products and a prototype of a real site.",
      details: [
        "253 products in the catalogue",
        "Gradient colour scheme",
        "Alternative take on BuildPro",
        "Live version on GitHub Pages"
      ]
    }
  },
  {
    id: "negrusty",
    name: "Ne-grusty",
    year: 2026,
    category: "cards",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Moty2111/Ne-grusty",
    demo: "https://moty2111.github.io/Ne-grusty/",
    image: "assets/shots/ne-grusty-card.jpg",
    ru: {
      title: "Для Кати · тихая ночь",
      subtitle: "Открытка-письмо",
      blurb: "Тихая ночная открытка-письмо: сцена, тёплый текст и музыка. Минимум элементов, максимум атмосферы.",
      details: [
        "Ночная сцена и мягкий свет",
        "Текст-письмо и музыка",
        "Минималистичный интерфейс",
        "Чистый HTML, CSS и JavaScript"
      ]
    },
    en: {
      title: "For Katya · Quiet Night",
      subtitle: "A card that reads like a letter",
      blurb: "A quiet night letter: a scene, warm words and music. Minimal elements, maximum atmosphere.",
      details: [
        "Night scene and soft light",
        "Letter text and music",
        "Minimal interface",
        "Plain HTML, CSS and JavaScript"
      ]
    }
  }
];
