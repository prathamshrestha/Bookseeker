import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/home.jsx'



class App extends React.Component {  

 
  render(){
    return(
      <Router>
        <Route exact path='/home/' component={Home}></Route>

      </Router>
    );
  }


}
export default App