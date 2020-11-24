import { Button, Input} from 'semantic-ui-react';
import * as action from '../store/actions/auth'
import './style/main.css'




import React from 'react'
import axios from "axios";

// import { API_URL2} from "../constants";
// import DetailNotice from './DetailNotice';
// import UpdateNotice from './UpdateNotice'
// import {Link, RichText, Date} from 'prismic-reactjs';

class List extends React.Component {
  state={
    tag:"",
    id: "",
    bookname:"",
    age: "",
    bookpicture:[],
    status:"",
    author:"",
    genre:"",
    publish_year:"",
    price:"",
    description:"",
    hardcopy:true,
    books:[],

    value:"",
    query:"",
    results:[]
}

search=(event) => {
  const value = event.target.value;
  this.setState({ query: value });
  const results = this.state.books.filter((book) => {
      const regex = new RegExp(value, "gi");
      return book.bookname.match(regex);
  });
  this.setState({ results });
}



  componentDidMount() {
    axios.get('http://localhost:8000/bookbuy/')
      .then(res => {
        this.setState({ books: res.data })


      })
      console.log((this.state.books))
    
    }
  // detail_data(id, name, bookpicture,age) {
  //   this.setState({
  //     isDetailOpen: true,
  //     id: id,
  //     name: name,
  //     bookpicture: bookpicture,
  //     age:age

  //   })}



  
  // update_data(id,bookname,bookpicture,age) {
  //   this.setState({ 
  //     isUpdateOpen: true,
  //     id:id,
  //     bookname:bookname,
  //     bookpicture:bookpicture,
  //     age:age
  //    })
  // }

  del_data(id) {
    console.log(id);
    axios.delete(`http://localhost:8000/booksell/${id}`, this.state)
    .then((response) => {

      if (response.status === 200) {
          alert('Notice Deleted! ')

    }}
    )
    .then(window.location.reload())
    
  };
  // onDetailClose = () => {
  //   this.setState({
  //     isDetailOpen: false,

  //   })
  // }
  // onUpdateClose = () => {
  //   this.setState({
  //     isUpdateOpen: false
  //   })
  // }


  render() {
      const { books,results, query } = this.state
      const data = results.length === 0 && !query ? books : results;



    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
        <title>Bookseeker</title>
        {/* start of navbar */}
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
          <div className="container">
            <a href="/home/" className="navbar-brand">
              <h3 className="d-inline align-middle ">BOOKSEEKER</h3>
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarcollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarcollapse">
            {
                 this.props.isAuthenticated ?
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="dashboard.html" className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="profile.html" className="nav-link">Profile</a>
                </li>
                </ul>:
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="signup.html" className="nav-link">sign up</a>
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">log in</a>
                </li>
              </ul>
}
            </div>
          </div>
        </nav>
        {/* End of navbar */}
        {/*search-bar */}
        <section className="search-bar bg-buy-sell">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
              <form >
                  <div className="search-bar-margin">
                    <div className="input-group">
                      <Input icon='search' placeholder='search' onChange={this.search}></Input>
                       </div>
                       </div>
                      
                       </form>
              </div>
            </div>
          </div>
          {/* End of search-bar */}


        {/* <DetailBook id={id} name={name} bookpicture={bookpicture} age={age} isDetailOpen={isDetailOpen} onDetailClose={this.onDetailClose} ></DetailBook> */}
        {/* <UpdateBook id={id} name={name} bookpicture={bookpicture} age={age} isUpdateOpen={isUpdateOpen} onUpdateClose={this.onUpdateClose}></UpdateBook> */}
        
            
        <div className="container custom-height-card-container" >
          <div className="row justify-content-center">


          {data.map(books => (
            <div className="col-md-4" style={{marginTop:'40px'}} key={books.id}>
              <div className="card " style={{width: '18rem'}}>
                <img src={ books.bookpicture} className="card-img-top card-custom" alt="card" />
              <div className="card-body">
                <p className="card-text">Name:{books.bookname} <br /> Author:{books.author} </p>
                <a href="/bookdetail/" className="btn btn-primary">view details</a>
              </div>
            </div>
          </div>
   ))}
   
 </div>
</div>
              
            
         
        <div>
          <a href="/sellbook/">Sell Book</a>
          {
            this.props.isAuthenticated ?
            <div><a onClick={action.Logout}>logout</a> </div>:
            <div><a href='/login/'> login </a></div>
          }
        </div>
        </section>
      </div>
    )
  };
}


export default List;