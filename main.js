// função responsável por reproduzir os áudios
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {
        if (elemento.localName === 'audio')
        elemento.play()
    }
    elemento.play();
}

// armazena as teclas em uma constante ao invés de usar o querySelector várias vezes
const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // armazena a lista de todas as teclas
    const tecla = listaDeTeclas[contador]
    // armazena dinamicamente cada tecla ao decorrer do looping
    const instrumento = tecla.classList[1];
    // armazena dinamicamente cada som ao decorrer do looping
    const idAudio = `#som_${instrumento}`;

    // reproduz os áudios
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //altera o fundo do botão quando ele é ativado por teclas
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    //retira o fundo do botão quando ele é ativado por teclas
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}