let num = parseInt(prompt("Introduce un número"))

esPar(num);

function esPar(numero){
    numero%2!==0?window.alert(`El número introducido es impar`):window.alert(`El número introducido es par`)
}