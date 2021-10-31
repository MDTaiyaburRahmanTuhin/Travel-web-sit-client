import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Addservice from './Pages/Addservice/Addservice';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProbider from './context/AuthProbider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import AdminPage from './Pages/AdminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <AuthProbider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/myorder'>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/adminPage'>
              <AdminPage></AdminPage>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path='/addservice'>
              <Addservice></Addservice>
            </PrivateRoute>

          </Switch>
        </BrowserRouter>
      </AuthProbider>
    </div>
  );
}

export default App;
