const h1 = document.createElement('h1');
const corpo = document.body;
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
corpo.appendChild(h1);

// Implementando segundo requisito

const paleta = document.createElement('div');
paleta.id = 'color-palette';
paleta.style.display = 'flex';
corpo.appendChild(paleta);
function criaMiniPaletas() {
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.border = '1px solid black';
    paleta.appendChild(div);
  }
}
criaMiniPaletas()

let paleta1 = document.getElementsByClassName('color')[0];
paleta1.style.backgroundColor = 'black';
let paleta2 = document.getElementsByClassName('color')[1];
paleta2.style.backgroundColor = 'red';
let paleta3 = document.getElementsByClassName('color')[2];
paleta3.style.backgroundColor = 'blue';
let paleta4 = document.getElementsByClassName('color')[3];
paleta4.style.backgroundColor = 'green';
