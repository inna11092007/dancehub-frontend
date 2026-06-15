document.addEventListener("DOMContentLoaded", () => {
    // --- НАВІГАЦІЯ МІЖ СТОРІНКАМИ ---
    const resultsLinks = document.querySelectorAll('[data-lang-key="nav_results"]');
    const competitionsLinks = document.querySelectorAll('[data-lang-key="nav_comp"]');
    const clubsLinks = document.querySelectorAll('[data-lang-key="nav_clubs"]');
    const peopleLinks = document.querySelectorAll('[data-lang-key="nav_people"]');
    const orgsLinks = document.querySelectorAll('[data-lang-key="nav_orgs"]');
    const adsLinks = document.querySelectorAll('[data-lang-key="nav_ads"]');

    resultsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'results.html';
        };
    });

    competitionsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        };
    });

    clubsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'clubs.html';
        };
    });

    peopleLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'people.html';
        };
    });

    orgsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            // window.location.href = 'organizations.html'; 
        };
    });

    adsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'ads.html';
        };
    });

    // --- ПЕРЕХІД НА КОНКРЕТНІ ІВЕНТИ ---
    const isResultsPage = window.location.pathname.includes('results.html');

    document.querySelectorAll('.event-card, .result-card').forEach(card => {
        card.style.cursor = "pointer";
        card.onclick = () => {
            if (isResultsPage) {
                window.location.href = 'event-results.html'; 
            } else {
                window.location.href = 'event.html'; 
            }
        };
    });

    // --- ПЕРЕХІД НА ПРОФІЛЬ ТАНЦЮРИСТА ---
    document.querySelectorAll('.person-card').forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener('click', () => {
            window.location.href = 'dancer-profile.html';
        });
    });

// --- ПЕРЕКЛАД (LOCALIZATION) ---
const translations = {
    ua: {
        nav_comp: "Змагання",
        nav_results: "Результати",
        nav_clubs: "Клуби",
        nav_people: "Люди",
        nav_ads: "Оголошення",
        nav_orgs: "Організації",
        login: "Вхід",
        search_title: "Знайдіть змагання та події по всьому світу",
        tab_all: "Всі події",
        tab_sport: "Спортивні танці",
        tab_pro_am: "World Pro-Am",
        tab_lessons: "Збори, Лекції",
        filter_all_countries: "Всі країни",
        filter_all_cities: "Всі міста",
        date_from: "Дата з",
        date_to: "Дата до",
        reg_badge: "РЕЄСТРАЦІЯ",
        finished_badge: "ЗАВЕРШЕНО",
        results_available: "Результати доступні",
        reg_till: "Реєстрація до:",
        feb: "лют.",
        jul: "лип.",
        may: "трав.",
        btn_load_more: "Завантажити більше",
        btn_collapse: "Згорнути список",
        footer_desc: "Dance Competition Management Platform",
        footer_links_title: "ШВИДКІ ПОСИЛАННЯ",
        footer_news: "Новини",
        footer_privacy: "Приватність",
        footer_offer: "Публічна оферта",
        footer_contact: "Зворотній зв'язок",
        footer_sub_title: "ПІДПИСАТИСЬ НА РОЗСИЛКУ",
        footer_email_placeholder: "Введіть Ваш e-mail",
        footer_sub_btn: "Підписатись",
        footer_stats_title: "ЗАРЕЄСТРОВАНІ ТАНЦЮРИСТИ",
        footer_payment_title: "МИ ПРИЙМАЄМО",
        footer_rights: "All Rights Reserved",
        clubs_title: "Танцювальні клуби",
        filter_enter_city: "Введіть місто...",
        club_search_placeholder: "Назва клубу",
        shown_text: "Показано",
        out_of_text: "з",
        results_text: "результатів",
        
        // Нові додані ключі рейтингу та кнопок
        btn_online_results: "ON-LINE Результати",
        btn_download_results: "Завантажити результати",
        rating_title: "Рейтинг змагань",
        rating_votes: "голосів",
        rating_schedule: "Відповідність розкладу",
        rating_changing_rooms: "Кімнати для переодягання",
        rating_hall_comfort: "Оформлення та зручність залу",
        rating_lighting: "Освітлення",
        rating_music: "Музичний супровід",

        // Міста
        city_kyiv: "Київ", city_lviv: "Львів", city_odesa: "Одеса", city_dnipro: "Дніпро", city_kharkiv: "Харків", city_rivne: "Рівне",
        city_warsaw: "Варшава (PL)", city_krakow: "Краків (PL)", city_tallinn: "Таллінн (EE)", city_helsinki: "Гельсінкі (FI)",
        city_paris: "Париж (FR)", city_tbilisi: "Тбілісі (GE)", city_berlin: "Берлін (DE)", city_athens: "Афіни (GR)",
        city_chisinau: "Кишинів (MD)", city_lisbon: "Лісабон (PT)", city_bucharest: "Бухарест (RO)", city_belgrade: "Белград (RS)",
        city_london: "Лондон (UK)", city_dubai: "Дубай (AE)", city_ny: "Нью-Йорк (US)",
        
        // Сторінка "Люди"
        filter_dancer: "Танцюрист",
        filter_judge: "Суддя",
        filter_trainer: "Тренер",
        filter_country_ua: "Україна",
        filter_country_pl: "Польща",
        filter_city: "Місто",
        filter_club: "Клуб",
        years_old: "р.",
        city_borova: "Борова",
        filter_all_roles: "Всі ролі",
        search_surname: "Прізвище або Ім'я",
        
        // Сторінка "Оголошення"
        tab_partner_title: "Шукаю партнера",
        tab_partner_desc: "Пошук партнера/партнерки",
        tab_goods_title: "Товари",
        tab_goods_desc: "продаж/купівля",
        tab_services_title: "Послуги / Робота",
        tab_services_desc: "послуги/робота",
        tab_lessons_title: "Уроки",
        tab_lessons_desc: "навчання проводжу/шукаю",
        filter_type: "Тип",
        filter_find_partner: "шукаю партнера",
        filter_find_partnerka: "шукаю партнерку",
        badge_partner: "ПОШУК ПАРТНЕРА",
        badge_goods_women: "ПРОДАЖ ДЛЯ ЖІНОК",
        badge_services: "НАДАМ ПОСЛУГИ",
        currency_uah: "грн.",
        no_results: "Відсутні результати пошуку!",
        btn_load_more_ads: "ПОКАЗАТИ НАСТУПНИХ 20 ОГОЛОШЕНЬ",
        btn_reg_participants: "Реєстрація учасників",
        btn_reg_judges: "Реєстрація суддів",
        link_info: "Інформація",
        link_stylists: "Стилісти",
        label_date: "Дата",
        label_location: "Місце проведення",
        label_organizers: "Організатори",
        label_organization: "Організація",
        stat_dancers: "ТАНЦЮРИСТИ",
        stat_couples: "ПАРИ",
        stat_solos: "СОЛО",
        stat_entries: "УЧАСТЕЙ",
        
        // Вкладки
        tab_about: "ПРО ЗМАГАННЯ",
        tab_categories: "КАТЕГОРІЇ",
        tab_judges: "СУДДІ",
        tab_clubs: "КЛУБИ",
        tab_comments: "КОМЕНТАРІ",
        
        about_title: "Про змагання",
        about_desc: "Всеукраїнські відкриті змагання з танцювального спорту.",
        categories_title: "Категорії змагань",
        loading_schedule: "Завантаження категорій...",
        judges_title: "Суддівська колегія",
        no_judges: "Судді ще не зареєстровані.",
        tab_reviews: "ВІДГУКИ",
        reviews_heading: "Відгуки та оцінки змагань",
        auth_review_notice: "Авторизуйтесь, щоб залишити відгук про змагання.",
        review_placeholder: "Напишіть ваші враження про турнір...",
        btn_send_review: "Надіслати відгук",
        loading_reviews: "Завантаження відгуків...",
        no_reviews: "Тут поки немає відгуків. Будьте першим, хто поділиться враженнями!",
        leave_review_title: "Оцініть змагання за критеріями:",
        modal_reg_title: "Реєстрація на змагання",
        modal_hint_dancers: "Оберіть танцюристів (1 для соло, 2 для пари):",
        modal_hint_category: "Оберіть категорію:",
        select_category_placeholder: "-- Оберіть категорію --",
        btn_register_submit: "Зареєструвати",
        modal_participants_title: "Список учасників",
        modal_judge_title: "Реєстрація судді",
        modal_judge_desc: "Ви подаєте заявку на суддівство у цьому змаганні.",
        modal_hint_sessions: "Оберіть відділення (можна декілька):",
        loading: "Завантаження...",
        btn_submit_application: "Надіслати заявку",
        about_desc_finished: "Всеукраїнські відкриті змагання з танцювального спорту. Змагання успішно завершені.",
        loading_judges: "Завантаження списку суддів...",
        loading_clubs: "Завантаження списку клубів...",
        time_1_month_ago: "1 місяць тому",
        comment_sample_1: "Чудовий турнір! Коли будуть доступні всі фото?"
    },
    en: {
        nav_comp: "Competitions",
        nav_results: "Results",
        nav_clubs: "Clubs",
        nav_people: "People",
        nav_ads: "Ads",
        nav_orgs: "Organizations",
        login: "Login",
        search_title: "Find competitions and events worldwide",
        tab_all: "All events",
        tab_sport: "Sport Dance",
        tab_pro_am: "World Pro-Am",
        tab_lessons: "Workshops",
        filter_all_countries: "All countries",
        filter_all_cities: "All cities",
        date_from: "Date from",
        date_to: "Date to",
        reg_badge: "REGISTRATION",
        finished_badge: "FINISHED", 
        results_available: "Results available",
        reg_till: "Registration until:",
        feb: "Feb.",
        jul: "Jul.",
        may: "May",
        btn_load_more: "Load more",
        btn_collapse: "Collapse list",
        footer_desc: "Dance Competition Management Platform",
        footer_links_title: "QUICK LINKS",
        footer_news: "News",
        footer_privacy: "Privacy",
        footer_offer: "Public Offer",
        footer_contact: "Contact Us",
        footer_sub_title: "SUBSCRIBE TO NEWSLETTER",
        footer_email_placeholder: "Enter your e-mail",
        footer_sub_btn: "Subscribe",
        footer_stats_title: "REGISTERED DANCERS",
        footer_payment_title: "WE ACCEPT",
        footer_rights: "All Rights Reserved",
        clubs_title: "Dance Clubs",
        filter_enter_city: "Enter city...",
        club_search_placeholder: "Club name",
        shown_text: "Showing",
        out_of_text: "of",
        results_text: "results",
        
        // Нові додані ключі для EN
        btn_online_results: "ON-LINE Results",
        btn_download_results: "Download results",
        rating_title: "Event Rating",
        rating_votes: "votes",
        rating_schedule: "Schedule compliance",
        rating_changing_rooms: "Changing rooms",
        rating_hall_comfort: "Hall decoration & comfort",
        rating_lighting: "Lighting",
        rating_music: "Music accompaniment",

        // Cities
        city_kyiv: "Kyiv", city_lviv: "Lviv", city_odesa: "Odesa", city_dnipro: "Dnipro", city_kharkiv: "Kharkiv", city_rivne: "Rivne",
        city_warsaw: "Warsaw (PL)", city_krakow: "Krakow (PL)", city_tallinn: "Tallinn (EE)", city_helsinki: "Helsinki (FI)",
        city_paris: "Paris (FR)", city_tbilisi: "Tbilisi (GE)", city_berlin: "Berlin (DE)", city_athens: "Athens (GR)",
        city_chisinau: "Chisinau (MD)", city_lisbon: "Lisbon (PT)", city_bucharest: "Bucharest (RO)", city_belgrade: "Belgrade (RS)",
        city_london: "London (UK)", city_dubai: "Dubai (AE)", city_ny: "New York (US)",
        
        // People Page
        filter_dancer: "Dancer",
        filter_judge: "Judge",
        filter_trainer: "Trainer",
        filter_country_ua: "Ukraine",
        filter_country_pl: "Poland",
        filter_city: "City",
        filter_club: "Club",
        years_old: "y.o.",
        city_borova: "Borova",
        filter_all_roles: "All roles",
        search_surname: "Surname or Name",
        
        // Ads Page
        tab_partner_title: "Find a partner",
        tab_partner_desc: "Search for a male/female partner",
        tab_goods_title: "Goods",
        tab_goods_desc: "buy/sell",
        tab_services_title: "Services / Jobs",
        tab_services_desc: "services/jobs",
        tab_lessons_title: "Lessons",
        tab_lessons_desc: "teaching/seeking",
        filter_type: "Type",
        filter_find_partner: "looking for a male partner",
        filter_find_partnerka: "looking for a female partner",
        badge_partner: "LOOKING FOR PARTNER",
        badge_goods_women: "SALE FOR WOMEN",
        badge_services: "PROVIDING SERVICES",
        currency_uah: "UAH",
        no_results: "No search results!",
        btn_load_more_ads: "SHOW NEXT 20 ADS",
        btn_reg_participants: "Participant Registration",
        btn_reg_judges: "Judge Registration",
        link_info: "Information",
        link_stylists: "Stylists",
        label_date: "Date",
        label_location: "Venue",
        label_organizers: "Organizers",
        label_organization: "Organization",
        stat_dancers: "DANCERS",
        stat_couples: "COUPLES",
        stat_solos: "SOLOS",
        stat_entries: "ENTRIES",
        
        // Tabs
        tab_about: "ABOUT EVENT",
        tab_categories: "CATEGORIES",
        tab_judges: "JUDGES",
        tab_clubs: "CLUBS",
        tab_comments: "COMMENTS",
        
        about_title: "About Competition",
        about_desc: "All-Ukrainian open dance sport competition.",
        categories_title: "Competition Categories",
        loading_schedule: "Loading categories...",
        judges_title: "Adjudicators Panel",
        no_judges: "Judges are not registered yet.",
        tab_reviews: "REVIEWS",
        reviews_heading: "Event Reviews & Ratings",
        auth_review_notice: "Please log in to leave a review for this event.",
        review_placeholder: "Write your impressions about the tournament...",
        btn_send_review: "Submit Review",
        loading_reviews: "Loading reviews...",
        no_reviews: "There are no reviews yet. Be the first to share your experience!",
        leave_review_title: "Rate the event by criteria:",
        modal_reg_title: "Competition Registration",
        modal_hint_dancers: "Select dancers (1 for solo, 2 for couple):",
        modal_hint_category: "Select category:",
        select_category_placeholder: "-- Select category --",
        btn_register_submit: "Register",
        modal_participants_title: "Participants List",
        modal_judge_title: "Judge Registration",
        modal_judge_desc: "You are applying for judging in this competition.",
        modal_hint_sessions: "Select sessions (multiple choice):",
        loading: "Loading...",
        btn_submit_application: "Submit application",
        about_desc_finished: "All-Ukrainian open dance sport competition. Event successfully finished.",
        loading_judges: "Loading judges list...",
        loading_clubs: "Loading clubs list...",
        time_1_month_ago: "1 month ago",
        comment_sample_1: "Great tournament! When will all the photos be available?"
    }
};

    const langBtns = document.querySelectorAll('.lang');
    
    function applyTranslation(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    // 1. Обробка кліку на перемикач мови
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const selectedLang = btn.textContent.trim().toLowerCase() === 'eng' ? 'en' : 'ua';
            
            // Зберігаємо обрану мову в пам'ять браузера
            localStorage.setItem('selectedLanguage', selectedLang);
            
            applyTranslation(selectedLang);
            
            const isExpanded = eventsContainer?.classList.contains('show-all');
            if (loadMoreBtn && eventsContainer) {
                loadMoreBtn.innerText = isExpanded 
                    ? translations[selectedLang].btn_collapse 
                    : translations[selectedLang].btn_load_more;
            }
        });
    });

    // 2. Автоматичне застосування мови при завантаженні БУДЬ-ЯКОЇ сторінки
    const savedLang = localStorage.getItem('selectedLanguage') || 'ua';
    
    // Візуально підсвічуємо правильну кнопку (Укр чи Eng)
    langBtns.forEach(btn => {
        const btnLang = btn.textContent.trim().toLowerCase() === 'eng' ? 'en' : 'ua';
        if (btnLang === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Одразу перекладаємо сторінку збереженою мовою
    applyTranslation(savedLang);

    // --- СЛАЙДЕР ---
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.dots');
    
    if (slides.length > 0 && dotsContainer) {
        let current = 0;
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.onclick = () => showSlide(i);
            dotsContainer.appendChild(dot);
        });
        const dots = document.querySelectorAll('.dot');
        const showSlide = (n) => {
            current = n;
            slides.forEach((s, i) => s.classList.toggle('active', i === n));
            dots.forEach((d, i) => d.classList.toggle('active', i === n));
        };
        const nextSlide = () => showSlide((current + 1) % slides.length);
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        if (nextBtn) nextBtn.onclick = nextSlide;
        if (prevBtn) prevBtn.onclick = () => showSlide((current - 1 + slides.length) % slides.length);
        setInterval(nextSlide, 5000);
    }

// --- БУРГЕР МЕНЮ (ОНОВЛЕНЕ) ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        // Відкриття/закриття по кліку
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Щоб клік не йшов на документ
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Закривати меню, якщо клікнути будь-де на екрані повз нього
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
                burger.classList.remove('active');
                nav.classList.remove('active');
            }
        });

        // Закривати меню, коли клікаєш на якусь кнопку в ньому
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // --- ТАБИ ПОШУКУ (ДЛЯ ГОЛОВНОЇ) ---
    const eventTabs = document.querySelectorAll('.events-tabs .tab');
    if (eventTabs.length > 0) {
        eventTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                eventTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // НОВЕ: При кліку на вкладку викликаємо оновлення списку!
                if (typeof applyFilters === 'function') {
                    applyFilters();
                }
            });
        });
    }

