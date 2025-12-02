// Scroll suave para links de navegação
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

// Efeito de highlight no menu ao scrollar
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação de entrada para cards de projetos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.projeto-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================
// FASE 2: INTERATIVIDADE AVANÇADA
// ============================================

// Mouse Glow - Apenas o brilho que segue o mouse
window.addEventListener('DOMContentLoaded', function() {
    // Só funciona em desktop
    if (window.innerWidth <= 768) {
        const mouseGlow = document.querySelector('.mouse-glow');
        if (mouseGlow) mouseGlow.style.display = 'none';
        return;
    }

    // Obter mouse glow
    const mouseGlow = document.querySelector('.mouse-glow');
    if (!mouseGlow) {
        console.error('❌ Mouse glow não encontrado');
        return;
    }

    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;
    let targetGlowX = glowX;
    let targetGlowY = glowY;

    // Posicionar inicialmente no centro
    mouseGlow.style.left = glowX + 'px';
    mouseGlow.style.top = glowY + 'px';
    mouseGlow.style.display = 'block';
    mouseGlow.classList.add('active');

    // Atualizar posição no movimento do mouse
    document.addEventListener('mousemove', function(e) {
        targetGlowX = e.clientX;
        targetGlowY = e.clientY;
        mouseGlow.classList.add('active');
    }, { passive: true });

    document.addEventListener('mouseleave', function() {
        mouseGlow.classList.remove('active');
    });

    // Animar mouse glow
    function animateGlow() {
        glowX += (targetGlowX - glowX) * 0.1;
        glowY += (targetGlowY - glowY) * 0.1;
        
        mouseGlow.style.left = glowX + 'px';
        mouseGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
    console.log('✅ Mouse glow inicializado');
});

// ============================================
// FASE 3: MELHORIAS DE UI/UX
// ============================================

// Menu Hambúrguer Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Scroll Progress Indicator
const scrollProgress = document.querySelector('.scroll-progress');
if (scrollProgress) {
    function updateScrollProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
}

// Botão Voltar ao Topo
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animações de Entrada para Seções
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// FASE 4: MELHORIAS VISUAIS DOS COMPONENTES
// ============================================

// Copyright com ano dinâmico
const currentYear = document.getElementById('current-year');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

