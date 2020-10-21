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
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/myaccount' exact component={Myaccount}/>
      <Route path='/howtowork' exact component={Howtowork}/>
      <Route path='/points' exact component={Points}/>
      <Route path='/sign-up' exact component={SignUp}/>

    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
