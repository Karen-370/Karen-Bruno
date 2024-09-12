var numero = parseFloat(prompt("Digite um número: "));

if (numero >= 0 && numero <= 12) {
    alert("Tem " + numero + " anos, é criança.");
} 

else if (numero >= 13 && numero <= 17) {
    alert("Tem " + numero + " anos, é adolescente.");
}

else if (numero >= 18 && numero <= 64) {
    alert("Tem " + numero + " anos, é adulto.");
}

else if (numero >= 65) {
    alert("Tem " + numero + " anos, é idoso.");
}