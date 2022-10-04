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

// Implementando o quarto requisito

const botao = document.createElement('button');
botao.id = 'button-random-color';
botao.innerText = 'Cores aleatórias';
corpo.appendChild(botao);

botao.addEventListener('click', function () {
  for (let index = 1; index < paletasGeral.length; index += 1) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    paletasGeral[index].style.backgroundColor = `rgb(${red},${green},${blue})`
  }
})