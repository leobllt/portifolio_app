const btnMenu = document.querySelector('.btn-dropdown');
const header = document.querySelector('.header');

btnMenu.onclick = () => {
    header.classList.toggle('active');
}