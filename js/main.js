// Shared code for all pages: price format, form checking, smooth scroll

// 1490 -> "1 490 ₸"
function formatPrice(number) {
    return number.toLocaleString('ru-RU') + ' ₸';
}

// Shows an error under the field (Bootstrap shows .invalid-feedback when the field has .is-invalid)
function showError(field, message) {
    field.classList.add('is-invalid');
    field.parentElement.querySelector('.invalid-feedback').textContent = message;
}

function clearError(field) {
    field.classList.remove('is-invalid');
}

// Checks one field: getError returns the error text or '' when the field is correct
function checkField(field, getError) {
    const message = getError(field);
    if (message) {
        showError(field, message);
        return false;
    }
    clearError(field);
    return true;
}

// Connects a form to its own checks.
// getError(field) - the rules of this form, onSuccess() - what happens after a correct submit
// (onSuccess can return false: then the form is not cleared)
function setupForm(form, getError, onSuccess) {
    const fields = form.querySelectorAll('input, select, textarea');

    // the error disappears as soon as the field is corrected
    fields.forEach(function (field) {
        field.addEventListener('input', function () {
            if (field.classList.contains('is-invalid')) {
                checkField(field, getError);
            }
        });
        field.addEventListener('change', function () {
            if (field.classList.contains('is-invalid')) {
                checkField(field, getError);
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // no page reload

        let allCorrect = true;
        fields.forEach(function (field) {
            if (!checkField(field, getError)) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            if (onSuccess() !== false) {
                form.reset();
            }
        } else {
            form.querySelector('.is-invalid').focus(); // go to the first wrong field
        }
    });
}

// Email and Kazakh phone rules, used by several forms
function isEmail(text) {
    return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(text);
}

function isPhone(text) {
    const digits = text.replace(/[\s()-]/g, ''); // "+7 701 234 56 78" -> "+77012345678"
    return /^(\+7|8)7\d{9}$/.test(digits);
}

// jQuery: smooth scroll for links with the class js-scroll
$('.js-scroll').on('click', function (event) {
    event.preventDefault();
    const target = $($(this).attr('href'));
    $('html, body').stop().animate({ scrollTop: target.offset().top - 16 }, 600);
});
