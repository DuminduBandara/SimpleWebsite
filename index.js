const toggleButton = document.querySelector('.hamburger');
const menuItems = document.querySelector('.mobileMenu');

toggleButton.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
