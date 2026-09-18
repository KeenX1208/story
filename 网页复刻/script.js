const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    mouseMultiplier: 0.8,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

function initContinuousScrollytelling() {
    gsap.set(".home-scenario *, .ground img", { transition: "none" });
    gsap.set(".home-scenario", { opacity: 1, visibility: "visible" });

    gsap.set(".scenario-1-background", { opacity: 1 });
    gsap.set(".scenario-2-background, .scenario-3-background, .scenario-4-background-before, .scenario-4-background-after", { opacity: 0 });
    gsap.set([".cinematic-narrator", ".vn-dialogue-box"], { opacity: 0, y: 20 });
    gsap.set(".ground-img", { xPercent: -50, rotation: 0, y: 0 });

    gsap.set([
        "#scenario-1 > div",
        "#scenario-2 > div",
        "#scenario-3 > div",
        "#scenario-4 > div"
    ], { opacity: 0 });

    gsap.set(["#scenario-1 .title-house", "#scenario-1 .title-tree"], { y: 200 });
    gsap.set(["#scenario-1 .title-cloud-1", "#scenario-1 .title-cloud-2", "#scenario-1 .title-cloud-3", "#scenario-1 .title-cloud-4"], { y: -200 });
    gsap.set("#scenario-1 .title-pinetree", { x: -200 });
    gsap.set("#scenario-1 .title-bush", { x: 200 });
    gsap.set("#scenario-1 .title-heading", { y: 50 });

    gsap.set(["#scenario-2 .page1-background-building", "#scenario-2 .page1-building-left", "#scenario-2 .page1-building-right", "#scenario-2 .page1-tallbuilding", "#scenario-2 .page1-temple"], { y: 200 });
    gsap.set(["#scenario-2 .page1-factory", "#scenario-2 .page1-chimney", "#scenario-2 .page1-smoke-1", "#scenario-2 .page1-smoke-2", "#scenario-2 .page1-smoke-3", "#scenario-2 .page1-smoke-4", "#scenario-2 .page1-pollutedpinetree", "#scenario-2 .page1-pollutedbush"], { y: 150 });
    gsap.set("#scenario-2 .page1-witheredsunflower", { y: 150, filter: "saturate(1.8) brightness(1.2)" });
    gsap.set("#scenario-2 .page1-npc-oldman", { x: -350, y: 80, rotation: -15, transformOrigin: "bottom center" });
    gsap.set("#scenario-2 .page1-npc-bubbles", { scale: 0, transformOrigin: "bottom left" });

    gsap.set(["#scenario-3 .page2-gate", "#scenario-3 .page2-background-building", "#scenario-3 .page2-rock-left", "#scenario-3 .page2-rock-right"], { y: 200 });
    gsap.set("#scenario-3 .page2-danlu", { scale: 0, transformOrigin: "center bottom" });
    gsap.set("#scenario-3 .page2-npc-oldman", { x: -450, y: 120, rotation: -20, transformOrigin: "bottom center" });
    gsap.set("#scenario-3 .page2-npc-daoshi", { x: 450, y: 120, rotation: 20, transformOrigin: "bottom center" });

    gsap.set(["#scenario-4 .page3-background-building", "#scenario-4 .page3-building-left", "#scenario-4 .page3-building-right", "#scenario-4 .page3-tallbuilding", "#scenario-4 .page3-tower"], { y: 200 });
    gsap.set(["#scenario-4 .page3-healthypinetree", "#scenario-4 .page3-healthybush"], { y: 200 });
    gsap.set(["#scenario-4 .page3-cloud-1", "#scenario-4 .page3-cloud-2", "#scenario-4 .page3-cloud-3", "#scenario-4 .page3-cloud-4"], { y: -200 });
    gsap.set("#scenario-4 .page3-sunflower", { y: 150, scale: 0.8, transformOrigin: "bottom center" });

    const totalScrollHeight = 12000;
    document.body.style.height = `${totalScrollHeight}px`;

    const masterTl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
        }
    });

    masterTl
        .to(["#scenario-1 .title-house", "#scenario-1 .title-tree"], { y: 0, opacity: 1, duration: 2 })
        .to(["#scenario-1 .title-cloud-1", "#scenario-1 .title-cloud-2", "#scenario-1 .title-cloud-3", "#scenario-1 .title-cloud-4"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.4 })
        .to("#scenario-1 .title-pinetree", { x: 0, opacity: 1, duration: 1.5 })
        .to("#scenario-1 .title-bush", { x: 0, opacity: 1, duration: 1.5 }, "<")
        .to("#scenario-1 .title-heading", { y: 0, opacity: 1, duration: 1 })
        .to("#page0-caption", { opacity: 1, y: 0, duration: 1 })
        .to({}, { duration: 3 });

    masterTl
        .to("#page0-caption", { opacity: 0, y: -20, duration: 1 })
        .to(".ground-img", { rotation: -90, duration: 3 }, "<")
        .to(["#scenario-1 .title-house", "#scenario-1 .title-tree", "#scenario-1 .title-pinetree", "#scenario-1 .title-bush", "#scenario-1 .title-heading", "#scenario-1 .title-cloud-1", "#scenario-1 .title-cloud-2", "#scenario-1 .title-cloud-3", "#scenario-1 .title-cloud-4"], { y: 100, opacity: 0, duration: 2 }, "<");

    masterTl
        .to("#scenario-2 .page1-temple", { y: 0, opacity: 1, duration: 1.5 }, "-=1")
        .to(["#scenario-2 .page1-building-left", "#scenario-2 .page1-building-right", "#scenario-2 .page1-tallbuilding"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.3 })
        .to({}, { duration: 1.5 })
        .to("#scenario-2 .page1-temple", { y: 50, opacity: 0, duration: 1.5 })
        .to(["#scenario-2 .page1-factory", "#scenario-2 .page1-chimney"], { y: 0, opacity: 1, duration: 1.5 }, "<")
        .to(".scenario-2-background", { opacity: 1, duration: 2 }, "<")
        .to(".scenario-1-background", { opacity: 0, duration: 2 }, "<")
        .call(() => {
            const fac = document.querySelector("#scenario-2 .page1-factory");
            if (fac) fac.classList.add("pollution-active");
        })
        .to(["#scenario-2 .page1-smoke-1", "#scenario-2 .page1-smoke-2", "#scenario-2 .page1-smoke-3", "#scenario-2 .page1-smoke-4"], { y: 0, opacity: 1, duration: 2, stagger: 0.2 }, "-=0.5")
        .to(["#scenario-2 .page1-pollutedpinetree", "#scenario-2 .page1-pollutedbush"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 }, "-=1")
        .to("#scenario-2 .page1-witheredsunflower", { y: 0, opacity: 1, filter: "saturate(0.1) brightness(0.7) sepia(0.6)", duration: 3, ease: "power2.inOut" }, "-=1")
        .to("#page1-narrator", { opacity: 1, y: 0, duration: 1 }, "-=1.5")
        .to("#scenario-2 .page1-npc-oldman", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 2.5, ease: "power1.inOut" })
        .to("#scenario-2 .page1-npc-bubbles", { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" })
        .to("#page1-narrator", { opacity: 0, y: -20, duration: 0.5 })
        .to("#page1-dialogue", { opacity: 1, y: 0, duration: 1 })
        .to({}, { duration: 4 });

    masterTl
        .to("#page1-dialogue", { opacity: 0, y: -20, duration: 1 })
        .to(".ground-img", { rotation: -180, duration: 3 }, "<")
        .to(".scenario-2-background", { opacity: 0, duration: 2 }, "<")
        .to(".scenario-3-background", { opacity: 1, duration: 2 }, "<")
        .to(["#scenario-2 .page1-building-left", "#scenario-2 .page1-building-right", "#scenario-2 .page1-tallbuilding", "#scenario-2 .page1-factory", "#scenario-2 .page1-chimney", "#scenario-2 .page1-smoke-1", "#scenario-2 .page1-smoke-2", "#scenario-2 .page1-smoke-3", "#scenario-2 .page1-smoke-4", "#scenario-2 .page1-pollutedpinetree", "#scenario-2 .page1-pollutedbush", "#scenario-2 .page1-witheredsunflower", "#scenario-2 .page1-npc-oldman", "#scenario-2 .page1-npc-bubbles"], { y: 100, opacity: 0, duration: 2 }, "<");

    masterTl
        .to("#scenario-3 .page2-gate", { y: 0, opacity: 1, duration: 1.5 }, "-=1")
        .to("#scenario-3 .page2-background-building", { y: 0, opacity: 1, duration: 1.5 }, "-=0.5")
        .to(["#scenario-3 .page2-rock-left", "#scenario-3 .page2-rock-right"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 })
        .to("#scenario-3 .page2-danlu", { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.5)" })
        .to("#page2-narrator", { opacity: 1, y: 0, duration: 1 }, "<")
        .to("#scenario-3 .page2-npc-oldman", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 4, ease: "power1.inOut" }, "-=0.5")
        .to("#scenario-3 .page2-npc-daoshi", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 4, ease: "power1.inOut" }, "<")
        .to("#page2-narrator", { opacity: 0, y: -20, duration: 0.5 })
        .to("#page2-dialogue-1", { opacity: 1, y: 0, duration: 1 })
        .to({}, { duration: 1.5 })
        .to("#page2-dialogue-1", { opacity: 0, y: -20, duration: 0.5 })
        .to("#page2-dialogue-2", { opacity: 1, y: 0, duration: 1 })
        .to({}, { duration: 3 });

    masterTl
        .to("#page2-dialogue-2", { opacity: 0, y: -20, duration: 1 })
        .to(".ground-img", { rotation: -270, duration: 3 }, "<")
        .to(".scenario-3-background", { opacity: 0, duration: 2 }, "<")
        .to(".scenario-4-background-after", { opacity: 1, duration: 2 }, "<")
        .to(["#scenario-3 .page2-gate", "#scenario-3 .page2-background-building", "#scenario-3 .page2-rock-left", "#scenario-3 .page2-rock-right", "#scenario-3 .page2-danlu", "#scenario-3 .page2-npc-oldman", "#scenario-3 .page2-npc-daoshi"], { y: 100, opacity: 0, duration: 2 }, "<");

    masterTl
        .to(["#scenario-4 .page3-background-building", "#scenario-4 .page3-building-left", "#scenario-4 .page3-building-right", "#scenario-4 .page3-tallbuilding", "#scenario-4 .page3-tower"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 }, "-=1")
        .call(() => {
            const tower = document.querySelector("#scenario-4 .page3-tower");
            if (tower) tower.classList.add("glow-active");
        })
        .to(["#scenario-4 .page3-healthypinetree", "#scenario-4 .page3-healthybush"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 })
        .to(["#scenario-4 .page3-cloud-1", "#scenario-4 .page3-cloud-2", "#scenario-4 .page3-cloud-3", "#scenario-4 .page3-cloud-4"], { y: 0, opacity: 1, duration: 1.5, stagger: 0.3 })
        .to("#scenario-4 .page3-sunflower", { y: 0, scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.2)" })
        .call(() => {
            const sunflower = document.querySelector("#scenario-4 .page3-sunflower");
            if (sunflower) sunflower.classList.add("glow-active");
        })
        .to("#page3-narrator", { opacity: 1, y: 0, duration: 1 }, "-=1")
        .to({}, { duration: 4 });
}

window.addEventListener("load", () => {
    const navElements = document.querySelectorAll('.scene-nav, .skipbutton');
    navElements.forEach(el => el.style.display = 'none');
    initContinuousScrollytelling();
});

(function () {
    function collectSceneInteractiveElements() {
        const scenes = document.querySelectorAll('.home-scenario');
        return Array.from(scenes).map(scene => ({
            scene, elements: Array.from(scene.querySelectorAll('.interactive-element'))
        }));
    }

    function updateSceneHint(sceneObj) {
        const { scene, elements } = sceneObj;
        if (!elements.length) return;
        const hint = scene.querySelector('.click-hint');
        if (!hint || hint.classList.contains('hint-dismiss')) return;
        const textEl = hint.querySelector('.click-hint__text');
        if (!textEl) return;
        const remaining = elements.filter(el => !el.dataset.interacted).length;
        if (remaining > 1) {
            textEl.textContent = `Click on the glowing elements to explore our project (${remaining} remaining)`;
        } else if (remaining === 1) {
            textEl.textContent = 'Click on the glowing elements to explore our project (Last one!)';
        } else {
            textEl.textContent = 'All elements explored!';
            setTimeout(() => { if (!hint.classList.contains('hint-dismiss')) hint.classList.add('hint-dismiss'); }, 1800);
        }
    }

    function markInteractedAndUpdate(el, scenesCache) {
        if (!el || el.dataset.interacted) return;
        el.dataset.interacted = 'true';
        const scene = el.closest('.home-scenario');
        if (!scene) return;
        const sceneObj = scenesCache.find(s => s.scene === scene);
        if (sceneObj) updateSceneHint(sceneObj);
    }

    const scenesCache = collectSceneInteractiveElements();
    scenesCache.forEach(sceneObj => updateSceneHint(sceneObj));

    const Modal = (function () {
        let overlay = null;
        let isOpen = false;
        let escHandler = null;
        let currentCtaHref = null;

        function ensureOverlay() {
            if (overlay) return overlay;
            overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.innerHTML = [
                '<div class="modal" tabindex="-1" aria-live="polite">',
                '  <button class="modal-close" aria-label="Close">×</button>',
                '  <div class="modal-left"><img class="modal-image" alt="" /></div>',
                '  <div class="modal-right">',
                '    <div class="modal-content">',
                '      <div class="modal-title" hidden></div>',
                '      <div class="modal-lines"></div>',
                '    </div>',
                '    <div class="modal-cta" hidden role="link" tabindex="0"></div>',
                '  </div>',
                '</div>'
            ].join('');
            document.body.appendChild(overlay);
            overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
            overlay.querySelector('.modal-close').addEventListener('click', close);
            const ctaEl = overlay.querySelector('.modal-cta');
            if (ctaEl) {
                ctaEl.addEventListener('click', (e) => {
                    if (ctaEl.hidden) return;
                    e.stopPropagation();
                    if (!currentCtaHref) return;
                    try { window.open(currentCtaHref, '_blank', 'noopener'); } catch (_) { location.href = currentCtaHref; }
                });
            }
            return overlay;
        }

        function animateLines(linesContainer) {
            const items = Array.from(linesContainer.querySelectorAll('p'));
            items.forEach((p, i) => { p.classList.remove('show'); setTimeout(() => p.classList.add('show'), 250 + i * 450); });
        }

        function escapeHtml(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

        function open({ imageSrc, imageAlt = '', title = '', lines = [], cta = null }) {
            ensureOverlay();
            const modal = overlay.querySelector('.modal');
            const img = overlay.querySelector('.modal-image');
            const linesEl = overlay.querySelector('.modal-lines');
            const ctaEl = overlay.querySelector('.modal-cta');
            img.src = imageSrc || ''; img.alt = imageAlt || '';
            linesEl.innerHTML = '';
            lines.forEach(txt => { const p = document.createElement('p'); p.textContent = txt; linesEl.appendChild(p); });
            if (cta && cta.href && cta.label) {
                ctaEl.innerHTML = escapeHtml(cta.label) + ' <svg class="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                ctaEl.hidden = false;
                currentCtaHref = cta.href;
            } else { ctaEl.hidden = true; ctaEl.innerHTML = ''; currentCtaHref = null; }
            overlay.classList.add('open');
            isOpen = true;
            modal.focus();
            escHandler = (ev) => { if (ev.key === 'Escape') close(); };
            document.addEventListener('keydown', escHandler);
            animateLines(linesEl);
        }

        function close() {
            if (!overlay || !isOpen) return;
            overlay.classList.remove('open');
            isOpen = false;
            if (escHandler) { document.removeEventListener('keydown', escHandler); escHandler = null; }
        }

        return { open, close };
    })();

    window.bindModal = function (selector, config) {
        const el = document.querySelector(selector);
        if (!el) return;
        el.addEventListener('click', () => {
            markInteractedAndUpdate(el, scenesCache);
            Modal.open(config);
        });
    };
})();