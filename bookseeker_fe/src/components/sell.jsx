import React, { Component } from 'react'
import './style/main.css'
import {connect} from 'react-redux'
import { Button, Form, Input, Label, Header, Icon, TextArea } from 'semantic-ui-react'

import axios from "axios";

const initialstate={
  // bookname_error: '',
  // desc_error: '',
  // date_error: '',
  // id:"",
  // books:"",
  bookname: "",
  age: "",
  description: "",
  status: "",
  bookpicture:null,
  author:"",
  genre:"",
  price:"",
  publish_year:"",
  hardcopy:true,
}


export class Sell extends Component {
  state =
      initialstate;
      user=localStorage.getItem('user')

componentDidMount=()=>{
  console.log(this.props.token)
  console.log(this.user.id)
}

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      handleImageChange = (e) => {
        this.setState({
          bookpicture: e.target.files[0]
        })
      };
      
    
      createbooks = e => {
        e.preventDefault();
        // const isValid=this.validate();
        // if (isValid){
        //   console.log(this.state)
        //   this.setState(initialstate)
        // }
        this.setState(initialstate)
        let form_data = new FormData();
        // form_data.append('user',this.user);
        form_data.append('user',1);
        form_data.append('bookpicture', this.state.bookpicture, this.state.bookpicture.name);
        form_data.append('bookname', this.state.bookname);
        form_data.append('description', this.state.description);
        form_data.append('age', this.state.age);
        form_data.append('status', this.state.status);
        form_data.append('author', this.state.author);
        form_data.append('genre', this.state.genre);
        form_data.append('price', this.state.price);
        form_data.append('publish_year', this.state.publish_year);
        form_data.append('hardcopy', this.state.hardcopy);


       
  
        if (this.props.token){
          axios.defaults.headers={
            'Authorization':`token ${this.props.token}`
          }}
        axios.post('http://127.0.0.1:8000/booksell/',form_data).then((response)=>{
           if (response.status===201){
              alert('book listed in selling list! ')
              window.location.reload()
           }
           else{
             console.log(response)
           }
    
      })
        .catch(err=>console.log(err))
        
      };
    render() {
        return (
            <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
        <title>Bookseeker</title>
        {/* start of navbar */}
        <nav className="navbar  navbar-expand-md navbar-light fixed-top py-4">
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
                  <a href="/dashboard/" className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Profile</a>
                </li>
                </ul>:
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/register/" className="nav-link">sign up</a>
                </li>
                <li className="nav-item">
                  <a href="/login/" className="nav-link">log in</a>
                </li>
              </ul>
    }
            </div>
          </div>
        </nav>
        {/* End of navbar */}
        {/* Start of Main content */}
        <header id="home-section" className="signup-body">
          <div className="dark-overlay">
            <div className="home-inner container">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block col-text-custom">
                  <h1 className="display-t fill-padding">Fill the form and sell your book's. </h1>
                  <div className="d-flex">
                    <div className="p-4 align-self-start">
                      <i className="fas fa-check fa-2x" />
                    </div>
                    <div className="p-4 align-self-end ">
                      Fill the form and let people know about the condition of your book,
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="p-4 align-self-start">
                      <i className="fas fa-check fa-2x" />
                    </div>
                    <div className="p-4 align-self-end">
                      Be a part of our family and help promote reading culture with us.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-seller-custom card text-center card-form" style={{ backgroundColor:'#3292a6' }}>
                    <div className="card-body">
                      <h3 className="fill-form-text">Fill the form to sell your book.</h3>
                      <Form  onSubmit={this.createbooks}>
                        <div className="form-group">
                        <Input
              className="form-control form-control-lg" 
              type="text"
              name="bookname"
              onChange={this.onChange}
              placeholder="name"
              value={this.state.bookname}
            />
                        </div>
                        <div className="form-group">
                        <Input
              className="form-control form-control-lg"
              type="text"
              name="status"
              placeholder="status"

              onChange={this.onChange}
              value={this.state.status}
            /> </div>
                        <div className="form-group">
                        <Input
              className="form-control form-control-lg"
              type="number"
              name="age"
              placeholder="age(as in how old the book is in year)"

              onChange={this.onChange}
              value={this.state.age}
            />   </div>
             <div className="form-group">
                        <Input
              className="form-control form-control-lg"
              type="date"
              name="publish_year"
              placeholder="publish_year"

              onChange={this.onChange}
              value={this.state.publish_year}
            />   </div>
                        <div className="form-group">
                          {/* #bookauthor */}
                          <Input
              className="form-control form-control-lg"
              type="text"
              name="author"
              placeholder="author"

              onChange={this.onChange}
              value={this.state.author}
            /> </div>
                        <div className="form-group">

                          {/* bookgenre */}
                          <Input
              className="form-control form-control-lg"
              type="text"
              name="genre"
              placeholder="genre"

              onChange={this.onChange}
              value={this.state.genre}
            /> </div>
                        <div className="form-group">
                          {/* book price */}
                          <Input
              className="form-control form-control-lg"
              type="number"
              name="price"
              placeholder="price"

              onChange={this.onChange}
              value={this.state.price}
            /> </div>
                        <div className="form-group">
                        <TextArea 
              className="form-control form-control-lg"
              type="text"
              name="description"
              placeholder="Description"

              onChange={this.onChange}
              placeholder="Description"
              value={this.state.description}
            /></div>
                        <div className="form-group ">
                        <input
            className="form-control form-control-lg"
            type="file"
                    name="bookpicture"
              placeholder="bookpicture"
                   
                   accept="image/png, image/jpeg" 
                   onChange={this.handleImageChange} required/> <span>Upload book image</span> 
                        </div>
                        <div className="form-group">
                        <Input
              className="form-control form-control-lg"
              type="checkbox"
              name="hardcopy"
              placeholder="hardcopy"

              onChange={this.onChange}
              value={this.state.hardcopy}
            />   </div>
                        <Button type="submit"  className="btn btn-outline-light btn-block" > Submit</Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End of main content */}
      </div>
        )
    }
}
const mapStateToProps=state=>{
  console.log(state)
  
  return{
    token:state.token
  }
}


export default connect(mapStateToProps)(Sell);