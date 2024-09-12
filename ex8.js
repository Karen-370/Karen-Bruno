function encontrarmedia(vetor){
    let soma=0
    for(let i=0; i<vetor.length; i++){
        soma += vetor [i]
    }
    let media = soma / vetor.length
    return media
}

function novovetor(_quantidadeitens){
    let vetor = Array()
    for(let pq=0; pq < _quantidadeitens; pq++){
        vetor[pq] = parseInt(prompt("Insira os valores para a média: "))
    }
    return vetor;
}
var q = parseInt(prompt("Insira a quantia de valores desejados: "));
const array = novovetor(q);
alert(encontrarmedia(array));