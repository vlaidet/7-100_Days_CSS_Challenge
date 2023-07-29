document.addEventListener('DOMContentLoaded', function() {

    const mainContainer = document.querySelector('.main__container');
    const menuIcon = document.querySelector('.menu__icon');

    menuIcon.addEventListener('click', function() {
        !mainContainer.classList.contains('show') ? 
            mainContainer.classList.add('show') : mainContainer.classList.remove('show')
    });
});