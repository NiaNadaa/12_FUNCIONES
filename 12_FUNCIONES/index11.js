let cant = parseFloat(prompt("Introduce la cantidad de € que quieres cambiar"));
let op = parseInt(prompt(`¿A qué divisa quieres cambiar?
1 - Dólares
2 - Yenes
3 - Libras`));

let result;

cambio(cant,op)

function cambio(dinero,divisa){
    if(divisa===1){
        result = dinero*1.28
        window.alert(`Los ${cant} € serán ${result} Dólares`)
    }else if(divisa===2){
        result = dinero*129.85
        window.alert(`Los ${cant} € serán ${result} Yenes`)
    }else if(divisa===3){
        result = dinero*0.86
        window.alert(`Los ${cant} € serán ${result} Libras`)
    }else{
        window.alert(`La opción no es correcta`)
    }
}