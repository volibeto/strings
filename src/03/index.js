const texto = "Aprenda programar do zero na Cubos Academy";

function texto2(texto) {
    return texto.toLowerCase().split(' ').join('-');

}

const urlAmigavel = texto2(texto);
console.log(urlAmigavel);