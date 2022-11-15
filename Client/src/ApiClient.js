
const BASE_URI = 'http://localhost:8081/';

export function fetchTransaction(){
    fetch(`http://localhost:8081/transactions/`) 
    .then(res => res.json())
    .then(
      (result) => {                   
       return result
      },           
      (error) => {              
        return error
      }
    )
}