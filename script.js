const pantalla = document.getElementById("aparecer")
const pantalla_valor = []


let cadena = ""
let swtch1 = true
let swtch2 = true
let swtch3 = true
let swtch4 = true
let elemento = 0
let elemento2 = 0
let resultado = 0
let valor = 0


const enviar = (numero) =>{
    cadena = cadena + numero
    pantalla.innerHTML =cadena

}
function borrar() {
    cadena = cadena.substring(0, cadena.length-1)
    pantalla.innerHTML = cadena
}

function resolver() {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]=== '+') {
            elemento = parseInt(cadena.substring(0, cadena[i-1])) + elemento
            elemento2 = parseInt(cadena.substring(cadena[i+1], cadena.length))/*
            cadena = parseInt(cadena.substring(cadena[i+1], cadena.length))*/
            resultado = elemento+elemento2
            console.log(elemento, cadena, elemento2);
            
        }
        
    }
}/*
function resolver() {
    elemento = parseInt(cadena)+elemento
    cadena.substring
    console.log(elemento);
    
}*/
function mandar(el) {
  
}
function AC() {
    cadena  = ""
    pantalla.innerHTML = cadena
}