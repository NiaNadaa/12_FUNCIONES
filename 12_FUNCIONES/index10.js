let opcion = parseInt(prompt(`¿De qué figura deseas conocer el área?
1 - Círculo
2 - Triángulo
3 - Cuadrado`))

let datoCir = 0;
let datoTri1 = 0;
let datoTri2 = 0;
let datoCua = 0;

let result=0;

if(opcion===1){
    datoCir = parseInt(prompt(`Introduce el radio del círculo`));
    circulo(datoCir)
}else if(opcion===2){
    datoTri1 = parseInt(prompt(`Introduce la base del triángulo`));
    datoTri2 = parseInt(prompt(`Introduce la altura del triángulo`));
    triangulo(datoTri1,datoTri2)
}else if(opcion===3){
    datoCua = parseInt(prompt(`Introduce el lado del cuadrado`));
    cuadrado(datoCua)
}else{
    window.alert(`El valor introducido no es correcto`)
}


function circulo(circulo){
    result = Math.pow(circulo,2)*3.14
    window.alert(`El área del círulo es: ${result}`) 
}
function triangulo(tri1,tri2){
    result = tri1*tri2/2
    window.alert(`El área del triángulo es: ${result}`) 
}
function cuadrado(cuadrado){
    result = cuadrado*cuadrado
    window.alert(`El área del cuadrado es: ${result}`) 
}
