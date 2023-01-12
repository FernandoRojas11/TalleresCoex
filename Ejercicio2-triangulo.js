console.log("****Base Triangulo****");
let base = parseInt(prompt("Ingrese la base del Triangulo"));
let altura = parseInt(prompt("Ingrese la altura del Triangulo"));
if(base != altura){
    if(base > 5 && altura > 4){
        let area =(base*altura)/2;
        console.log("El area del triangulo es " + area);
    } else{
        let area2 = (base*2) + 10;
        console.log("El area del triangulo es " + area2);
    }
   
} else{
    alert("Los datos de base y altura no pueden ser iguales");
}