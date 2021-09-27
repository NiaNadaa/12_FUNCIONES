let num1 = parseInt(window.prompt("Introduce un número"));
let num2 = parseInt(window.prompt("Introduce otro número"));

let resultado = 0;

suma(num1,num2);

function suma(primero, segundo){
    primero<segundo?window.alert(`El segundo número (${segundo}) es mayor que el primer número (${primero})`):window.alert(`El primer número (${primero}) es mayor que el segundo número (${segundo})`)
}