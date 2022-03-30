//Carne - 450g por pessoa -- mais de 6 horas = 650g
//Cerveja - 1200ml por pessoa -- mais de 6 horas = 2000ml
//Refrigerante/Água - 1000ml por pessoa -- mais de 6 horas = 1500ml

//Crianças = 0,5

let adultos = document.getElementById("numeroAdultos");
let criancas = document.getElementById("numeroCriancas");
let duracao = document.getElementById("duracao");

let carne = 450;
let cerveja = 1200;
let bebidas = 1000;

let resultado = document.getElementById("resultado");
let info = document.getElementById("info");
let ocultar = document.getElementById("ocultar");

function mostrarInfo(){
    info.style = 'display: block';
    resultado.style = 'display: none';
    ocultar.style = 'display: block';
}

function fecharInfoResultado(){
    info.style = 'display: none';
    resultado.style = 'display: none';
    ocultar.style = 'display: none';
}

function checarDuracao(horas){    
    if(horas>= 6){
        carne = 650;
        cerveja = 2000;
        bebidas = 1500;
    }
}

function calcular(){
    let numeroAdultos = adultos.value;
    let numeroCriancas = criancas.value;
    let numeroDuracao = duracao.value;

    if(numeroAdultos < 0 || numeroCriancas < 0 || numeroDuracao < 1){
        alert('Preencha corretamente todos os campos');
    }

    else{
        checarDuracao(numeroDuracao);

        let qtdCarne = (numeroAdultos * carne) + ((numeroCriancas/2) * carne);
        let qtdCerveja = (numeroAdultos * cerveja);
        let qtdBebidas = (numeroAdultos * bebidas) + ((numeroCriancas/2) * bebidas);
        
        info.style = 'display.none';
        resultado.style = 'display: block';
        ocultar.style = 'display: block';
        resultado.innerHTML = '<h3>Quantidades</h3>';
        resultado.innerHTML += '<p>' + qtdCarne/1000 + 'Kg de carne</p>';
        resultado.innerHTML += '<p>' + qtdCerveja/1000 + 'L de cerveja </p>';
        resultado.innerHTML += '<p>' + qtdBebidas/1000 + 'L de água/refrigerante </p>';
    }
    
}

let calcBotao = document.getElementById("calcBotao");
calcBotao.addEventListener("click", calcular);