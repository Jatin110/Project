import './App.css';
import Header from "./Header.js";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Router path="/checkout">
          <h1>Checkout</h1>
        </Router>
        <Router path="/login">
          <h1> Login page</h1>
        </Router>
        <Router path="/">
          <Header /> 
          <h1> HOME PAGE!!!</h1>
        </Router>
      </Switch>

      </div>
      </Router> 
  );
}

export default App;
