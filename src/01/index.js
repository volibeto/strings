const comentario = "Esse  é muito perigoso!";

const palavraProibida = comentario.toLocaleLowerCase().includes(`covid`)
const palavraProibida2 = comentario.toLocaleLowerCase().includes(`pandemia`)



if (palavraProibida || palavraProibida2) {
    console.log(`Comentário bloqueado por conter palavras proibidas`)
} else {
    console.log(`Comentário autorizado`)
}
