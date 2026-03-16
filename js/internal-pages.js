(function () {
    var contacts = {
        phoneLabel: '+7 (965) 158-53-14',
        phoneHref: 'tel:+79651585314',
        telegramLabel: '@shelbycar1',
        telegramHref: 'https://t.me/shelbycar1',
        whatsappLabel: 'WhatsApp',
        whatsappHref: 'https://wa.me/79651585314',
        email: 'info@shelbycar.ru',
        address: 'г. Москва, ул. Детейлинговая, 10',
        hours: 'Ежедневно с 10:00 до 21:00'
    };

    var services = {
        'service-polirovka-kuzova': {
            title: 'Полировка кузова',
            priceFrom: 'от 15 000 ₽',
            heroImage: 'assets/polirovka.jpg',
            lead: 'Глубокая восстановительная и защитная полировка кузова с подбором этапов под текущее состояние лакокрасочного покрытия.',
            paragraphs: [
                'Полировка кузова помогает убрать мелкие царапины, помутнение лака, следы неправильной мойки и вернуть автомобилю глубокий блеск. Мы подбираем мягкую или многоэтапную схему работ после осмотра кузова.',
                'Перед началом работ проводится деликатная мойка, очистка и подготовка поверхности. По итогам полировки можем дополнительно нанести защитное покрытие для продления эффекта.'
            ],
            bullets: [
                'Осмотр ЛКП и подбор схемы работ',
                'Удаление паутинки, матовости и следов эксплуатации',
                'Возможность сочетать с керамикой или твердым воском'
            ],
            priceRows: [
                ['Легкая полировка кузова', 'от 15 000 ₽'],
                ['Восстановительная полировка', 'от 25 000 ₽'],
                ['Полировка одного элемента', 'от 2 500 ₽']
            ],
            gallery: ['assets/polirovka.jpg', 'assets/IMG_20251108_152806.jpg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'service-okleika-kuzova': {
            title: 'Оклейка кузова',
            priceFrom: 'от 60 000 ₽',
            heroImage: 'assets/okleika.jpg',
            lead: 'Оклейка кузова полиуретановыми и виниловыми пленками для защиты ЛКП, изменения внешнего вида и сохранения стоимости автомобиля.',
            paragraphs: [
                'Оклейка помогает защитить кузов от пескоструя, реагентов и мелких повреждений. Работаем как с локальной защитой уязвимых зон, так и с полной оклейкой автомобиля.',
                'Подберем материал под задачу: прозрачная антигравийная пленка для защиты, цветная или декоративная пленка для смены образа автомобиля.'
            ],
            bullets: [
                'Антигравийная защита зон риска или всего кузова',
                'Оклейка глянцевыми, матовыми и цветными пленками',
                'Точная подгонка и аккуратная работа по контурам кузова'
            ],
            priceRows: [
                ['Оклейка зоны риска', 'от 60 000 ₽'],
                ['Оклейка капота', 'от 22 000 ₽'],
                ['Полная оклейка кузова', 'от 230 000 ₽']
            ],
            gallery: ['assets/okleika.jpg', 'assets/IMG-20251118-WA0007.jpeg', 'assets/IMG_20251108_152806.jpg']
        },
        'service-pokraska-kuzova': {
            title: 'Покраска кузова',
            priceFrom: 'от 10 000 ₽',
            heroImage: 'assets/pokraska.jpg',
            lead: 'Локальная и комплексная покраска кузовных элементов с восстановлением эстетики автомобиля и точным подбором цвета.',
            paragraphs: [
                'Проводим малярные работы для устранения сколов, потертостей, царапин и последствий небольших ДТП. Тщательно подготавливаем поверхность и контролируем совпадение оттенка.',
                'В зависимости от повреждения можем предложить локальный ремонт, покраску детали или комплексное восстановление нескольких элементов.'
            ],
            bullets: [
                'Подготовка, грунтование и окрашивание элемента',
                'Подбор цвета под заводской оттенок',
                'Финишная доводка и контроль качества'
            ],
            priceRows: [
                ['Покраска одного элемента', 'от 10 000 ₽'],
                ['Локальный ремонт скола', 'от 3 500 ₽'],
                ['Покраска бампера', 'от 14 000 ₽']
            ],
            gallery: ['assets/pokraska.jpg', 'assets/kraska.jpg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'service-pokrytie-kuzova': {
            title: 'Защитное покрытие кузова',
            priceFrom: 'от 18 000 ₽',
            heroImage: 'assets/pokrytie.jpg',
            lead: 'Нанесение керамики, кварца и других защитных составов для сохранения блеска кузова и упрощения дальнейшего ухода.',
            paragraphs: [
                'Защитное покрытие уменьшает воздействие грязи, влаги, ультрафиолета и дорожной химии на лакокрасочное покрытие. Автомобиль дольше выглядит чистым и ухоженным.',
                'Перед нанесением покрытие кузова обязательно подготавливается: выполняется очистка, обезжиривание и при необходимости полировка.'
            ],
            bullets: [
                'Подготовка кузова перед нанесением состава',
                'Премиальные защитные материалы',
                'Рекомендации по уходу после выдачи автомобиля'
            ],
            priceRows: [
                ['Керамическое покрытие 1 слой', 'от 18 000 ₽'],
                ['Керамическое покрытие 2-3 слоя', 'от 35 000 ₽'],
                ['Твердый воск', 'от 7 000 ₽']
            ],
            gallery: ['assets/pokrytie.jpg', 'assets/polirovka.jpg', 'assets/IMG-20251118-WA0007.jpeg']
        },
        'service-himchistka-salona': {
            title: 'Химчистка салона',
            priceFrom: 'от 8 000 ₽',
            heroImage: 'assets/himia.jpg',
            lead: 'Комплексная химчистка салона автомобиля с безопасной очисткой тканей, кожи, пластика и труднодоступных зон.',
            paragraphs: [
                'Убираем загрязнения, запахи, пятна и следы ежедневной эксплуатации. Работаем аккуратно с различными типами материалов и подбираем химию под состояние салона.',
                'После химчистки салон выглядит свежо, а поверхности становятся чище и приятнее в эксплуатации. При необходимости выполняем дополнительную антибактериальную обработку.'
            ],
            bullets: [
                'Очистка сидений, ковролина, потолка и багажника',
                'Деликатная работа с тканью, кожей и алькантарой',
                'Удаление локальных и сложных загрязнений'
            ],
            priceRows: [
                ['Комплексная химчистка салона', 'от 8 000 ₽'],
                ['Химчистка сиденья', 'от 1 500 ₽'],
                ['Озонация салона', 'от 2 500 ₽']
            ],
            gallery: ['assets/himia.jpg', 'assets/res.jpg', 'assets/IMG_20251108_152806.jpg']
        },
        'service-restavratsiya-salona': {
            title: 'Реставрация салона',
            priceFrom: 'от 5 000 ₽',
            heroImage: 'assets/res.jpg',
            lead: 'Восстановление потертых, поврежденных и изношенных элементов салона для возвращения аккуратного и премиального внешнего вида.',
            paragraphs: [
                'Реставрируем кожаные и пластиковые элементы, устраняем потертости, царапины, локальные повреждения и следы эксплуатации.',
                'Объем работ рассчитывается после осмотра, так как стоимость зависит от типа материала, размера зоны и степени износа.'
            ],
            bullets: [
                'Восстановление кожи, пластика и декоративных элементов',
                'Подбор оттенка под интерьер автомобиля',
                'Локальный ремонт без замены детали, когда это возможно'
            ],
            priceRows: [
                ['Реставрация руля', 'от 5 000 ₽'],
                ['Реставрация сиденья', 'от 7 000 ₽'],
                ['Локальный ремонт элемента', 'от 3 000 ₽']
            ],
            gallery: ['assets/res.jpg', 'assets/pereshiv.jpg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'service-pereshiv-salona': {
            title: 'Перешив салона',
            priceFrom: 'от 40 000 ₽',
            heroImage: 'assets/pereshiv.jpg',
            lead: 'Индивидуальный перешив элементов салона с подбором материалов, строчки и деталей под стиль автомобиля и задачи владельца.',
            paragraphs: [
                'Перешиваем сиденья, руль, дверные карты, подлокотники и другие элементы салона. Работаем с кожей, экокожей, алькантарой и комбинированными решениями.',
                'Поможем подобрать дизайн под заводской стиль или создать более выразительный интерьер с контрастной прострочкой и другими акцентами.'
            ],
            bullets: [
                'Индивидуальный подбор материалов и фактур',
                'Ремонт и обновление изношенных элементов',
                'Возможность полного или частичного перешива'
            ],
            priceRows: [
                ['Перешив руля', 'от 12 000 ₽'],
                ['Перешив сидений', 'от 40 000 ₽'],
                ['Перешив дверных карт', 'от 18 000 ₽']
            ],
            gallery: ['assets/pereshiv.jpg', 'assets/res.jpg', 'assets/IMG-20251118-WA0007.jpeg']
        },
        'service-shumoizolyatsiya': {
            title: 'Шумоизоляция',
            priceFrom: 'от 35 000 ₽',
            heroImage: 'assets/shum.jpg',
            lead: 'Комплексная шумоизоляция автомобиля для снижения шума с дороги, вибраций и повышения акустического комфорта в салоне.',
            paragraphs: [
                'Шумоизоляция заметно повышает комфорт в поездке, улучшает звучание акустики и помогает сократить количество посторонних шумов в салоне.',
                'Подбираем зоны обработки и набор материалов в зависимости от автомобиля и желаемого результата: двери, пол, арки, крыша, багажник.'
            ],
            bullets: [
                'Работа поэтапно с разбором и сборкой салона',
                'Материалы для вибро- и шумоизоляции',
                'Комплексные и локальные решения'
            ],
            priceRows: [
                ['Шумоизоляция дверей', 'от 12 000 ₽'],
                ['Шумоизоляция арок', 'от 15 000 ₽'],
                ['Полная шумоизоляция', 'от 35 000 ₽']
            ],
            gallery: ['assets/shum.jpg', 'assets/shum2.jpg', 'assets/IMG_20251108_152806.jpg']
        },
        'service-deteiling-vodnogo': {
            title: 'Детейлинг водного транспорта',
            priceFrom: 'от 20 000 ₽',
            heroImage: 'assets/voda.jpg',
            lead: 'Полировка, очистка и защитная обработка катеров, лодок и гидроциклов с учетом условий эксплуатации на воде.',
            paragraphs: [
                'Восстанавливаем внешний вид водного транспорта после сезона и подготавливаем его к хранению или активной эксплуатации. Удаляем загрязнения, налет, окисление и следы выгорания.',
                'Комплекс работ зависит от состояния корпуса, салона и декоративных элементов. Возможна как разовая подготовка, так и сезонное обслуживание.'
            ],
            bullets: [
                'Полировка и очистка корпуса',
                'Химчистка мягких элементов и салона',
                'Нанесение защитных составов'
            ],
            priceRows: [
                ['Полировка корпуса', 'от 20 000 ₽'],
                ['Химчистка интерьера', 'от 12 000 ₽'],
                ['Комплексная подготовка', 'от 35 000 ₽']
            ],
            gallery: ['assets/voda.jpg', 'assets/IMG-20251118-WA0007.jpeg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'service-deteiling-vozdushnogo': {
            title: 'Детейлинг воздушного транспорта',
            priceFrom: 'от 50 000 ₽',
            heroImage: 'assets/air.jpg',
            lead: 'Профессиональная полировка и химчистка воздушного транспорта с деликатной работой по внешним поверхностям и интерьеру.',
            paragraphs: [
                'Предлагаем деликатный уход за частными воздушными судами, вертолетами и их интерьером. Подбираем материалы и схему работ под конкретный тип поверхности и регламент обслуживания.',
                'Работы согласовываются индивидуально: от локального восстановления внешнего вида до комплексной подготовки воздушного транспорта.'
            ],
            bullets: [
                'Деликатная очистка и полировка',
                'Работа с интерьером и декоративными элементами',
                'Индивидуальный расчет под объект'
            ],
            priceRows: [
                ['Полировка внешних поверхностей', 'от 50 000 ₽'],
                ['Химчистка салона', 'от 25 000 ₽'],
                ['Комплексная подготовка', 'по запросу']
            ],
            gallery: ['assets/air.jpg', 'assets/IMG_20251108_152806.jpg', 'assets/IMG-20251118-WA0007.jpeg']
        },
        'service-predprodazhnaya-podgotovka': {
            title: 'Предпродажная подготовка',
            priceFrom: 'от 12 000 ₽',
            heroImage: 'assets/sale.jpg',
            lead: 'Подготовка автомобиля к продаже: внешний вид, чистый салон, аккуратная подача и повышение визуальной привлекательности авто.',
            paragraphs: [
                'Комплексная предпродажная подготовка помогает сделать автомобиль более привлекательным для покупателя. Убираем визуальные дефекты, освежаем салон и приводим авто в презентабельный вид.',
                'Состав работ подбирается индивидуально: мойка, химчистка, полировка, защита кузова, восстановление пластика и другие операции.'
            ],
            bullets: [
                'Комплексная мойка и детейлинг-уборка',
                'Освежение салона и экстерьера',
                'Подбор пакета под бюджет и сроки продажи'
            ],
            priceRows: [
                ['Базовая подготовка', 'от 12 000 ₽'],
                ['Подготовка с полировкой', 'от 25 000 ₽'],
                ['Максимальный комплекс', 'от 40 000 ₽']
            ],
            gallery: ['assets/sale.jpg', 'assets/polirovka.jpg', 'assets/himia.jpg']
        },
        'service-zamena-lobovogo-stekla': {
            title: 'Замена лобового стекла',
            priceFrom: 'от 7 000 ₽',
            heroImage: 'assets/steklo.jpg',
            lead: 'Замена поврежденного лобового стекла с подбором стекла, аккуратным монтажом и контролем герметичности.',
            paragraphs: [
                'Если стекло получило трещину, скол в зоне обзора или другие критичные повреждения, выполним замену с соблюдением технологии монтажа.',
                'Подбираем стекло под марку и модель автомобиля, проводим демонтаж, установку и финальную проверку посадки и герметичности.'
            ],
            bullets: [
                'Подбор стекла и расходных материалов',
                'Аккуратный демонтаж старого стекла',
                'Проверка герметичности после монтажа'
            ],
            priceRows: [
                ['Замена лобового стекла', 'от 7 000 ₽'],
                ['Замена с подогревом/датчиками', 'от 10 000 ₽'],
                ['Расходные материалы', 'по расчету']
            ],
            gallery: ['assets/steklo.jpg', 'assets/IMG_20251108_152806.jpg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'service-pokraska-kolesnyh-diskov': {
            title: 'Покраска колесных дисков',
            priceFrom: 'от 4 000 ₽',
            heroImage: 'assets/disk.jpg',
            lead: 'Восстановление и покраска колесных дисков для возвращения аккуратного внешнего вида и защиты от коррозии.',
            paragraphs: [
                'Покраска дисков позволяет убрать следы сколов, окисления и бордюрной болезни. Подберем цвет и тип покрытия под внешний вид автомобиля.',
                'Возможна локальная реставрация или полный цикл восстановления с подготовкой поверхности, окрашиванием и финишной защитой.'
            ],
            bullets: [
                'Подготовка поверхности и устранение дефектов',
                'Окрашивание в стандартные и нестандартные оттенки',
                'Работа с комплектом или отдельным диском'
            ],
            priceRows: [
                ['Покраска одного диска', 'от 4 000 ₽'],
                ['Покраска комплекта дисков', 'от 16 000 ₽'],
                ['Реставрация повреждений', 'по расчету']
            ],
            gallery: ['assets/disk.jpg', 'assets/IMG-20251118-WA0007.jpeg', 'assets/IMG_20251114_124326_178.jpg']
        }
    };

    var categories = {
        'category-kuzov': {
            title: 'Кузов',
            heroImage: 'assets/polirovka.jpg',
            lead: 'Услуги по восстановлению, защите и визуальному обновлению кузова автомобиля с акцентом на аккуратную работу и долговечный результат.',
            paragraphs: [
                'В разделе собраны услуги, которые помогают сохранить внешний вид автомобиля, убрать следы эксплуатации и защитить кузов от новых повреждений.',
                'Работаем как с легкими косметическими задачами, так и с комплексным восстановлением кузова под ежедневную эксплуатацию, сезонную подготовку или продажу автомобиля.'
            ],
            serviceIds: [
                'service-polirovka-kuzova',
                'service-okleika-kuzova',
                'service-pokraska-kuzova',
                'service-pokrytie-kuzova'
            ],
            priceRows: [
                ['Полировка кузова', 'от 15 000 ₽'],
                ['Оклейка зоны риска', 'от 60 000 ₽'],
                ['Покраска элемента', 'от 10 000 ₽'],
                ['Керамическое покрытие', 'от 18 000 ₽']
            ],
            gallery: ['assets/polirovka.jpg', 'assets/okleika.jpg', 'assets/pokraska.jpg']
        },
        'category-salon': {
            title: 'Салон',
            heroImage: 'assets/himia.jpg',
            lead: 'Работы по уходу, восстановлению и модернизации интерьера автомобиля для комфорта, эстетики и аккуратного внешнего вида.',
            paragraphs: [
                'Салон автомобиля ежедневно испытывает высокую нагрузку, поэтому чистота, состояние отделки и уровень комфорта напрямую влияют на впечатление от машины.',
                'В этом разделе собраны услуги по очистке, реставрации, перешиву и шумоизоляции, которые можно сочетать между собой в одном проекте.'
            ],
            serviceIds: [
                'service-himchistka-salona',
                'service-restavratsiya-salona',
                'service-pereshiv-salona',
                'service-shumoizolyatsiya'
            ],
            priceRows: [
                ['Химчистка салона', 'от 8 000 ₽'],
                ['Реставрация салона', 'от 5 000 ₽'],
                ['Перешив элементов', 'от 12 000 ₽'],
                ['Шумоизоляция', 'от 35 000 ₽']
            ],
            gallery: ['assets/himia.jpg', 'assets/res.jpg', 'assets/pereshiv.jpg']
        },
        'category-predprodazhnaya': {
            title: 'Предпродажная подготовка',
            heroImage: 'assets/sale.jpg',
            lead: 'Комплексная подготовка автомобиля к продаже с акцентом на внешний вид, чистоту и максимальную визуальную привлекательность для покупателя.',
            paragraphs: [
                'Предпродажная подготовка помогает выгоднее подать автомобиль: сделать кузов чище и ярче, освежить салон и убрать мелкие визуальные недочеты.',
                'Мы подбираем состав работ под состояние автомобиля, бюджет и сроки: от базового приведения в порядок до расширенного комплекса с полировкой и химчисткой.'
            ],
            serviceIds: [
                'service-predprodazhnaya-podgotovka'
            ],
            priceRows: [
                ['Базовая подготовка', 'от 12 000 ₽'],
                ['Подготовка с полировкой', 'от 25 000 ₽'],
                ['Максимальный пакет', 'от 40 000 ₽']
            ],
            gallery: ['assets/sale.jpg', 'assets/polirovka.jpg', 'assets/himia.jpg']
        },
        'category-zamena-stekol': {
            title: 'Замена стекол',
            heroImage: 'assets/steklo.jpg',
            lead: 'Услуги по замене автомобильных стекол с аккуратным монтажом, подбором расходных материалов и проверкой качества установки.',
            paragraphs: [
                'Поврежденное стекло влияет не только на внешний вид, но и на безопасность движения. Мы выполняем замену с соблюдением технологических этапов и контролем герметичности.',
                'В шаблоне категории заложен блок прайса и галерея работ, чтобы страницу можно было быстро наполнить под конкретные марки и виды стекол.'
            ],
            serviceIds: [
                'service-zamena-lobovogo-stekla'
            ],
            priceRows: [
                ['Замена лобового стекла', 'от 7 000 ₽'],
                ['Стекло с подогревом и датчиками', 'от 10 000 ₽'],
                ['Доп. расходные материалы', 'по расчету']
            ],
            gallery: ['assets/steklo.jpg', 'assets/IMG_20251108_152806.jpg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'category-pokraska-diskov': {
            title: 'Покраска колесных дисков',
            heroImage: 'assets/disk.jpg',
            lead: 'Услуги по восстановлению и покраске дисков с обновлением внешнего вида и подготовкой под длительную эксплуатацию.',
            paragraphs: [
                'Диски быстро теряют внешний вид из-за сколов, реагентов и повседневной эксплуатации. Покраска позволяет вернуть им аккуратный и свежий вид.',
                'На странице заложен формат категории с карточкой услуги, контактным блоком, прайсом и галереей для дальнейшего расширения раздела.'
            ],
            serviceIds: [
                'service-pokraska-kolesnyh-diskov'
            ],
            priceRows: [
                ['Покраска одного диска', 'от 4 000 ₽'],
                ['Покраска комплекта', 'от 16 000 ₽'],
                ['Реставрация повреждений', 'по расчету']
            ],
            gallery: ['assets/disk.jpg', 'assets/IMG-20251118-WA0007.jpeg', 'assets/IMG_20251114_124326_178.jpg']
        },
        'category-vodny-vozdushny': {
            title: 'Водный и воздушный транспорт',
            heroImage: 'assets/voda.jpg',
            lead: 'Специализированный детейлинг для водного и воздушного транспорта с учетом условий эксплуатации, размеров техники и деликатности материалов.',
            paragraphs: [
                'Работаем не только с автомобилями: берем в работу катера, лодки, гидроциклы, частные воздушные суда и другие премиальные объекты.',
                'Структура страницы позволяет показывать подкатегории, прайс, галерею и удобные каналы связи для быстрого расчета стоимости нестандартных проектов.'
            ],
            serviceIds: [
                'service-deteiling-vodnogo',
                'service-deteiling-vozdushnogo'
            ],
            priceRows: [
                ['Детейлинг водного транспорта', 'от 20 000 ₽'],
                ['Детейлинг воздушного транспорта', 'от 50 000 ₽'],
                ['Индивидуальный проект', 'по запросу']
            ],
            gallery: ['assets/voda.jpg', 'assets/air.jpg', 'assets/IMG-20251118-WA0007.jpeg']
        }
    };

    var newsArchive = [
        {
            date: '12 декабря 2025',
            tag: 'Новинка',
            title: 'Запуск новой услуги F5 REFILLER',
            text: 'Запустили восстановление лакокрасочного покрытия без классической глубокой полировки. Услуга помогает освежить внешний вид кузова и быстро вернуть блеск автомобилю.',
            image: 'assets/IMG_20251212_143441_961.jpg'
        },
        {
            date: '4 ноября 2025',
            tag: 'Советы экспертов',
            title: 'Как подготовить авто к зиме?',
            text: 'Собрали базовый чек-лист по защите кузова, уходу за уплотнителями и очистке салона перед сезоном реагентов, снега и постоянной влаги.',
            image: 'assets/pokrytie.jpg'
        },
        {
            date: '28 октября 2025',
            tag: 'Акции',
            title: 'Итоги конкурса в Instagram',
            text: 'Подвели результаты розыгрыша сертификата на керамическое покрытие и подготовили для подписчиков дополнительные бонусы на сезонные услуги.',
            image: 'assets/IMG-20251118-WA0007.jpeg'
        },
        {
            date: '18 сентября 2025',
            tag: 'Кейсы',
            title: 'Комплексный детейлинг BMW X5 за 3 дня',
            text: 'Показали полный кейс: химчистка салона, восстановительная полировка, защита кузова и финальная фотофиксация результата для клиента.',
            image: 'assets/IMG_20251108_152806.jpg'
        },
        {
            date: '9 августа 2025',
            tag: 'Полезное',
            title: 'Когда пора делать химчистку салона?',
            text: 'Разобрали признаки, по которым можно понять, что салону уже нужен глубокий детейлинг: запахи, въевшиеся пятна и потеря свежести материалов.',
            image: 'assets/himia.jpg'
        },
        {
            date: '21 июля 2025',
            tag: 'Проекты',
            title: 'Оклейка зоны риска на новом автомобиле',
            text: 'Рассказываем, какие элементы кузова защищать пленкой в первую очередь и почему такую работу лучше делать сразу после покупки машины.',
            image: 'assets/okleika.jpg'
        }
    ];

    var specialPages = {
        'news': {
            type: 'news',
            title: 'Новости',
            heroImage: 'assets/IMG_20251212_143441_961.jpg',
            lead: 'Новости студии, полезные материалы, сезонные рекомендации и свежие кейсы по уходу, защите и восстановлению автомобилей.'
        },
        'contacts': {
            type: 'contacts',
            title: 'Контакты',
            heroImage: 'assets/landing_background.jpeg',
            lead: 'Свяжитесь с Shelby Car удобным способом: расскажем по срокам, сориентируем по стоимости и подберем оптимальный формат работ под ваш автомобиль.'
        },
        'about': {
            type: 'about',
            title: 'О нас',
            heroImage: 'assets/landing_background.jpeg',
            lead: 'Shelby Car - это детейлинг-центр, где внимание к деталям, качественные материалы и аккуратный подход к каждой машине становятся частью сервиса.'
        }
    };

    var pages = Object.assign({}, categories, services, specialPages);

    function renderHeader() {
        return '' +
            '<header class="header">' +
            '    <a href="./" class="header__logo">' +
            '        <img src="assets/лого2.jpg" alt="Shelby Car">' +
            '    </a>' +
            '    <div class="header-top">' +
            '        <div class="header-top__inner container">' +
            '            <div class="header-top__left">' +
            '                <nav class="header-top__nav">' +
            '                    <a href="./">Главная</a>' +
            '                    <a href="about.html">О нас</a>' +
            '                    <a href="index.html#gallery">Галерея</a>' +
            '                    <a href="contacts.html">Контакты</a>' +
            '                </nav>' +
            '            </div>' +
            '            <div class="header-top__right">' +
            '                <div class="header-top__contacts">' +
            '                    <a href="' + contacts.phoneHref + '">' + contacts.phoneLabel + '</a>' +
            '                    <a href="' + contacts.telegramHref + '" target="_blank" rel="noopener">' + contacts.telegramLabel + '</a>' +
            '                </div>' +
            '                <a href="contacts.html#contact-form" class="header-top__write">ОФОРМИТЬ ЗАКАЗ</a>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="header-bot">' +
            '        <div class="header-bot__inner container">' +
            '            <nav class="header-bot__navigation">' +
            '                <ul class="nav">' +
            '                    <li class="nav__item">' +
            '                        <a href="category-kuzov.html" class="nav__link">Кузов ▾</a>' +
            '                        <div class="subnav">' +
            '                            <a href="category-kuzov.html" class="subnav-link subnav-link--section"><span>В раздел "Кузов"</span></a>' +
            '                            <a href="service-polirovka-kuzova.html" class="subnav-link" style="background-image:url(\'assets/polirovka.jpg\')"><span>Полировка</span></a>' +
            '                            <a href="service-okleika-kuzova.html" class="subnav-link" style="background-image:url(\'assets/okleika.jpg\')"><span>Оклейка</span></a>' +
            '                            <a href="service-pokraska-kuzova.html" class="subnav-link" style="background-image:url(\'assets/pokraska.jpg\')"><span>Покраска</span></a>' +
            '                            <a href="service-pokrytie-kuzova.html" class="subnav-link" style="background-image:url(\'assets/pokrytie.jpg\')"><span>Покрытие</span></a>' +
            '                        </div>' +
            '                    </li>' +
            '                    <li class="nav__item">' +
            '                        <a href="category-salon.html" class="nav__link">Салон ▾</a>' +
            '                        <div class="subnav">' +
            '                            <a href="category-salon.html" class="subnav-link subnav-link--section"><span>В раздел "Салон"</span></a>' +
            '                            <a href="service-himchistka-salona.html" class="subnav-link" style="background-image:url(\'assets/himia.jpg\')"><span>Химчистка</span></a>' +
            '                            <a href="service-restavratsiya-salona.html" class="subnav-link" style="background-image:url(\'assets/res.jpg\')"><span>Реставрация</span></a>' +
            '                            <a href="service-pereshiv-salona.html" class="subnav-link" style="background-image:url(\'assets/pereshiv.jpg\')"><span>Перешив</span></a>' +
            '                            <a href="service-shumoizolyatsiya.html" class="subnav-link" style="background-image:url(\'assets/shum.jpg\')"><span>Шумоизоляция</span></a>' +
            '                        </div>' +
            '                    </li>' +
            '                    <li class="nav__item"><a href="category-predprodazhnaya.html" class="nav__link">Предпродажная подготовка</a></li>' +
            '                    <li class="nav__item"><a href="category-zamena-stekol.html" class="nav__link">Замена стекол</a></li>' +
            '                    <li class="nav__item"><a href="category-pokraska-diskov.html" class="nav__link">Покраска колесных дисков</a></li>' +
            '                    <li class="nav__item">' +
            '                        <a href="category-vodny-vozdushny.html" class="nav__link">Водный и воздушный транспорт ▾</a>' +
            '                        <div class="subnav">' +
            '                            <a href="category-vodny-vozdushny.html" class="subnav-link subnav-link--section"><span>В раздел "Водный и воздушный транспорт"</span></a>' +
            '                            <a href="service-deteiling-vodnogo.html" class="subnav-link" style="background-image:url(\'assets/voda.jpg\')"><span>Полировка и химчистка водного транспорта</span></a>' +
            '                            <a href="service-deteiling-vozdushnogo.html" class="subnav-link" style="background-image:url(\'assets/air.jpg\')"><span>Полировка и химчистка воздушного транспорта</span></a>' +
            '                        </div>' +
            '                    </li>' +
            '                </ul>' +
            '            </nav>' +
            '            <button class="hamburger" aria-label="Меню" type="button"><span></span><span></span><span></span></button>' +
            '        </div>' +
            '    </div>' +
            '    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">' +
            '        <div class="mobile-menu__top">' +
            '            <a href="' + contacts.phoneHref + '" class="mobile-menu__phone">' + contacts.phoneLabel + '</a>' +
            '            <a href="contacts.html#contact-form" class="mobile-menu__order">Оформить заказ</a>' +
            '        </div>' +
            '        <nav class="header-bot__navigation">' +
            '            <ul class="nav">' +
            '                <li class="nav__item">' +
            '                    <a href="category-kuzov.html" class="nav__link has-sub">Кузов</a>' +
            '                    <div class="subnav">' +
            '                        <a href="category-kuzov.html" class="subnav-link subnav-link--section"><span>В раздел "Кузов"</span></a>' +
            '                        <a href="service-polirovka-kuzova.html" class="subnav-link"><span>Полировка</span></a>' +
            '                        <a href="service-okleika-kuzova.html" class="subnav-link"><span>Оклейка</span></a>' +
            '                        <a href="service-pokraska-kuzova.html" class="subnav-link"><span>Покраска</span></a>' +
            '                        <a href="service-pokrytie-kuzova.html" class="subnav-link"><span>Покрытие</span></a>' +
            '                    </div>' +
            '                </li>' +
            '                <li class="nav__item">' +
            '                    <a href="category-salon.html" class="nav__link has-sub">Салон</a>' +
            '                    <div class="subnav">' +
            '                        <a href="category-salon.html" class="subnav-link subnav-link--section"><span>В раздел "Салон"</span></a>' +
            '                        <a href="service-himchistka-salona.html" class="subnav-link"><span>Химчистка</span></a>' +
            '                        <a href="service-restavratsiya-salona.html" class="subnav-link"><span>Реставрация</span></a>' +
            '                        <a href="service-pereshiv-salona.html" class="subnav-link"><span>Перешив</span></a>' +
            '                        <a href="service-shumoizolyatsiya.html" class="subnav-link"><span>Шумоизоляция</span></a>' +
            '                    </div>' +
            '                </li>' +
            '                <li class="nav__item"><a href="category-predprodazhnaya.html" class="nav__link">Предпродажная подготовка</a></li>' +
            '                <li class="nav__item"><a href="category-zamena-stekol.html" class="nav__link">Замена стекол</a></li>' +
            '                <li class="nav__item"><a href="category-pokraska-diskov.html" class="nav__link">Покраска колесных дисков</a></li>' +
            '                <li class="nav__item">' +
            '                    <a href="category-vodny-vozdushny.html" class="nav__link has-sub">Водный и воздушный транспорт</a>' +
            '                    <div class="subnav">' +
            '                        <a href="category-vodny-vozdushny.html" class="subnav-link subnav-link--section"><span>В раздел "Водный и воздушный транспорт"</span></a>' +
            '                        <a href="service-deteiling-vodnogo.html" class="subnav-link"><span>Полировка и химчистка водного транспорта</span></a>' +
            '                        <a href="service-deteiling-vozdushnogo.html" class="subnav-link"><span>Полировка и химчистка воздушного транспорта</span></a>' +
            '                    </div>' +
            '                </li>' +
            '            </ul>' +
            '        </nav>' +
            '    </div>' +
            '</header>';
    }

    function renderFooter() {
        return '' +
            '<footer class="footer" id="contacts">' +
            '    <div class="footer__top">' +
            '        <div class="container">' +
            '            <div class="footer-brand">' +
            '                <img src="assets/лого2.jpg" alt="Shelby Car">' +
            '                <p>Shelby Car — экспертный детейлинг центр. Мы знаем об уходе за автомобилем все.</p>' +
            '            </div>' +
            '            <nav class="footer-nav-block" aria-label="Основная навигация">' +
            '                <h3 class="footer-h3">Навигация</h3>' +
            '                <ul class="footer-links">' +
            '                    <li><a href="./">Главная</a></li>' +
            '                    <li><a href="about.html">О нас</a></li>' +
            '                    <li><a href="news.html">Новости</a></li>' +
            '                    <li><a href="contacts.html">Контакты</a></li>' +
            '                </ul>' +
            '            </nav>' +
            '            <div class="footer-contact">' +
            '                <h3 class="footer-h3">Контакты</h3>' +
            '                <div class="footer-contact-item">' + contacts.address + '</div>' +
            '                <div class="footer-contact-item"><a href="' + contacts.phoneHref + '">' + contacts.phoneLabel + '</a></div>' +
            '                <div class="footer-contact-item"><a href="mailto:' + contacts.email + '">' + contacts.email + '</a></div>' +
            '                <div class="footer-contact-item"><a href="' + contacts.telegramHref + '" target="_blank" rel="noopener">' + contacts.telegramLabel + '</a></div>' +
            '                <a href="contacts.html#contact-form" class="footer-order-btn">Оформить заказ</a>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="footer__bottom">' +
            '        <div class="container">' +
            '            <div class="footer-col">' +
            '                <h3 class="footer-h3">Кузов</h3>' +
            '                <ul class="footer-links">' +
            '                    <li><a href="category-kuzov.html">В раздел</a></li>' +
            '                    <li><a href="service-polirovka-kuzova.html">Полировка</a></li>' +
            '                    <li><a href="service-okleika-kuzova.html">Оклейка</a></li>' +
            '                    <li><a href="service-pokraska-kuzova.html">Покраска</a></li>' +
            '                    <li><a href="service-pokrytie-kuzova.html">Покрытие</a></li>' +
            '                </ul>' +
            '            </div>' +
            '            <div class="footer-col">' +
            '                <h3 class="footer-h3">Салон</h3>' +
            '                <ul class="footer-links">' +
            '                    <li><a href="category-salon.html">В раздел</a></li>' +
            '                    <li><a href="service-himchistka-salona.html">Химчистка</a></li>' +
            '                    <li><a href="service-restavratsiya-salona.html">Реставрация</a></li>' +
            '                    <li><a href="service-pereshiv-salona.html">Перешив</a></li>' +
            '                    <li><a href="service-shumoizolyatsiya.html">Шумоизоляция</a></li>' +
            '                </ul>' +
            '            </div>' +
            '            <div class="footer-col">' +
            '                <h3 class="footer-h3">Услуги</h3>' +
            '                <ul class="footer-links">' +
            '                    <li><a href="category-predprodazhnaya.html">Предпродажная подготовка</a></li>' +
            '                    <li><a href="category-zamena-stekol.html">Замена стекол</a></li>' +
            '                    <li><a href="category-pokraska-diskov.html">Покраска колесных дисков</a></li>' +
            '                </ul>' +
            '            </div>' +
            '            <div class="footer-col">' +
            '                <h3 class="footer-h3">Водный и воздушный транспорт</h3>' +
            '                <ul class="footer-links">' +
            '                    <li><a href="category-vodny-vozdushny.html">В раздел</a></li>' +
            '                    <li><a href="service-deteiling-vodnogo.html">Полировка и химчистка водного транспорта</a></li>' +
            '                    <li><a href="service-deteiling-vozdushnogo.html">Полировка и химчистка воздушного транспорта</a></li>' +
            '                </ul>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="footer__copy container">&copy; 2024 Shelby Car. Все права защищены.</div>' +
            '</footer>';
    }

    function renderContactCard() {
        return '' +
            '<div class="contact-card">' +
            '    <h3>Связаться с нами</h3>' +
            '    <p>Быстро рассчитаем стоимость, подскажем по срокам и поможем подобрать оптимальный формат работ под ваш автомобиль.</p>' +
            '    <div class="contact-list">' +
            '        <a href="' + contacts.phoneHref + '"><small>Телефон</small><span>' + contacts.phoneLabel + '</span></a>' +
            '        <a href="' + contacts.whatsappHref + '" target="_blank" rel="noopener"><small>Мессенджер</small><span>' + contacts.whatsappLabel + '</span></a>' +
            '        <a href="' + contacts.telegramHref + '" target="_blank" rel="noopener"><small>Telegram</small><span>' + contacts.telegramLabel + '</span></a>' +
            '    </div>' +
            '    <a href="' + contacts.phoneHref + '" class="btn-primary">Получить консультацию</a>' +
            '</div>';
    }

    function renderGallery(items) {
        return items.map(function (item, index) {
            return '' +
                '<div class="portfolio-item">' +
                '    <img src="' + item + '" alt="Пример работы ' + (index + 1) + '">' +
                '    <div class="portfolio-overlay"><a href="contacts.html#contact-form">Обсудить проект</a></div>' +
                '</div>';
        }).join('');
    }

    function renderPriceRows(rows) {
        return rows.map(function (row) {
            return '<tr><td>' + row[0] + '</td><td>' + row[1] + '</td></tr>';
        }).join('');
    }

    function renderServiceCards(ids) {
        return ids.map(function (id) {
            var item = services[id];
            return '' +
                '<div class="service-card">' +
                '    <div class="service-card__img"><img src="' + item.heroImage + '" alt="' + item.title + '"></div>' +
                '    <div class="service-card__body">' +
                '        <h3 class="service-card__title">' + item.title + '</h3>' +
                '        <span class="service-card__price">' + item.priceFrom + '</span>' +
                '        <a href="' + id + '.html" class="btn-card">Подробнее</a>' +
                '    </div>' +
                '</div>';
        }).join('');
    }

    function renderHero(page, sectionLabel) {
        return '' +
            '<section class="inner-hero" style="background-image:url(\'' + page.heroImage + '\')">' +
            '    <div class="container inner-hero__content">' +
            '        <div class="breadcrumbs"><a href="./">Главная</a><span>/</span><span>' + sectionLabel + '</span><span>/</span><span>' + page.title + '</span></div>' +
            '        <h1>' + page.title + '</h1>' +
            '        <p>' + page.lead + '</p>' +
            '    </div>' +
            '</section>';
    }

    function renderCategory(page) {
        return '' +
            renderHero(page, 'Категория') +
            '<section class="section container">' +
            '    <h2 class="section-title">Подкатегории <span>и услуги</span></h2>' +
            '    <p class="page-lead">Карточки можно использовать как готовый шаблон навигации по подуслугам: заменить тексты, цены, фото и ссылки под ваш финальный контент.</p>' +
            '    <div class="services-grid">' + renderServiceCards(page.serviceIds) + '</div>' +
            '</section>' +
            '<section class="section container">' +
            '    <h2 class="section-title">Описание <span>категории</span></h2>' +
            '    <div class="page-text">' +
            '        <p>' + page.paragraphs[0] + '</p>' +
            '        <p>' + page.paragraphs[1] + '</p>' +
            '    </div>' +
            '</section>' +
            '<section class="section container">' +
            '    <div class="page-meta-grid">' +
            renderContactCard() +
            '        <div class="price-placeholder">' +
            '            <div class="price-placeholder__note">Шаблон под TablePress</div>' +
            '            <h3>Прайс-лист категории</h3>' +
            '            <p>Блок подготовлен под вставку плагина таблиц или HTML-таблицы. Ниже показан пример структуры, которую можно заменить на финальный прайс в CMS.</p>' +
            '            <table class="price-table">' +
            '                <thead><tr><th>Услуга</th><th>Стоимость</th></tr></thead>' +
            '                <tbody>' + renderPriceRows(page.priceRows) + '</tbody>' +
            '            </table>' +
            '        </div>' +
            '    </div>' +
            '</section>' +
            '<section class="section container" id="gallery">' +
            '    <h2 class="section-title">Галерея <span>работ</span></h2>' +
            '    <p class="gallery-caption">Сюда можно выводить реальные кейсы по категории: до/после, проекты клиентов и фотографии этапов работ.</p>' +
            '    <div class="portfolio-grid">' + renderGallery(page.gallery) + '</div>' +
            '</section>';
    }

    function renderService(page) {
        return '' +
            renderHero(page, 'Услуга') +
            '<section class="section container">' +
            '    <h2 class="section-title">Описание <span>услуги</span></h2>' +
            '    <div class="page-text">' +
            '        <p>' + page.paragraphs[0] + '</p>' +
            '        <p>' + page.paragraphs[1] + '</p>' +
            '        <ul class="highlight-list">' +
            page.bullets.map(function (item) { return '<li>' + item + '</li>'; }).join('') +
            '        </ul>' +
            '    </div>' +
            '</section>' +
            '<section class="section container">' +
            '    <div class="page-meta-grid">' +
            '        <div class="service-price">' +
            '            <h3>Прайс на услугу</h3>' +
            '            <p>Стоимость зависит от размера автомобиля, состояния поверхности и состава работ. Шаблон блока уже готов для замены на ваш актуальный прайс.</p>' +
            '            <table class="price-table">' +
            '                <thead><tr><th>Работа</th><th>Цена</th></tr></thead>' +
            '                <tbody>' + renderPriceRows(page.priceRows) + '</tbody>' +
            '            </table>' +
            '        </div>' +
            renderContactCard() +
            '    </div>' +
            '</section>' +
            '<section class="section container" id="gallery">' +
            '    <h2 class="section-title">Галерея <span>работ</span></h2>' +
            '    <p class="gallery-caption">Блок предназначен для кейсов по конкретной услуге: фото до/после, этапы работ и готовый результат.</p>' +
            '    <div class="portfolio-grid">' + renderGallery(page.gallery) + '</div>' +
            '</section>';
    }

    function renderArchiveCards(items) {
        return items.map(function (item) {
            return '' +
                '<article class="archive-card">' +
                '    <img src="' + item.image + '" alt="' + item.title + '">' +
                '    <div class="archive-card__body">' +
                '        <span class="archive-card__meta">' + item.tag + ' / ' + item.date + '</span>' +
                '        <h3 class="archive-card__title">' + item.title + '</h3>' +
                '        <p class="archive-card__text">' + item.text + '</p>' +
                '        <a href="contacts.html#contact-form" class="archive-card__link">Связаться</a>' +
                '    </div>' +
                '</article>';
        }).join('');
    }

    function renderContactInfoPanel(title, text) {
        return '' +
            '<div class="info-panel">' +
            '    <h3>' + title + '</h3>' +
            '    <p>' + text + '</p>' +
            '    <div class="info-panel__list">' +
            '        <div class="info-panel__item"><small>Адрес</small><span>' + contacts.address + '</span></div>' +
            '        <div class="info-panel__item"><small>Телефон</small><a href="' + contacts.phoneHref + '">' + contacts.phoneLabel + '</a></div>' +
            '        <div class="info-panel__item"><small>E-mail</small><a href="mailto:' + contacts.email + '">' + contacts.email + '</a></div>' +
            '        <div class="info-panel__item"><small>Режим работы</small><span>' + contacts.hours + '</span></div>' +
            '    </div>' +
            '</div>';
    }

    function renderNewsPage(page) {
        return '' +
            renderHero(page, 'Новости') +
            '<section class="section container">' +
            '    <div class="news-archive">' +
            '        <h2 class="section-title">Все <span>новости</span></h2>' +
            '        <p class="page-lead">Собрали в одном месте свежие обновления студии, полезные статьи по уходу за автомобилем и заметки о новых услугах Shelby Car.</p>' +
            '        <div class="archive-grid">' + renderArchiveCards(newsArchive) + '</div>' +
            '    </div>' +
            '</section>' +
            '<section class="section container">' +
            '    <div class="page-meta-grid">' +
            renderContactInfoPanel('Будем на связи', 'Если хотите узнать подробности по любой новости или записаться на услугу, напишите нам удобным способом. Ответим по стоимости, срокам и доступным окнам.') +
            renderContactCard() +
            '    </div>' +
            '</section>';
    }

    function renderContactsPage(page) {
        return '' +
            renderHero(page, 'Контакты') +
            '<section class="section container">' +
            '    <div class="content-grid">' +
            '        <div class="contact-map">' +
            '            <iframe src="https://www.google.com/maps?q=' + encodeURIComponent(contacts.address) + '&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Карта проезда до Shelby Car"></iframe>' +
            '        </div>' +
            '        <form class="contact-form" id="contact-form" action="mailto:' + contacts.email + '" method="post" enctype="text/plain">' +
            '            <h3>Форма обратной связи</h3>' +
            '            <p>Оставьте заявку, и письмо откроется в вашем почтовом клиенте. Укажите удобный способ связи и кратко опишите задачу.</p>' +
            '            <div class="contact-form__grid">' +
            '                <div class="contact-form__field">' +
            '                    <label for="contact-name">Имя</label>' +
            '                    <input id="contact-name" name="Имя" type="text" placeholder="Как к вам обращаться">' +
            '                </div>' +
            '                <div class="contact-form__field">' +
            '                    <label for="contact-phone">Телефон</label>' +
            '                    <input id="contact-phone" name="Телефон" type="tel" placeholder="+7 (___) ___-__-__">' +
            '                </div>' +
            '                <div class="contact-form__field">' +
            '                    <label for="contact-email">E-mail</label>' +
            '                    <input id="contact-email" name="E-mail" type="email" placeholder="name@example.com">' +
            '                </div>' +
            '                <div class="contact-form__field">' +
            '                    <label for="contact-service">Интересующая услуга</label>' +
            '                    <select id="contact-service" name="Услуга">' +
            '                        <option value="">Выберите направление</option>' +
            '                        <option>Кузов</option>' +
            '                        <option>Салон</option>' +
            '                        <option>Предпродажная подготовка</option>' +
            '                        <option>Замена стекол</option>' +
            '                        <option>Покраска дисков</option>' +
            '                        <option>Водный и воздушный транспорт</option>' +
            '                    </select>' +
            '                </div>' +
            '                <div class="contact-form__field contact-form__field--full">' +
            '                    <label for="contact-message">Сообщение</label>' +
            '                    <textarea id="contact-message" name="Сообщение" placeholder="Опишите автомобиль, нужную услугу и удобное время для связи"></textarea>' +
            '                </div>' +
            '            </div>' +
            '            <button type="submit" class="btn-primary">Отправить письмо</button>' +
            '            <div class="form-note">Если удобнее, можно сразу написать нам в Telegram, WhatsApp или позвонить по телефону.</div>' +
            '        </form>' +
            '    </div>' +
            '</section>' +
            '<section class="section container">' +
            '    <div class="page-meta-grid">' +
            renderContactInfoPanel('Контактная информация', 'Приезжайте по записи или свяжитесь заранее, чтобы мы подготовили удобное окно для осмотра автомобиля и консультации.') +
            renderContactCard() +
            '    </div>' +
            '</section>';
    }

    function renderAboutPage(page) {
        return '' +
            renderHero(page, 'О компании') +
            '<section class="section container about-page">' +
            '    <div class="about-block">' +
            '        <div class="about-img"><img src="assets/landing_background.jpeg" style="border-radius: 5px;" alt="Shelby Car"></div>' +
            '        <div class="about-text">' +
            '            <h2 class="section-title" style="text-align: left; margin-bottom: 20px;">О <span>Компании</span></h2>' +
            '            <p><strong>Shelby Car</strong> - это современный детейлинг-центр, где ваш автомобиль получает вторую жизнь. Мы используем только передовые технологии и химию мировых брендов.</p>' +
            '            <p>Детейлинг - это не просто мойка. Это искусство тщательного ухода, восстановления и защиты каждой детали автомобиля. Наша цель - довести состояние авто до идеала, превосходящего заводской блеск.</p>' +
            '        </div>' +
            '    </div>' +
            '</section>' +
            '<section class="section container">' +
            '    <div class="content-grid">' +
            renderContactInfoPanel('Контакты Shelby Car', 'Работаем с автомобилями, водной и воздушной техникой, подбирая решения под конкретный проект, задачи владельца и состояние техники.') +
            renderContactCard() +
            '    </div>' +
            '</section>';
    }

    var pageId = document.body.getAttribute('data-page');
    var page = pages[pageId];

    if (!page) {
        return;
    }

    document.title = page.title + ' | Shelby Car';

    var headerRoot = document.getElementById('site-header');
    var contentRoot = document.getElementById('page-content');
    var footerRoot = document.getElementById('site-footer');

    if (!headerRoot || !contentRoot || !footerRoot) {
        return;
    }

    headerRoot.innerHTML = renderHeader();
    footerRoot.innerHTML = renderFooter();
    if (page.type === 'news') {
        contentRoot.innerHTML = renderNewsPage(page);
    } else if (page.type === 'contacts') {
        contentRoot.innerHTML = renderContactsPage(page);
    } else if (page.type === 'about') {
        contentRoot.innerHTML = renderAboutPage(page);
    } else if (pageId.indexOf('category-') === 0) {
        contentRoot.innerHTML = renderCategory(page);
    } else {
        contentRoot.innerHTML = renderService(page);
    }
})();
