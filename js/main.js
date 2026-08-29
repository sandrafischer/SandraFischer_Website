document.addEventListener('DOMContentLoaded', () => {

    // --- 0. CINEMATIC LOGO INTRO & TIMELINE CONTROLLER ---
    const introOverlay = document.getElementById('introOverlay');
    const introVideo = document.getElementById('introVideo');
    const hasSeenIntro = sessionStorage.getItem('cinematicIntroSeen');

    if (introOverlay && introVideo && !hasSeenIntro) {
        document.body.style.overflow = 'hidden';

        // Video abspielen
        introVideo.play().catch(() => {
            // Fallback falls Autoplay blockiert wird
            completeIntro();
        });

        // Wenn das Video fast fertig ist oder endet: Nach oben wegfahren & Hero triggern
        introVideo.addEventListener('ended', completeIntro);

        // Sicherheits-Timeout (falls Video hängt)
        setTimeout(() => {
            if (!introOverlay.classList.contains('is-lifted')) {
                completeIntro();
            }
        }, 2800);

        function completeIntro() {
            if (introOverlay.classList.contains('is-lifted')) return;

            // 1. Vorhang nach oben wegziehen
            introOverlay.classList.add('is-lifted');
            document.body.style.overflow = '';
            sessionStorage.setItem('cinematicIntroSeen', 'true');

            // 2. Kinetische Hero-Animation starten
            setTimeout(() => {
                document.body.classList.add('hero-master-active');
            }, 150);
        }
    } else {
        // Sofortige Anzeige bei Wiederholungsbesuchen
        if (introOverlay) introOverlay.style.display = 'none';
        document.body.classList.add('hero-instant-view');
    }

    // --- 1. SUBTIL-DESKTOP 3D-TILT NACH DEM START ---
    const heroTiltBox = document.getElementById('heroTiltBox');
    if (heroTiltBox && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            // Ultra-dezente 1.2 Grad Neigung
            const rotateX = -y * 1.2;
            const rotateY = x * 1.2;

            heroTiltBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }

    // --- 2. MOBILE NAVIGATION TOGGLE ---
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('is-active');
            mainNav.classList.toggle('is-open');
        });

        // Schließen bei Klick auf einen Navigations-Link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                mainNav.classList.remove('is-open');
            });
        });

        // Schließen bei Klick außerhalb des Menüs
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('is-active');
                mainNav.classList.remove('is-open');
            }
        });
    }

    // --- 3. WORK GRID CATEGORY FILTER ---
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

    // --- 4. PAGE TRANSITIONS ---
    const transitionOverlay = document.getElementById('pageTransition');
    if (transitionOverlay) {
        setTimeout(() => {
            transitionOverlay.classList.add('is-hidden');
        }, 50);

        window.addEventListener('pageshow', () => {
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

    // --- 5. INVERTING CUSTOM CURSOR ---
    const cursor = document.getElementById('customCursor');
    if (cursor) {
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
    }

    // --- 6. VIDEO CARDS ---
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            card.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    card.classList.add('is-playing');
                } else {
                    video.pause();
                    card.classList.remove('is-playing');
                }
            });

            video.addEventListener('ended', () => {
                video.currentTime = 0;
                card.classList.remove('is-playing');
            });
        }
    });

    // --- 7. FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');

                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('is-open');
                    const otherBtn = otherItem.querySelector('.faq-question');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                });

                if (!isOpen) {
                    item.classList.add('is-open');
                    questionBtn.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });


    /* ==========================================================================
       PROJECT DETAIL: CINEMATIC HERO PARALLAX & STACKED SHOWCASE OVERLAP
       ========================================================================== */
    const detailHero = document.getElementById("projectHeroContent");
    const detailTitleSpans = document.querySelectorAll(".project-detail-title span");
    const detailLead = document.querySelector(".project-detail-lead");
    const detailMeta = document.querySelector(".project-meta-strip");
    const showcaseFrame = document.querySelector(".project-hero-frame");

    function renderDetailHeroParallax(scrollPos) {
        if (!detailHero || window.innerWidth <= 768) return;

        const maxDistance = 700;
        const progress = Math.min(1, Math.max(0, scrollPos / maxDistance));

        if (scrollPos <= maxDistance * 1.5) {
            // 1. Hero scrollt langsamer mit (Parallaxe 0.45), fadet ab und wird progressiv unschärfer
            const blurAmount = (progress * 8).toFixed(1);
            const opacityAmount = Math.max(0.15, 1 - (progress * 0.65)).toFixed(2);

            detailHero.style.transform = `translate3d(0, ${(scrollPos * 0.45).toFixed(1)}px, 0)`;
            detailHero.style.filter = `blur(${blurAmount}px)`;
            detailHero.style.opacity = opacityAmount;

            // 2. Kinetische Typo-Gegenbewegung der beiden Titelzeilen
            if (detailTitleSpans.length >= 2) {
                detailTitleSpans[0].style.transform = `translate3d(-${(progress * 60).toFixed(1)}px, 0, 0)`;
                detailTitleSpans[1].style.transform = `translate3d(${(progress * 60).toFixed(1)}px, 0, 0)`;
            }

            // 3. Lead & Meta-Strip Tiefenstaffelung
            if (detailLead) {
                detailLead.style.transform = `translate3d(0, ${(progress * 25).toFixed(1)}px, 0)`;
            }
            if (detailMeta) {
                detailMeta.style.transform = `translate3d(0, ${(progress * 40).toFixed(1)}px, 0)`;
            }

            // 4. Showcase-Bild dehnt sich sanft auf
            if (showcaseFrame) {
                const scale = 0.985 + (progress * 0.015);
                showcaseFrame.style.transform = `scale(${Math.min(1, scale).toFixed(3)})`;
            }
        }
    }

    // 2. Interactive Frosted Lightbox (Klick überall schließt)
    const lightbox = document.getElementById("lightboxOverlay");
    const lightboxContent = document.getElementById("lightboxContent");
    const zoomableItems = document.querySelectorAll("[data-zoomable]");

    if (lightbox && lightboxContent) {
        const openLightbox = (src, alt, isVideo = false) => {
            lightboxContent.innerHTML = "";
            if (isVideo) {
                const video = document.createElement("video");
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                lightboxContent.appendChild(video);
            } else {
                const img = document.createElement("img");
                img.src = src;
                img.alt = alt || "Enlarged view";
                lightboxContent.appendChild(img);
            }
            lightbox.classList.add("is-active");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        };

        const closeLightbox = () => {
            lightbox.classList.remove("is-active");
            lightbox.setAttribute("aria-hidden", "true");
            lightboxContent.innerHTML = "";
            document.body.style.overflow = "";
        };

        zoomableItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                const isVideo = item.tagName.toLowerCase() === "video";
                const source = isVideo ? item.querySelector("source")?.src || item.src : item.src;
                openLightbox(source, item.alt, isVideo);
            });
        });

        // Klick irgendwo schließt
        lightbox.addEventListener("click", closeLightbox);

        // Escape Taste schließt ebenfalls
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && lightbox.classList.contains("is-active")) {
                closeLightbox();
            }
        });
    }

    // --- 8. ULTRA-SMOOTH SCROLL (LENIS) & HERO PARALLAX CONTROLLER ---
    const heroSection = document.getElementById('hero');
    const lineSandra = document.querySelector('.hero-line-first');
    const lineFischer = document.querySelector('.hero-offset-name');
    const heroDisciplines = document.querySelector('.hero-disciplines-subblock');
    const heroBadge = document.querySelector('.hero-badge-row');
    const workBoxContainer = document.querySelector('.work-box-container');

    function renderHeroParallax(scrollPos) {
        if (window.innerWidth <= 768) return;

        const maxDistance = 750;
        const progress = Math.min(1, Math.max(0, scrollPos / maxDistance));

        // 1. Hero scrollt langsamer mit und wird progressiv unschärfer
        if (heroSection && scrollPos <= maxDistance * 1.5) {
            const blurAmount = (progress * 8).toFixed(1); // 0px bis max 8px Blur
            const opacityAmount = Math.max(0.2, 1 - (progress * 0.55)).toFixed(2); // Sanftes Abdunkeln

            heroSection.style.transform = `translate3d(0, ${(scrollPos * 0.45).toFixed(1)}px, 0)`;
            heroSection.style.filter = `blur(${blurAmount}px)`;
            heroSection.style.opacity = opacityAmount;
        }

        // 2. Kinetische Typo-Gegenbewegung
        if (lineSandra) {
            lineSandra.style.transform = `translate3d(-${(progress * 80).toFixed(1)}px, 0, 0)`;
        }
        if (lineFischer) {
            lineFischer.style.transform = `translate3d(${(progress * 80).toFixed(1)}px, 0, 0)`;
        }

        // 3. Sublines nach unten, Badge nach oben
        if (heroDisciplines) {
            heroDisciplines.style.transform = `translate3d(0, ${(progress * 40).toFixed(1)}px, 0)`;
        }
        if (heroBadge) {
            heroBadge.style.transform = `translate3d(0, -${(progress * 25).toFixed(1)}px, 0)`;
        }

        // 4. Works-Box zieht sich dynamisch auf
        if (workBoxContainer) {
            const scale = 0.985 + (progress * 0.015);
            workBoxContainer.style.transform = `scale(${Math.min(1, scale).toFixed(3)})`;
        }
    }

    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.05,
            touchMultiplier: 1.8
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Synchronisation bei jedem Scroll-Frame
        lenis.on('scroll', (e) => {
            renderHeroParallax(e.scroll);          // Für die Startseite
            renderDetailHeroParallax(e.scroll);    // Für die Projekt-Detailseiten
        });

        // Anker-Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '#hero') {
                    e.preventDefault();
                    lenis.scrollTo(0, { duration: 1.4 });
                } else {
                    const targetEl = document.querySelector(targetId);
                    if (targetEl) {
                        e.preventDefault();
                        lenis.scrollTo(targetEl, { offset: -40, duration: 1.3 });
                    }
                }
            });
        });
    } else {
        window.addEventListener('scroll', () => {
            renderHeroParallax(window.scrollY);
            renderDetailHeroParallax(window.scrollY);
        }, { passive: true });
    }

    // --- 9. SCROLL REVEAL OBSERVER ---
    const revealTargets = document.querySelectorAll(
        '.work-header, .work-card, .disciplines-header, .discipline-card, .about-grid, .split-hub-header, .faq-col, .contact-col'
    );

    revealTargets.forEach(el => el.classList.add('scroll-reveal'));

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(el => scrollObserver.observe(el));

    // --- AUTO-SCALE DESKTOP IFRAME MOCKUP (DESKTOP / MOBILE RESPONSIVE) ---
    function resizeIframeScale() {
        const mockupViewport = document.querySelector('.mockup-viewport');
        const mockupIframe = document.querySelector('.mockup-viewport iframe');

        if (!mockupViewport || !mockupIframe) return;

        // Auf Smartphones (unter 768px) nativen Mobile-View nutzen
        if (window.innerWidth <= 768) {
            mockupIframe.style.width = '100%';
            mockupIframe.style.height = '100%';
            mockupIframe.style.transform = 'none';
            return;
        }

        // Ab Tablet/Desktop: Feste 1440px Referenz proportional herunterzoomen
        const baseWidth = 1440;
        const currentContainerWidth = mockupViewport.clientWidth;
        const currentContainerHeight = mockupViewport.clientHeight;
        const scale = currentContainerWidth / baseWidth;

        mockupIframe.style.width = `${baseWidth}px`;
        mockupIframe.style.height = `${currentContainerHeight / scale}px`;
        mockupIframe.style.transform = `scale(${scale})`;
        mockupIframe.style.transformOrigin = 'top left';
    }

    window.addEventListener('resize', resizeIframeScale);
    window.addEventListener('orientationchange', resizeIframeScale);
    resizeIframeScale();

    // --- 10. MOBILE STEP-BY-STEP LOAD MORE (3 BY 3) CONTROLLER ---
    const workGridEl = document.getElementById('workGrid');
    const loadMoreBtn = document.getElementById('loadMoreProjectsBtn');
    const loadMoreWrap = document.getElementById('loadMoreWrap');

    let visibleCount = 3; // Startet mit den ersten 3 Projekten
    const stepCount = 3;    // Schaltet pro Klick jeweils 3 weitere frei

    function updateMobileVisibility() {
        if (!workGridEl) return;

        const isMobile = window.innerWidth <= 680;
        // Berücksichtigt auch aktive Filter
        const activeCards = Array.from(workGridEl.querySelectorAll('.work-card:not(.is-hidden)'));

        if (isMobile) {
            let hiddenRemaining = 0;

            activeCards.forEach((card, index) => {
                if (index < visibleCount) {
                    card.classList.remove('mobile-collapsed');
                } else {
                    card.classList.add('mobile-collapsed');
                    hiddenRemaining++;
                }
            });

            // Button nur anzeigen, wenn noch weitere Projekte verborgen sind
            if (loadMoreWrap) {
                if (hiddenRemaining > 0) {
                    loadMoreWrap.classList.remove('is-hidden');
                    const btnSpan = loadMoreBtn.querySelector('span');
                    if (btnSpan) {
                        btnSpan.textContent = `View More Projects (${hiddenRemaining} left)`;
                    }
                } else {
                    loadMoreWrap.classList.add('is-hidden');
                }
            }
        } else {
            // Auf Tablet & Desktop immer alle Karten einblenden
            activeCards.forEach(card => card.classList.remove('mobile-collapsed'));
            if (loadMoreWrap) loadMoreWrap.classList.add('is-hidden');
        }
    }

    if (loadMoreBtn && workGridEl) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += stepCount; // Erhöht um 3
            updateMobileVisibility();

            // Sanfte Einblend-Animation für neu hinzugekommene Karten
            const newlyVisible = workGridEl.querySelectorAll('.work-card:not(.mobile-collapsed)');
            newlyVisible.forEach(card => card.classList.add('is-revealed'));
        });
    }

    // Bei Filter-Klick den Zähler auf die ersten 3 der gefilterten Kategorie zurücksetzen
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            visibleCount = 3;
            // Kurzer Timeout, damit das Filter-Script die Klassen zuerst aktualisiert
            setTimeout(updateMobileVisibility, 20);
        });
    });

    window.addEventListener('resize', updateMobileVisibility);
    updateMobileVisibility();

    // --- 11. MOBILE COLLAPSIBLE FAQ SECTION CONTROLLER ---
    const faqCol = document.getElementById('faqCol');
    const faqToggleBtn = document.getElementById('faqSectionToggleBtn');

    if (faqCol && faqToggleBtn) {
        faqToggleBtn.addEventListener('click', () => {
            const isExpanded = faqCol.classList.toggle('is-expanded');
            faqToggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

            const btnText = faqToggleBtn.querySelector('span:first-child');
            if (btnText) {
                btnText.textContent = isExpanded ? 'Hide FAQs' : 'Show FAQs';
            }
        });
    }
});