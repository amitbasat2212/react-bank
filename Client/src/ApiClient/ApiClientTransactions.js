
const BASE_URI = 'http://localhost:8081/';

export function fetchTransactions(){
    return fetch(`http://localhost:8081/transactions/`) 
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

export function deleteTransaction(){
    return fetch(`http://localhost:8081/transactions/`) 
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


export function AddTransaction(statusInput){
    const newTransaction = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(statusInput)
    };
    return fetch('http://localhost:8081/transactions/', newTransaction)
        .then(response => response.json())
        .then(
            (result) => {   
               return result
            },           
            (error) => {              
              return error
            }
          )
}


