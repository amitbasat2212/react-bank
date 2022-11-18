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

export function setBalance(balance){
    const newBalance = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(balance)
    };
    return fetch(balanceUrl, newBalance)
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