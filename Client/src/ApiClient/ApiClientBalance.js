const categoriesUrl ='http://localhost:8081/categories/'


export function getBalance(){
    return fetch(categoriesUrl) 
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