let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
    console.log(numeroSecreto);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    //El usuario no acierta
    {
        if(numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else
        {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(params) 
{
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }
    else
    {
        let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales()
{
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego()
{
    //Limpiar la caja (Reinicia el juego)
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el contador de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();