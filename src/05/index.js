const numeroCartao = '1111222233334444';


const cartaoFormatado = numeroCartao.replace(/(\d{4})(\d{8})(\d{4})/, '$1********$3');


console.log(cartaoFormatado);
