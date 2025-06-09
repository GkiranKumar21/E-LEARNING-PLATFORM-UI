const hamburger = document.querySelector('.hamburger')
const menu_bar = document.querySelector('.navbar-menu .nav-links')

// hamburger.addEventListener('click', () => {
//     menu_bar.classList.toggle('show')
// });

document.getElementById('menu').addEventListener('click', function () {
    document.querySelector('.navbar-menu .nav-links').classList.toggle('active');
});

function updateProgress(inputId, barId, errorId) {
    const input = document.getElementById(inputId);
    const bar = document.getElementById(barId);
    const error = document.getElementById(errorId);

    input.addEventListener('input', () => {
        let value = parseInt(input.value);
        if (isNaN(value) || value < 0 || value > 100) {
            error.style.display = 'block';
            bar.style.width = '0%';
            bar.textContent = '0%';
        } else {
            error.style.display = 'none';
            bar.style.width = value + '%';
            bar.textContent = value + '%';
        }
    });
}

updateProgress('html-progress', 'html-bar', 'html-error');
updateProgress('css-progress', 'css-bar', 'css-error');
updateProgress('js-progress', 'js-bar', 'js-error');


function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission (replace with actual backend call)
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }

    return isValid;
}