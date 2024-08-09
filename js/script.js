const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-menu');

menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});






document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var firstName = document.getElementById('firstName');
        var lastName = document.getElementById('lastName');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var address = document.getElementById('address');
        var city = document.getElementById('city');
        var state = document.getElementById('state');
        var zip = document.getElementById('zip');
        var message = document.getElementById('message');

        clearContactFormErrors(); 

        validateField(lastName, "Le nom de famille est obligatoire.");
        validateField(firstName, "Le prénom est obligatoire.");
        validateEmailField(email, "L'adresse électronique est obligatoire.", "L'adresse électronique n'est pas valide.");
        validateField(phone, "Le # de téléphone est obligatoire.");
        validateField(address, "L'adresse est obligatoire.");
        validateField(city, "La ville est obligatoire.");
        validateField(state, "L'état/province est obligatoire.");
        validateField(zip, "Le code postal est obligatoire.");
        validateField(message, "Le message est obligatoire.");
    });

    function validateField(input, emptyMsg) {
        if (!input.value.trim()) {
            showError(input, emptyMsg);
        } else {
            showSuccess(input);
        }
    }

    function validateEmailField(input, emptyMsg, invalidMsg) {
        if (!input.value.trim()) {
            showError(input, emptyMsg);
        } else if (!validateEmail(input.value)) {
            showError(input, invalidMsg);
        } else {
            showSuccess(input);
        }
    }

    function showError(input, message) {
        const container = input.parentElement;
        const error = container.querySelector('.error-message') || document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        container.appendChild(error);
        input.classList.add('error');
        input.style.borderColor = 'red';
    }

    function showSuccess(input) {
        input.style.borderColor = 'green';
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    function clearContactFormErrors() {
        const form = document.getElementById('contact-form');
        clearErrors(form);
    }

    function clearErrors(container) {
        const errors = container.querySelectorAll('.error-message');
        errors.forEach(function (error) {
            error.remove();
        });
        const inputs = container.querySelectorAll('input.error, textarea.error');
        inputs.forEach(function (input) {
            input.classList.remove('error');
            input.style.borderColor = 'gray';
        });
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});
