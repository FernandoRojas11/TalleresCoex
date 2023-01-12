console.log("****Mayor- Menor Que****");
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if(numero1 != numero2 && numero2 != numero3){
    if(numero1>numero2 && numero1 > numero3){
        console.log("El numero mayor es " + numero1);
        if(numero2 > numero3){
        console.log("El numero menor es " + numero3);
       } else{
        console.log("El numero menor es " + numero2);
        }

    } else if (numero2>numero3 && numero2>numero1){
        console.log("El numero mayor es " + numero2);
        if(numero1 > numero3){
        console.log("El numero menor es " + numero3);
       } else{
        console.log("El numero menor es " + numero1);
        }

    } else if (numero2 > numero1){
        console.log("El numero mayor es " + numero3);
        console.log("El numero menor es " + numero1);
    } else{
        console.log("El numero mayor es " + numero3);
        console.log("El numero menor es " + numero2);
          }
} else{
    alert("ninguno de los numeros puede ser repetido");
}