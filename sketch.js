//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis oponente 
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente

let colidiu = false;

//placar
let meusPontos = 0 
let pontosOponente = 0 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("purple");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente()
  incluiPlacar();
  marcaPontos();
}

function mostraBolinha() {
  fill("yellow")
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  fill ("rgb(80,235,80)")
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function  movimentaRaqueteOponente(){
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
}
}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(20)
  fill(255)
  rect(212, 10, 40, 30)
  fill(0)
  text(meusPontos, 230, 30)
  
  fill(255)
  rect(300, 10, 40, 30)
  fill(0)
  text(pontosOponente, 310, 30)
  
}

function marcaPontos(){
  if(xBolinha > 590){
    meusPontos += 1
  }
  if(xBolinha < 11){
    pontosOponente += 1
  }
  
  
}