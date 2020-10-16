import React, { Component } from 'react';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import SellBookForm from './components/sellbook.jsx'
import Home from './components/home.jsx'
import List from './components/booklist.jsx'
import Login from './components/accounts/login.jsx'
import Registration from './components/accounts/registration.jsx'


class App extends Component {
 

  render() {
    return(
    <Router>
      <Route exact path='/sellbook/' component={SellBookForm}></Route>
      <Route exact path='/home/' component={Home}></Route>
      <Route exact path='/booklist/' component={List}></Route>
      <Route exact path='/login/' component={Login}></Route>
      <Route exact path='/register/' component={Registration}></Route>



    </Router>
    )
  }
}

export default App;