
const transcationsUrl = 'http://localhost:8081/transactions/'

export function fetchTransactionsApi(){
    return fetch(transcationsUrl) 
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
    
    return fetch(transcationsUrl+idTransaction, { method: 'DELETE' })
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


export function AddTransaction(Transaction){
    const newTransaction = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Transaction)
    };
    return fetch(transcationsUrl, newTransaction)
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


