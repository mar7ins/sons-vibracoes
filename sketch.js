var tela = 1;
var largura = 180;
var altura = 50;
var xMenu = 310;
var yMenu1 = 206;
var yMenu2 = 268;
var yMenu3 = 336;
let img;
let bgp1 = [];
var selecionaTela;

//HEAD
let vidas = 3;
let pontos = 0;
let nivel = 1;

// CONTAGEM

let contReg = [];
let animaNum;

let rate = 30;
let cont = 0;

let sLeao, sIena, sElefante, sTarol, sSanfona, sHarpa, win, cicloSemFim;

//VAR ALTERNATIVAS 
let animal = [];

var animal0;
var animal1;
var animal2;

let alteraBg;
let contNivel = 1;
var onca, leao, tigre, errou, erro;

 //CARREGAR IMAGENS

function preload() {
  //SONS E IMAGENS
  soundFormats('mp3', 'ogg');
  sLeao = loadSound('sons/1leao.mp3');
  sIena = loadSound('sons/2-iena.mp3');
  sElefante = loadSound('sons/3-elefante.mp3');
  sTarol = loadSound('sons/6-tarol.mp3');
  sSanfona = loadSound('sons/9-sanfona.mp3');
  sHarpa = loadSound('sons/8-harpa.mp3');
  cicloSemFim = loadSound('sons/ciclosemfim.mp3');
  
  erro = loadSound('sons/erro.mp3');
  win = loadSound('sons/win.mp3');

  img = loadImage('bg1.png');
  
  for (b = 0; b < 18; b++) {
    animal[b] = loadImage("alt/ANIMAL_" + b + ".png");
  }

  for (i = 0; i < 12; i++) {
    bgp1[i] = loadImage("bgp/bgp" + i + ".png");
  }
  // CONTAGEM
  for (a = 0; a < 67; a++) {
    contReg[a] = loadImage("num/reg_" + a + ".png");
  }

}

function setup() {
  frameRate(rate);
  createCanvas(800, 600);  
  if(tela === 1){
  cicloSemFim.play();
  }
}

function draw() {  
  imageMode(CENTER);

  textStyle(NORMAL);

  // #### CONDIÇÕES DE MUDANÇA DE TELAS ####

  if (tela == 1) {
    menu();    
  } else if (tela == 2) {
    preLoad();
  } else if (tela == 3) {
    informacoes();
  } else if (tela == 4) {
    creditos();
  } else if (tela == 5) {
    contagem();
  } else if (tela == 6) {
    jogo();
  } else if (tela == 7) {    
    fimJogo(selecionaTela);
  }
   
    // MENU DO JOGO
  function menu() {
    //BG   
    image(img, 400, 300);
    
    // MENU INICIAR JOGO

    textAlign(CENTER);
    textSize(26);
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
      c = color('hsba(160, 0%, 0%, 0.2)');
      strokeWeight(2);
      stroke(255, 199, 66);
      fill(c);
      rect(xMenu, yMenu1, largura, altura, 15);

      if (mouseIsPressed) {      
        tela = 2;

      }
    }

    fill(240);
    noStroke();
    text("Iniciar", 400, 240);

    //MENU INFORMAÇÕES

    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
      c = color('hsba(160, 0%, 0%, 0.2)');
      strokeWeight(2);
      stroke(255, 199, 66);
      fill(c);
      rect(xMenu, yMenu2, largura, altura, 15);

      if (mouseIsPressed) {
        tela = 3;
        alteraBg = 10;
      }
    }

    fill(240);
    noStroke();
    text("Informações", 400, 300);

    //MENU DETALHES

    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
      c = color('hsba(160, 0%, 0%, 0.2)');
      strokeWeight(2);
      stroke(255, 199, 66);
      fill(c);
      rect(xMenu, yMenu3, largura, altura, 15);

      if (mouseIsPressed) {
        tela = 4;
        alteraBg = 11;
      }
    }

    fill(240);
    noStroke();
    text("Créditos", 400, 370);

  }
  // ANTES DO JOGO

  function preLoad() {
    //BG
    imageMode(CENTER);
    image(bgp1[1], 400, 300);

    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
      c = color('hsba(160, 0%, 0%, 0)');
      strokeWeight(2);
      stroke(255, 199, 66);
      fill(c);
      rect(xMenu, 336, largura, altura, 15);

      if (mouseIsPressed) {
        tela = 5;
      }
    }
  }
  //CONTAGEM 3 2 1
  function contagem() {
    image(bgp1[2], 400, 300);

    animaNum = contReg[cont];
    cont++;

    if (cont < 67) {
      imageMode(CENTER);
      image(animaNum, 400, 300);
    } else {
      tela = 6;
      cicloSemFim.pause();
      sLeao.play();
    }
  } 
}

  //TELA VC VENCEU/PERDEU
  function fimJogo(a) {
    if(a === 1){
    image(bgp1[alteraBg], 400, 300);
    fill(19,102,222);
    textSize(26);
    text(pontos, 360, 288);
      
    } else if(a === 2){
      
    image(bgp1[alteraBg], 400, 300);
    fill(19,102,222);
    textSize(26);    
    }
  }
  //TELA INFORMAÇÕES
  function informacoes(){    
    image(bgp1[alteraBg], 400, 300);    
  }
  //TELA CRÉDITOS
  function creditos(){
    image(bgp1[alteraBg], 400, 300);
  }

