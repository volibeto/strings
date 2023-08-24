const celular1 = 7199918888;
const celular2 = 99918888;


function formatarCelular(celular) {
    const celularStr = celular.toString().trim().replace(/\D/g, '')
    const nonoDigito = celularStr.length === 10 ? ' ' : ' 9 ';
    const prefixo = celularStr.slice(-9, -4);
    const sufixo = celularStr.slice(-4);
    return `${celularStr.length === 10 ? `(${celularStr.slice(0, 2)})` : ''}${nonoDigito}${prefixo}-${sufixo}`;
}

console.log(formatarCelular(celular1))
console.log(formatarCelular(celular2))