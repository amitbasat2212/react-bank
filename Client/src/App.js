
import Transictions from "./components/Transictions";
import NavBar from "./components/NavBar";
import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'


function App() {
  
  return (
    <Router>
    <div className="App">
      <div id="home-background"></div>
      <div id="main-links">
          <NavBar/>                  
      </div> 
      <div>     
      <Route path="/transactions" exact render={() => <Transictions
       />} />   
      <Route path="/operations" exact render={() => <Transictions
       />} />  
      <Route path="/breakdown" exact render={() => <Transictions
       />} />  

      </div>       
    </div>
    </Router>
  );
}

export default App;