// --- ФІЛЬТР КРАЇНА ТА МІСТО ---
    const countryFilter = document.getElementById('country-filter');
    const cityFilter = document.getElementById('city-filter');

    // Якщо змінили країну
    if (countryFilter) {
        countryFilter.addEventListener('change', () => {
            if (typeof applyFilters === 'function') applyFilters();
        });
    }
    // Якщо друкуємо місто
    if (cityFilter) {
        cityFilter.addEventListener('input', () => {
            if (typeof applyFilters === 'function') applyFilters();
        });
    }

    // --- ЗАВАНТАЖИТИ БІЛЬШЕ ЗМАГАНЬ ---
    const loadMoreBtn = document.querySelector('.load-more button');
    const eventsContainer = document.querySelector('.events');

    if (loadMoreBtn && eventsContainer) {
        loadMoreBtn.addEventListener('click', () => {
            eventsContainer.classList.toggle('show-all');
            const currentLang = document.querySelector('.lang.active').textContent.trim().toLowerCase() === 'eng' ? 'en' : 'ua';
            
            loadMoreBtn.innerText = eventsContainer.classList.contains('show-all') 
                ? translations[currentLang].btn_collapse 
                : translations[currentLang].btn_load_more;
        });
    }

    // --- НОВИЙ ФУНКЦІОНАЛ ДЛЯ СТОРІНКИ КЛУБІВ ---
    const clubSearchInput = document.getElementById('club-search');
    const loadMoreClubsBtn = document.getElementById('load-more-clubs');
    const shownCountEl = document.getElementById('shown-count');

    // 1. Пошук клубів по назві
    if (clubSearchInput) {
        clubSearchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const allClubCards = document.querySelectorAll('.club-card');
            
            allClubCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                if (title.includes(query)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // 2. Кнопка "Завантажити більше" для клубів
    if (loadMoreClubsBtn) {
        loadMoreClubsBtn.addEventListener('click', function() {
            const clubsGrid = document.getElementById('clubs-container');
            const hiddenClubs = document.querySelectorAll('.club-card.hidden-extra');
            
            clubsGrid.classList.toggle('show-all-clubs');
            
            const isExpanded = clubsGrid.classList.contains('show-all-clubs');
            const currentLang = document.querySelector('.lang.active').textContent.trim().toLowerCase() === 'eng' ? 'en' : 'ua';
            
            this.innerText = isExpanded 
                ? translations[currentLang].btn_collapse 
                : translations[currentLang].btn_load_more;

            if (shownCountEl) {
                const totalClubs = document.querySelectorAll('.club-card').length;
                shownCountEl.textContent = isExpanded ? totalClubs : (totalClubs - hiddenClubs.length);
            }
        });
    }

});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.style.display = "block";
        evt.currentTarget.className += " active";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".header-right .login-btn");
    
    // Якщо кнопка є і користувач авторизований
    if (loginBtn && localStorage.getItem("isLoggedIn") === "true") {
        
        // Замінюємо кнопку "Вхід" на іконку з випадаючим меню
        loginBtn.outerHTML = `
            <div class="user-menu-wrapper" style="position: relative; display: inline-block;">
                <button id="user-icon-toggle" style="background: none; border: none; font-size: 24px; color: #2c3e50; cursor: pointer; padding: 5px;">
                    <i class="fa-solid fa-circle-user"></i>
                </button>
                
                <div id="user-dropdown" style="display: none; position: absolute; right: 0; top: 40px; background: white; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-radius: 8px; width: 160px; padding: 10px; z-index: 1000;">
                    <a href="cabinet.html" style="display: block; padding: 10px; color: #333; text-decoration: none; border-bottom: 1px solid #eee; font-weight: bold;">Мій кабінет</a>
                    <button onclick="logout()" style="display: block; width: 100%; text-align: left; padding: 10px; background: none; border: none; color: #e91e63; cursor: pointer; font-weight: bold; font-size: 15px;">Вийти</button>
                </div>
            </div>
        `;

        // Додаємо логіку: відкривати/закривати меню при кліку на іконку
        const toggleBtn = document.getElementById("user-icon-toggle");
        const dropdown = document.getElementById("user-dropdown");

        toggleBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Щоб клік не йшов далі
            if (dropdown.style.display === "none") {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        });

        // Закривати меню, якщо клікнути деінде на сторінці
        document.addEventListener("click", function() {
            if (dropdown) dropdown.style.display = "none";
        });
    }
});

window.logout = function() {
    localStorage.clear(); // Це повністю очистить пам'ять від старого юзера
    window.location.href = "index.html"; // Одразу кидає на головну
};
// ========================================================
// ЗАВАНТАЖЕННЯ ТА ФІЛЬТРАЦІЯ ЗМАГАНЬ З БАЗИ ДАНИХ
// ========================================================
const API_URL = "http://127.0.0.1:8000";
let allGlobalEvents = []; // Зберігаємо ВСІ змагання


async function loadMainPageEvents() {
    const container = document.getElementById('dynamic-events-container');
    if (!container) return; 

    try {
        const response = await fetch(`${API_URL}/events`);
        if (!response.ok) throw new Error("Помилка завантаження");
        
        allGlobalEvents = await response.json(); 
        applyFilters(); // Спочатку показуємо всі
    } catch (error) {
        console.error("Помилка:", error);
        container.innerHTML = '<p style="text-align: center; color: red; width: 100%;">Не вдалося завантажити події. Перевір бекенд!</p>';
    }
}
// Універсальна функція для перетворення будь-якої дати у зрозумілий для JS формат
function parseCustomDate(dateStr) {
    if (!dateStr) return new Date(NaN);
    
    // Якщо дата має крапки або тире у форматі ДД.ММ.РРРР / ДД-ММ-РРРР
    if (dateStr.includes('.') || (dateStr.includes('-') && dateStr.split('-')[0].length <= 2)) {
        const parts = dateStr.split(/[.\-]/);
        if (parts.length === 3) {
            // Робимо формат РРРР-ММ-ДД, який точно зрозуміє браузер
            return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
        }
    }
    // Інакше пробуємо стандартний метод
    return new Date(dateStr);
}
// Застосовуємо вибрані фільтри (ГОЛОВНА СТОРІНКА)
function applyFilters() {
    try {
        const container = document.getElementById('dynamic-events-container');
        if (!container) return;

        const countrySelect = document.getElementById('country-filter');
        const cityInput = document.getElementById('city-filter');
        
        // Отримуємо значення, переводимо в малі літери і прибираємо пробіли
        const countryVal = countrySelect ? countrySelect.value.toLowerCase().trim() : 'all';
        const cityVal = cityInput ? cityInput.value.toLowerCase().trim() : '';
        
        const dateInputs = document.querySelectorAll('.custom-date');
        const dateFrom = dateInputs[0] ? dateInputs[0].value : "";
        const dateTo = dateInputs[1] ? dateInputs[1].value : "";

        // Точна сьогоднішня дата
        const today = new Date();
        const localISOTime = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

        // === 1. ВІДСІЮЄМО МИНУЛІ ЗМАГАННЯ ===
        let filteredEvents = allGlobalEvents.filter(e => {
            if (!e.date) return true; 
            let eventDateStr = e.date;
            if (eventDateStr.includes('.')) {
                const parts = eventDateStr.split('.');
                eventDateStr = `${parts[2]}-${parts[1]}-${parts[0]}`;
            }
            return eventDateStr >= localISOTime;
        });

        // === 2. СОРТУЄМО: Від найближчих до найдальших ===
        filteredEvents.sort((a, b) => {
            let dateA = (a.date && a.date.includes('.')) ? a.date.split('.').reverse().join('-') : (a.date || '');
            let dateB = (b.date && b.date.includes('.')) ? b.date.split('.').reverse().join('-') : (b.date || '');
            return dateA.localeCompare(dateB);
        });

        // Словник-помічник для країн
        const countryKeywords = {
            'ua': ['україна', 'ukraine', 'київ', 'львів', 'одеса', 'дніпро', 'харків', 'рівне'],
            'pl': ['польща', 'poland', 'варшава', 'краків'],
            'ee': ['естонія', 'estonia', 'таллінн'],
            'fi': ['фінляндія', 'finland', 'гельсінкі'],
            'fr': ['франція', 'france', 'париж'],
            'ge': ['грузія', 'georgia', 'тбілісі'],
            'de': ['німеччина', 'germany', 'берлін'],
            'gr': ['греція', 'greece', 'афіни'],
            'md': ['молдова', 'moldova', 'кишинів'],
            'pt': ['португалія', 'portugal', 'лісабон'],
            'ro': ['румунія', 'romania', 'бухарест'],
            'rs': ['сербія', 'serbia', 'белград'],
            'ae': ['оае', 'uae', 'emirates', 'дубай'],
            'uk': ['британія', 'uk', 'london', 'лондон'],
            'us': ['сша', 'usa', 'ny', 'нью-йорк']
        };

        // === 3. ФІЛЬТР ПО КРАЇНІ ===
        // Ігноруємо 'all' та 'всі країни', щоб список не ставав пустим!
        if (countryVal && countryVal !== 'all' && !countryVal.includes('всі')) {
            const keywords = countryKeywords[countryVal] || [];
            filteredEvents = filteredEvents.filter(e => {
                const evCity = e.city ? e.city.toLowerCase() : '';
                return keywords.some(kw => evCity.includes(kw));
            });
        }

        // === 3.1 ФІЛЬТР ПО МІСТУ ===
        // Ігноруємо 'all', якщо воно випадково туди потрапило
        if (cityVal && cityVal !== 'all' && !cityVal.includes('всі')) {
            filteredEvents = filteredEvents.filter(e => {
                const evCity = e.city ? e.city.toLowerCase() : '';
                return evCity.includes(cityVal);
            });
        }

        // === 4. ФІЛЬТР ПО ДАТАХ ===
        if (dateFrom) {
            filteredEvents = filteredEvents.filter(e => {
                if (!e.date) return false;
                let d = e.date.includes('.') ? e.date.split('.').reverse().join('-') : e.date;
                return d >= dateFrom;
            });
        }
        if (dateTo) {
            filteredEvents = filteredEvents.filter(e => {
                if (!e.date) return false;
                let d = e.date.includes('.') ? e.date.split('.').reverse().join('-') : e.date;
                return d <= dateTo;
            });
        }

        // === 5. ФІЛЬТР ПО ТАБАХ (ТИП ПОДІЇ) ===
        const activeTab = document.querySelector('.events-tabs .tab.active');
        if (activeTab) {
            const tabKey = activeTab.getAttribute('data-lang-key');
            if (tabKey === 'tab_sport') {
                filteredEvents = filteredEvents.filter(e => !e.event_type || e.event_type === 'Спортивні танці');
            } else if (tabKey === 'tab_pro_am') {
                filteredEvents = filteredEvents.filter(e => e.event_type === 'World Pro-Am');
            } else if (tabKey === 'tab_lessons') {
                filteredEvents = filteredEvents.filter(e => e.event_type && e.event_type.includes('Збори'));
            }
        }

        renderEvents(filteredEvents);
    } catch (err) {
        console.error("Помилка під час фільтрації:", err);
    }
}

// Малюємо відфільтровані картки
function renderEvents(eventsToRender) {
    const container = document.getElementById('dynamic-events-container');
    container.innerHTML = '';

    if (eventsToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; width: 100%; color: #888; padding: 20px; font-size: 1.1rem;">За вашими критеріями змагань не знайдено 😔</p>';
        return;
    }

    eventsToRender.forEach((event) => {
        let imgSrc = event.image ? `assets/images/${event.image}` : 'assets/images/cup1.png';

        const cardHTML = `
            <a href="event-details.html?id=${event.id}" class="card-button">
                <div class="card">
                    <div class="card-image">
                        <img src="${imgSrc}" alt="${event.name}">
                    </div>
                    <div class="card-body">
                        <span class="badge"><span data-lang-key="reg_badge">РЕЄСТРАЦІЯ</span></span>
                        <h3>${event.name}</h3>
                        <p class="date"><i class="fa-regular fa-calendar"></i> ${event.date}</p>
                        <p class="reg"><i class="fa-solid fa-location-dot"></i> м. ${event.city}</p>
                    </div>
                </div>
            </a>
        `;
        container.innerHTML += cardHTML;
    });

    // Оновлюємо переклад бейджів, якщо вибрана англійська мова
    const activeLangBtn = document.querySelector('.lang.active');
    if (activeLangBtn && activeLangBtn.textContent.trim().toLowerCase() === 'eng') {
        document.querySelectorAll('[data-lang-key="reg_badge"]').forEach(el => el.textContent = "REGISTRATION");
    }
}

