const nome = 'Guido Cerqueira';


function gerarNickname(nome) {
    const nickname = '@' + nome.toLowerCase().replace(/\s/g, '').substring(0, 13);
    console.log(nickname);
}

gerarNickname(nome);