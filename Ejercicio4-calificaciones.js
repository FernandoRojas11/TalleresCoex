console.log("****Sistema de Calificaciones****");
let nota = parseInt(prompt("Ingrese su nota"));
if(nota > 0 && nota <= 20){
if(nota  <=9){
    console.log("Su nota es E");
} else if(nota <= 12){
    console.log("Su nota es D");
} else if(nota <=15){
    console.log("Su nota es C");
} else if(nota <= 18){
    console.log("Su nota es B");
} else {
    console.log("Su nota es A");
}

} else {
    alert("La nota digitada no hace parte del rango")
}