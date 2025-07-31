document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.querySelector('.contact-form');
    const videoCards = document.querySelectorAll('.video-card');
    const playlistCards = document.querySelectorAll('.playlist-card');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.course-card, .material-category, .video-card, .playlist-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Paldies par jūsu ziņojumu! Es drizo atbildēšu.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1000);
        });
    }

    videoCards.forEach(card => {
        const playButton = card.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', function() {
                const videoTitle = card.querySelector('h4').textContent;
                alert(`Atskan: ${videoTitle}\n\nPiezīme: īstā implementācijā šis atvērtu video atskanētāju vai pāradresētu uz jūsu video platformu (YouTube, Vimeo, u.c.)`);
            });
        }
    });

    playlistCards.forEach(card => {
        card.addEventListener('click', function() {
            const playlistTitle = this.querySelector('h4').textContent;
            alert(`Atvēr atskanās sarakstu: ${playlistTitle}\n\nPiezīme: īstā implementācijā šis parādītu visus video atskanās sarakstā.`);
        });
    });

    const courseLinks = document.querySelectorAll('.course-link');
    courseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const courseTitle = this.closest('.course-card').querySelector('h3').textContent;
            alert(`Sāk kursu: ${courseTitle}\n\nPiezīme: īstā implementācijā šis pāradresētu uz jūsu mācību pārvaldības sistēmu vai kursa saturu.`);
        });
    });

    const materialLinks = document.querySelectorAll('.material-list a');
    materialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const materialName = this.textContent.trim();
            const isDownload = this.querySelector('.fa-download');
            const isExternal = this.querySelector('.fa-external-link-alt');
            
            if (isDownload) {
                alert(`Lejupēlāde: ${materialName}\n\nPiezīme: īstā implementācijā šis lejupēlādētu PDF vai dokumentu.`);
            } else if (isExternal) {
                alert(`Atvēr rīku: ${materialName}\n\nPiezīme: īstā implementācijā šis atvērtu interaktīvu matemātisko rīku.`);
            }
        });
    });

    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
            this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = 'var(--border-color)';
            this.style.boxShadow = 'none';
        });
    });

    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.classList.add('back-to-top');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.background = 'var(--secondary-color)';
        this.style.transform = 'translateY(-3px)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.background = 'var(--primary-color)';
        this.style.transform = 'translateY(0)';
    });

    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                    entry.target.classList.add('typed');
                    typeWriter(entry.target, originalText, 50);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(heroTitle);
    }
});

window.addEventListener('load', function() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loadingOverlay.innerHTML = '<div style="text-align: center;"><i class="fas fa-square-root-alt" style="font-size: 3rem; color: var(--primary-color); animation: spin 1s linear infinite;"></i><p style="margin-top: 1rem; color: var(--text-secondary);">Ielādē matemātikas izcilību...</p></div>';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.insertBefore(loadingOverlay, document.body.firstChild);
    
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
            style.remove();
        }, 500);
    }, 1500);
});