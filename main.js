/* ============================================================
   BOZZA — NUOVI APPARTAMENTI
   ============================================================ */

/* ---------- header: diventa solido allo scroll ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- reveal degli elementi allo scroll ---------- */
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.transitionDelay = (i % 5) * 90 + 'ms';
    io.observe(el);
});

/* ---------- leggero parallasse sulla vista aerea ---------- */
const heroImg = document.getElementById('heroImg');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
            heroImg.style.transform = `translateY(${y * 0.16}px) scale(1.08)`;
        }
    }, { passive: true });
}

/* ---------- form email (per ora simulato) ---------- */
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('emailInput');
const formOk = document.getElementById('formOk');

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = emailInput.value.trim();

    // controllo base
    if (!email || !email.includes('@') || !email.includes('.')) {
        form.classList.add('shake');
        emailInput.focus();
        setTimeout(() => form.classList.remove('shake'), 500);
        return;
    }

    // TODO: qui poi collegheremo il salvataggio reale delle email
    console.log('email raccolta:', email);

    form.style.display = 'none';
    formOk.hidden = false;
});