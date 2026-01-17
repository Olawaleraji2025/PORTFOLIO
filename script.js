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


    

    





