var palavras = ["pato", "sapo", "lago","pato", "sapo", "lago","pato",
    "sapo", "lago","pato", "sapo", "lago","pato", "sapo", "lago","pato",
    "sapo", "lago","pato", "sapo", "lago","pato", "sapo", "lago","pato", 
    "sapo", "lago","pato", "sapo", "lago","pato", "sapo", "lago","pato", 
    "sapo", "lago","pato", "sapo", "lago","pato", "sapo", "lago","pato", 
    "sapo", "lago","pato", "sapo", "lago"
]

var palavraEscolhida = prompt("Escolha uma palavra entre Pato, Sapo e Lago.࿐*:･ﾟ").toLowerCase();

var contagem = 0

for(var i=0;i<palavras.length;i++){
    if(palavras[i]===palavraEscolhida){
        contagem++
    }
}
alert("A palavra se repete " +contagem+ "vezes.")