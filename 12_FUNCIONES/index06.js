let num1= 0;
let num2= 0;
let resultado = 0;

do{
    num1 = parseInt(prompt("Introduce un número"));
    num2 = parseInt(prompt("Introduce otro número"));
    division(num1,num2);
    window.alert(`La división de tus números es ${resultado}`)
}while(num2!==0) //Si introduces 0 da resultado infinity y luego se para


function division(primero, segundo){
    resultado = primero/segundo
    return resultado
}