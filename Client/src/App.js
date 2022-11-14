
import Transictions from "./components/transictions";
// import navBar from "./components/navBar";
import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'


function App() {
  
  return (
    <Router>
    <div className="App">
      <div id="home-background"></div>
      <div id="main-links">
          {/* <NavBar userConnected={userConnected}/>                   */}
      </div> 
      <div>     
      <Route path="/transactions" exact render={() => <Transictions
       />} />        
      </div>       
    </div>
    </Router>
  );
}

export default App;
