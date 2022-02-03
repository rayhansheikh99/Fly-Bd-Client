import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Login from "./Pages/Header/Login/Login";
import SignUp from "./Pages/Header/SignUp/SignUp";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
         </Route>
         <Route path='/signup'>
            <SignUp/>
         </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
