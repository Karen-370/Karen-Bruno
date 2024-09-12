const numero_surpresa = 7
let y;

do{
    let y= parseFloat(prompt("Digite um número de 1 a 10 até descobrir o número secreto!!!"));
    if(y==numero_surpresa){
        alert("Parábens, você descobriu o número secreto!")
        break;
    }
    else if(y!==numero_surpresa){
        alert("Número errado :( Tente outra vez!")
    }
    y++
}while(y!==numero_surpresa)