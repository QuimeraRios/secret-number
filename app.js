//let numeroSecreto = generarNumeroSecreto();
// let intentos=1;
let numeroSecreto=0;
let intentos=0;
// inicializo la lista vacia de los numeros
let listaNumerosSorteados =[];
//se empieza a colocar limites a la lista
let numeroMaximo=10;
//console.log(numeroSecreto);
    
function asignarTextoElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function generarNumeroSecreto(){
    // vamos a asignar el numero generado al ramdom y luego verificar si ya estaba en una lista
    // return Math.floor(Math.random()*10+1);
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    //si el numero generado ya esta en la lista
    //console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length==numeroMaximo){
        //asignarTextoElemento('p','ya se asignaron todos los numeros');
        asignarTextoElemento('p','all numbers have already been assigned ');
    } else {
        //si el numero esta incluido en la lista

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
   // console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario=== numeroSecreto);
    if (numeroDeUsuario===numeroSecreto){
        //asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        asignarTextoElemento('p',`you got the number right  ${intentos} ${(intentos===1) ? 'time' : 'times'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            //asignarTextoElemento('p','el numero es menor '); 
            asignarTextoElemento('p','the number is less ');
        } else {
            //asignarTextoElemento('p','el numero es mayor');
            asignarTextoElemento('p','the number is greater ');
        }
        intentos++;
        limpiarCaja();
    }
  
    return;
}

function limpiarCaja(){
   // let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value='';
    document.querySelector('#valorUsuario').value ='';
    
}

function condicionesIniciales(){
    //asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('h1', 'Secret number game');
    //asignarTextoElemento('p',`Numero del 1 al ${numeroMaximo}`);
    asignarTextoElemento('p',`type a number from 1 to  ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    //inicializar el numero de intentos
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
generarNumeroSecreto();

verificarIntento();