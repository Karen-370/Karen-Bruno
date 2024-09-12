var n = []

for(let number=0;number<5;number++){
    n[number] = prompt("Digite cinco números inteiros: ")
}

n.sort(function(_a,_b){
    return _a,_b
})
alert("O menor número é"+n[0]+"e o maior número é"+n[4])
