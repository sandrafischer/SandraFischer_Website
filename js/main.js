document.addEventListener('DOMContentLoaded', () => {
    // --- 1. PAGE TRANSITIONS ---
    const transitionOverlay = document.getElementById('pageTransition');
    if (transitionOverlay) {
        setTimeout(() => {
            transitionOverlay.classList.add('is-hidden');
        }, 50);

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

    // --- 2. INVERTING CUSTOM CURSOR (LENA HARRER STYLE) ---
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

    // Cursor ausblenden, wenn das Browserfenster verlassen wird
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        isVisible = true;
    });

    // Feste Nachlauf-Animation ohne Verzerrung
    function renderCursor() {
        const ease = 0.25; // Schneller und direkter Nachlauf
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;

        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover-Zustand für interaktive Elemente
    const interactiveElements = document.querySelectorAll('a, button, .work-card, .btn, .filter-btn, .pill-checkbox, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
    });
});