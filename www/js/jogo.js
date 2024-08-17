window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
    const botao = document.getElementById('botao');
    botao.addEventListener('click', ()=> apertou());
}

var numeroCerto = null;

function inicio() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'Escolha um numero para ser adivinhado ';
}

function apertou() {
    var campoSaida = document.getElementById('saida');
    var campoNumero = document.getElementById('numero');
    var numeroDigitado;
    try{
        numeroDigitado = parseInt(campoNumero.value);
    }catch{
        campoSaida.innerHTML = 'Digite um numero valido !';
        return
    }
    campoNumero.value = ""
    if(numeroCerto === null){
        campoSaida.innerHTML = 'Digite um número';
        numeroCerto = numeroDigitado;
        return
    }
    if(numeroDigitado == numeroCerto) {
        document.getElementById('status').innerHTML = 'Acertou!'
        inicio()
        return
    }
    console.log(numeroDigitado);
    console.log(numeroCerto);
    
    
    if(numeroDigitado > numeroCerto) {
        campoSaida.innerHTML = 'Digite um número menor!';
    } else {
        campoSaida.innerHTML = 'Digite um número maior!';
    }
    return
}