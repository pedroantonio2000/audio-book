const audio = document.querySelector('#audio-faixa');
const tocarOuPausar = document.querySelector('#tocar-pausar');
const voltar = document.querySelector('#voltar');
const proximo = document.querySelector('#proximo');
const nomeDoCapitulo = document.querySelector('.capitulo');

let taTocando = false;
let capitulo = 1;

tocarOuPausar.addEventListener('click', tocarOuPausarFaixa);
proximo.addEventListener('click', proximaFaixa);
voltar.addEventListener('click', voltarFaixa);



function tocarOuPausarFaixa() {
    if(taTocando === false) {
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

function tocarFaixa() {
    audio.play();
    tocarOuPausar.classList.remove('bi-play-circle-fill');
    tocarOuPausar.classList.add('bi-pause-circle-fill');
    taTocando = true;
    
}


function pausarFaixa() {
    audio.pause();
    tocarOuPausar.classList.add('bi-play-circle-fill');
    tocarOuPausar.classList.remove('bi-pause-circle-fill');
    taTocando = false;
    
}

function proximaFaixa() {
    if(capitulo === 10) {
        capitulo = 0;
    }
    capitulo += 1;
    audio.src = './audio/' + capitulo + '.mp3';
    nomeDoCapitulo.textContent = 'Capitulo ' + capitulo;
    tocarFaixa();
    
}

function voltarFaixa() {
    if(capitulo === 1) {
        capitulo = 11;
    }
    capitulo -= 1;
    audio.src = './audio/' + capitulo + '.mp3';
    nomeDoCapitulo.textContent = 'Capitulo ' + capitulo;
    tocarFaixa();
    
}