// Запускаємо логіку після завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
    loadMainPageEvents();
    loadSingleEventDetails();
    loadRegisteredJudges();
    loadEventClubs();
    renderReviewFormInterface(); // <--- Вставили це
    loadEventReviews();          // <--- І вставили це
    loadAllClubs();
    loadAllPeople();
    loadResultsEvents();

    // Слухачі для селектів та дат
    const countrySelect = document.getElementById('country-filter');
    const citySelect = document.getElementById('city-filter');
    const dateInputs = document.querySelectorAll('.custom-date');

    if (countrySelect) countrySelect.addEventListener('change', applyFilters);
    if (citySelect) citySelect.addEventListener('input', applyFilters);
    if (dateInputs.length >= 2) {
        dateInputs[0].addEventListener('change', applyFilters);
        dateInputs[1].addEventListener('change', applyFilters);
    }
});
// ========================================================
// ДЕТАЛІ КОНКРЕТНОГО ЗМАГАННЯ
// ========================================================
async function loadSingleEventDetails() {
    // Перевіряємо, чи ми на правильній сторінці
    if (!window.location.pathname.includes('event')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    if (!eventId) {
        console.warn("ID змагання не знайдено в URL.");
        const titleEl = document.getElementById('detail-name');
        if (titleEl) titleEl.innerText = "Помилка: Не вказано ID змагання в посиланні";
        return;
    }

    try {
        const response = await fetch(`${API_URL}/events`);
        const events = await response.json();
        
        const eventData = events.find(e => e.id == eventId); 

        if (eventData) {
            // 1. Вставляємо дані 
            if (document.getElementById('detail-name')) document.getElementById('detail-name').innerText = eventData.name;
            if (document.getElementById('detail-date')) document.getElementById('detail-date').innerText = eventData.date;
            if (document.getElementById('detail-city')) document.getElementById('detail-city').innerText = eventData.city;
            if (document.getElementById('detail-organizers')) document.getElementById('detail-organizers').innerText = eventData.organizers || "Не вказано";
            if (document.getElementById('detail-organization')) document.getElementById('detail-organization').innerText = eventData.organization || "Не вказано";
            
            renderCategoriesTable(eventData.categories, eventData.date);
            populateCategoryDropdown(eventData.categories);
            if (typeof populateJudgeTimeDropdown === "function") populateJudgeTimeDropdown(eventData.categories);

            // --- НОВА ЛОГІКА ДЛЯ КНОПОК "ІНФОРМАЦІЯ" ТА "СТИЛІСТИ" ---
            const infoLink = document.getElementById('detail-info-link');
            const stylistsLink = document.getElementById('detail-stylists-link');

            function setupLink(linkElement, dataText, title) {
                if (!linkElement) return;
                
                if (!dataText || dataText.trim() === "") {
                    // Якщо в адмінці нічого не вписали, ховаємо кнопку
                    linkElement.style.display = "none";
                    return;
                }

                linkElement.style.display = "inline-block";
                
                // Перевіряємо, чи це посилання (починається з http або /uploads)
                if (dataText.startsWith('http') || dataText.startsWith('/uploads')) {
                    linkElement.href = dataText;
                    linkElement.target = "_blank"; // Відкриє в новій вкладці
                    linkElement.onclick = null;
                } else {
                    // Якщо це звичайний текст, при кліку показуємо віконечко
                    linkElement.href = "#";
                    linkElement.removeAttribute("target");
                    linkElement.onclick = (e) => {
                        e.preventDefault();
                        showDynamicModal(title, dataText);
                    };
                }
            }

            setupLink(infoLink, eventData.info_file, "Інформація про змагання");
            setupLink(stylistsLink, eventData.stylists_file, "Стилісти");
            // -----------------------------------------------------------

            // 2. Змінюємо постер/картинку
            const imgEl = document.querySelector('.poster-wrapper img');
            if (imgEl) {
                imgEl.src = eventData.image ? `assets/images/${eventData.image}` : 'assets/images/dance1.jpg';
                imgEl.alt = eventData.name;
            }

            // 3. Оновлюємо вкладку "ПРО ЗМАГАННЯ" 
            const aboutCard = document.querySelector('#about .content-card');
            if (aboutCard) {
                aboutCard.innerHTML = `
                    <div class="card-title"><i class="fas fa-file-alt blue-icon"></i> Про змагання</div>
                    <p><strong>${eventData.name.toUpperCase()}</strong></p>
                    <p>Місце проведення: <strong>${eventData.city}</strong></p>
                    <p>Дата проведення: <strong>${eventData.date}</strong></p>
                    <p>Організатори: <strong>${eventData.organizers || "Не вказано"}</strong></p>
                    <p>Організація: <strong>${eventData.organization || "Не вказано"}</strong></p>
                `;
            }

            document.title = `${eventData.name} - DanceHub`;
        } else {
            const titleEl = document.getElementById('detail-name');
            if (titleEl) titleEl.innerText = "Змагання не знайдено 😔";
        }
    } catch (error) {
        console.error("Помилка завантаження деталей:", error);
        const titleEl = document.getElementById('detail-name');
        if (titleEl) titleEl.innerText = "Помилка з'єднання з сервером";
    }
}

// Функція для створення віконечка з текстом
function showDynamicModal(title, content) {
    let oldModal = document.getElementById('dynamic-text-modal');
    if (oldModal) oldModal.remove();

    const modalHtml = `
    <div id="dynamic-text-modal" class="modal-overlay" style="display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 9999; justify-content: center; align-items: center;">
        <div class="modal-content" style="background: white; padding: 30px; border-radius: 12px; max-width: 500px; width: 90%; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <span onclick="document.getElementById('dynamic-text-modal').remove()" style="position: absolute; right: 20px; top: 15px; font-size: 28px; cursor: pointer; color: #888; transition: 0.2s;">&times;</span>
            <h2 style="margin-top: 0; color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px;">
                ${title === 'Стилісти' ? '<i class="fas fa-cut" style="color:#e91e63;"></i>' : '<i class="fas fa-info-circle" style="color:#3498db;"></i>'} ${title}
            </h2>
            <p style="color: #444; line-height: 1.6; font-size: 16px; white-space: pre-wrap; margin: 0;">${content}</p>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}


// ========================================================
// МАЛЮВАННЯ ТАБЛИЦІ КАТЕГОРІЙ (МАТРИЦЯ)
// ========================================================
function renderCategoriesTable(categoriesText, eventDate) {
    const container = document.getElementById('dynamic-categories-container');
    if (!container) return;

    if (!categoriesText || categoriesText.trim() === "") {
        let curLang = localStorage.getItem('selectedLanguage') || 'ua';
        let msgCat = (curLang === 'en') ? 'Categories have not been added by the organizer yet.' : 'Категорії ще не додані організатором.';
        container.innerHTML = `<p style="padding:15px; text-align:center; color:#888;">${msgCat}</p>`;
        return;
    }

    const lines = categoriesText.split('\n');
    const schedule = {};
    const timesSet = new Set();
    const categoriesSet = new Set();

    lines.forEach(line => {
        if (line.trim() === "") return;
        
        // Розділяємо по символу | (пріоритет) або - (старий варіант)
        let separator = line.includes('|') ? '|' : '-';
        const parts = line.split(separator).map(s => s.trim());

        if (parts.length >= 2) {
            const time = parts[0];
            const cat = parts[1];
            let prog = parts.slice(2).join(` ${separator} `); // Всі танці (W-C тощо)

            // Якщо танці не вписали, просто ставимо галочку
            if(!prog) prog = "✔️";

            timesSet.add(time);
            categoriesSet.add(cat);

            if (!schedule[cat]) schedule[cat] = {};
            schedule[cat][time] = prog;
        }
    });

    const times = Array.from(timesSet).sort();
    const categories = Array.from(categoriesSet);

    if (times.length === 0 || categories.length === 0) {
        container.innerHTML = '<p style="padding:15px; text-align:center; color:#888;">Невірний формат категорій.</p>';
        return;
    }

    // Будуємо HTML таблиці
    let html = '<table class="matrix-table">';
    html += '<thead>';
    // Верхній рядок: КАТЕГОРІЯ + ДАТА
    html += `<tr>
        <th rowspan="2" class="matrix-head-cat">КАТЕГОРІЯ</th>
        <th colspan="${times.length}" class="matrix-head-date">${eventDate || 'Дата не вказана'}</th>
    </tr>`;
    // Другий рядок: Часи
    html += '<tr>';
    times.forEach(t => {
        html += `<th class="matrix-head-time">${t}</th>`;
    });
    html += '</tr></thead><tbody>';

    // Рядки: Категорії та танці
    categories.forEach(cat => {
        html += `<tr><td class="matrix-cell-cat">${cat}</td>`;
        times.forEach(t => {
            const val = schedule[cat][t] || ''; // Якщо пусто - буде порожня клітинка
            html += `<td class="matrix-cell-val">${val}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// ========================================================
// ЗАПОВНЕННЯ СПИСКУ КАТЕГОРІЙ В МОДАЛЦІ (ТЕПЕР З ГАЛОЧКАМИ)
// ========================================================
function populateCategoryDropdown(categoriesText) {
    const container = document.getElementById('category-select-container');
    if (!container) return;

    // Очищаємо контейнер перед завантаженням
    container.innerHTML = ''; 

    if (!categoriesText || categoriesText.trim() === "") {
        container.innerHTML = '<p style="color:#888; font-size:14px; margin:0;">Категорії не знайдені</p>';
        return;
    }

    const lines = categoriesText.split('\n');
    const uniqueCategories = new Set(); // Використовуємо Set, щоб уникнути дублікатів

    lines.forEach(line => {
        if (line.trim() === "") return;
        
        let separator = line.includes('|') ? '|' : '-';
        const parts = line.split(separator).map(s => s.trim());
        
        if (parts.length >= 2) {
            const cat = parts[1]; // Назва категорії
            let prog = parts.slice(2).join(` ${separator} `); // Танці (напр. W-C)
            
            // Формуємо красиву назву: "Дебют 1 (W-C)"
            let displayName = cat;
            if (prog && prog !== "✔️") {
                displayName += ` (${prog})`;
            }
            
            uniqueCategories.add(displayName);
        }
    });

    // Малюємо красиві чекбокси (галочки)
    uniqueCategories.forEach(catName => {
        container.innerHTML += `
            <label style="display: block; margin-bottom: 8px; cursor: pointer; padding: 5px; background: #f8f9fa; border-radius: 5px; font-size: 14px;">
                <input type="checkbox" name="event-category" value="${catName}" style="margin-right: 8px; transform: scale(1.2);"> 
                ${catName}
            </label>
        `;
    });
}
// ========================================================
// ЛОГІКА РЕЄСТРАЦІЇ УЧАСНИКІВ (РЕАЛЬНА БАЗА ДАНИХ)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
    const regBtn = document.querySelector('.btn-blue'); // Кнопка "Реєстрація учасників"
    const modal = document.getElementById('reg-modal');
    const closeBtn = document.getElementById('close-reg-modal');
    const submitBtn = document.getElementById('submit-reg-btn');
    const dancersContainer = document.getElementById('dancers-list');

    let selectedDancers = []; 
    let myDancers = []; // Сюди завантажимо учнів з бази

    if (regBtn && modal) {
        regBtn.addEventListener('click', async () => {
            // 1. Перевіряємо чи людина авторизована
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            const userRole = localStorage.getItem("userRole");
            const currentUserId = localStorage.getItem("user_id"); // Беремо ID тренера

            if (isLoggedIn !== "true") {
                alert("Будь ласка, увійдіть в акаунт (як Тренер) для реєстрації!");
                window.location.href = "login.html";
                return;
            }

            if (userRole !== "trainer" && userRole !== "admin") {
                alert("Реєструвати учасників може лише тренер або керівник клубу!");
                return;
            }

            // Показуємо вікно і пишемо, що йде завантаження
            modal.style.display = 'flex';
            dancersContainer.innerHTML = '<p style="grid-column: span 2; text-align:center; color: #888;">Завантаження учнів...</p>';

            // 2. Завантажуємо учнів саме цього тренера з бекенду
            try {
                const response = await fetch(`${API_URL}/students/${currentUserId}`);
                if (!response.ok) throw new Error("Помилка завантаження");
                
                myDancers = await response.json();
                renderDancers(); // Малюємо їх
            } catch (error) {
                console.error("Помилка:", error);
                dancersContainer.innerHTML = '<p style="grid-column: span 2; color:red; text-align:center;">Не вдалося з\'єднатися з сервером.</p>';
            }
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            resetSelection();
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                resetSelection();
            }
        });
    }

    function renderDancers() {
        dancersContainer.innerHTML = ''; 

        if (myDancers.length === 0) {
            dancersContainer.innerHTML = '<p style="grid-column: span 2; text-align: center; color: #e74c3c; font-weight: bold;">У вашому кабінеті ще немає доданих танцюристів. Спочатку додайте їх у розділі "Мій кабінет".</p>';
            return;
        }

        myDancers.forEach(dancer => {
            const div = document.createElement('div');
            div.className = 'dancer-option';
            // Виводимо реальні дані з бази: Ім'я, Прізвище і Клас
            div.innerHTML = `<strong>${dancer.last_name} ${dancer.first_name}</strong> <br><small style="color: #2196F3;">Клас: ${dancer.dance_class}</small>`;
            
            div.addEventListener('click', () => {
                const index = selectedDancers.indexOf(dancer.id);
                
                if (index > -1) {
                    selectedDancers.splice(index, 1);
                    div.classList.remove('selected');
                } else {
                    if (selectedDancers.length >= 2) {
                        alert("Можна обрати максимум 2 танцюристів (для пари)!");
                        return;
                    }
                    selectedDancers.push(dancer.id);
                    div.classList.add('selected');
                }
            });

            dancersContainer.appendChild(div);
        });
    }

    function resetSelection() {
        selectedDancers = [];
        const options = document.querySelectorAll('.dancer-option');
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Очищаємо всі галочки (чекбокси) категорій
        const checkboxes = document.querySelectorAll('input[name="event-category"]');
        checkboxes.forEach(cb => cb.checked = false);
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', async () => {
            if (selectedDancers.length === 0) {
                alert("Оберіть хоча б одного танцюриста!");
                return;
            }

            // Збираємо ВСІ обрані категорії (де стоять галочки)
            const selectedCategoryCheckboxes = document.querySelectorAll('input[name="event-category"]:checked');
            const selectedCategories = Array.from(selectedCategoryCheckboxes).map(cb => cb.value);

            if (selectedCategories.length === 0) {
                alert("Оберіть хоча б одну категорію для реєстрації!");
                return;
            }

            // Робимо кнопку неактивною, щоб тренер не клацав двічі під час завантаження
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Реєстрація...';

            // Отримуємо ID змагання та тренера
            const urlParams = new URLSearchParams(window.location.search);
            const currentEventId = urlParams.get('id') || 1; 
            
            // Перевіряємо обидва варіанти написання акаунта (про всяк випадок)
            const currentUserId = localStorage.getItem("user_id") || localStorage.getItem("userId") || 1; 

            try {
                // Створюємо масив запитів для кожної обраної категорії
                const requests = selectedCategories.map(cat => {
                    const regData = {
                        event_id: parseInt(currentEventId),
                        trainer_id: parseInt(currentUserId),
                        category: cat,
                        dancers: selectedDancers
                    };

                    return fetch(`${API_URL}/events/register`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(regData)
                    });
                });

                // Запускаємо всі запити одночасно
                const responses = await Promise.all(requests);
                
                // Перевіряємо, чи всі запити пройшли успішно (статус 200/201)
                const allOk = responses.every(res => res.ok);

                if (allOk) {
                    const typeStr = selectedDancers.length === 1 ? "Соло" : "Пару";
                    alert(`Успішно! ${typeStr} зареєстровано одразу у ${selectedCategories.length} категоріях!`);
                    
                    modal.style.display = 'none';
                    resetSelection();
                    
                    // ОНОВЛЮЄМО СТАТИСТИКУ НА СТОРІНЦІ ПІСЛЯ РЕЄСТРАЦІЇ
                    if (typeof loadEventStats === "function") {
                        loadEventStats(currentEventId);
                    }
                } else {
                    alert("Сталася помилка при реєстрації в одній або кількох категоріях.");
                }
            } catch (error) {
                console.error("Помилка реєстрації:", error);
                alert("Немає зв'язку з сервером!");
            } finally {
                // Повертаємо кнопці початковий стан
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Зареєструвати';
            }
        });
    }
});

