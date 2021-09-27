let num1 = parseInt(window.prompt("Introduce un número"));
let num2 = parseInt(window.prompt("Introduce otro número"));

let resultado = 0;

suma(num1,num2);

function suma(primero, segundo){
    resultado = primero + segundo
    window.alert(`El resultado de sumar los dos números es: ${resultado}`)
}