document.addEventListener('DOMContentLoaded', function() {

    const mainContainer = document.querySelector('.main__container');
    const menuIcon = document.querySelector('.menu__icon');
    const searchIcon = document.querySelector('.search__icon');
    const searchInput = document.querySelector('.search__input');
    const header = document.querySelector('.header');

    menuIcon.addEventListener('click', function() {
        !mainContainer.classList.contains('show') ? 
            mainContainer.classList.add('show') : mainContainer.classList.remove('show');
    });

    searchIcon.addEventListener("click", function() {
        if(!header.classList.contains('show__input')) {
            header.classList.add('show__input')
            searchInput.style.zIndex = 3;
        } else {
            header.classList.remove('show__input');
            searchInput.style.zIndex = 1;
        }
    });
});