// FUNÇÃO CLICAR NAS OPÇÕES
function mouseClicked() {
  //RESPOSTAS TELA 1
  
  //INFORMAÇÕES - CLIQUE VOLTAR PARA MENU
  if(dist(80,560,mouseX, mouseY) < 130 && alteraBg === 10){
    tela = 1;
  }
  
  //CRÉDITOS - CLIQUE VOLTAR PARA MENU 
  if(dist(80,560,mouseX, mouseY) < 130 && alteraBg === 11){
    tela = 1;
  }
  
  //CLIQUE TELA DO VENCEDOR
if(dist(230,480,mouseX, mouseY) < 120 && (alteraBg === 9 || alteraBg === 8)){    
    tela = 1;
    vidas = 3;
    pontos = 0;
    nivel = 1;
    contNivel = 1;     
  }
  
  //CLIQUE LEÃO
if(dist(170, 160, mouseX, mouseY) < 90 && alteraBg === 0){
  
    pontos = +10;
    win.play();
    alert("Parabéns, você acertou!");
    contNivel = 2;
    nivel++;
    sIena.play();
    sLeao.pause();    
        
  //CLIQUE ONÇA
  }else if (dist(400, 160, mouseX, mouseY) < 90 && alteraBg === 0) {   
  
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");    
    
  //CLIQUE TIGRE  
  }else if(dist(630, 160, mouseX, mouseY) < 90 && alteraBg === 0){

    erro.play();
    vidas -= 1;
    alert("Você errou, tente novamente");
    
    // RESPOSTAS TELA 2
    
    //LOBO
  }else if(dist(170, 160, mouseX, mouseY) < 90 && alteraBg === 3){
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 1;
        
  //CLIQUE RAPOSA
  }else if (dist(400, 160, mouseX, mouseY) < 90 && alteraBg === 3) {   
  
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 1;
    
  //CLIQUE IENA  
  }else if(dist(630, 160, mouseX, mouseY) < 90 && alteraBg === 3){
    
    pontos+= 20;
    win.play();
    alert("Parabéns, você acertou!");
    contNivel = 3;
    nivel++;
    sElefante.play();
    sIena.pause();
  
  }
  
   // RESPOSTAS TELA 3
    
    //LOBO
  else if(dist(170, 160, mouseX, mouseY) < 90 && alteraBg === 4){
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -=2;
        
  //CLIQUE RAPOSA
  }else if (dist(400, 160, mouseX, mouseY) < 90 && alteraBg === 4) { 
        
    pontos+= 30;
    win.play();
    alert("Parabéns, você acertou!");
    contNivel = 4;
    nivel++;
    sTarol.play();
    sElefante.pause();
    
  //CLIQUE IENA  
  }else if(dist(630, 160, mouseX, mouseY) < 90 && alteraBg === 4){
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 2;
      
  }
  
     // RESPOSTAS TELA 4
    
    //PANDEIRO
  else if(dist(170, 160, mouseX, mouseY) < 90 && alteraBg === 5){
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 3;
        
  //TAROL
  }else if (dist(400, 160, mouseX, mouseY) < 90 && alteraBg === 5) {   
    
    pontos+= 40;
    win.play();
    alert("Parabéns, você acertou!");
    contNivel = 5;
    nivel++;
    sSanfona.play();
    sTarol.pause();
    
  //TAMBORIM 
  }else if(dist(630, 160, mouseX, mouseY) < 90 && alteraBg === 5){
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 3;
      
  } 
  // RESPOSTAS TELA 5
    
    //SAFONA
  else if(dist(170, 160, mouseX, mouseY) < 90 && alteraBg === 6){
    
    pontos+= 50;
    win.play();
    alert("Parabéns, você acertou!");
    contNivel = 6;
    nivel++; 
    sHarpa.play();
    sSanfona.pause();
         
  //GAITA
  }else if (dist(400, 160, mouseX, mouseY) < 90 && alteraBg === 6) {   
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 5;
    
  //GAITA DE FOLE 
  }else if(dist(630, 160, mouseX, mouseY) < 90 && alteraBg === 6){
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 5;
      
  }
   // RESPOSTAS TELA 6
    
    //VIOLÃO
  else if(dist(170, 160, mouseX, mouseY) < 90 && alteraBg === 7){
          
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 10;
         
  //GUITARRA
  }else if (dist(400, 160, mouseX, mouseY) < 90 && alteraBg === 7) {   
    
    erro.play();
    vidas-=1; 
    alert("Você errou, tente novamente");
    pontos -= 10;
    
  //HARPA
  }else if(dist(630, 160, mouseX, mouseY) < 90 && alteraBg === 7){
    
    pontos+= 50;
    win.play();
    alert("Parabéns, você acertou!");
    contNivel = 7;
    nivel++; 
    sHarpa.pause();    
  }
}

 //JOGO TELA 06

  function jogo() {   
     
     if(contNivel === 1){
         alteraBg = 0;
         animal0 = 0;
         animal1 = 1;
         animal2 = 2;
     }else if(contNivel === 2){
         alteraBg = 3;
         animal0 = 3;
         animal1 = 4;
         animal2 = 5;
         //tela = 6;
     }else if(contNivel === 3){
         alteraBg = 4;
         animal0 = 6;
         animal1 = 7;
         animal2 = 8;              
     }else if(contNivel === 4){
         alteraBg = 5;
         animal0 = 9;
         animal1 = 10;
         animal2 = 11;
     }else if(contNivel === 5){
         alteraBg = 6;
         animal0 = 12;
         animal1 = 13;
         animal2 = 14;
     }else if(contNivel === 6){
         alteraBg = 7;
         animal0 = 15;
         animal1 = 16;
         animal2 = 17;
     }else if(contNivel === 7){
        cicloSemFim.play();
         alteraBg = 9;
         selecionaTela = 1;
         tela = 7;
     }
    // SE VIDA 0, FIM DE JOGO
    if(vidas === 0){
         cicloSemFim.play();
         alteraBg = 8;
         selecionaTela = 2;
         tela = 7;
     }
    
        // TELEAS DE PERGUNTAS (SONS)
        image(bgp1[alteraBg], 400, 300);
       
        image(animal[animal0], 170, 160);
        if (dist(170, 160, mouseX, mouseY) < 90) {
            c = color('hsba(160, 0%, 0%, 0)');
            strokeWeight(4);
            stroke(255, 199, 66);
            fill(c);
            circle(170, 160, 200);

        }
         // ALTERNATIVA 02
        image(animal[animal1], 400, 160);
        if (dist(400, 160, mouseX, mouseY) < 90) {
            c = color('hsba(160, 0%, 0%, 0)');
            strokeWeight(4);
            stroke(255, 199, 66);
            fill(c);
            circle(400, 160, 200);

        }
         // ALTERNATIVA 03
        image(animal[animal2], 630, 160);
        if (dist(630, 160, mouseX, mouseY) < 90) {
            c = color('hsba(160, 0%, 0%, 0)');
            strokeWeight(4);
            stroke(255, 199, 66);
            fill(c);
            circle(630, 160, 200);
     
        }
       
            //TEXTO HEAD

            fill(0, 102, 153);
            textSize(18);
            text("Vidas: " + vidas, 50, 30);
            text("Pontos: " + pontos, 400, 30);
            text("Nível: " + nivel, 750, 30);    
     
  }
