/* 
    * ==========================================
    * TYPEWRITER EFFECT
    * ==========================================
    */
const textElement = document.getElementById('typewriter');
const texts = ["Mohammed Ilyas", "A Web Developer", "A UI Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    textElement.textContent = letter;

    let typeSpeed = 100;
    if (isDeleting) typeSpeed = 50;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
})();

/* 
    * ==========================================
    * ROUTING & NAVIGATION
    * ==========================================
    */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');
const mobileBtn = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.nav-links');

function navigateTo(targetId) {
    // Hide all
    sections.forEach(sec => sec.classList.remove('active-page'));
    // Show target
    document.getElementById(targetId).classList.add('active-page');
    
    // Update Nav Active State
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    navUl.classList.remove('active');
    window.scrollTo(0, 0);
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute('data-target'));
    });
});

mobileBtn.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

/* 
    * ==========================================
    * 3D TILT EFFECT (The "Special" Feature)
    * ==========================================
    */
const cards = document.querySelectorAll('.tilt-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation based on cursor position relative to center of card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

/* 
    * ==========================================
    * CUSTOM CURSOR LOGIC
    * ==========================================
    */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with lag (animation in CSS keyframes or simple transition)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

/* 
    * ==========================================
    * FORM HANDLING
    * ==========================================
    */
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        // Show Toast
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        
        // Reset Form
        this.reset();
        btn.innerHTML = originalText;
        btn.style.opacity = '1';

        // Hide Toast
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }, 1500);
});