// Функція для оновлення статистики на сторінці змагання
async function loadEventStats(eventId) {
    try {
        const response = await fetch(`${API_URL}/events/${eventId}/stats`);
        if (response.ok) {
            const stats = await response.json();
            
            // Знаходимо всі блоки зі статистикою і міняємо цифри
            const statCards = document.querySelectorAll('.stat-card h2');
            if (statCards.length >= 4) {
                statCards[0].innerText = stats.dancers;
                statCards[1].innerText = stats.couples;
                statCards[2].innerText = stats.solos;
                statCards[3].innerText = stats.entries;
            }
        }
    } catch (error) {
        console.error("Не вдалося завантажити статистику:", error);
    }
}

// Запускаємо її при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id') || 1;
    if (document.querySelector('.stats-grid')) {
        loadEventStats(eventId);
    }
});

// ========================================================
// ЛОГІКА ПЕРЕГЛЯДУ ТА ВИДАЛЕННЯ УЧАСНИКІВ
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
    const statCards = document.querySelectorAll('.stat-card');
    const partModal = document.getElementById('participants-modal');
    const closePartModal = document.getElementById('close-participants-modal');
    const partList = document.getElementById('participants-list');

    // Отримуємо ID змагання та тренера
    const urlParams = new URLSearchParams(window.location.search);
    const currentEventId = urlParams.get('id') || 1; 
    const currentTrainerId = localStorage.getItem("user_id"); // Хто зараз зайшов

    // 1. Відкриваємо вікно при кліку на будь-яку картку статистики
    statCards.forEach(card => {
        card.addEventListener('click', () => {
            partModal.style.display = 'flex';
            loadParticipants();
        });
    });

    // 2. Закриваємо вікно
    if(closePartModal) {
        closePartModal.addEventListener('click', () => { partModal.style.display = 'none'; });
    }
    window.addEventListener('click', (e) => {
        if (e.target === partModal) partModal.style.display = 'none';
    });

// 3. Завантажуємо і малюємо список
    async function loadParticipants() {
        partList.innerHTML = '<p style="text-align:center;">Завантаження списку...</p>';
        try {
            const response = await fetch(`${API_URL}/events/${currentEventId}/registrations`);
            if (!response.ok) throw new Error("Помилка");
            
            const regs = await response.json();
            partList.innerHTML = '';

            if (regs.length === 0) {
                partList.innerHTML = '<p style="text-align:center; color:#888;">Ще немає зареєстрованих учасників.</p>';
                return;
            }

            // БЕРЕМО ID ПРЯМО ТУТ. Якщо ти розлогінена, воно вважатиме тебе тренером №1 (для тесту)
            const myTrainerId = localStorage.getItem("userId") || 1;

            regs.forEach(reg => {
                const div = document.createElement('div');
                div.className = 'participant-item';
                
                // Перевіряємо, чи це твоя заявка (використовуємо == для гнучкості)
                let deleteBtnHtml = '';
                if (reg.trainer_id == myTrainerId) {
                    deleteBtnHtml = `<button class="del-reg-btn" onclick="deleteRegistration(${reg.id})">❌ Скасувати</button>`;
                }

                div.innerHTML = `
                    <div class="participant-info">
                        <strong>${reg.names}</strong>
                        <span><i class="fas fa-user-friends"></i> ${reg.reg_type}</span>
                    </div>
                    ${deleteBtnHtml}
                `;
                partList.appendChild(div);
            });
        } catch (error) {
            partList.innerHTML = '<p style="color:red; text-align:center;">Не вдалося завантажити список.</p>';
        }
    }

    // 4. Функція видалення (вона має бути глобальною, щоб спрацював onclick)
    window.deleteRegistration = async function(regId) {
        if (!confirm("Ви впевнені, що хочете скасувати цю заявку?")) return;

        try {
            const response = await fetch(`${API_URL}/registrations/${regId}`, { method: 'DELETE' });
            if (response.ok) {
                alert("Заявку успішно скасовано!");
                loadParticipants(); // Оновлюємо список у вікні
                
                // Оновлюємо цифри статистики на фоні!
                if (typeof loadEventStats === "function") {
                    loadEventStats(currentEventId);
                }
            } else {
                alert("Помилка при видаленні.");
            }
        } catch (error) {
            alert("Немає зв'язку з сервером!");
        }
    }
});

function populateJudgeTimeDropdown(categoriesText) {
    const container = document.getElementById('judge-time-options');
    if (!container) return;
    
    container.innerHTML = '<label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" value="Цілий день"> <strong>Всі відділення (Цілий день)</strong></label>';
    
    if (!categoriesText) return;

    const lines = categoriesText.split('\n');
    const uniqueTimes = new Set();
    lines.forEach(line => {
        let parts = line.split(line.includes('|') ? '|' : '-').map(s => s.trim());
        if (parts[0]) uniqueTimes.add(parts[0]);
    });

    Array.from(uniqueTimes).sort().forEach(time => {
        if (!time) return;
        const label = document.createElement('label');
        label.style = "display:flex; align-items:center; gap:8px; cursor:pointer;";
        label.innerHTML = `<input type="checkbox" value="${time}"> Відділення о ${time}`;
        container.appendChild(label);
    });
}

// ========================================================
// МОДАЛЬНЕ ВІКНО: РЕЄСТРАЦІЯ СУДДІВ
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
    const judgeBtn = document.getElementById('btn-judge-reg');
    const judgeModal = document.getElementById('judge-reg-modal');
    const closeJudgeModal = document.getElementById('close-judge-modal');
    const submitJudgeBtn = document.getElementById('submit-judge-btn');

    if (judgeBtn && judgeModal) {
        judgeBtn.addEventListener('click', () => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (isLoggedIn !== "true") {
                alert("Будь ласка, увійдіть в систему, щоб подати заявку на суддівство!");
                window.location.href = "login.html";
                return;
            }
            judgeModal.style.display = 'flex';
        });
    }

    if (closeJudgeModal) {
        closeJudgeModal.addEventListener('click', () => {
            judgeModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === judgeModal) judgeModal.style.display = 'none';
    });

    if (submitJudgeBtn) {
        submitJudgeBtn.addEventListener('click', async () => {
            const checkedBoxes = document.querySelectorAll('#judge-time-options input[type="checkbox"]:checked');
            
            let userId = localStorage.getItem("user_id");
            const eventId = new URLSearchParams(window.location.search).get('id') || 1;

            if (checkedBoxes.length === 0) {
                alert("Оберіть хоча б одне відділення!");
                return;
            }

            if (!userId) {
                alert("Помилка: не знайдено ваш ID. Увійдіть заново.");
                return;
            }

            const selectedTimes = Array.from(checkedBoxes).map(cb => cb.value).join(', ');

            try {
                const response = await fetch(`${API_URL}/events/${eventId}/register-judge`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_id: parseInt(userId),
                        time_slot: selectedTimes
                    })
                });

                if (response.ok) {
                    alert("Ви успішно зареєстровані як суддя!");
                    judgeModal.style.display = 'none';
                    loadRegisteredJudges(); 
                } else {
                    alert("Помилка на сервері. Можливо, невірні дані.");
                }
            } catch (error) {
                alert("Помилка з'єднання з сервером.");
            }
        });
    }
});

