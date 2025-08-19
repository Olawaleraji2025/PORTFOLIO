// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('active');
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Reset errors
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';
    
    // Validate name
    if (name.value.trim() === '') {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // In a real scenario, you would send the form data to a server here
        // For demo purposes, we'll just show a success message
        document.getElementById('contact-form').reset();
        document.getElementById('form-success').style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('form-success').style.display = 'none';
        }, 5000);
    }
});

// Animate skill bars when they come into view

const skillProgress = document.querySelectorAll('.skill-progress');
skillProgress.forEach(progress => {
    const attri = progress.getAttribute("data-width");
     progress.style.width = `${attri}%`;
})

// (function () {
//     skillProgress.forEach(progress => progress.style.width = `${widthProgress}%`)
// })();


// const observerOptions = {
//     threshold: 0.5
// };

// const skillBarObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const progressBar = entry.target.querySelector('.skill-progress');
//             const width = progressBar.getAttribute('data-width');
//             progressBar.style.width = width + '%';
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.skill-bar').forEach(bar => {
//     skillBarObserver.observe(bar);
// });

// Smooth scroll for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    animateOnScroll.observe(section);
});

// Initialize skill bars
// document.addEventListener('DOMContentLoaded', function() {
//     // Reset skill bars initially
//     document.querySelectorAll('.skill-progress').forEach(bar => {
//         bar.style.width = '0%';
//     });
// });
