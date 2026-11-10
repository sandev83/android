// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a:not(.lang-switch)');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--cyan)';
        }
    });
});

// Console Easter Egg
console.log('%c👋 Привет! Спасибо за интерес к моему профилю!', 'color: #bd93f9; font-size: 20px; font-weight: bold;');
console.log('%cЕсли вы разработчик, давайте общаться! 🚀', 'color: #50fa7b; font-size: 14px;');
console.log('%cКонтакты: SiutkinAN@gmail.com | Telegram: @SiutkinAndrey', 'color: #8be9fd; font-size: 12px;');
