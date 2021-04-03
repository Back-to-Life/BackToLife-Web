import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Myaccount from './components/pages/Myaccount/Myaccount';
import Howtowork from './components/pages/Howtowork/Howtowork';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages//Footer/Footer';
import Points from './components/pages/Points/Points';
import SignIn from './components/pages/SignIn/SignIn';
import appAdd from './components/pages/appAdd/appAdd';
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/myaccount' exact component={Myaccount}/>
      <Route path='/howtowork' exact component={Howtowork}/>
      <Route path='/points' exact component={Points}/>
      <Route path='/signup' exact component={SignUp}/>
      <Route path='/login' exact component={SignIn}/>
      
    </Switch>
    
    <Footer/>
    </Router>
  );
}

export default App;
