//if-else + if-else

let q1=900;
let resultado = 0; 

if (q1 >= 0 && q1 <= 599){

    console.log("se aplica 10% de descuento",q1);
}else if (q1 >= 600 && q1 <= 999){
    resultado=q1*.9;
    console.log("Se aplica 11% de descuento",resultado);
}else if (q1 >= 1000 && q1 <= 1999){
    resultado=q1*0.10;
    console.log("Se aplica 11% de descuento");
}else if (q1 >= 2000){
    resultado=q1*0.15;
    console.log("Se aplica 15% de descuento");
}