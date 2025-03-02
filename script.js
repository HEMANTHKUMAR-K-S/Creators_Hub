const mobileMenu = document.getElementById('mobile-menu');
const navbarContainer = document.getElementById('toggleBar');
const body = document.body;

// Create the close icon element
const closeIcon = document.createElement('span');
closeIcon.id = 'close-icon';
closeIcon.innerHTML = '&times;'; // HTML entity for '×'
closeIcon.style.display = 'none'; // Initially hidden
navbarContainer.appendChild(closeIcon);

if (mobileMenu && navbarContainer) {
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarContainer.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        closeIcon.style.display = navbarContainer.classList.contains('active') ? 'block' : 'none';
        if (navbarContainer.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    closeIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarContainer.classList.remove('active');
        mobileMenu.classList.remove('is-active');
        closeIcon.style.display = 'none';
        body.style.overflow = '';
    });

    document.addEventListener('click', (e) => {
        if (!navbarContainer.contains(e.target) && !mobileMenu.contains(e.target)) {
            navbarContainer.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            closeIcon.style.display = 'none';
            body.style.overflow = '';
        }
    });

    window.addEventListener('beforeunload', () => {
        navbarContainer.classList.remove('active');
        mobileMenu.classList.remove('is-active');
        closeIcon.style.display = 'none';
        body.style.overflow = '';
    });
}


// theme
