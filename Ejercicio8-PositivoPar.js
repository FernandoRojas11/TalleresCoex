console.log("*Positivo par o impar*");

let entero = parseInt(prompt("Ingrese el numero a validar"));
let valor;

if(entero > 0){
    valor = entero % 2;
    if(valor == 0){
        console.log("El numero digitado es PAR");
    } else {
        console.log("El numero digitado es IMPAR");
    }
    
} else {
    alert("Debe ser numeros positivo");
}