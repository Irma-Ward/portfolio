/* ==========================================
   PORTFOLIO - ANIMATIONS & INTERACTIVITY
   ========================================== */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for valid anchor links (not empty hrefs)
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Reveal elements as they scroll into view
const revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealTargets.length && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -120px 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));
} else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
}

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--blue);
        font-weight: 700;
    }
`;
document.head.appendChild(style);

// Parallax effect on hero section (subtle)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollY = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// Hover effects for interactive elements
document.querySelectorAll('.project-card, .highlight-card, .skill-category').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Counter animation for numbers
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when highlight cards are in view
const highlightCards = document.querySelectorAll('.highlight-number');
let countersAnimated = false;

const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            highlightCards.forEach(card => {
                const text = card.textContent;
                // Only animate numbers, skip symbols like "∞"
                if (!isNaN(parseInt(text))) {
                    animateCounter(card, parseInt(text));
                }
            });
            countersAnimated = true;
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (highlightCards.length > 0) {
    counterObserver.observe(highlightCards[0].closest('.highlight-card'));
}

// Mobile menu toggle (optional - for future mobile nav enhancements)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        // Add mobile-specific behavior here if needed
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Console welcome message
console.log(
    '%c Welcome to Irma\'s Portfolio! ',
    'background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; padding: 10px 20px; border-radius: 5px; font-size: 14px; font-weight: bold;'
);
console.log(
    '%c Built with collaboration and care 🤝',
    'color: #7c3aed; font-size: 12px; font-style: italic;'
);
