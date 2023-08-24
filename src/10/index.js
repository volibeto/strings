const nomeArquivo = 'Foto da Familia.jpg';


function validarArquivoPermitido(nomeArquivo) {
    const extensao = nomeArquivo.split('.').pop().toLowerCase();
    const extensoesPermitidas = ['jpg', 'jpeg', 'gif', 'png'];
    return extensoesPermitidas.includes(extensao);
}

const arquivoPermitido = validarArquivoPermitido(nomeArquivo);

if (arquivoPermitido) {
    console.log('Arquivo permitido!');
} else {
    console.log('Arquivo não permitido!');
}
