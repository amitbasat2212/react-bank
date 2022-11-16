
const BASE_URI = 'http://localhost:8081/';

export function fetchTransactionsApi(){
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

export function deleteTransactionApi(idTransaction){
    console.log('http://localhost:8081/transactions/'+idTransaction)
    return fetch('http://localhost:8081/transactions/'+idTransaction, { method: 'DELETE' })
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


