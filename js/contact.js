document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var isValid = true;

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

        isValid &= validateField(lastName, "Le nom de famille est obligatoire.");
        isValid &= validateField(firstName, "Le prénom est obligatoire.");
        isValid &= validateEmailField(email, "L'adresse électronique est obligatoire.", "L'adresse électronique n'est pas valide.");
        isValid &= validateField(phone, "Le # de téléphone est obligatoire.");
        isValid &= validateField(address, "L'adresse est obligatoire.");
        isValid &= validateField(city, "La ville est obligatoire.");
        isValid &= validateField(state, "L'état/province est obligatoire.");
        isValid &= validateField(zip, "Le code postal est obligatoire.");
        isValid &= validateField(message, "Le message est obligatoire.");

        if (isValid) {
            window.location.href = 'confirmation.html';
        }
    });

    function validateField(input, emptyMsg) {
        if (!input.value.trim()) {
            showError(input, emptyMsg);
            return false;
        } else {
            showSuccess(input);
            return true;
        }
    }

    function validateEmailField(input, emptyMsg, invalidMsg) {
        if (!input.value.trim()) {
            showError(input, emptyMsg);
            return false;
        } else if (!validateEmail(input.value)) {
            showError(input, invalidMsg);
            return false;
        } else {
            showSuccess(input);
            return true;
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
        input.classList.remove('error');
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
            input.style.borderColor = 'initial';
        });
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});