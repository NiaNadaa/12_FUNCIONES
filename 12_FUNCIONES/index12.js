let year = 0;

bis(year)



function bis(anyo){
    do{
        anyo = parseInt(prompt("Introduce un año"));
        if(anyo%4===0 && anyo%100!==0 || anyo%400===0){
            window.alert(`El año ${anyo} es bisiesto`)
        }else {
            window.alert(`El año ${anyo} no es bisiesto`)
        }
    
    }while(anyo!==0)
}