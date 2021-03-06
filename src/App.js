import React,{Component}from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Myaccount from './components/pages/Myaccount/Myaccount';
import {SignUp} from './components/pages/SignUp/SignUp.js';
import SignIn from './components/pages/SignIn/SignIn';
import Footer from './components/pages/Footer/Footer';
import Points from './components/pages/Points/Points';
import Logout from './components/pages/Logout/Logout';
import Confirm from './components/pages/EmailConfirmation/Confirm';
import HomeThird from './components/pages/HomeThird/HomeThird';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword'
import ResetPassword from './components/pages/ResetPassword/ResetPassword'
import Splash from './components/pages/Splash/Splash';


export default class App extends Component {
 render(){
  const theme = this.props.theme;
  const settings = {
    isSplash: true, // Change this to false if you don't want Splash screen.
  };
  if (settings.isSplash) {
  return (
    <Router basename="/">
       <Route
                path="/"
                exact
                render={(props) => (
                  <Splash {...props} theme={theme} />
                )}
              />
    <Navbar/>
    <Switch>
   
      <Route path='/home' exact component={Home}/>
      <Route path='/myaccount' exact component={Myaccount}/>
      <Route path='/howtowork' exact component={HomeThird}/>
      <Route path='/points' exact component={Points}/>
      <Route path='/signup' exact component={SignUp}/>
      <Route path='/login' exact component={SignIn}/>
      <Route path='/logout' exact component={Logout}/>
      <Route path='/confirm' exact component={Confirm}/>
      <Route path='/forgotPassword' exact component={ForgotPassword}/>
      <Route path='/resetPassword' exact component={ResetPassword}/>
      <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
    </Switch>
    <Footer/>
    </Router>
  );
  }else{
    return (
      <Router>
      <Navbar/>
      <Switch>
     
        <Route path='/home' exact component={Home}/>
        <Route path='/myaccount' exact component={Myaccount}/>
        <Route path='/howtowork' exact component={HomeThird}/>
        <Route path='/points' exact component={Points}/>
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/login' exact component={SignIn}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/confirm' exact component={Confirm}/>
        <Route path='/forgotPassword' exact component={ForgotPassword}/>
        <Route path='/resetPassword' exact component={ResetPassword}/>
  
      </Switch>
      <Footer/>
      </Router>
    );
  }
}
}

