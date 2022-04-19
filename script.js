//carne - 450g por pessoa  /  +6 horas - 650g
//cerveja - 1200ml por pessoa  /  +6 horas - 2000ml
//refrigerante/água - 1000ml por pessoa  /  +6 horas - 1500ml

//crianças valem por 0,5

let qtdAdultos = document.getElementById('qtdAdultos');
let qtdCriancas = document.getElementById('qtdCriancas');
let menosDe6 = document.getElementById('menosDe6');
let maisDe6 = document.getElementById('maisDe6');

let carne;
let cerveja;
let bebidas;

//calcula e mostra o resultado na div 'resultado' declarada no html
function calcular(){
    checarInputs();
    checarDuracao();
    ocultarInfo();
    
    let totalCarne = (carne * qtdAdultos.value) + (carne * (qtdCriancas.value/2));
    let totalCerveja = (cerveja * qtdAdultos.value);
    let totalBebidas = (bebidas * qtdAdultos.value) + (bebidas * (qtdCriancas.value/2));

    resultado = document.getElementById('resultado');

    resultado.innerHTML = '<p>' + totalCarne / 1000 + ' Kg de Carne</p>';
    resultado.innerHTML += '<p>' + totalCerveja / 1000 + ' L de Cerveja</p>';
    resultado.innerHTML += '<p>' + totalBebidas / 1000 + ' L de Água/Refri</p>';

    let ocultarResultado = document.createElement('button');
    resultado.appendChild(ocultarResultado);
    ocultarResultado.setAttribute('id',"ocultarResultado");
    ocultarResultado.textContent = 'X';
    ocultarResultado.setAttribute('onclick',"ocultarResultado()");
}

//atribui novas quantidades dependendo da duração selecionada
function checarDuracao(){
    if(maisDe6.checked){
        carne = 650;
        cerveja = 2000;
        bebidas = 1500;
    }else{
        carne = 450;
        cerveja = 1200;
        bebidas = 1000;
    }
    return carne, cerveja, bebidas;
}

//checa se tudo foi preenchido corretamente para evitar resultados indesejados
function checarInputs(){
    if(qtdAdultos.value == 0 && qtdCriancas.value == 0){
        alert('Preencha corretamente todos os campos');
        qtdAdultos.value = '';
        qtdCriancas.value = '';
    }else if(qtdAdultos.value < 0 || qtdCriancas.value < 0){
        alert('Preencha corretamente todos os campos');
        qtdAdultos.value = '';
        qtdCriancas.value = '';
    }else{
    let resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    }
}

//funções visuais
function ocultarResultado(){
    resultado.style.display = 'none';
}

function mostrarInfo(){
    let infoDiv = document.getElementById('infoDiv');
    infoDiv.style.display = 'block';

    ocultarResultado();
}

function ocultarInfo(){
    let infoDiv = document.getElementById('infoDiv');
    infoDiv.style.display = 'none';
}