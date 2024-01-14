

const toggleButton = document.querySelector('.ham');
const menuItems = document.querySelector('.bd');
console.log(menuItems);
toggleButton.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
