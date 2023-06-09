const corpo = document.body;

// Primeira Questão
function createH1() {
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  h1.style.textAlign = 'center';
  corpo.appendChild(h1);
}
createH1();

// Segunda e Terceira Questões
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
criaMiniPaletas();

const paletaBlack = document.getElementsByClassName('color')[0];
paletaBlack.style.backgroundColor = 'black';
const paleta2 = document.getElementsByClassName('color')[1];
paleta2.style.backgroundColor = 'red';
const paleta3 = document.getElementsByClassName('color')[2];
paleta3.style.backgroundColor = 'blue';
const paleta4 = document.getElementsByClassName('color')[3];
paleta4.style.backgroundColor = 'green';
const paletasGeral = document.getElementsByClassName('color');

// Quarta questão

const botao = document.createElement('button');
botao.id = 'button-random-color';
botao.className = 'btn btn-primary';
botao.innerText = 'Cores aleatórias';
paleta.appendChild(botao);
botao.addEventListener('click', () => {
  const arrayDeCores = [];
  for (let index = 1; index < paletasGeral.length; index += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    paletasGeral[index].style.backgroundColor = `rgb(${red},${green},${blue})`;
    arrayDeCores.push(paletasGeral[index].style.backgroundColor);
  }
  // QUINTA QUESTÃO - PRIMEIRA PARTE - SALVANDO NO LOCAL STORAGE AS CORES ALEATÓRIAS
  localStorage.setItem('colorPalette', JSON.stringify(arrayDeCores));
});

// DÉCIMA PRIMEIRA QUESTÃO INSERIDA EM CIMA PARA FORÇAR O BOTÃO A SER INSERIDO APÓS A PALETA
const section = document.createElement('section');
section.id = 'list-buttons';
corpo.appendChild(section);
const botao2 = document.createElement('button');
botao2.id = 'clear-board';
botao2.className = 'btn btn-warning';
botao2.innerText = 'Limpar';
section.appendChild(botao2);

botao2.addEventListener('click', () => {
  const miniPixels = quadro.children;
  for (let index = 0; index < miniPixels.length; index += 1) {
    miniPixels[index].style.backgroundColor = 'white';
  }
});
const salvadoraDeScript = document.createElement('div');
salvadoraDeScript.id = 'maeDosDragoes';
corpo.appendChild(salvadoraDeScript);

// SEXTA QUESTÃO + SÉTIMA QUESTÃO: QUADRADOS DE PIXEL
let quadro = document.createElement('div');
function criaQuadro(resolucao) {
  quadro.id = 'pixel-board';
  quadro.style.width = `${resolucao * 42}px`;
  quadro.style.height = `${resolucao * 42} px`;
  quadro.style.margin = '50px';
  salvadoraDeScript.appendChild(quadro);
}
criaQuadro(5);

function criaPixels(resolucao) {
  for (let index = 0; index < resolucao * resolucao; index += 1) {
    const miniPixels = document.createElement('div');
    miniPixels.className = 'pixel';
    miniPixels.style.backgroundColor = 'white';
    miniPixels.style.display = 'inline-block';
    miniPixels.style.width = '40px';
    miniPixels.style.height = '40px',
    miniPixels.style.border = '1px solid black';
    miniPixels.id = index;
    quadro.appendChild(miniPixels);
  }
}
criaPixels(5);

// OITAVA QUESTÃO E NONA QUESTÃO
paletaBlack.className += ' selected';

paleta.addEventListener('click', (evento) => {
  const paletaSelecionada = evento.target;
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  paletaSelecionada.className += ' selected';
});

// DÉCIMA QUESTÃO

const positionColor = [];

quadro.addEventListener('click', select);

function select(evento) {
  const corSelecionada = document.querySelector('.selected').style.backgroundColor;
  const pequenoPixel = evento.target;
  pequenoPixel.style.backgroundColor = corSelecionada;
  // DÉCIMA SEGUNDA QUESTÃO PRIMEIRA PARTE / salvando no localstorage
  const objetoDeCores = {
  };
  objetoDeCores[pequenoPixel.id] = corSelecionada; // forma encontrada para adicionar o número como chave. Jogar direto no objeto não funciona
  positionColor.push(objetoDeCores);
  pequenoPixel.style.backgroundColor = corSelecionada;
  localStorage.setItem('pixelBoard', JSON.stringify(positionColor));
}

// QUESTÃO TREZE

function reset() {
  quadro.remove();
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].remove();
  }
}

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
const botaoInput = document.createElement('button');
botaoInput.id = 'generate-board';
botaoInput.className = 'btn btn-success';
botaoInput.innerText = 'Aplicar';
section.appendChild(input);
section.appendChild(botaoInput);

botaoInput.addEventListener('click', () => {
  resolucao = input.value;
  if (resolucao === '') {
    window.alert('Board Inválido!');
    localStorage.clear();
    reset();
    quadro = document.createElement('div');
    criaQuadro(resolucao);
    criaPixels(5);
  } else if (resolucao < 5) {
    resolucao = 5;
    reset();
    quadro = document.createElement('div');
    criaQuadro(resolucao);
    criaPixels(resolucao);
  } else if (resolucao > 50) {
    reset();
    resolucao = 50;
    quadro = document.createElement('div');
    criaQuadro(resolucao);
    criaPixels(resolucao);
  } else {
    reset();
    quadro = document.createElement('div');
    criaQuadro(resolucao);
    criaPixels(resolucao);
  }
  localStorage.setItem('boardSize', JSON.stringify(resolucao));
  quadro.addEventListener('click', select);
});
// QUINTA QUESTÃO SEGUNDA PARTE: RECUPERANDO AS INFORMAÇÕES SALVAS APÓS RECARREGAR A PÁGINA

quadro.addEventListener('click', select);

const arrayDeInformacoes = JSON.parse(localStorage.getItem('colorPalette')) || [];
if (arrayDeInformacoes !== []) {
  for (let index = 0; index < arrayDeInformacoes.length; index += 1) {
    paletasGeral[index + 1].style.backgroundColor = arrayDeInformacoes[index];
  }
} else {
  paletaBlack = document.getElementsByClassName('color')[0];
  paletaBlack.style.backgroundColor = 'black';
  paleta2 = document.getElementsByClassName('color')[1];
  paleta2.style.backgroundColor = 'red';
  paleta3 = document.getElementsByClassName('color')[2];
  paleta3.style.backgroundColor = 'blue';
  paleta4 = document.getElementsByClassName('color')[3];
  paleta4.style.backgroundColor = 'green';
}

// DÉCIMA SEGUNDA QUESTÃO 2A PARTE: TRAZENDO DO LOCAL STORAGE
const paletaSalva = JSON.parse(localStorage.getItem('pixelBoard')) || [];
const miniPixels = quadro.children;
if (paletaSalva !== []) {
  for (let index = 0; index < paletaSalva.length; index += 1) {
    const chave = paletaSalva[index];
    for (const index2 in chave) {
      miniPixels[index2].style.backgroundColor = chave[index2];
    }
  }
}
// DÉCIMA QUINTA É A RESPOSTA, MAS PRECISO REORGANIZAR MEU CÓDIGO
window.onload = function () {
  const param2 = JSON.parse(localStorage.getItem('boardSize')) || [];
  const param3 = parseInt(param2);
  if (isNaN(param3)) {
    console.log('cueca');
  } else {
    reset();
    quadro = document.createElement('div');
    criaQuadro(param3);
    criaPixels(param3);
  }
  quadro.addEventListener('click', select);
};
