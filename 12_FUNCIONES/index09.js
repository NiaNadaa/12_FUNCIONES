let num = parseInt(prompt("Introduce un número"));

num=num.toString();


if(num>0){
    contador(num)
}else{
    window.alert(`Debes introducir un número positivo`)
};


function contador (numero){
    numero = num.length
    window.alert(`El número de cifras en ${num} es ${numero}`)
};