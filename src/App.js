import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
