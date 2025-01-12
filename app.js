alert('Boas vindas ao nosso site!')
let numeroSecreto = parseInt(Math.random() * 1000 + 1)
let chute
let tentativas = 0

console.log('numeroSecreto')

while (chute != numeroSecreto) {

    let i = tentativas++
    let tentativasRestantes = 10 - i
    chute = prompt(`Escolha um número de 1 a 1000. Você possui ${tentativasRestantes} tentativas restantes!`)

    if (chute == numeroSecreto) {
        alert('Você acertou! O número secreto é: ' + numeroSecreto)
        alert('Obrigado por jogar!')
    } 
    else if (chute > numeroSecreto) {
        alert('O número secreto é menor que ' + chute)
    } else {
        alert('O número secreto é maior que ' + chute)
    }  

    if (tentativasRestantes == 0) {
        alert('Suas tentativas acabaram! O número secreto era: ' + numeroSecreto)
        break;
    }
}

location.reload() // This will reload the page

