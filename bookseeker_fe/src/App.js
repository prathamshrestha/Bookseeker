import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'




class App extends React.Component {  

 
  render(){
    return(
      <Router>
        <Route exact path='/register/' component={}></Route>

      </Router>
    );
  }


}
export default App