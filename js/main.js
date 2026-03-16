// Фиксация шапки при скролле
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (header) {
        header.style.boxShadow = window.scrollY > 100 ? "0 10px 30px rgba(0,0,0,0.5)" : "none";
    }
});

// Мобильное меню: бургер и подменю
(function () {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    var body = document.body;

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
        hamburger.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('is-open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        body.style.overflow = '';
        mobileMenu.querySelectorAll('.nav__item.is-open').forEach(function (item) {
            item.classList.remove('is-open');
        });
    }

    hamburger.addEventListener('click', function () {
        if (mobileMenu.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    mobileMenu.querySelectorAll('.nav__link.has-sub').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var item = link.closest('.nav__item');
            var wasOpen = item.classList.contains('is-open');
            mobileMenu.querySelectorAll('.nav__item.is-open').forEach(function (i) { i.classList.remove('is-open'); });
            if (!wasOpen) item.classList.add('is-open');
        });
    });

    mobileMenu.querySelectorAll('.subnav-link, .nav__link:not(.has-sub)').forEach(function (link) {
        link.addEventListener('click', function () {
            if (!link.classList.contains('has-sub')) closeMenu();
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1100 && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
    });
})();

