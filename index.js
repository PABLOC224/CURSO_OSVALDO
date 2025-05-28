
import http from 'http';

import { error } from 'node:console';
import { appendFileSync } from 'node:fs';
import fs from "node:fs";
import { json } from 'node:stream/consumers';


 const server =http.createServer((peticion, respuesta)=> {
       const {url} = peticion
    if(url=== "/saludar") {
    respuesta.end("hola") 
    }  else if(url ==="/decirChau") {
       respuesta.end(JSON.stringify({nombre : "pablo"}))
    }
   
    
    
} 

)
           


server.listen(8080,()=> {
      console.log("http://localhost:8080");
})






 