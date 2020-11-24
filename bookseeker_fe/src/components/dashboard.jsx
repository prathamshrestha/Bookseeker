import React, { Component } from 'react'
import { Button} from 'semantic-ui-react';

import './style/main.css'
import axios from "axios";
import * as action from '../store/actions/auth'
import {connect} from 'react-redux'
import Detailbook from './userbookdetail.jsx'
import Updatebook from './userbookupdate.jsx'


export class Dashboard extends Component {
 
    state = {
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
      
      isDetailOpen: false,
      isUpdateOpen: false
    };
  
    componentWillReceiveProps(newprops) {
      if (newprops.token){
          axios.defaults.headers={
            'Authorization':`token ${newprops.token}`
          }}
      axios.get(`http://localhost:8000/userbooklist/`)
        .then(res => {
          this.setState({ books: res.data })
  
  
        })
  
    }

    detail_data(id, bookname,bookpicture,author,genre,publish_year,price,age,hardcopy,status, description) {
      this.setState({
        isDetailOpen: true,
        id: id,
         bookname:  bookname,
        description: description,
        bookpicture:bookpicture,
        author:author,
        genre:genre,
        publish_year:publish_year,
        price:price,
        age:age,
        hardcopy:hardcopy,
        status:status,
  
      })}
    update_data(id, bookname,bookpicture,author,genre,publish_year,price,age,hardcopy,status, description) {
      this.setState({ 
        isUpdateOpen: true,
        id:id,
        bookname:bookname,
        description:description,
        bookpicture:bookpicture,
        author:author,
        genre:genre,
        publish_year:publish_year,
        price:price,
        age:age,
        hardcopy:hardcopy,
        status:status,
       })
    }
    del_data(id) {
      console.log(id);
      axios.delete(`http://localhost:8000/book_update_delete/${id}`, this.state)
      .then((response) => {
  
        if (response.status === 200) {
            alert('Notice Deleted! ')
  
      }}
      )
      .then(window.location.reload())
      
    };  
    onDetailClose = () => {
      this.setState({
        isDetailOpen: false,
  
      })
    }
    onUpdateClose = () => {
      this.setState({
        isUpdateOpen: false
      })
    }
    render() {
      const { isDetailOpen } = this.state
      const { isUpdateOpen } = this.state
      const { id, bookname,bookpicture,author,genre,publish_year,price,age,hardcopy,status, description } = this.state
        return (
          
            <div>
              <Detailbook id={id} bookname={bookname} bookpicture={bookpicture} author={author} genre={genre} publish_year={publish_year} price={price} age={age} hardcopy={hardcopy} status={status} description={description} isDetailOpen={isDetailOpen} onDetailClose={this.onDetailClose} />
              <Updatebook  id={id} bookname={bookname} bookpicture={bookpicture} author={author} genre={genre} publish_year={publish_year} price={price} age={age} hardcopy={hardcopy} status={status} description={description} isDetailOpen={isUpdateOpen} onDetailClose={this.onDetailClose}/>
        
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
                      <a href="profile.html" className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                  <a onClick={action.Logout} className="nav-link">Logout</a>
                  </li>
                    </ul>
                    :
                    
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
            {/* start of profile name */}
            <header id="main-dashboard-header" className="py-2 bg-dark text-white">
              <div className="container dashboard-margin">
                <div className="row">
                  <div className="col-md-6">
                    <h1>
                      Joe rogan
                    </h1>
                  </div>
                </div>
              </div>
            </header>
            {/* end of profile name */}
            {/* start of dashboard button */}
            <section id="dashboard" className="py-4 mb-4 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <a href="#" className="btn btn-primary bg-primary btn-block" data-toggle="modal" data-target="#addpostmodal">
                      <i className="fas fa-plus" />Add books
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#" className="btn btn-primary bg-success btn-block" data-toggle="modal" data-target="#addpostmodal">
                      <i className="fas fa-plus" />Action
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* end of dashboard button */}
            {/* start of  posts  */}
            <section id="posts">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className="card">
                      <div className="card-header">
                        <h4>
                          Latest Posts
                        </h4>
                      </div>
                      <table className="table table-striped">
                        <thead className="thead-dark">
                          <tr>
                            <th>
                              #
                            </th>
                            <th>title</th>
                            <th />
                            <th>Actions</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          
                          {this.state.books.map(books => (
                            <tr key={books.id}>
                           
                            <td>{books.bookname}</td>
                            <td>
                            <Button type="submit" className="btn btn-secondary"  onClick={this.detail_data.bind(this, books.id, books.bookname, books.description, books.status, books.hardcopy, books.age, books.author, books.genre, books.price, books.bookpicture, books.publish_year)}> Detail</Button>

                            <Button type="submit" className="btn btn-secondary" onClick={this.update_data.bind(this, books.id, books.bookname, books.description, books.status, books.status, books.age, books.author, books.genre, books.price, books.bookpicture, books.publish_year  )}> Update </Button>
                            <Button type="submit" className="btn btn-secondary" onClick={this.del_data.bind(this, books.id)}> Delete </Button>
                            </td>
                            </tr>
                          ))}
                          
                          
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end of posts */}
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

export default connect(mapStateToProps)(Dashboard);