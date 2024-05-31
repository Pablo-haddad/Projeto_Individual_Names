// variaveis
let musicas = [
    {titulo:'Interlúdio' , artista:'AGADÊ' , src:'musicas/AGADÊ - _NAMES_ (Interlúdio) (320).mp3'
    , img:'names_logo.png'},
    {titulo:'Beatriz' , artista:'AGADÊ' , src:'musicas/AGADÊ - _BEATRIZ_ (ft. NYNA) (prod. AVICENA) (320).mp3'
    , img:'names_logo.png'},
    {titulo:'Melissa' , artista:'AGADÊ' , src:'musicas/AGADÊ - _MELISSA_ (prod. AVICENA) (320).mp3'
    , img:'names_logo.png'},
    {titulo:'Maria' , artista:'AGADÊ' , src:'musicas/AGADÊ - _MARIA_ (ft. $OMAH) (prod. AVICENA) (320).mp3'
    , img:'names_logo.png'},
    {titulo:'Lorena' , artista:'AGADÊ' , src:'musicas/AGADÊ - _LORENA_ (prod. AVICENA) (320).mp3'
    , img:'names_logo.png'},
    {titulo:'Guilherme' , artista:'AGADÊ' , src:'musicas/AGADÊ - _GUILHERME_  (prod. AVICENA) (320).mp3'
    , img:'names_logo.png'}


]


let  contadorMusica = 0;




let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim')
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(contadorMusica);

// Enventos dos botões
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);


document.querySelector('.voltar').addEventListener('click',/*função anonimo*/()=> {
    contadorMusica -=1
    if(contadorMusica < 0){
        contadorMusica = 5
    }
    renderizarMusica(contadorMusica);
});

document.querySelector('.next').addEventListener('click',/*função anonimo*/()=> {
    contadorMusica += 1
    if(contadorMusica > 5){
        contadorMusica = 0
    }
    renderizarMusica(contadorMusica);
});
// funções
function renderizarMusica(contador){
    musica.setAttribute('src' , musicas[contador].src);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[contador].titulo;
        duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration));
    });
}
function tocarMusica(){
    musica.play()

    document.querySelector('.pause').style.display = 'block';

    document.querySelector('.play').style.display = 'none'
    
}
function pausarMusica(){
     musica.pause()

    document.querySelector('.pause').style.display = 'none';

    document.querySelector('.play').style.display = 'block'

}
function atualizarBarra(){
    let barra = document.querySelector('.duracao progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempoDecorrido = document.querySelector('.inicio');

    tempoDecorrido.textContent = segundosMinutos(Math.floor(musica.currentTime))
}
function segundosMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}
