if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
            console.log('Service worker registered.', reg);
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainContent = document.querySelector('.main-content-section');

    menuButton.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        mobileMenu.classList.toggle('hidden');
        mainContent.classList.toggle('mt-40');
    });

    const closeButton = document.getElementById('close-menu');
    closeButton.addEventListener('click', function () {
        this.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        mainContent.classList.remove('mt-40');
    });
});