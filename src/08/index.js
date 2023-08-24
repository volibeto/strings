const cpf = "011.022.033-44";

function removerPontuacao(cpf) {
    const numeros = cpf.split('').filter((char) => /\d/.test(char)).join('');
    console.log(numeros);
}

removerPontuacao(cpf); 
