var atual = new Date()
var hora = atual.getHours()
console.log(`Agora são exatamente ${hora} hora:`)
if (hora < 5) {
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 