async function loadRegisteredJudges(eventId) {
    const container = document.getElementById('judges-list');
    if (!container) return;

    // Якщо eventId не передали, шукаємо його самі в адресному рядку
    if (!eventId) {
        eventId = new URLSearchParams(window.location.search).get('id');
        if (!eventId) return; // Якщо і тут немає, значить ми не на сторінці змагання
    }

    try {
        const response = await fetch(`${API_URL}/events/${eventId}/judges`);
        const judges = await response.json();

        const judgeTabBtn = document.querySelector('button[onclick*="judges"]');
        if (judgeTabBtn) {
            let curLang = localStorage.getItem('selectedLanguage') || 'ua';
            let word = (curLang === 'en') ? 'JUDGES' : 'СУДДІ';
            judgeTabBtn.innerHTML = `<i class="fas fa-users"></i> <span data-lang-key="tab_judges">${word}</span> (${judges.length})`;
        }

        if (judges.length === 0) {
            let curLang = localStorage.getItem('selectedLanguage') || 'ua';
            let msgJudges = (curLang === 'en') ? 'The judging panel is still being formed.' : 'Суддівська колегія ще формується.';
            container.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">${msgJudges}</p>`;
            return;
        }

        const currentUserId = localStorage.getItem("user_id");
        const currentEventId = new URLSearchParams(window.location.search).get('id');

        container.innerHTML = judges.map(judge => {
            const isMe = currentUserId && (judge.id.toString() === currentUserId.toString());
            const deleteBtn = isMe 
                ? `<button onclick="deleteJudgeRegistration(event, ${currentEventId}, ${judge.id})" style="background:none; border:none; color:#f44336; cursor:pointer; font-size:18px; margin-left:auto; padding:5px;" title="Скасувати заявку"><i class="fas fa-trash-alt"></i></button>` 
                : '';

            return `
            <div class="judge-card-modern" onclick="window.location.href='profile.html?id=${judge.id}'" style="display:flex; width:100%;">
                <div class="judge-avatar">
                    <img src="${judge.photo || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/149/149071.png'" alt="Суддя">
                </div>
                <div class="judge-details">
                    <div class="judge-name-modern">${judge.full_name}</div>
                    <div class="judge-sub-info">
                        <span><i class="far fa-clock"></i> ${judge.time_slot}</span>
                    </div>
                </div>
                ${deleteBtn}
            </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Помилка завантаження суддів:", error);
    }
} // <--- ОСЬ ЦЮ ДУЖКУ МИ ПОСТАВИЛИ НА МІСЦЕ! Вона закриває loadRegisteredJudges.

// ========================================================
// ФУНКЦІЯ СКАСУВАННЯ ЗАЯВКИ СУДДІ
// ========================================================
window.deleteJudgeRegistration = async function(event, eventId, judgeId) {
    event.stopPropagation(); 

    if (!confirm("Ви впевнені, що хочете скасувати свою заявку на суддівство?")) return;

    try {
        const response = await fetch(`${API_URL}/events/${eventId}/judges/${judgeId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert("Реєстрацію успішно скасовано!");
            loadRegisteredJudges(); 
        } else {
            alert("Помилка при видаленні.");
        }
    } catch (error) {
        alert("Помилка з'єднання з сервером.");
    }
};

// ========================================================
// ЗАВАНТАЖЕННЯ КЛУБІВ, ЯКІ БЕРУТЬ УЧАСТЬ
// ========================================================
async function loadEventClubs() {
    const container = document.querySelector('#clubs .person-grid');
    const tabBtn = document.querySelector('button[onclick*="clubs"]');
    const titleEl = document.querySelector('#clubs .card-title');
    
    if (!container) return;

    const eventId = new URLSearchParams(window.location.search).get('id');
    if (!eventId) return; 

    try {
        const response = await fetch(`${API_URL}/events/${eventId}/clubs`);
        if (!response.ok) throw new Error("Помилка");
        const clubs = await response.json();

        if (tabBtn) {
            let curLang = localStorage.getItem('selectedLanguage') || 'ua';
            let word = (curLang === 'en') ? 'CLUBS' : 'КЛУБИ';
            tabBtn.innerHTML = `<i class="fas fa-user-friends"></i> <span data-lang-key="tab_clubs">${word}</span> (${clubs.length})`;
        }
        if (titleEl) {
            let curLang = localStorage.getItem('selectedLanguage') || 'ua';
            let wordTitle = (curLang === 'en') ? 'Clubs' : 'Клуби';
            titleEl.innerHTML = `<i class="fas fa-user-friends blue-icon"></i> <span data-lang-key="clubs_title">${wordTitle}</span> (${clubs.length})`;
        }

        if (clubs.length === 0) {
            let curLang = localStorage.getItem('selectedLanguage') || 'ua';
            let msgClubs = (curLang === 'en') ? 'No club has registered participants yet.' : 'Жоден клуб ще не зареєстрував учасників.';
            container.innerHTML = `<p style="text-align:center; padding:20px; color:#888; grid-column: span 2;">${msgClubs}</p>`;
            return;
        }

        container.innerHTML = clubs.map(club => {
            const firstLetter = club.name.charAt(0).toUpperCase();
            
            let ending = "Участей";
            const lastDigit = club.entries % 10;
            const lastTwo = club.entries % 100;
            if (lastTwo < 11 || lastTwo > 14) {
                if (lastDigit === 1) ending = "Участь";
                else if (lastDigit >= 2 && lastDigit <= 4) ending = "Участі";
            }

            return `
            <div class="person-item">
                <div class="club-logo">${firstLetter}</div>
                <div class="p-info">
                    <h4>${club.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> Україна</p>
                    <span class="u-count"><i class="fas fa-users"></i> ${club.entries} ${ending}</span>
                </div>
            </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Помилка завантаження клубів:", error);
    }
} // <--- Тут тепер лише ОДНА дужка, яка закриває loadEventClubs!

// ========================================================
// ЛОГІКА ДЛЯ ВКЛАДКИ ВІДГУКІВ ТА ОЦІНОК (РЕЙТИНГУ)
// ========================================================

// Об'єкт для зберігання поточних вибраних оцінок у формі
let currentReviewRatings = {
    schedule: 0,
    changing_rooms: 0,
    hall_comfort: 0,
    lighting: 0,
    music: 0
};

// Ініціалізація інтерактивних зірочок
function initStarRatings() {
    const rows = document.querySelectorAll('.stars-input');
    rows.forEach(row => {
        const stars = row.querySelectorAll('i');
        const criterion = row.getAttribute('data-criterion');

        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const val = parseInt(star.getAttribute('data-value'));
                highlightStars(stars, val);
            });

            star.addEventListener('mouseout', () => {
                const savedVal = currentReviewRatings[criterion];
                highlightStars(stars, savedVal);
            });

            star.addEventListener('click', () => {
                const val = parseInt(star.getAttribute('data-value'));
                currentReviewRatings[criterion] = val;
                highlightStars(stars, val);
            });
        });
    });
}

function highlightStars(starsArray, value) {
    starsArray.forEach(star => {
        const starVal = parseInt(star.getAttribute('data-value'));
        if (starVal <= value) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid', 'active');
        } else {
            star.classList.remove('fa-solid', 'active');
            star.classList.add('fa-regular');
        }
    });
}

// Генерація форми відгуку (з перевіркою авторизації)
window.renderReviewFormInterface = function() {
    const wrapper = document.getElementById('review-form-wrapper');
    if (!wrapper) return;

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const currentLang = localStorage.getItem('selectedLanguage') || 'ua';

    if (!isLoggedIn) {
        let msgAuth = (currentLang === 'en') ? 'Please log in to leave a review.' : 'Авторизуйтесь, щоб залишити відгук про змагання.';
        wrapper.innerHTML = `
            <div class="auth-notice" style="text-align:center; padding:15px; background:#fff3cd; color:#856404; border-radius:8px; margin-bottom:20px;">
                <i class="fas fa-lock"></i> <span>${msgAuth}</span>
            </div>
        `;
        return;
    }

    let titleForm = (currentLang === 'en') ? 'Rate the event by criteria:' : 'Оцініть змагання за критеріями:';
    let label1 = (currentLang === 'en') ? 'Schedule compliance' : 'Відповідність розкладу';
    let label2 = (currentLang === 'en') ? 'Changing rooms' : 'Кімнати для переодягання';
    let label3 = (currentLang === 'en') ? 'Hall comfort' : 'Оформлення та зручність залу';
    let label4 = (currentLang === 'en') ? 'Lighting' : 'Освітлення';
    let label5 = (currentLang === 'en') ? 'Music' : 'Музичний супровід';
    let placeholderText = (currentLang === 'en') ? 'Write your impressions about the tournament...' : 'Залишити відгук...';
    let btnText = (currentLang === 'en') ? 'Submit Review' : 'Відправити';

    wrapper.innerHTML = `
        <div class="rating-form-container" style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <div class="rating-form-title" style="font-weight:bold; margin-bottom:10px; color:#2c3e50;">${titleForm}</div>
            
            <div class="rating-selectors" style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px;">
                <div class="rating-row" style="display:flex; justify-content:space-between; max-width:400px; align-items:center;">
                    <span class="rating-label" style="font-size:14px; color:#555;">${label1}</span>
                    <div class="stars-input" data-criterion="schedule" style="color:#ccc;">
                        <i class="fa-regular fa-star" data-value="1" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="2" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="3" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="4" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="5" style="cursor:pointer; font-size:16px;"></i>
                    </div>
                </div>
                <div class="rating-row" style="display:flex; justify-content:space-between; max-width:400px; align-items:center;">
                    <span class="rating-label" style="font-size:14px; color:#555;">${label2}</span>
                    <div class="stars-input" data-criterion="changing_rooms" style="color:#ccc;">
                        <i class="fa-regular fa-star" data-value="1" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="2" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="3" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="4" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="5" style="cursor:pointer; font-size:16px;"></i>
                    </div>
                </div>
                <div class="rating-row" style="display:flex; justify-content:space-between; max-width:400px; align-items:center;">
                    <span class="rating-label" style="font-size:14px; color:#555;">${label3}</span>
                    <div class="stars-input" data-criterion="hall_comfort" style="color:#ccc;">
                        <i class="fa-regular fa-star" data-value="1" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="2" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="3" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="4" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="5" style="cursor:pointer; font-size:16px;"></i>
                    </div>
                </div>
                <div class="rating-row" style="display:flex; justify-content:space-between; max-width:400px; align-items:center;">
                    <span class="rating-label" style="font-size:14px; color:#555;">${label4}</span>
                    <div class="stars-input" data-criterion="lighting" style="color:#ccc;">
                        <i class="fa-regular fa-star" data-value="1" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="2" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="3" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="4" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="5" style="cursor:pointer; font-size:16px;"></i>
                    </div>
                </div>
                <div class="rating-row" style="display:flex; justify-content:space-between; max-width:400px; align-items:center;">
                    <span class="rating-label" style="font-size:14px; color:#555;">${label5}</span>
                    <div class="stars-input" data-criterion="music" style="color:#ccc;">
                        <i class="fa-regular fa-star" data-value="1" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="2" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="3" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="4" style="cursor:pointer; font-size:16px;"></i>
                        <i class="fa-regular fa-star" data-value="5" style="cursor:pointer; font-size:16px;"></i>
                    </div>
                </div>
            </div>

            <textarea id="review-text-input" class="form-input" placeholder="${placeholderText}" style="width: 100%; height: 80px; resize: vertical; margin-bottom: 10px; padding: 10px; border: 1px solid #ced4da; border-radius: 5px; font-family: inherit;"></textarea>
            <button onclick="submitNewReview()" class="btn-blue" style="padding: 10px 20px; cursor: pointer;">${btnText}</button>
        </div>
    `;

    initStarRatings();
}

// Завантаження відгуків з сервера та підрахунок рейтингу
window.loadEventReviews = async function() {
    const container = document.getElementById('reviews-container');
    const tabBtn = document.querySelector('button[onclick*="reviews"]');
    if (!container) return;

    const eventId = new URLSearchParams(window.location.search).get('id');
    if (!eventId) return;

    const currentLang = localStorage.getItem('selectedLanguage') || 'ua';

    try {
        const response = await fetch(`${API_URL}/events/${eventId}/reviews`);
        if (!response.ok) throw new Error("Помилка");
        const reviews = await response.json();

        let totalCount = reviews.length;

        // 1. Оновлюємо кількість відгуків на кнопці
        if (tabBtn) {
            let word = (currentLang === 'en') ? 'REVIEWS' : 'ВІДГУКИ';
            tabBtn.innerHTML = `<i class="far fa-comment-dots"></i> <span data-lang-key="tab_reviews">${word}</span> (${totalCount})`;
        }

        // 2. ВИКЛИКАЄМО ФУНКЦІЮ ПІДРАХУНКУ РЕЙТИНГУ!
        renderDynamicRating(reviews, currentLang);

        // 3. Малюємо список відгуків
        if (totalCount === 0) {
            let noReviewsMsg = (currentLang === 'en') ? 'No reviews here yet. Be the first!' : 'Тут поки немає відгуків. Будьте першим!';
            container.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">${noReviewsMsg}</p>`;
            return;
        }

        const renderMiniStars = (score) => {
            let html = '';
            for(let i=1; i<=5; i++) {
                html += `<i class="${i <= score ? 'fa-solid' : 'fa-regular'} fa-star" style="color:#ffc107; font-size:11px;"></i>`;
            }
            return html;
        };

        container.innerHTML = reviews.map(rev => `
            <div class="comment-item" style="display: flex; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                <div style="width: 45px; height: 45px; background: #e0e0e0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #666; font-size: 16px; flex-shrink: 0;">
                    ${rev.author ? rev.author.charAt(0) : 'U'}
                </div>
                <div class="comm-body" style="width: 100%;">
                    <div class="comm-header" style="display:flex; justify-content:space-between; align-items:center;">
                        <strong style="color:#2c3e50; font-size:14px;">${rev.author || 'Користувач'}</strong> 
                        <span style="font-size:12px; color:#aaa;">${rev.date || ''}</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 5px; background: #f8f9fa; padding: 8px; border-radius: 6px; margin: 8px 0; font-size: 12px; color:#555;">
                        <div>Розклад: ${renderMiniStars(rev.rating_schedule)}</div>
                        <div>Роздягальні: ${renderMiniStars(rev.rating_changing_rooms)}</div>
                        <div>Зал/Комфорт: ${renderMiniStars(rev.rating_hall_comfort)}</div>
                        <div>Освітлення: ${renderMiniStars(rev.rating_lighting)}</div>
                        <div>Музика: ${renderMiniStars(rev.rating_music)}</div>
                    </div>

                    <p style="margin: 5px 0 0 0; color:#444; font-size:15px; line-height:1.4;">${rev.text}</p>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error("Помилка:", error);
        container.innerHTML = '<p style="text-align:center; padding:20px; color:red;">Не вдалося завантажити відгуки.</p>';
    }
};

// ========================================================
// ФУНКЦІЯ ДЛЯ ПІДРАХУНКУ ТА МАЛЮВАННЯ ЗАГАЛЬНОГО РЕЙТИНГУ (НОВА!)
// ========================================================
function renderDynamicRating(reviews, currentLang) {
    const ratingContainer = document.getElementById('dynamic-rating-section');
    if (!ratingContainer) return;

    const totalVotes = reviews.length;
    let txtTitle = currentLang === 'en' ? 'Event Rating' : 'Рейтинг змагань';
    let txtVotes = currentLang === 'en' ? 'votes' : 'голосів';
    
    let labels = {
        schedule: currentLang === 'en' ? 'Schedule compliance' : 'Відповідність розкладу',
        changing_rooms: currentLang === 'en' ? 'Changing rooms' : 'Кімнати для переодягання',
        hall_comfort: currentLang === 'en' ? 'Hall comfort' : 'Оформлення та зручність залу',
        lighting: currentLang === 'en' ? 'Lighting' : 'Освітлення',
        music: currentLang === 'en' ? 'Music' : 'Музичний супровід'
    };

    if (totalVotes === 0) {
        ratingContainer.innerHTML = `
            <div class="overall-rating">
                <h3><i class="fas fa-star" style="color:#e91e63;"></i> <span>${txtTitle}</span></h3>
                <p style="color:#8fa1b3; font-size: 14px;">Поки немає оцінок. Залиште відгук першим!</p>
            </div>
        `;
        return;
    }

    let sums = { schedule: 0, changing_rooms: 0, hall_comfort: 0, lighting: 0, music: 0 };
    reviews.forEach(r => {
        sums.schedule += r.rating_schedule || 0;
        sums.changing_rooms += r.rating_changing_rooms || 0;
        sums.hall_comfort += r.rating_hall_comfort || 0;
        sums.lighting += r.rating_lighting || 0;
        sums.music += r.rating_music || 0;
    });

    let avgs = {
        schedule: (sums.schedule / totalVotes).toFixed(1),
        changing_rooms: (sums.changing_rooms / totalVotes).toFixed(1),
        hall_comfort: (sums.hall_comfort / totalVotes).toFixed(1),
        lighting: (sums.lighting / totalVotes).toFixed(1),
        music: (sums.music / totalVotes).toFixed(1)
    };

    let overall = ((parseFloat(avgs.schedule) + parseFloat(avgs.changing_rooms) + parseFloat(avgs.hall_comfort) + parseFloat(avgs.lighting) + parseFloat(avgs.music)) / 5).toFixed(1);

    const renderStarsHtml = (rating) => {
        let html = '';
        let fullStars = Math.floor(rating);
        let halfStar = (rating - fullStars) >= 0.5;
        for(let i=1; i<=5; i++) {
            if (i <= fullStars) html += '<i class="fas fa-star"></i>';
            else if (i === fullStars + 1 && halfStar) html += '<i class="fas fa-star-half-alt"></i>';
            else html += '<i class="far fa-star"></i>';
        }
        return html;
    };

    const renderBarHtml = (rating, label, icon) => {
        let pct = (rating / 5) * 100;
        return `
        <div class="rating-card">
            <div class="rating-header"><i class="${icon}"></i> <span>${label}</span></div>
            <div class="rating-value">${rating}</div>
            <div class="stars">${renderStarsHtml(rating)}</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%;"></div></div>
        </div>`;
    };

    ratingContainer.innerHTML = `
        <div class="overall-rating">
            <h3><i class="fas fa-star" style="color:#e91e63;"></i> <span>${txtTitle}</span></h3>
            <div style="text-align: right;">
                <div class="rating-value" style="font-size: 24px;">${overall}</div>
                <div class="stars">${renderStarsHtml(overall)}
                    <span style="color: #8fa1b3; margin-left: 5px; font-size: 14px;">${totalVotes} <span>${txtVotes}</span></span>
                </div>
            </div>
        </div>
        <div class="rating-grid">
            ${renderBarHtml(avgs.schedule, labels.schedule, 'far fa-clock')}
            ${renderBarHtml(avgs.changing_rooms, labels.changing_rooms, 'fas fa-door-open')}
            ${renderBarHtml(avgs.hall_comfort, labels.hall_comfort, 'fas fa-couch')}
            ${renderBarHtml(avgs.lighting, labels.lighting, 'far fa-lightbulb')}
            ${renderBarHtml(avgs.music, labels.music, 'fas fa-music')}
        </div>
    `;
}

// Відправка нового відгуку (ЗАЛИШИЛАСЬ ЯК БУЛА, ПРАЦЮЄ ПОРУЧ)
window.submitNewReview = async function() {
    const textInput = document.getElementById('review-text-input');
    if (!textInput || !textInput.value.trim()) return alert("Введіть текст відгуку!");

    if (Object.values(currentReviewRatings).some(v => v === 0)) {
        return alert("Будь ласка, виставте оцінки (зірочки) за всіма 5 критеріями!");
    }

    const eventId = new URLSearchParams(window.location.search).get('id');
    const userId = localStorage.getItem("user_id");

    const payload = {
        user_id: parseInt(userId),
        text: textInput.value.trim(),
        rating_schedule: currentReviewRatings.schedule,
        rating_changing_rooms: currentReviewRatings.changing_rooms,
        rating_hall_comfort: currentReviewRatings.hall_comfort,
        rating_lighting: currentReviewRatings.lighting,
        rating_music: currentReviewRatings.music
    };

    try {
        const response = await fetch(`${API_URL}/events/${eventId}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            textInput.value = '';
            currentReviewRatings = { schedule: 0, changing_rooms: 0, hall_comfort: 0, lighting: 0, music: 0 };
            renderReviewFormInterface();
            loadEventReviews();
        } else {
            alert("Помилка при збереженні відгуку.");
        }
    } catch (e) { alert("Помилка з'єднання з сервером"); }
};

// ========================================================
// ДИНАМІЧНЕ ЗАВАНТАЖЕННЯ І ФІЛЬТРАЦІЯ КЛУБІВ (clubs.html)
// ========================================================
let allGlobalClubs = []; // Тут будемо зберігати всі клуби з бази

async function loadAllClubs() {
    const container = document.getElementById('clubs-container');
    if (!container) return; // Зупиняємо, якщо ми не на сторінці клубів

    try {
        const response = await fetch(`${API_URL}/clubs`);
        if (!response.ok) throw new Error("Помилка сервера");
        allGlobalClubs = await response.json();
        
        // Скидаємо кнопку "Завантажити більше", бо ми одразу тягнемо всі
        const loadMoreBtn = document.getElementById('load-more-clubs');
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';

        applyClubFilters(); // Малюємо всі клуби
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: red;">Не вдалося завантажити клуби з сервера.</p>';
    }
}

// Функція фільтрації (пошук по назві, країні та місту)
function applyClubFilters() {
    const container = document.getElementById('clubs-container');
    if (!container) return;

    const countryFilter = document.getElementById('country-filter');
    const cityFilter = document.getElementById('city-filter');
    const searchInput = document.getElementById('club-search');

    const countryVal = countryFilter ? countryFilter.value : 'all';
    const cityVal = cityFilter ? cityFilter.value : 'all';
    const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    let filteredClubs = allGlobalClubs;

    // Фільтр по рядку пошуку
    if (searchVal) {
        filteredClubs = filteredClubs.filter(c => c.name.toLowerCase().includes(searchVal));
    }

    // Фільтр по країні
    if (countryVal !== 'all') {
        filteredClubs = filteredClubs.filter(c => c.country === countryVal);
    }

    // Фільтр по місту
    if (cityVal !== 'all' && cityFilter) {
        // Беремо текст з вибраного option (наприклад "Київ" або "Варшава (PL)")
        let cityText = cityFilter.options[cityFilter.selectedIndex].text;
        // Відрізаємо "(PL)", якщо воно є, і переводимо в нижній регістр
        cityText = cityText.split('(')[0].trim().toLowerCase();
        
        // Шукаємо, чи є ця назва у місті клубу, який вписав тренер
        filteredClubs = filteredClubs.filter(c => c.city && c.city.toLowerCase().includes(cityText));
    }

    renderClubs(filteredClubs);
}

// Функція малювання карток
function renderClubs(clubsToRender) {
    const container = document.getElementById('clubs-container');
    const shownCountEl = document.getElementById('shown-count');
    const totalCountEl = document.getElementById('total-count');

    // Оновлюємо лічильники
    if (totalCountEl) totalCountEl.innerText = allGlobalClubs.length;
    if (shownCountEl) shownCountEl.innerText = clubsToRender.length;

    container.innerHTML = '';

    if (clubsToRender.length === 0) {
        container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: #888; font-size: 18px;">За вашим запитом клубів не знайдено 😔</p>';
        return;
    }

    // Малюємо картки
    container.innerHTML = clubsToRender.map(club => `
        <div class="club-card">
            <div class="club-img-container">
                <img src="${club.image}" alt="Логотип" onerror="this.src='assets/images/club1.jpg'">
                <div class="club-card-content">
                    <h3>${club.name}</h3>
                    <p><i class="fas fa-map-marker-alt" style="color: #4db2e6;"></i> ${club.city}, ${club.country_name}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Прикріплюємо слухачі подій до фільтрів, щоб вони працювали "вживу"
document.addEventListener("DOMContentLoaded", () => {
    const countryFilter = document.getElementById('country-filter');
    const cityFilter = document.getElementById('city-filter');
    const searchInput = document.getElementById('club-search');

    // Логіка для країни: оновлює список міст і фільтрує картки
    if (countryFilter) {
        countryFilter.addEventListener('change', function() {
            const selectedCountry = this.value; 
            if (cityFilter) {
                const cityOptions = cityFilter.querySelectorAll('option:not([value="all"])');
                cityOptions.forEach(option => {
                    // Показуємо тільки міста обраної країни (завдяки класам "ua", "pl" тощо в HTML)
                    if (selectedCountry === 'all' || option.classList.contains(selectedCountry)) {
                        option.style.display = 'block';
                    } else {
                        option.style.display = 'none';
                    }
                });
                cityFilter.value = 'all'; // Скидаємо вибране місто при зміні країни
            }
            applyClubFilters();
        });
    }

    // Слухачі для міста та рядка пошуку
    if (cityFilter) cityFilter.addEventListener('change', applyClubFilters);
    if (searchInput) searchInput.addEventListener('input', applyClubFilters);
});
// ========================================================
// ДИНАМІЧНЕ ЗАВАНТАЖЕННЯ І ФІЛЬТРАЦІЯ ЛЮДЕЙ (people.html)
// ========================================================
let allGlobalPeople = []; // Зберігаємо всіх людей

async function loadAllPeople() {
    const container = document.getElementById('people-container');
    if (!container) return; // Зупиняємо, якщо ми не на сторінці людей

    try {
        const response = await fetch(`${API_URL}/people`); 
        if (!response.ok) throw new Error("Помилка сервера");
        
        allGlobalPeople = await response.json();
        applyPeopleFilters(); // Одразу малюємо з фільтрами
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: red;">Не вдалося завантажити дані з сервера.</p>';
    }
}

// Застосовуємо фільтри для сторінки ЛЮДЕЙ
function applyPeopleFilters() {
    try {
        const container = document.getElementById('people-container');
        if (!container) return;

        const roleSelect = document.getElementById('people-role-filter');
        const countrySelect = document.getElementById('people-country-filter');
        const cityInput = document.getElementById('people-city-filter');
        const searchInput = document.getElementById('people-search');

        const roleVal = roleSelect ? roleSelect.value : 'all';
        const countryVal = countrySelect ? countrySelect.value.toLowerCase().trim() : 'all';
        const cityVal = cityInput ? cityInput.value.toLowerCase().trim() : '';
        const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

        let filtered = allGlobalPeople.filter(p => {
            // 1. ФІЛЬТР РОЛІ (Танцюрист / Тренер)
            if (roleVal !== 'all') {
                const pRole = (p.role || '').toLowerCase();
                if (!pRole.includes(roleVal)) return false;
            }

            // 2. РОЗУМНИЙ ФІЛЬТР КРАЇНИ
            if (countryVal !== 'all') {
                const countryKeywords = {
                    'ua': ['україна', 'ukraine', 'ua', 'київ', 'львів', 'одеса', 'дніпро', 'харків', 'рівне'],
                    'pl': ['польща', 'poland', 'pl', 'варшава', 'краків'],
                    'de': ['німеччина', 'germany', 'de', 'берлін'],
                    'us': ['сша', 'usa', 'us', 'нью-йорк'],
                    'gb': ['велика британія', 'gb', 'uk', 'london', 'лондон'],
                    'fr': ['франція', 'france', 'fr', 'париж'],
                    'it': ['італія', 'italy', 'it', 'рим'],
                    'es': ['іспанія', 'spain', 'es', 'мадрід']
                };
                
                const keywords = countryKeywords[countryVal] || [countryVal];
                
                // Збираємо все, де може бути вказана країна чи місто
                const personCountry = (p.country || '').toLowerCase();
                const personCity = (p.city || '').toLowerCase();
                const personClub = (p.club_name || '').toLowerCase();
                
                const matchesCountry = keywords.some(kw => 
                    personCountry.includes(kw) || personCity.includes(kw) || personClub.includes(kw)
                );
                
                if (!matchesCountry) return false;
            }

            // 3. ФІЛЬТР МІСТА (ПОШУК ТЕКСТОМ)
            if (cityVal) {
                const personCity = (p.city || '').toLowerCase();
                const personClubCity = (p.club_city || '').toLowerCase();
                if (!personCity.includes(cityVal) && !personClubCity.includes(cityVal)) return false;
            }

            // 4. ФІЛЬТР ІМ'Я / ПРІЗВИЩЕ
            if (searchVal) {
                const fullName = `${p.name || ''} ${p.surname || ''}`.toLowerCase();
                if (!fullName.includes(searchVal)) return false;
            }

            return true;
        });

        // Відмальовуємо результат
        renderPeople(filtered);
    } catch (err) {
        console.error("Помилка фільтрації людей:", err);
    }
}

function renderPeople(peopleToRender) {
    const container = document.getElementById('people-container');
    if (!container) return;

    container.innerHTML = '';

    if (peopleToRender.length === 0) {
        container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: #888; font-size: 18px;">За вашим запитом нікого не знайдено 😔</p>';
        return;
    }

    container.innerHTML = peopleToRender.map(person => {
        // Гарні бейджі для ролей
        let roleName = "Танцюрист";
        let roleColor = "#4db2e6"; // Блакитний
        if (person.role === "trainer") { roleName = "Тренер"; roleColor = "#FF9800"; } 
        else if (person.role === "judge") { roleName = "Суддя"; roleColor = "#e74c3c"; }

        // ПЕРЕВІРКА ФОТО: якщо є фотка - показуємо, якщо немає - малюємо іконку
        let avatarHTML = '';
        if (person.image && person.image.trim() !== "" && person.image !== 'assets/images/club1.jpg') {
            // Додано onerror, щоб у разі битого посилання теж малювалась іконка
            avatarHTML = `<img src="${person.image}" alt="${person.name}" class="person-avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" onerror="this.outerHTML='<div style=\\'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #eaf4fb; border-radius: 50%;\\'><i class=\\'fas fa-user\\' style=\\'font-size: 45px; color: #b0c4de;\\'></i></div>'">`;
        } else {
            // Красива кругла заглушка з іконкою FontAwesome
            avatarHTML = `
                <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #eaf4fb; border-radius: 50%;">
                    <i class="fas fa-user" style="font-size: 45px; color: #b0c4de;"></i>
                </div>
            `;
        }

        // Вік або рік народження
        let ageText = '';
        if (person.birth_year) {
            ageText = `<p class="person-age">${person.birth_year} р.н.</p>`;
        } else if (person.age) {
            ageText = `<p class="person-age">${person.age} р.</p>`;
        }

        return `
        <div class="person-card">
            <div style="width: 100px; height: 100px; margin: 0 auto 15px auto; position: relative;">
                ${avatarHTML}
            </div>
            <h3 class="person-name">${person.surname || ''} ${person.name || ''}</h3>
            
            <p style="margin: 5px 0 10px 0; font-size: 12px;">
                <span style="background: ${roleColor}; color: white; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 11px;">${roleName}</span>
            </p>

            ${ageText}
            
            <p class="person-location" style="margin-top: 5px;">
                ${person.city ? `<span><i class="fas fa-map-marker-alt"></i> ${person.city}</span>` : ''} 
                ${person.club_name ? `<br><a href="#" class="person-club"><i class="fas fa-users" style="color: #4db2e6;"></i> ${person.club_name}</a>` : ''}
            </p>
        </div>
    `}).join('');
}

// Прикріплюємо слухачі подій до фільтрів
document.addEventListener("DOMContentLoaded", () => {
    const roleF = document.getElementById('people-role-filter');
    const countryF = document.getElementById('people-country-filter');
    const cityF = document.getElementById('people-city-filter');
    const searchI = document.getElementById('people-search');

    if (roleF) roleF.addEventListener('change', applyPeopleFilters);
    if (countryF) countryF.addEventListener('change', applyPeopleFilters);
    
    // Для текстових полів використовуємо 'input', щоб фільтрувало одразу при введенні
    if (cityF) cityF.addEventListener('input', applyPeopleFilters);
    if (searchI) searchI.addEventListener('input', applyPeopleFilters);
});
// ========================================================
// ДИНАМІЧНЕ ЗАВАНТАЖЕННЯ І ФІЛЬТРАЦІЯ РЕЗУЛЬТАТІВ (results.html)
// ========================================================
let allGlobalResults = []; // Всі завантажені змагання
let currentSelectedResultsTab = 'all'; // Активний таб категорій

async function loadResultsEvents() {
    const container = document.getElementById('results-container');
    if (!container) return; // Якщо ми не на сторінці результатів — виходимо

    try {
        const response = await fetch(`${API_URL}/events`); 
        if (!response.ok) throw new Error("Помилка при завантаженні змагань");
        const allEvents = await response.json(); 

        const today = new Date();
        const localISOTime = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

        // === ФІЛЬТРУЄМО: ТІЛЬКИ МИНУЛІ ЗМАГАННЯ ===
        allGlobalResults = allEvents.filter(event => {
            if (!event.date) return false;
            
            let eventDateStr = event.date;
            if (eventDateStr.includes('.')) {
                const parts = eventDateStr.split('.');
                eventDateStr = `${parts[2]}-${parts[1]}-${parts[0]}`;
            }
            
            return eventDateStr < localISOTime;
        });

        // === СОРТУЄМО: Від вчорашніх до старіших ===
        allGlobalResults.sort((a, b) => {
            let dateA = a.date.includes('.') ? a.date.split('.').reverse().join('-') : a.date;
            let dateB = b.date.includes('.') ? b.date.split('.').reverse().join('-') : b.date;
            return dateB.localeCompare(dateA); // Зворотний порядок сортування
        });

        applyResultsFilters(); 
    } catch (error) {
        console.error("Помилка:", error);
        container.innerHTML = '<p style="text-align: center; color: red;">Не вдалося завантажити результати.</p>';
    }
}

// === ФІЛЬТРАЦІЯ ДЛЯ СТОРІНКИ РЕЗУЛЬТАТІВ ===
function applyResultsFilters() {
    const container = document.getElementById('results-container');
    if (!container) return;

    const countryVal = document.getElementById('results-country-filter')?.value || 'all';
    const cityVal = document.getElementById('results-city-filter')?.value.toLowerCase().trim() || '';
    const dateFromVal = document.getElementById('results-date-from')?.value || '';
    const dateToVal = document.getElementById('results-date-to')?.value || '';

const countryCities = {
        'ua': ['україна', 'ukraine', 'київ', 'львів', 'одеса', 'дніпро', 'харків', 'рівне', 'франківськ', 'тернопіль', 'чернівці', 'хмельницьк', 'вінниц', 'полтав', 'черкас', 'суми', 'чернігів', 'житомир', 'запоріж', 'миколаїв', 'херсон', 'ужгород', 'луцьк'],
        'pl': ['польща', 'poland', 'варшава', 'краків'],
        'ee': ['естонія', 'estonia', 'таллінн'],
        'fi': ['фінляндія', 'finland', 'гельсінкі'],
        'fr': ['франція', 'france', 'париж'],
        'ge': ['грузія', 'georgia', 'тбілісі'],
        'de': ['німеччина', 'germany', 'берлін'],
        'gr': ['греція', 'greece', 'афіни'],
        'md': ['молдова', 'moldova', 'кишинів'],
        'pt': ['португалія', 'portugal', 'лісабон'],
        'ro': ['румунія', 'romania', 'бухарест'],
        'rs': ['сербія', 'serbia', 'белград'],
        'ae': ['оае', 'uae', 'emirates', 'дубай'],
        'uk': ['британія', 'uk', 'london', 'лондон', 'велика британія'],
        'us': ['сша', 'usa', 'ny', 'нью-йорк']
    };

    let filtered = allGlobalResults;

    // 1. РОЗУМНИЙ ФІЛЬТР ПО КРАЇНІ
    if (countryVal !== 'all' && countryVal !== 'всі країни' && !countryVal.includes('всі')) {
        const keywords = countryCities[countryVal] || [countryVal];
        filtered = filtered.filter(e => {
            const evCountry = (e.country || '').toLowerCase().trim();
            const evCity = (e.city || '').toLowerCase().trim();
            
            if (evCountry && (evCountry.includes(countryVal) || keywords.some(kw => evCountry.includes(kw)))) return true;
            if (evCity.includes(`(${countryVal})`) || keywords.some(kw => evCity.includes(kw))) return true;
            if (countryVal === 'ua' && (!evCountry || evCountry === 'україна' || evCountry === 'ukraine')) {
                if (evCity && !evCity.includes('(')) return true;
            }
            return false;
        });
    }

    // 2. ФІЛЬТР ПО МІСТУ
    if (cityVal !== '') {
        filtered = filtered.filter(e => e.city && e.city.toLowerCase().includes(cityVal));
    }

    // 3. ФІЛЬТР ПО ДАТАХ
    const normalizeDate = (dateStr) => {
        if (!dateStr) return '';
        if (dateStr.includes('.')) {
            const parts = dateStr.split('.');
            if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        }
        return dateStr;
    };
    if (dateFromVal) filtered = filtered.filter(e => normalizeDate(e.date) >= dateFromVal);
    if (dateToVal) filtered = filtered.filter(e => normalizeDate(e.date) <= dateToVal);

    // 4. РОЗУМНИЙ ФІЛЬТР ПО ТАБАХ (Спортивні, Pro-Am, Збори)
    const activeTab = document.querySelector('#results-tabs .tab.active');
    if (activeTab) {
        let tabKey = activeTab.getAttribute('data-lang-key');
        if (!tabKey) {
            const innerWithKey = activeTab.querySelector('[data-lang-key]');
            if (innerWithKey) tabKey = innerWithKey.getAttribute('data-lang-key');
        }
        const tabText = activeTab.textContent.toLowerCase();

        filtered = filtered.filter(e => {
            const type = (e.event_type || e.type || '').toLowerCase().trim();
            const name = (e.name || '').toLowerCase();
            
            if (tabKey === 'tab_all' || tabText.includes('всі') || tabText.includes('all')) return true;
            
            if (tabKey === 'tab_sport' || tabText.includes('спорт')) {
                if (!type) return !name.includes('pro-am') && !name.includes('world pro') && !name.includes('збор') && !name.includes('camp') && !name.includes('лекці');
                return type.includes('спорт') || type.includes('sport');
            }
            
            if (tabKey === 'tab_pro_am' || tabText.includes('pro')) {
                return type.includes('pro') || type.includes('am') || name.includes('pro-am') || name.includes('world pro');
            }
            
            if (tabKey === 'tab_lessons' || tabText.includes('збор') || tabText.includes('лекц')) {
                return type.includes('збор') || type.includes('лекц') || type.includes('camp') || type.includes('lesson') || name.includes('збор') || name.includes('camp');
            }
            
            return true;
        });
    }

    renderResultsEvents(filtered);
}

// === МАЛЮВАННЯ КАРТОК ДЛЯ РЕЗУЛЬТАТІВ ===
function renderResultsEvents(eventsToRender) {
    const container = document.getElementById('results-container');
    if (!container) return;

    const isShowAll = container.classList.contains('show-all');
    container.innerHTML = '';

    if (eventsToRender.length === 0) {
        container.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px; color:#888;">Немає завершених змагань за такими критеріями 🤷‍♂️</p>';
        const loadBtn = document.getElementById('load-more-results-btn');
        if (loadBtn) loadBtn.style.display = 'none';
        return;
    }

    let html = '';
    eventsToRender.forEach((event, index) => {
        let formattedDate = event.date || 'Дата невідома';
        if (event.date && !event.date.includes('.')) {
            const dObj = new Date(event.date);
            if (!isNaN(dObj)) formattedDate = dObj.toLocaleDateString('uk-UA', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        const imgSrc = event.image ? `assets/images/${event.image}` : 'assets/images/cup1.png';
        const hiddenClass = (index >= 4 && !isShowAll) ? 'load-more-hidden' : '';

        const evType = event.event_type || event.type || "";
        const evCountry = event.country || "";
        const evCity = event.city || "";
        const evName = event.name || "";

        html += `
            <a href="event-results.html?id=${event.id}" 
               class="card-button ${hiddenClass}"
               data-type="${evType.toLowerCase()}"
               data-country="${evCountry.toLowerCase()}"
               data-city="${evCity.toLowerCase()}"
               data-name="${evName.toLowerCase()}">
                <div class="card">
                    <div class="card-image">
                        <img src="${imgSrc}" alt="${event.name}" onerror="this.src='assets/images/cup1.png'">
                    </div>
                    <div class="card-body">
                        <span class="badge finished"><span data-lang-key="finished_badge">ЗАВЕРШЕНО</span></span>
                        <h3>${event.name}</h3>
                        <p class="date"><i class="fa-regular fa-calendar"></i> ${formattedDate}</p>
                        <p class="reg" style="margin-top: 5px;"><i class="fa-solid fa-location-dot"></i> м. ${event.city}</p>
                        <p class="reg" style="margin-top: 8px;"><span data-lang-key="results_available" style="color: #6c757d; font-weight: bold;"><i class="fas fa-poll-h"></i> Результати доступні</span></p>
                    </div>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;

    const loadMoreBtn = document.getElementById('load-more-results-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = (eventsToRender.length > 4 && !isShowAll) ? 'block' : 'none';
    }

    const activeLangBtn = document.querySelector('.lang.active');
    if (activeLangBtn && activeLangBtn.textContent.trim().toLowerCase() === 'eng') {
        container.querySelectorAll('[data-lang-key="finished_badge"]').forEach(el => el.textContent = "FINISHED");
        container.querySelectorAll('[data-lang-key="results_available"]').forEach(el => {
            el.innerHTML = '<i class="fas fa-poll-h"></i> Results available';
        });
    }
}

// === СЛУХАЧІ ПОДІЙ ДЛЯ ФІЛЬТРІВ РЕЗУЛЬТАТІВ ===
document.addEventListener("DOMContentLoaded", () => {
    const countryF = document.getElementById('results-country-filter');
    const cityF = document.getElementById('results-city-filter');
    const dateFromF = document.getElementById('results-date-from');
    const dateToF = document.getElementById('results-date-to');
    const loadMoreBtn = document.getElementById('load-more-results-btn');
    const tabsContainer = document.getElementById('results-tabs');

    if (tabsContainer) {
        tabsContainer.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                tabsContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                document.getElementById('results-container')?.classList.remove('show-all');
                applyResultsFilters();
            });
        });
    }

    if (countryF) countryF.addEventListener('change', () => { document.getElementById('results-container')?.classList.remove('show-all'); applyResultsFilters(); });
    if (cityF) cityF.addEventListener('input', () => { document.getElementById('results-container')?.classList.remove('show-all'); applyResultsFilters(); }); 
    if (dateFromF) dateFromF.addEventListener('change', () => { document.getElementById('results-container')?.classList.remove('show-all'); applyResultsFilters(); });
    if (dateToF) dateToF.addEventListener('change', () => { document.getElementById('results-container')?.classList.remove('show-all'); applyResultsFilters(); });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const container = document.getElementById('results-container');
            if (container) {
                container.classList.add('show-all');
                applyResultsFilters(); 
            }
        });
    }
});

