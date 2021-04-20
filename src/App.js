import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import AddService from './Components/AdminPages/AddService/AddServie';
import MakeAdmin from './Components/AdminPages/MakeAdmin/MakeAdmin';
import OrderList from './Components/AdminPages/OrderList/OrderList';
import ServiceBooking from './Components/CustomerPages/ServiceBooking/ServiceBooking';
import AddReview from './Components/CustomerPages/AddReview/AddReview';
import Login from './Components/LoginPage/Login/Login';
import BookingList from './Components/CustomerPages/BookingList/BookingList';
import NotMatch from './Components/NotMatchPage/NotMatch';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          {/* admin page private routes */}
          <PrivateRoute path="/admin/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>

          {/* customer page private routes */}
          <PrivateRoute path="/customer/serviceBooking">
            <ServiceBooking />
          </PrivateRoute>
          <PrivateRoute path="/customer/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/customer/bookingList">
            <BookingList />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;