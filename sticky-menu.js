const navMobile = document.getElementById('sticky');
const hambMenuPanel = document.querySelector('.hamb-menu-panel')

function handleScroll() {

    if (window.scrollY > 50) {
        navMobile.classList.add('sticky');
        hambMenuPanel.classList.add('hamb-transparent');
        console.log('kk')
    } else if (window.scrollY < 50) {
        navMobile.classList.remove('sticky');
        hambMenuPanel.classList.remove('hamb-transparent');

    }
}


window.addEventListener('scroll', handleScroll);
