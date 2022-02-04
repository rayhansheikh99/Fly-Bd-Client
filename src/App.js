import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Allpackage from "./Pages/Allpackage/Allpackage";
import Booking from "./Pages/Booking/Booking";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Header/Login/Login";
import PrivateRoute from "./Pages/Header/Login/PrivateRoute/PrivateRoute";
import Menu from "./Pages/Header/Menu/Menu";
import Topmenu from "./Pages/Header/Menu/Topmenu";
import SignUp from "./Pages/Header/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import PackageDetails from "./Pages/PackageDetails/PackageDetails";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Topmenu/>
        <Menu/>
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
         <Route path='/packages'>
            <Allpackage/>
         </Route>
         <Route path='/booking'>
            <Booking/>
         </Route>
         <PrivateRoute exact path='/PackageDetails/:serviceId'>
            <PackageDetails/>
         </PrivateRoute>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
