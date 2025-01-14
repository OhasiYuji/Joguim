let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
let tentativas = 10;
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000. Você possui ' + tentativas + ' tentativas.' );

function verificarChute() {

        if (tentativas <= 0) {
            return; // Adiciona um return para parar a execução da função se as tentativas acabaram
        }

        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns, você acertou!');
            exibirTextoNaTela('p', 'O número secreto era ' + numeroSecreto);
        } else if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}. Lhe restam ${tentativas-1} tentativas`);
        } else {
            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}. Lhe resta ${tentativas-1} tentativas`);
        }
        
        tentativas--;

        if (tentativas == 0) {
            exibirTextoNaTela('h1', 'Suas tentativas acabaram!');
            exibirTextoNaTela('p', 'O número secreto era ' + numeroSecreto);
            return;
        }
        

}

function reiniciarJogo () {
    window.location.reload();
}

function gerarNumero() {
    return parseInt(Math.random() * 1000 + 1);
}