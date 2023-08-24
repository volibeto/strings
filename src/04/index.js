let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let array = nome.split(" ");
let nomeFormatado = '';

for (const nome of array) {
    let primeiraLetra = nome.slice(0, 1);
    let restanteDoNome = nome.slice(1);

    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restanteDoNome + " ";
}



console.log(identificador = identificador.padStart(6, '0'));
console.log(nomeFormatado);
console.log(email.trim());

