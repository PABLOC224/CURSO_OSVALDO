//copia de array

const array = [1,2,3,4]
const array2 = []

console.log(array)
console.log(array2)

for (let i = 0; i < array.length; i++) {
       array2[i] = array[i]
  
}

array2[4] = 1000

console.log(array)
console.log(array2)

const arrayParaForEach = [0,1,2,3,4]

console.log("------------")
const arrayClonado = []

console.log(arrayClonado)

arrayParaForEach.forEach(elemento => {
        arrayClonado.push(elemento)
})

arrayClonado[5] = 2000

console.log(arrayParaForEach)
console.log(arrayClonado)

const arrayParaMap = ["pablo","sebastian"]

function paraMap(elemento){
       return    elemento.toUpperCase()

}

console.log(paraMap("pabloooo"))

const arrayMapeado = arrayParaMap.map(paraMap)

console.log(arrayMapeado)

arrayMapeado[2] =  "sebastian"

console.log(arrayMapeado)
console.log(arrayParaMap)

//copia con slice 

const arrayParaSlice = [0, 1, 2, 3];

// Declarar correctamente la variable arrayPara

arrayPara = arrayParaSlice.slice(3);

console.log(arrayPara); // Salida: [0, 1, 2, 3]

//copia con el spread operatior 

const ConSpread = [0,1,2,3]
const arrayParaSpread = {...ConSpread}

console.log(arrayParaSpread)

const frutas = ['manzana', 'pera', 'naranja'];
const verduras = ['zanahoria', 'lechuga', 'espinaca'];

const alimentos = [...frutas, ...verduras,"brocoli"]

console.log(alimentos)

const objeto = {
       nombre: "pablo",
       apellido: "canseco",
       datos : {
       hobies: ["futboll", "padel"] },
       date : new Date()
   };
   

const objeto2 = {...objeto}






console.log(objeto)
console.log(objeto2)


// COPIAS PROFUNDAS 

const jsonString = JSON.stringify(objeto);
console.log(jsonString);





const parse = structuredClone(objeto)

console.log(objeto)



console.log("-----------------")

console.log(objeto)

console.log(parse)

