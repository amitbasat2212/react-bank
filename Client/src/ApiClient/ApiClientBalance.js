const balanceUrl ='http://localhost:8081/balance/'


export function getBalance(){
    return fetch(balanceUrl) 
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