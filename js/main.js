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
   PROJECT DETAIL: HERO PARALLAX REVEAL & FROSTED LIGHTBOX
   ========================================================================== */
    // Butterweicher Hero Scroll-Fade & Parallax Reveal
    const heroContent = document.getElementById("projectHeroContent");
    if (heroContent && window.innerWidth > 768) {
        let isTicking = false;

        window.addEventListener("scroll", () => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    const scrollPos = window.scrollY;
                    const maxDistance = 480;

                    if (scrollPos <= maxDistance) {
                        const progress = scrollPos / maxDistance;
                        const opacity = Math.max(0, 1 - (progress * 1.2));
                        const translateY = scrollPos * 0.25;

                        heroContent.style.opacity = opacity.toFixed(3);
                        heroContent.style.transform = `translate3d(0, -${translateY.toFixed(1)}px, 0)`;
                    } else if (heroContent.style.opacity !== "0") {
                        heroContent.style.opacity = "0";
                    }

                    isTicking = false;
                });
                isTicking = true;
            }
        }, { passive: true });
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
});