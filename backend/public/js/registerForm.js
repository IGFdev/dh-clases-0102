const emailInp = document.querySelector('#email');
const usernameInp = document.querySelector('#username');
const passwordInp = document.querySelector('#password');
const errorsList = document.querySelector('#errors');
const submitBtn = document.querySelector('#submit-btn');


const checkErrors = () => {
    // Agarramos todos los p de error
    let errorsHtml = Array.from(document.querySelectorAll('.error'));

    let errors = [];

    // hacemos un forEach de cada p
    errorsHtml.forEach(error => {
        // Si el p contiene un innerHTML -> si existe un error
        if (error.innerHTML !== ''){
            // Si existe error, lo pusheamos a nuestro array de errores
            errors.push(error.innerHTML);
        }
    });

    if(errors.length > 0) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}

emailInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    const isEmailCorrect = e.target.value.includes('@') && e.target.value.includes('.');

    /* if(length === 0 && errors.findIndex(el => el.msg === 'El mail es obligatorio') === -1){
        errors.push({field: 'email', msg: 'El mail es obligatorio'});
    } else if( errors.findIndex(el => el.msg === 'El mail es obligatorio') !== -1 ) {
        delete errors[errors.findIndex(el => el.msg === 'El mail es obligatorio')];
    }

    if(!isEmailCorrect && errors.findIndex(el => el.msg === 'El mail es inválido') === -1){
        errors.push({field: 'email', msg: 'El mail es inválido'});
    }else if( errors.findIndex(el => el.msg === 'El mail es inválido') !== -1 ) {
        delete errors[errors.findIndex(el => el.msg === 'El mail es inválido')];
    }


    errorsList.innerHTML = '';
    errors.forEach(error => {
        errorsList.innerHTML += `<li>${error.msg}</li>`
    }); */

    if (!isEmailCorrect || length < 6){
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.innerHTML = 'El email es inválido';
    } else {
        e.target.nextElementSibling.innerHTML = '';
    }

    checkErrors();
}

passwordInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    
    if (length < 8){
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
    } else {
        e.target.nextElementSibling.innerHTML = '';
    }

    checkErrors();
}