const h1 = document.createElement('h1');
const corpo = document.body;
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
corpo.appendChild(h1);

// Implementando segundo e terceiro requisitos

const paleta = document.createElement('div');
paleta.id = 'color-palette';
paleta.style.display = 'flex';
corpo.appendChild(paleta);
function criaMiniPaletas() {
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.border = '1px solid black';
    div.style.borderRadius = '50%';
    div.style.width = '80px';
    div.style.height = '80px';
    paleta.appendChild(div);
  }
}
criaMiniPaletas()

let paletaBlack = document.getElementsByClassName('color')[0];
paletaBlack.style.backgroundColor = 'black';
let paletasGeral = document.getElementsByClassName('color');
let paleta2 = document.getElementsByClassName('color')[1];
paleta2.style.backgroundColor = 'red';
let paleta3 = document.getElementsByClassName('color')[2];
paleta3.style.backgroundColor = 'blue';
let paleta4 = document.getElementsByClassName('color')[3];
paleta4.style.backgroundColor = 'green';

// Implementando o quarto requisito e o quinto 1a parte

const botao = document.createElement('button');
botao.id = 'button-random-color';
botao.innerText = 'Cores aleatórias';
paleta.appendChild(botao);

botao.addEventListener('click', function () {
  let arrayDeCores = [];
  for (let index = 1; index < paletasGeral.length; index += 1) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    paletasGeral[index].style.backgroundColor = `rgb(${red},${green},${blue})`
    arrayDeCores.push(paletasGeral[index].style.backgroundColor)
  }

localStorage.setItem('colorPalette', JSON.stringify(arrayDeCores))

})

// Implementando o quinto requisito 2a parte

window.onload = inicializando

function inicializando() {
  let arrayDeInformacoes = JSON.parse(localStorage.getItem('colorPalette')) || [];
  if (arrayDeInformacoes !== []) {
   for (let index = 0; index < arrayDeInformacoes.length; index += 1) {
    paletasGeral[index + 1].style.backgroundColor = arrayDeInformacoes[index];
}
}
else{
    paletaBlack = document.getElementsByClassName('color')[0];
    paletaBlack.style.backgroundColor = 'black';
    paleta2 = document.getElementsByClassName('color')[1];
    paleta2.style.backgroundColor = 'red';
    paleta3 = document.getElementsByClassName('color')[2];
    paleta3.style.backgroundColor = 'blue';
    paleta4 = document.getElementsByClassName('color')[3];
    paleta4.style.backgroundColor = 'green';
}
// continuação da solução da 12a questão
let paletaSalva = JSON.parse(localStorage.getItem('pixelBoard')) || [];
let miniPixels = quadro.children;

// lá vai a loucura. Organizar!!! complexidade que pode não ser compreendida depois
if (paletaSalva !== []){
  for(let index = 0; index < paletaSalva.length; index += 1){
        let chave = paletaSalva[index]
        console.log(chave)
      for(let index2 in chave){
        console.log(index2)
        miniPixels[index2].style.backgroundColor = chave[index2]
      }
      }
    }
}

// Implementando solução do décimo primeiro requisito

const botao2 = document.createElement('button');
botao2.id = 'clear-board';
botao2.innerText = 'Limpar';
corpo.appendChild(botao2);

botao2.addEventListener('click', function(){
  let miniPixels = quadro.children;
  for( let index = 0; index < miniPixels.length; index += 1){
    miniPixels[index].style.backgroundColor = 'white';
  }
})

// Implementando resolução do 6o e 7o requisito

let quadro = document.createElement('div');
quadro.id = 'pixel-board';
quadro.style.width = '210px';
quadro.style.height = '210px';
quadro.style.margin = '50px';
corpo.appendChild(quadro);


function criaPixels() {
  for(let index = 0; index < 25; index += 1){
    let miniPixels = document.createElement('div');
    miniPixels.className = 'pixel'
    miniPixels.style.backgroundColor = 'white';
    miniPixels.style.display = 'inline-block';
    miniPixels.style.width = '40px';
    miniPixels.style.height = '40px',
    miniPixels.style.border = '1px solid black';
    miniPixels.id = index
    quadro.appendChild(miniPixels)
  }
}
criaPixels()

// Implementando solução do oitavo e nono requisitos
paletaBlack.className += ' selected';

paleta.addEventListener('click', function (evento) {
  let paletaSelecionada = evento.target;
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  paletaSelecionada.className += ' selected'
})

// Implementado solução do décimo requisito e do décimo primeiro requisito parte de salvar dados no local storage
let positionColor = [];
quadro.addEventListener('click', function (evento) {
  let corSelecionada = document.querySelector('.selected').style.backgroundColor;
  let pequenoPixel = evento.target;
  let objetoDeCores = {
 
  }
  objetoDeCores[pequenoPixel.id] = corSelecionada; // forma encontrada para adicionar o número como chave. Jogar direto no objeto não funciona
  positionColor.push(objetoDeCores);
  pequenoPixel.style.backgroundColor = corSelecionada
  localStorage.setItem('pixelBoard', JSON.stringify(positionColor))
})

