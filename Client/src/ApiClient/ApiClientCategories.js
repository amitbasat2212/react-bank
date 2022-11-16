const categoriesUrl ='http://localhost:8081/categories/'

export function getCategories(){
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