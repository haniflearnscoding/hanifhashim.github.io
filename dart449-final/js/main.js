/* ==========================================================================
   Pixel Ghosts — Main JavaScript
   CRT toggle, parallax starfield, scroll animations, gallery filter, lightbox
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ------ CRT Scanline Toggle ------ */
    const crtBtn = document.querySelector('.crt-toggle');
    if (crtBtn) {
        crtBtn.addEventListener('click', () => {
            document.body.classList.toggle('crt-active');
            const isOn = document.body.classList.contains('crt-active');
            crtBtn.textContent = isOn ? 'CRT: ON' : 'CRT: OFF';
            localStorage.setItem('crt', isOn ? 'on' : 'off');
        });
        // Restore saved preference
        if (localStorage.getItem('crt') === 'on') {
            document.body.classList.add('crt-active');
            crtBtn.textContent = 'CRT: ON';
        }
    }

    /* ------ Parallax Starfield ------ */
    const starfieldEl = document.querySelector('.hero-starfield');
    if (starfieldEl) {
        const layers = [
            { el: null, class: 'stars-back', count: 80, speed: 0.15, maxSize: 1 },
            { el: null, class: 'stars-mid', count: 50, speed: 0.3, maxSize: 2 },
            { el: null, class: 'stars-front', count: 30, speed: 0.5, maxSize: 3 }
        ];

        layers.forEach(layer => {
            const canvas = document.createElement('canvas');
            canvas.classList.add('starfield-layer', layer.class);
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'none';
            starfieldEl.insertBefore(canvas, starfieldEl.firstChild);
            layer.el = canvas;
        });

        function drawStars() {
            layers.forEach(layer => {
                const canvas = layer.el;
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Seed-based positions for consistency
                const rng = mulberry32(42 + layers.indexOf(layer));
                for (let i = 0; i < layer.count; i++) {
                    const x = rng() * canvas.width;
                    const y = rng() * canvas.height;
                    const size = Math.ceil(rng() * layer.maxSize);
                    const brightness = 0.5 + rng() * 0.5;
                    // Use PICO-8 star colors
                    const colors = ['#FFF1E8', '#C2C3C7', '#29ADFF', '#FF77A8', '#FFEC27'];
                    const color = colors[Math.floor(rng() * colors.length)];
                    ctx.globalAlpha = brightness;
                    ctx.fillStyle = color;
                    ctx.fillRect(Math.floor(x), Math.floor(y), size, size);
                }
                ctx.globalAlpha = 1;
            });
        }

        // Simple deterministic RNG
        function mulberry32(a) {
            return function() {
                a |= 0; a = a + 0x6D2B79F5 | 0;
                let t = Math.imul(a ^ a >>> 15, 1 | a);
                t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
                return ((t ^ t >>> 14) >>> 0) / 4294967296;
            };
        }

        drawStars();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(drawStars, 200);
        });

        // Parallax on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    layers.forEach(layer => {
                        if (layer.el) {
                            layer.el.style.transform = `translateY(${scrollY * layer.speed}px)`;
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /* ------ Scroll-Triggered Animations (Intersection Observer) ------ */
    const animatedEls = document.querySelectorAll('.scroll-sprite, .fade-in, .stagger-children');
    if (animatedEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedEls.forEach(el => observer.observe(el));
    }

    /* ------ Gallery Filtering ------ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    /* ------ Lightbox ------ */
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const lightboxClose = lightbox.querySelector('.lightbox-close');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const emoji = item.querySelector('.gallery-thumb').textContent.trim();
                const title = item.querySelector('h4').textContent;
                if (lightboxImg) lightboxImg.textContent = emoji;
                if (lightboxCaption) lightboxCaption.textContent = title;
                lightbox.classList.add('active');
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }

    /* ------ Pixel Sprite Animation (CSS sprite stepping) ------ */
    const pixelSprites = document.querySelectorAll('.pixel-sprite');
    if (pixelSprites.length > 0) {
        const spriteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    spriteObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        pixelSprites.forEach(el => spriteObserver.observe(el));
    }

});
