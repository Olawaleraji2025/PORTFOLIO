// Mobile menu toggle for mobile screen sizes
document.querySelector(".fa-bars").addEventListener("click", function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.add('active');
    document.querySelector(".fa-bars").style.display = 'none';
    document.querySelector(".fa-x").style.display = 'block';
})
document.querySelector(".fa-x").addEventListener("click", function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
    document.querySelector(".fa-x").style.display = 'none';
    document.querySelector(".fa-bars").style.display = 'block';
})


// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('active');
    document.querySelector(".fa-x").style.display = 'none';
    document.querySelector(".fa-bars").style.display = 'block';

    });
});

// This is for the form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Reset errors messages to none
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';
    
    // Validate name
    if (name.value.trim() === '') {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === "") {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        name.value = '';
        email.value = '';
        message.value = '';
        document.getElementById('form-success').style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('form-success').style.display = 'none';
        }, 3000);
        return;
    }
});

// This is for the skill bars
const skillProgress = document.querySelectorAll('.skill-progress');
skillProgress.forEach(progress => {
    const attri = progress.getAttribute("data-width");
    progress.style.width = `${attri}%`;
})



