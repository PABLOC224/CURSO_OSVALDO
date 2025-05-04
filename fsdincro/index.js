import {readFileSync} from 'node:fs';
import { writeFileSync } from 'node:fs';

const read = () => {
    
    try{
       return  readFileSync("./fsdincro/archivo.txt","utf-8") 

    }catch(error) {
        return error.message
        console.log(error.message)
    }
    
}

console.log(read())  

const escribir = function() {
      writeFileSync("./fsdincro/archivo.txt","que tal")



}

read


 














  
 










 


































