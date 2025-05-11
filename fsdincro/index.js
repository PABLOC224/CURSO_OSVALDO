

import { error } from 'node:console';
import { appendFileSync } from 'node:fs';
import fs from "node:fs";


const read = () => {
    
    try{
       return  fs.readFileSync("./fsdincro/archivo.txt","utf-8") 

    }catch(error) {
       
        console.log(error.message)
        return error.message
    }
    
}



const escribir = function() {
      fs.writeFileSync("./fsdincro/archivo.txt","que tal")

    }



const agregarArchivo = function() {
         appendFileSync("./fsdincro/archivo.txt", "\notra anotacion")

}
escribir()
agregarArchivo()
console.log(read())


const modificarArchivo = () => {
        
         const objeto =JSON.parse(fs.readFileSync("./package.json","utf-8"))
         if(!objeto.scripts){
             objeto.scripts= {}
        }
            objeto.scripts.nuevo_script = "echo 'Este es un nuevo script'"; 
            fs.writeFileSync("./package.json",JSON.stringify(objeto,null,2))
   
        }
          
         
             


modificarArchivo()





const readed = ()=> {
    try {
    fs.readFile("./package.json","utf-8",(error,data)=> {
       if(error)
        throw error;
        console.log(data) })
       }catch(error){
        console.log(error.message)}

}



readed()



const promesa = ()=> {
    
    return fs.promises.readFile("./package.json", "utf8").then((data)=> console.log(data))
    .catch (error=> console.log("errooo" ,error))

}

promesa()



const asyncrona = async() => {
      try {
         const data = await  fs.promises.readFile("./package.json", "utf8")
         console.log(data)
      } catch(error) {
          console.log("HORRROR", error)
      }
       
}
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmm")
    asyncrona()




 










 


































