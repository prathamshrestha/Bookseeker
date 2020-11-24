import React, { Component } from 'react';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'

// import SellBookForm from './components/sellbook.jsx'
// import Home from './components/home.jsx'
import Login from './components/accounts/login.jsx'
import Registration from './components/accounts/registration.jsx'
import profile from './components/profile'
import createprofile from './components/createprofile'
import userList from './components/userBooklist.jsx'
import List from './components/booklist.jsx'


//testing ui
import demo from './components/demos.jsx'

import Home from './components/home.jsx'
import bookdetail from './components/bookdetails.jsx'
import Sell from './components/sell.jsx'
import Dashboard from './components/dashboard.jsx'
import profile2 from './components/profile2.jsx'
import login2 from './components/login.jsx'
import signup from './components/signup'





import * as actions from './store/actions/auth'


class App extends Component {
 
  componentDidMount(){
    this.props.onTryAutoSignup()
  }

  render() {
    return(
    <Router>
      {/* <Route exact path='/sellbook/' component={SellBookForm}></Route> */}
      {/* <Route exact path='/home/' component={ ()=> <Home {...this.props}/> }></Route> */}
      <Route exact path='/booklist/' component={() => <List {...this.props} />}></Route>
      <Route exact path='/login/' component={Login}></Route>
      <Route exact path='/home/' component={ ()=> <Home {...this.props}/> }></Route>

      <Route exact path='/register/' component={Registration}></Route>
      <Route exact path='/createprofile/' component={createprofile}></Route> 
      <Route exact path='/profile/' component={profile}></Route>
      <Route exact path='/userbooks/' component={userList}></Route>

      {/* <Route exact path='/profile/' component={profile}></Route> */}
      
      <Route exact path='/demo/' component={demo}></Route>

      <Route exact path='/bookdetail/' component={bookdetail}></Route>
      <Route exact path='/sell/' component={ ()=> <Sell {...this.props}/> }></Route>
      <Route exact path='/dashboard/' component={ ()=> <Dashboard {...this.props}/> }></Route>
      <Route exact path='/profile2/' component={profile2}></Route>
      <Route exact path='/login2/' component={login2}></Route>
      <Route exact path='/signup/' component={signup}></Route>









    </Router>
    )
  }
}

const mapStateToProps=state=>{
  console.log(state)
  
  return{
    isAuthenticated:state.token !==null
  }
}

const mapDispatchtoProps=dispatch=>{
  return{
    onTryAutoSignup:()=> dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);