// ==========================================================
// НАВІГАЦІЯ ТА ЛОГІКА ДЛЯ ОГОЛОШЕНЬ (ADS)
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
    // --- НАВІГАЦІЯ МІЖ СТОРІНКАМИ ---
    const resultsLinks = document.querySelectorAll('[data-lang-key="nav_results"]');
    const competitionsLinks = document.querySelectorAll('[data-lang-key="nav_comp"]');
    const clubsLinks = document.querySelectorAll('[data-lang-key="nav_clubs"]');
    const peopleLinks = document.querySelectorAll('[data-lang-key="nav_people"]');
    const orgsLinks = document.querySelectorAll('[data-lang-key="nav_orgs"]');
    const adsLinks = document.querySelectorAll('[data-lang-key="nav_ads"]');

    resultsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'results.html';
        };
    });

    competitionsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        };
    });

    clubsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'clubs.html';
        };
    });

    peopleLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'people.html';
        };
    });

    if (orgsLinks) {
        orgsLinks.forEach(link => {
            if(link.parentElement) link.parentElement.style.cursor = "pointer";
            link.onclick = (e) => {
                e.preventDefault();
                window.location.href = 'orgs.html';
            };
        });
    }

    adsLinks.forEach(link => {
        if(link.parentElement) link.parentElement.style.cursor = "pointer";
        link.onclick = (e) => {
            e.preventDefault();
            window.location.href = 'ads.html';
        };
    });

    // --- ЛОГІКА ДЛЯ ОГОЛОШЕНЬ (ADS) З ПОВНОЮ ЖИВОЮ ФІЛЬТРАЦІЄЮ ТА ВИДАЛЕННЯМ ---
    const adsContainer = document.getElementById('ads-container');
    
    if (adsContainer) {
        const fabBtn = document.querySelector('.fab-btn');
        const adModal = document.getElementById('addAdModal');
        const closeAdModal = document.getElementById('closeAdModal');
        const addAdForm = document.getElementById('addAdForm');
        
        const tabs = document.querySelectorAll('.ads-tab-card');
        const cityFilter = document.getElementById('city-filter'); 
        const typeFilter = document.getElementById('type-filter'); 

        const modalTabTypeSelect = document.getElementById('ad-tab-type');
        const modalPartnerTypeGroup = document.getElementById('modal-partner-type-group');
        const modalPartnerTypeSelect = document.getElementById('ad-partner-type');

        let allAds = []; 
        const currentUserId = parseInt(localStorage.getItem('user_id'));

        if (modalTabTypeSelect && modalPartnerTypeGroup) {
            modalTabTypeSelect.addEventListener('change', () => {
                if (modalTabTypeSelect.value === 'partner') {
                    modalPartnerTypeGroup.style.display = 'flex';
                } else {
                    modalPartnerTypeGroup.style.display = 'none';
                }
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const currentTab = tab.dataset.type;
                
                if (typeFilter && typeFilter.parentElement) {
                    if (currentTab === 'partner') {
                        typeFilter.parentElement.style.display = 'block';
                    } else {
                        typeFilter.parentElement.style.display = 'none';
                        typeFilter.value = 'all'; 
                    }
                }

                filterAndRenderAds();
            });
        });

        if (cityFilter) cityFilter.addEventListener('input', filterAndRenderAds);
        if (typeFilter) typeFilter.addEventListener('change', filterAndRenderAds);

        if (fabBtn && adModal) {
            fabBtn.addEventListener('click', () => {
                if (!currentUserId) {
                    alert("Щоб додати оголошення, потрібно увійти в систему!");
                    window.location.href = "login.html";
                    return;
                }
                adModal.classList.remove('hidden');
                if (modalTabTypeSelect) modalTabTypeSelect.value = 'partner';
                if (modalPartnerTypeGroup) modalPartnerTypeGroup.style.display = 'flex';
            });
        }

        if (closeAdModal && adModal) {
            closeAdModal.addEventListener('click', () => {
                adModal.classList.add('hidden');
            });
        }

        if (addAdForm) {
            addAdForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                const tabType = modalTabTypeSelect.value;
                const adType = (tabType === 'partner') ? modalPartnerTypeSelect.value : null;

                const adData = {
                    user_id: currentUserId,
                    user_name: localStorage.getItem('name') || localStorage.getItem('user_name') || "Користувач",
                    tab_type: tabType,
                    ad_type: adType,
                    city: document.getElementById('ad-city').value.trim(),
                    text: document.getElementById('ad-text').value,
                    price: document.getElementById('ad-price').value || null
                };

                try {
                    const response = await fetch('http://127.0.0.1:8000/ads', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(adData)
                    });

                    if (response.ok) {
                        alert("Оголошення успішно додано!");
                        adModal.classList.add('hidden');
                        addAdForm.reset();
                        
                        const targetTab = document.querySelector(`.ads-tab-card[data-type="${adData.tab_type}"]`);
                        if (targetTab) targetTab.click();

                        loadAds(); 
                    } else {
                        const errorData = await response.json();
                        alert("Помилка: " + errorData.detail);
                    }
                } catch (error) {
                    console.error("Помилка створення оголошення:", error);
                    alert("Не вдалося відправити оголошення на сервер.");
                }
            });
        }

        async function loadAds() {
            try {
                const response = await fetch('http://127.0.0.1:8000/ads');
                if (response.ok) {
                    allAds = await response.json();
                    
                    const lessonsCount = allAds.filter(ad => ad.tab_type === 'lessons').length;
                    const countBadge = document.querySelector('.lessons-count');
                    if (countBadge) countBadge.textContent = lessonsCount;

                    filterAndRenderAds();
                }
            } catch (error) {
                console.error("Помилка завантаження оголошень з сервера:", error);
            }
        }

        function filterAndRenderAds() {
            const activeTabCard = document.querySelector('.ads-tab-card.active');
            const activeTabType = activeTabCard ? activeTabCard.dataset.type : 'partner';

            const selectedCity = cityFilter ? cityFilter.value.toLowerCase().trim() : '';
            const selectedType = typeFilter ? typeFilter.value : 'all'; 

            const filteredAds = allAds.filter(ad => {
                if (ad.tab_type !== activeTabType) return false;

                if (selectedCity !== '') {
                    if (!ad.city || !ad.city.toLowerCase().includes(selectedCity)) {
                        return false;
                    }
                }

                if (activeTabType === 'partner' && selectedType !== 'all') {
                    if (ad.ad_type !== selectedType) return false;
                }

                return true;
            });

            adsContainer.innerHTML = '';

            if (filteredAds.length === 0) {
                adsContainer.innerHTML = `
                    <div class="ad-no-results">
                        <i class="fa-solid fa-magnifying-glass-minus"></i>
                        <p>Відсутні результати пошуку в цій категорії!</p>
                    </div>
                `;
                return;
            }

            filteredAds.forEach(ad => {
                let badgeClass = "partner-badge";
                let badgeText = "ОГОЛОШЕННЯ";
                
                if (ad.tab_type === "partner") { 
                    badgeText = ad.ad_type === "find-partnerka" ? "ШУКАЮ ПАРТНЕРКУ" : "ПОШУК ПАРТНЕРА"; 
                }
                if (ad.tab_type === "goods") { badgeClass = "goods-badge"; badgeText = "ТОВАРИ"; }
                if (ad.tab_type === "services") { badgeClass = "services-badge"; badgeText = "ПОСЛУГИ"; }
                if (ad.tab_type === "lessons") { badgeClass = "services-badge"; badgeText = "УРОКИ"; }

                const adCard = document.createElement('div');
                adCard.className = `ad-card ${ad.tab_type}-ad`;

                const priceHtml = ad.price ? `<span class="ad-price">${ad.price}</span>` : '';
                
                const localUid = localStorage.getItem('user_id') || localStorage.getItem('userId');
                const isOwner = ad.user_id && localUid && (ad.user_id.toString() === localUid.toString());
                const deleteBtnHtml = isOwner ? `<button class="delete-ad-btn" data-id="${ad.id}" style="background: transparent; border: none; color: #a0aec0; cursor: pointer; font-size: 16px; transition: 0.2s;"><i class="fa-solid fa-trash"></i></button>` : '';

                let avatarHTML = '';
                if (ad.user_avatar && ad.user_avatar.trim() !== "") {
                    avatarHTML = `<img src="${ad.user_avatar}" class="ad-user-img" style="object-fit: cover; border-radius: 50%; width: 45px; height: 45px;" onerror="this.outerHTML='<div class=\\'ad-user-img\\' style=\\'display: flex; align-items: center; justify-content: center; background: #eaf4fb; color: #2196F3; font-size: 20px; border-radius: 50%; width: 45px; height: 45px;\\'><i class=\\'fas fa-user\\'></i></div>'">`;
                } else {
                    avatarHTML = `<div class="ad-user-img" style="display: flex; align-items: center; justify-content: center; background: #eaf4fb; color: #2196F3; font-size: 20px; border-radius: 50%; width: 45px; height: 45px;"><i class="fas fa-user"></i></div>`;
                }

                adCard.innerHTML = `
                    <div class="ad-card-main">
                        ${avatarHTML}
                        <div class="ad-details">
                            <div class="ad-header" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                <h3 class="ad-user-name">${ad.user_name}</h3>
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    ${priceHtml}
                                    ${deleteBtnHtml}
                                </div>
                            </div>
                            <p class="ad-location"><i class="fas fa-map-marker-alt"></i> <span style="text-transform: capitalize;">${ad.city}</span></p>
                            <span class="badge ${badgeClass}">${badgeText}</span>
                            <p class="ad-text">${ad.text}</p>
                        </div>
                    </div>
                    <div class="ad-card-footer">
                        <p class="ad-date"><i class="far fa-clock"></i> ${ad.created_at ? ad.created_at.replace('T', ' ') : ''}</p>
                    </div>
                `;
                adsContainer.appendChild(adCard);
            });
            
            const deleteButtons = adsContainer.querySelectorAll('.delete-ad-btn');
            deleteButtons.forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                   btn.style.color = '#ff3b30';
                   btn.style.transform = 'scale(1.15)';
                });
                 btn.addEventListener('mouseleave', () => {
                   btn.style.color = '#a0aec0';
                   btn.style.transform = 'scale(1)';
                });
                
                btn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    const adId = btn.getAttribute('data-id');
                    
                    if (confirm("Ви впевнені, що хочете видалити це оголошення?")) {
                        try {
                            const response = await fetch(`http://127.0.0.1:8000/ads/${adId}`, {
                                method: 'DELETE'
                            });

                            if (response.ok) {
                                alert("Оголошення успішно видалено!");
                                loadAds(); 
                            } else {
                                alert("Помилка при видаленні оголошення.");
                            }
                        } catch (error) {
                            console.error("Помилка видалення:", error);
                            alert("Не вдалося підключитися до сервера!");
                        }
                    }
                });
            });
        }
        loadAds();
    }
});

