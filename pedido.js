const api = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').
    then((response) => response.json())
    .then((convertido)=> console.log(convertido)).catch((error )=> console.log(error.message )
    ); }
    
    export {api} ;