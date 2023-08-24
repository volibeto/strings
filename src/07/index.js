
function validarEmail(email) {

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    }
    if (email.startsWith('.') || email.endsWith('.')) {
        return false;
    }
    if (email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
        return false;
    }
    if (email.lastIndexOf('.') < email.indexOf('@') || email.lastIndexOf('.') === email.length - 1) {
        return false;
    }
    return true;
}

console.log(validarEmail('aluno@cubos.academy')); // true
