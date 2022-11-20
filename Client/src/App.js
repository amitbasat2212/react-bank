
import Transictions from "./components/transictions";
import TransactionForm from "./components/transactionForm";
import NavBar from "./components/NavBar";
import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import {getCategories} from "./ApiClient/ApiClientCategories";
import  { useState, useEffect } from 'react'
import {getBalance} from "./ApiClient/ApiClientBalance";
import Categories from "./components/Categories";

function App() {
  
  const [balance,setBalance]=useState(0)  
  const [categories,setCategories]=useState([])
 
  const setTheBalance=()=>{
    getBalance().then((newBalance)=>{
        setBalance(newBalance)
    })
  }
  const serBalanceEveryChange=()=>{
    setTheBalance()
  }

  
  useEffect(() => {
    setTheBalance();
    getCategories().then((categories)=>{
        setCategories(categories)
    })
  }, [])
  

  return (
    
    <Router>
    <div className="App">
      <div id="home-background"></div>
      <div id="main-links">
          <NavBar balance={balance}/>                  
      </div> 
      <div>     
      <Route path="/transactions" exact render={() => <Transictions  serBalanceEveryChange={serBalanceEveryChange}
       />} />   
      <Route path="/operations" exact render={() => <Categories
       />} />  
      <Route path="/breakdown" exact render={() => <TransactionForm categories={categories} serBalanceEveryChange={serBalanceEveryChange}
       />} />  

      </div>       
    </div>
    </Router>
  );
}

export default App;
