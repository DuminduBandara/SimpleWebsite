const toggleButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-btn');
const menuItems = document.querySelector('.mobileMenu');

toggleButton.addEventListener('click', () => {
    menuItems.classList.add('active');
});

closeButton.addEventListener('click', () => {
    menuItems.classList.remove('active');
});
