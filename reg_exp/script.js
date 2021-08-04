const rx1 = /^'|\B'|'$/g;
st1 = document.querySelector('p').innerText;
if (st1) document.querySelector('p').innerText = st1.replace(rx1, '"');

validate = (input) => {
    if (input.type == 'text') {
        if (!input.value.match(/^[a-z]+$/i) || input.value == '') {
            input.classList.add('invalid');
        }
        else {
            input.classList.remove('invalid');
        }
    }
    else if (input.type == 'tel') {
        if (!input.value.match(/^[+]\d{11}/g) || input.value == '') {
            input.classList.add('invalid');
        }
        else {
            input.classList.remove('invalid');
        }
    }
    else if (input.type == 'email') {
        if (!input.value.match(/^[a-z]+[-.]?[a-z]+@[a-z]+\.[a-z]+/gi) || input.value == '') {
            input.classList.add('invalid');
        }
        else {
            input.classList.remove('invalid');
        }
    }
    else if (input.type == 'message') {
        if (!input.value.match(/.*/i) || input.value == '') {
            input.classList.add('invalid');
        }
        else {
            input.classList.remove('invalid');
        }
    }
}
document.querySelector('.submit_button').addEventListener('click', function (event) {
    let inputs = document.querySelectorAll('.inputs');
    inputs.forEach(input => {
        validate(input);
        if (input.classList.contains('invalid')) {
            event.preventDefault();
        };
    });
});

