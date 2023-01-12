console.log("*Promedio de 3 numeros*");
const Valor1 = parseInt(prompt("Digite el Primer Numero"));
const Valor2 = parseInt(prompt("Digite el Segundo Numero"));
const Valor3 = parseInt(prompt("Digite el Tercer Numero"));
let promedio;
if(Valor1 < 0 || Valor1 > 10 || Valor2 < 0 || Valor2 > 10 || Valor3 < 0 || Valor3 > 10){
    alert("Los numeros no pueden ser menor a 0 y mayor a 10");
} else{
    let promedio = (Valor1 + Valor2 + Valor3)/3;
    console.log (promedio > 5 ? true : false);
}