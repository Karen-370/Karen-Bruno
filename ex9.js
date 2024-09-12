function filtrodenumeros(vetor,valordecorte)
{
    let novovetor = Array()
    for (let i=0; i<vetor.length; i++){
        if (vetor[i]>valordecorte){
            novovetor.push(vetor[i])
        }
    }
    return novovetor;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let valordecorte = parseInt(prompt("Insira um número e veja quias são maiores do que ele!"))
    let resultado = filtrodenumeros(numeros, valordecorte)
    alert("Os números maiores que " +valordecorte+ "são" +resultado)