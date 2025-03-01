const mobileMenu = document.getElementById('mobile-menu');
const navbarContainer = document.getElementById('toggleBar');
const body = document.body;

if (mobileMenu && navbarContainer) {
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarContainer.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        if (navbarContainer.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (!navbarContainer.contains(e.target) && !mobileMenu.contains(e.target)) {
            navbarContainer.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            body.style.overflow = '';
        }
    });
}
  
