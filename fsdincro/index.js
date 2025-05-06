import {readFileSync} from 'node:fs';
import { writeFileSync } from 'node:fs';
import { appendFileSync } from 'node:fs';

const read = () => {
    
    try{
       return  readFileSync("./fsdincro/archivo.txt","utf-8") 

    }catch(error) {
       
        console.log(error.message)
        return error.message
    }
    
}



const escribir = function() {
      writeFileSync("./fsdincro/archivo.txt","que tal")

    }



const agregarArchivo = function() {
         appendFileSync("./fsdincro/archivo.txt", "\notra anotacion")

}
escribir()
agregarArchivo()
console.log(read())


const modificarArchivo = () => {
        
         const objeto =JSON.parse(readFileSync("./package.json","utf-8"))
         if(!objeto.scripts){
             objeto.scripts= {}
        }
            objeto.scripts.nuevo_script = "echo 'Este es un nuevo script'"; 
            writeFileSync("./package.json",JSON.stringify(objeto,null,2))
   
        }
          
         
             


modificarArchivo()














  
 










 


































