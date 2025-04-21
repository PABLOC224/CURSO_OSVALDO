 
const persona = require("./utils/persona")
const {array2,array3} = require("./utils/arrays")

const data = ["pablo", "canseco"]

const[posicion1, posicion2] = data
 
 console.log(posicion1)
 console.log(posicion2)

 console.log(array3)
 console.log(array2)

 console.log("----------------")

 const persona2 = {
    nombre: "Lucía",
    edad: 30,
    direccion: {
      ciudad: "Buenos Aires",
      pais: "Argentina"
    }
  };

 const{edad, nombre, direccion} = persona2

 console.log(edad, nombre, direccion.pais)

 // metodos 

 console.log(array3.toString())
 console.log(array3.length)
 //const arrayFinal = JSON.parse(JSON.stringify(array3))
// console.log(arrayFinal)
 
const arrayFinal = []
console.log(arrayFinal)

function ciclar(elemento) {
       console.log(elemento)

}

array3.forEach(ciclar
);

let tareas = ["Lavar los platos", "Hacer ejercicio", "Leer un libro", "Pagar cuentas"];

const tareasEliminadas = tareas.splice(2,1)

console.log(tareas)

tareas.splice(2,0,"ir de compras")

console.log(tareas)

tareas.splice(tareas.length , 0 , "ordenar armario")

console.log(tareas)
console.log(tareasEliminadas)

const numeros = [7, 2, 9, 4, 1, 8, 3, 6, 10, 5];

function restar(a,b) {
      return  a-b
}

numeros.sort(restar)  

console.log(numeros)