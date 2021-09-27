let num=parseInt(prompt("Introduce un número"));

let fact=1;

factorial(num);

function factorial (numero){
    for(i=1;i<=numero;i++){
        fact*= i
    }
    window.alert(`El factorial de tu número es: ${fact}`)
}

/* for (i=numero; i>1;i--){
    fact += fact*I 
  } */