window.onload = function() {
    //variaveis
    var segundos = 0
    var milesimo = 0

    var acrescentarSegudos = document.getElementById('segundos')
    var acrescentarMilesimo = document.getElementById('milesimo')

    var buttonIniciar = document.getElementById('button-start')
    var buttonParar = document.getElementById('button-stop')
    var buttonreset = document.getElementById('button-reset')
    
    var Intervalo

    //iniciando o cronometro

    //botão iniciar
    buttonIniciar.onclick = function() {

        clearInterval(Intervalo)
        Intervalo = setInterval(iniciarContagem, 10)
        
    }

    //pausando o codigo
    buttonParar.onclick = function() {
        clearInterval(Intervalo)
    }

    //limpando cronometro
    buttonreset.onclick = function() {
        clearInterval(Intervalo)
        segundos = '00'
        milesimo = '00'
        acrescentarSegudos.innerHTML = segundos
        acrescentarMilesimo.innerHTML = milesimo
    }

    //função iniciar
    function iniciarContagem() {
        //começa acrescentando os milesimos
        milesimo++

        if(milesimo <= 9) {
            acrescentarMilesimo.innerHTML = '0' + milesimo
        }

        if(milesimo > 9) {
            acrescentarMilesimo.innerHTML = milesimo
        }

        if(milesimo > 99) {
            console.log('segundos')
            segundos++
            acrescentarSegudos.innerHTML = '0' + segundos
            milesimo = 0
            acrescentarMilesimo.innerHTML = '0' + 0
        }

        if (segundos > 9) {
            acrescentarSegudos.innerHTML = segundos
        }
    }
}