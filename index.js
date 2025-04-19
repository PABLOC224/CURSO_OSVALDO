 
const persona = require("./utils/persona")
const {array1,array2} = require("./utils/arrays")

const data = ["pablo", "canseco"]

const[posicion1, posicion2] = data
 
 console.log(posicion1)
 console.log(posicion2)

 console.log(array1)


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