//String (cadena de caracteres)


let str_1 = "Hola soy un texto en comillas";
let str_2 = 'Hola soy un texto con comillas simples';
let str_3 = "Comillas \"dentro\" de comillas";
let str_4 = 'Comillas "dentro" de comillas';
let str_5 = "Comillas 'dentro' de comillas";


console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);


//comillas invertidas `` (backticks)

let str_6 = `Comillas invertidas Backticks;`

console.log(str_6);

//me sirve para ingresar valores de una variable dentro de otra variable.

let nombre = "Jose Emanuel";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);


let pantilla_html = `

<html>
  <h1>Pagina web es ${nombre} </h>
  </html>
  `

  console.log(pantilla_html);