// ==========================================================
// ЛОГІКА ДЛЯ СТОРІНКИ ДЕТАЛЕЙ ЗМАГАННЯ (РЕЗУЛЬТАТІВ)
// ==========================================================
async function loadEventResultsDetails() {
    const eventContainer = document.querySelector('.event-container');
    if (!eventContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    if (!eventId) return;

    try {
        const response = await fetch(`http://127.0.0.1:8000/events`);
        
        if (response.ok) {
            const allEvents = await response.json();
            const eventData = allEvents.find(e => e.id == eventId);

            if (!eventData) {
                console.error("Змагання з таким ID не знайдено в базі!");
                return;
            }
            window.currentResultsFile = eventData.results_file;
            window.currentEventDate = eventData.date;
            const mainTitle = document.getElementById('event-main-title');
            if (mainTitle) mainTitle.textContent = eventData.name;

            const mainDate = document.getElementById('event-main-date');
            if (mainDate && eventData.date) {
                const dateObj = new Date(eventData.date);
                mainDate.textContent = dateObj.toLocaleDateString('uk-UA', { day: 'numeric', month: 'short', year: 'numeric' });
            }

            const mainCity = document.getElementById('event-main-city');
            if (mainCity) mainCity.textContent = `м. ${eventData.city}`;

            const mainOrganizers = document.getElementById('event-main-organizers');
            if (mainOrganizers) {
                if (eventData.organizers) mainOrganizers.textContent = eventData.organizers;
                else if (eventData.organizer) mainOrganizers.textContent = eventData.organizer;
            }

            const mainOrganization = document.getElementById('event-main-organization');
            if (mainOrganization && eventData.organization) {
                mainOrganization.textContent = eventData.organization;
            }

            const imgEl = document.querySelector('.poster-wrapper img');
            if (imgEl) {
                imgEl.src = eventData.image ? `assets/images/${eventData.image}` : 'assets/images/dance1.jpg';
            }

            const aboutTitle = document.querySelector('#about p strong');
            if (aboutTitle) aboutTitle.textContent = eventData.name;

            document.title = `${eventData.name} - Результати - DanceHub`;

            const categoriesContainer = document.getElementById('dynamic-categories-container');
            if (categoriesContainer) {
                if (!eventData.categories || eventData.categories.length === 0) {
                    categoriesContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #888;">Категорії для цього змагання не вказані.</p>';
                } else {
                    let tableHtml = `
                        <table class="category-table">
                            <thead>
                                <tr class="time-header">
                                    <th>НАЗВА КАТЕГОРІЇ</th>
                                    <th>ПРОГРАМА / ДЕТАЛІ</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;
                    eventData.categories.forEach(cat => {
                        let catName = typeof cat === 'object' ? (cat.name || cat.title) : cat;
                        let catDetail = typeof cat === 'object' ? (cat.program || cat.time || 'Відкрита') : 'Офіційна';
                        tableHtml += `
                            <tr>
                                <td class="cat-name">${catName}</td>
                                <td class="cat-val">${catDetail}</td>
                            </tr>
                        `;
                    });
                    tableHtml += `</tbody></table>`;
                    categoriesContainer.innerHTML = tableHtml;
                }
            }

            const judgesContainer = document.getElementById('dynamic-judges-container');
            if (judgesContainer) {
                const judgesList = eventData.judges || eventData.referees || [];
                
                if (judgesList.length === 0) {
                    judgesContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #888; grid-column: 1/-1;">Судді ще не зареєстровані на це змагання.</p>';
                } else {
                    let judgesHtml = '';
                    judgesList.forEach(judge => {
                        let judgeName = typeof judge === 'object' ? (judge.name || judge.fullname) : judge;
                        let judgeCity = typeof judge === 'object' ? (judge.city || eventData.city || 'Україна') : 'Україна';
                        let judgeImg = (judge && judge.image) ? `assets/images/${judge.image}` : 'assets/images/user-placeholder.png';

                        judgesHtml += `
                            <div class="person-item">
                                <img src="${judgeImg}" alt="${judgeName}" onerror="this.src='assets/images/user-placeholder.png'">
                                <div class="p-info">
                                    <h4>${judgeName}</h4>
                                    <p><i class="fas fa-map-marker-alt"></i> ${judgeCity}</p>
                                </div>
                            </div>
                        `;
                    });
                    judgesContainer.innerHTML = judgesHtml;
                }
            }

            const clubsContainer = document.getElementById('dynamic-clubs-container');
            if (clubsContainer) {
                const clubsList = eventData.clubs || eventData.teams || [];

                if (clubsList.length === 0) {
                    clubsContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #888; grid-column: 1/-1;">Немає інформації про зареєстровані клуби.</p>';
                } else {
                    let clubsHtml = '';
                    clubsList.forEach(club => {
                        let clubName = typeof club === 'object' ? club.name : club;
                        let clubCity = typeof club === 'object' ? (club.city || 'Україна') : 'Україна';
                        let clubCount = typeof club === 'object' ? (club.count || club.participants_count || 0) : 0;
                        
                        let firstLetter = clubName ? clubName.charAt(0).toUpperCase() : 'К';

                        clubsHtml += `
                            <div class="person-item">
                                <div class="club-logo">${firstLetter}</div>
                                <div class="p-info">
                                    <h4>${clubName}</h4>
                                    <p><i class="fas fa-map-marker-alt"></i> ${clubCity}</p>
                                    ${clubCount > 0 ? `<span class="u-count"><i class="fas fa-users"></i> ${clubCount} Участей</span>` : ''}
                                </div>
                            </div>
                        `;
                    });
                    clubsContainer.innerHTML = clubsHtml;
                }
            }

        }
    } catch (error) {
        console.error("Помилка завантаження даних змагання:", error);
    }
}

loadEventResultsDetails();
// --- ЛОГІКА КНОПКИ "ЗАВАНТАЖИТИ РЕЗУЛЬТАТИ" ---
document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById('download-results-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => { // Додали async
            if (!window.currentResultsFile) {
                showToast("Результати ще не завантажені організатором!", "error");
                return;
            }

            const userId = localStorage.getItem("user_id");

            // --- ПЕРЕВІРКА ДАТИ ТА КУПІВЛІ ---
            if (window.currentEventDate) {
                const eventDate = new Date(window.currentEventDate);
                const today = new Date();
                eventDate.setHours(0, 0, 0, 0);
                today.setHours(0, 0, 0, 0);
                const diffDays = Math.floor((today.getTime() - eventDate.getTime()) / (1000 * 3600 * 24));

                // Якщо змагання свіже (менше 3 днів)
                if (diffDays >= 0 && diffDays < 3) {
                    if (!userId) {
                        showToast("Будь ласка, увійдіть в систему!", "error");
                        setTimeout(() => window.location.href = "login.html", 1500);
                        return;
                    }

                    // Питаємо бекенд: "А цей юзер вже платив?"
                    try {
                        const accessRes = await fetch(`${API_URL}/check-access/${eventId}/${userId}`);
                        const accessData = await accessRes.json();

                        if (!accessData.has_access) {
                            // Не платив! Показуємо вікно оплати і зупиняємось
                            const modal = document.getElementById('premium-modal');
                            if (modal) modal.style.display = 'flex';
                            return; 
                        }
                        // Якщо платив - код просто піде далі і віддасть файл!
                    } catch (e) {
                        console.error("Помилка перевірки доступу", e);
                        return;
                    }
                }
            }
            // ------------------------------------------

            // Віддаємо файл (бо пройшло 3 дні АБО юзер вже купив доступ)
            const originalHtml = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Завантаження...</span>';
            downloadBtn.disabled = true;

            setTimeout(() => {
                const a = document.createElement('a');
                const fileUrl = window.currentResultsFile.startsWith('http') 
                    ? window.currentResultsFile 
                    : `${API_URL}${window.currentResultsFile}`;
                a.href = fileUrl;
                a.target = "_blank"; 
                a.download = window.currentResultsFile.split('/').pop() || "results.pdf"; 
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                downloadBtn.innerHTML = originalHtml;
                downloadBtn.disabled = false;
                showToast("Завантаження успішне!", "success");
            }, 1200); 
        });
    }
});

// Функція для показу тостів (якщо раптом ти її не додала)
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
    toast.innerHTML = `${icon} <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
// --- ДИНАМІЧНИЙ ЛІЧИЛЬНИК ТАНЦЮРИСТІВ У ФУТЕРІ ---
async function loadDancersCount() {
    const counterElement = document.getElementById('dancers-count');
    if (!counterElement) return;

    try {
        // Звертаємося до бази за списком всіх людей
        const response = await fetch(`${API_URL}/people`);
        if (!response.ok) throw new Error("Помилка завантаження");
        
        const people = await response.json();
        
        // Беремо реальну кількість людей з бази
        // (Можеш додати сюди якусь базову цифру, наприклад + 300, якщо хочеш щоб цифра виглядала більшою на старті)
        const targetNumber = people.length; 

        // Анімація лічильника
        animateCounter(counterElement, targetNumber, 2000); // 2000 мс = 2 секунди анімації

    } catch (error) {
        console.error("Помилка завантаження кількості танцюристів:", error);
        counterElement.innerText = "0"; // Якщо помилка, показуємо 0
    }
}

// Функція для красивої анімації цифр
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 16мс - це приблизно 1 кадр (60fps)
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.innerText = Math.ceil(start).toLocaleString('en-US'); // Робить формат 1,234
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target.toLocaleString('en-US'); // Точне фінальне число
        }
    }
    updateCounter();
}

// Запускаємо лічильник після завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
    loadDancersCount();
});
// ========================================================
// ЛОГІКА КОМЕНТАРІВ (ДЛЯ ВКЛАДКИ "КОМЕНТАРІ")
// ========================================================

// 1. Функція завантаження коментарів з бази
async function loadComments() {
    const commentsContainer = document.getElementById("comments-list-container");
    if (!commentsContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    if (!eventId) return;

    try {
        const response = await fetch(`${API_URL}/events/${eventId}/comments`);
        if (!response.ok) throw new Error("Помилка завантаження");
        
        const comments = await response.json();
        commentsContainer.innerHTML = ""; // Очищаємо перед рендером

        if (comments.length === 0) {
            commentsContainer.innerHTML = `<p style="color: #888; font-style: italic; padding: 10px; text-align: center;">Коментарів поки немає. Будьте першим!</p>`;
            return;
        }

        comments.forEach(comment => {
            let commentHtml = `
                <div class="comment-item" style="border-left: 4px solid #007bff; margin-bottom: 12px; background: #fdfdfd; padding: 12px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <strong style="color: #2c3e50; font-size:14px;"><i class="fas fa-user" style="color:#7f8c8d; margin-right:5px;"></i>${comment.author}</strong> 
                        <span style="font-size: 11px; color: #bdc3c7;">${comment.date || 'щойно'}</span>
                    </div>
                    <p style="margin: 0; color: #34495e; font-size: 14px; line-height:1.4;">${comment.text}</p>
                </div>
            `;
            
            // Якщо є відповіді на цей коментар
            if (comment.replies && comment.replies.length > 0) {
                comment.replies.forEach(reply => {
                    commentHtml += `
                        <div class="comment-reply" style="margin-left: 25px; border-left: 3px solid #95a5a6; background: #f9f9f9; padding: 10px; margin-top: 6px; border-radius: 4px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                                <strong style="color: #7f8c8d; font-size:13px;">${reply.author}</strong>
                                <span style="font-size: 10px; color: #ccc;">${reply.date || 'щойно'}</span>
                            </div>
                            <p style="margin: 0; color: #555; font-size: 13px;">${reply.text}</p>
                        </div>
                    `;
                });
            }

            commentsContainer.innerHTML += commentHtml;
        });

    } catch (error) {
        console.error("Помилка завантаження коментарів:", error);
        commentsContainer.innerHTML = `<p style="color: red; font-size:13px; text-align:center;">Не вдалося завантажити коментарі.</p>`;
    }
}

// 2. Функція відправки нового коментаря (її викликає кнопка в HTML)
window.submitNewComment = async function() {
    const commentInput = document.getElementById("new-comment-text");
    if (!commentInput) return;

    const text = commentInput.value.trim();
    if (!text) {
        alert("Будь ласка, напишіть текст коментаря!");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const currentEventId = urlParams.get('id');

    if (!currentEventId) {
        alert("Не вдалося знайти ID змагання!");
        return;
    }

    // Перевіряємо обидва варіанти запису ID користувача
    const currentUserId = localStorage.getItem("user_id") || localStorage.getItem("userId");
    if (!currentUserId) {
        alert("Щоб залишати коментарі, увійдіть у свій акаунт!");
        return;
    }

    const commentData = {
        user_id: parseInt(currentUserId),
        text: text,
        parent_id: null
    };

    try {
        const response = await fetch(`${API_URL}/events/${currentEventId}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commentData)
        });

        if (response.ok) {
            commentInput.value = ""; // Очищаємо поле
            loadComments(); // Миттєво оновлюємо список на екрані
        } else {
            const errData = await response.json();
            alert(errData.detail || "Сталася помилка при збереженні коментаря.");
        }
    } catch (error) {
        console.error("Серверна помилка коментаря:", error);
        alert("Втрачено зв'язок з сервером.");
    }
};

// 3. Запускаємо логіку, коли сторінка завантажилася
document.addEventListener("DOMContentLoaded", () => {
    // Ховаємо або показуємо форму залежно від того, чи зайшла людина
    const authNotice = document.getElementById('auth-comment-notice');
    const commentFormWrapper = document.getElementById('comment-form-wrapper');
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (authNotice && commentFormWrapper) {
        if (isLoggedIn) {
            authNotice.style.display = 'none'; // Ховаємо напис "Авторизуйтесь"
            commentFormWrapper.style.display = 'block'; // Показуємо поле вводу
        } else {
            authNotice.style.display = 'block'; // Показуємо напис
            commentFormWrapper.style.display = 'none'; // Ховаємо поле вводу
        }
    }

    // Відразу завантажуємо коментарі, якщо ми на сторінці змагання
    if (document.getElementById("comments-list-container")) {
        loadComments();
    }
});