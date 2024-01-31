const botaoPlayPause = document.getElementById("play-pause"); // informações desse id
const audioCapitulo = document.getElementById("audio-capitulo")
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");
const numeroCapitulos = 10;  /* criando variavel*/

let taTocando = 0;
let capituloAtual = 1;
     
function tocarFaixa() {
    audioCapitulo.play(); //botar essa variavel para tocar
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar(){
    if (taTocando === 0) { // igual em js
        tocarFaixa();
        taTocando = 1;
    }
    else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1; // volta para o capitulo 1 quando o numero de capitulos for completado
    }
    else {
        capituloAtual ++;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa(); // trocou o audio, ja começa o proximo audio
    taTocando = 1; // para iniciar a musica
    trocarNomeFaixa();// Para alterar o nome do capitulo
}

function voltarFaixa(){
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos; // ultimo capitulo disponivel
    }
    else {
        capituloAtual --;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa(); // trocou o audio, ja começa o proximo audio
    taTocando = 1; // para iniciar a musica
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
