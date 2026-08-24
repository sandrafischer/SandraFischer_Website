document.addEventListener('DOMContentLoaded', () => {

    // --- 0. INTRO PRELOADER (0-100 COUNTER) ---
    const introLoader = document.getElementById('introLoader');
    const loaderCounter = document.getElementById('loaderCounter');

    if (introLoader && loaderCounter) {
        // Verhindert Scrollen während des Intros
        document.body.style.overflow = 'hidden';

        let count = 0;
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 8) + 2;
            if (count >= 100) {
                count = 100;
                clearInterval(interval);
                loaderCounter.textContent = count;

                setTimeout(() => {
                    introLoader.classList.add('is-loaded');
                    document.body.classList.add('content-ready');
                    document.body.style.overflow = '';
                }, 250);
            } else {
                loaderCounter.textContent = count;
            }
        }, 25);
    } else {
        document.body.classList.add('content-ready');
    }

    // --- 1. MOBILE NAVIGATION TOGGLE ---
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            mainNav.classList.toggle('is-open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                mainNav.classList.remove('is-open');
            });
        });
    }

    // --- 2. WORK GRID CATEGORY FILTER (NUR STARTSEITE) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    const workGrid = document.getElementById('workGrid');

    if (filterButtons.length > 0 && workCards.length > 0 && workGrid) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                if (filterValue === 'all') {
                    workGrid.classList.remove('is-filtered');
                } else {
                    workGrid.classList.add('is-filtered');
                }

                workCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('is-hidden');
                    } else {
                        card.classList.add('is-hidden');
                    }
                });
            });
        });
    }

    // --- 3. PAGE TRANSITIONS (INKL. BFCACHE-FIX FÜR SWIPE-BACK) ---
    const transitionOverlay = document.getElementById('pageTransition');
    if (transitionOverlay) {
        // Initial beim normalen Laden ausblenden
        setTimeout(() => {
            transitionOverlay.classList.add('is-hidden');
        }, 50);

        // FIX: Wird gefeuert, wenn der Nutzer per Wisch-Geste / Browser-Back zurückkehrt
        window.addEventListener('pageshow', (event) => {
            transitionOverlay.classList.add('is-hidden');
        });

        const internalLinks = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])');

        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetUrl = link.getAttribute('href');
                if (!targetUrl) return;

                e.preventDefault();
                transitionOverlay.classList.remove('is-hidden');

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 300);
            });
        });
    }
    // --- 4. INVERTING CUSTOM CURSOR ---
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isVisible) {
            cursor.style.opacity = '1';
            isVisible = true;
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        isVisible = true;
    });

    function renderCursor() {
        const ease = 0.25;
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;

        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactiveElements = document.querySelectorAll('a, button, .work-card, .btn, .filter-btn, .pill-checkbox, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
    });
});

// --- 5. FAQ ACCORDION ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');

    if (questionBtn) {
        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Alle anderen einklappen (Accordion-Verhalten)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');
                const otherBtn = otherItem.querySelector('.faq-question');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            });

            // Aktuelles Element toggeln
            if (!isOpen) {
                item.classList.add('is-open');
                questionBtn.setAttribute('aria-expanded', 'true');
            }
        });
    }
});