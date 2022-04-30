var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var raio = 10;
var xAleatorio = aleatorio // o maximo em x que o alvo pode ir de acordo com o canva
var yAleatorio = aleatorio // o maximo em y que o alvo pode ir de acordo com o canva

function criarBolinha(x, y, raio, cor){
    pincel.fillStyle = cor
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill()

}


function desenhaAlvo(x, y){

    criarBolinha(x, y, raio+20, 'blue')
    criarBolinha(x, y, raio+10, 'white')
    criarBolinha(x, y, raio, 'blue')

}
function aleatorio(Maximo){
    
    return Math.floor( Math.random()*Maximo ) // fazendo com o alvo retorne sempre uma posição aleatoria
}


function atualizaTela(){

    pincel.clearRect(0, 0, 900, 600);
    xAleatorio = aleatorio(900) // o maximo em x que o alvo pode ir de acordo com o canva
    yAleatorio = aleatorio(600) // o maximo em y que o alvo pode ir de acordo com o canva
    desenhaAlvo(xAleatorio, yAleatorio); // puchando a função.
    
}

setInterval(atualizaTela, 2000); 

function dispara(evento) {
    
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
    // Pegando as informações da var aleatoria x e y de acordo com o raio diminuindo ou aumentando
    if((x > xAleatorio - raio)
    && (x < xAleatorio + raio)
    && (y > yAleatorio - raio)
    && (y < yAleatorio + raio)) {
    
        alert('Acertou!');
    
    }else{
        alert("Errou tente, novamente! ")
    }
    
    
    }




tela.onclick = dispara;