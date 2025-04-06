



console.log(decirHola("pedro"))
 
function decirHola( nombre) {
    return `hola ${nombre}` ;
}

const saludar = decirHola

console.log(saludar("pablo"))

  let saludar2 = function(nombre){
           return nombre ;
 }

 console.log(saludar2)

 //arrow function

 

 

 const sumar=(a,b) => {
    console.log(a + b)
 }
 sumar(3,8)

 // formas de las arrow function 

 const sayHello= nombre => console.log(`hola ${nombre}`)

 console.log(sayHello("jorge")) 

 const sayHello2 = (nombre , nombre2)=> console.log(`hola ${nombre}  ${nombre2}`)

 sayHello2("pablo", "canseco")

 const sayHello3 =(nombre , nombre2)=> `hola ${nombre}  ${nombre2}`

 console.log(sayHello3("jorge", "luis"))

 const sayHello4 = (nombre, nombre2 )=> {
     return `hola ${nombre}  ${nombre2}`
 }

 console.log(sayHello4("matias", "perez"))