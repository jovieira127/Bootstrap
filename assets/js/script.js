let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let emailOk = false;
let assuntoOk = false;

function validaEmail() {
    let txtEmail = document.querySelector("#txt-email");

    if (email.value.indexOf('@') === -1 || email.value.indexOf(".") === -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = 'red';
        emailOk = false;
    } else {
        txtEmail.innerHTML = "";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txt-assunto");

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = 'block';
        assuntoOk = false;
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function validarFormulario() {
    if (emailOk === true && assuntoOk === true) {
        alert("Formulário válido!")
    } else {
        alert("Formulário inválido!");
    }
}
