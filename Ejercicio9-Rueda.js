console.log("*Diametro de una rueda*");

let diametro = parseFloat(prompt("Ingrese el diametro de la rueda en Metros"));
let grosor = parseFloat(prompt("Ingrese el grosor de la rueda en Metros "));

if(diametro > 1.4){
    console.log("La rueda es para un vehiculo Grande");
    if(grosor <0.4){
        console.log("EL Grosor para esta rueda  es inferior al recomendado");
    }
    } else if(diametro <= 1.4 && diametro > 0.8){
    console.log("La rueda es para un vehiculo mediano");
    if(grosor <0.25){
        console.log("EL Grosor para esta rueda  es inferior al recomendado");
    }
} else{
    console.log("La Rueda es para un vehiculo pequeño");
}
