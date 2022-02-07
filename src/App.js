import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Allpackage from "./Pages/Allpackage/Allpackage";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Header/Login/Login";
import PrivateRoute from "./Pages/Header/Login/PrivateRoute/PrivateRoute";
import Menu from "./Pages/Header/Menu/Menu";
import Topmenu from "./Pages/Header/Menu/Topmenu";
import SignUp from "./Pages/Header/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import PackageDetails from "./Pages/PackageDetails/PackageDetails";
import MyOrders from './Pages/MyOrders/MyOrders';
import Review from './Pages/Review/Review';
import Payment from './Pages/MyOrders/Payment/Payment';
import Error from './Pages/Error/Error';
import Contact from "./Pages/Contact/Contact";
import AddProduct from './Pages/AddProduct/AddProduct';
import About from './Pages/About/About';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";

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
         <Route path='/myorders'>
            <MyOrders/>
         </Route>
         <Route path='/review'>
            <Review/>
         </Route>
         <Route path='/about'>
            <About/>
         </Route>
         <Route path='/makeadmin'>
            <MakeAdmin/>
         </Route>
         <Route path='/addproduct'>
            <AddProduct/>
         </Route>
         <Route path='/manageproducts'>
            <ManageProducts/>
         </Route>
         <Route path='/manageorders'>
            <ManageOrders/>
         </Route>
         <Route path='/contact'>
            <Contact/>
         </Route>
         <Route path='/payment'>
            <Payment/>
         </Route>
         <Route path='/dashboard'>
            <Dashboard/>
         </Route>
         <PrivateRoute exact path='/PackageDetails/:serviceId'>
            <PackageDetails/>
         </PrivateRoute>
         <Route path='*'>
            <Error/>
         </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
