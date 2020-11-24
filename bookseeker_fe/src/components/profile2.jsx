import React, { Component } from 'react'
import './style/main.css'
import avatar from './pic/avatar.png'

import * as data from '../store/actions/auth'
import axios from 'axios'
import {connect} from 'react-redux'


export class profile2 extends Component {
  state = {
    id: "",
    first_name: "",
    last_name: "",
    username:"",
    email:'',
    fav_book:'',
    bio:'',
    is_student:'',
    contact_info:'',
    location: '',   
    profile1: [],
    profile2: [],

    
  };
componentWillReceiveProps(newProps) {
  const id= localStorage.getItem('id')
  console.log(newProps.token)
  if (newProps.token){
    axios.defaults.headers={
      'Authorization':`token ${newProps.token}`
    }
      axios.get(`http://127.0.0.1:8000/user/${data.userid}/`)
        .then((res) => {
          this.setState({ profile1: res.data })
            console.log(res.data)
  
        })
  }}

    render() {
      const {profile1}=this.state
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
            <a href="index.html" className="navbar-brand">
              <h3 className="d-inline align-middle ">BOOKSEEKER</h3>
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarcollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarcollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="dashboard.html" className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="profile.html" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                  <a href="signup.html" className="nav-link">sign up</a>
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">log in</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End of navbar */}
        {/* start of profile name */}
        <header id="main-dashboard-header" className="py-2 bg-dark text-white">
          <div className="container profile-margin">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-user" /> Edit Profile
                </h1>
              </div>
            </div>
          </div>
        </header>
        {/* end of profile name */}
        {/* start of profile button */}
        <section id="dashboard" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a href="#" className="btn btn-success btn-block">
                  <i className="fas fa-lock" />Change Password
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="btn btn-danger btn-block">
                  <i className="fas fa-trash" />Delete Account
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end of profile button */}
        {/* start of profile */}
        <section id="id">
          <div className="container ">
            <div className="row">
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header">
                    <h4>Edit profile</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                      <label size='large' for="bookname">First Name:</label>
                        <input type="text" className="form-control" defaultValue={profile1.first_name} />
                      </div>
                      <div className="form-group">
                      <label size='large' for="description">Last Name:</label>
                        <input type="text" className="form-control" defaultValue={profile1.last_name} />
                      </div>
                      <div className="form-group">
                      <label size='large' for="age">Username:</label>
                        <input type="text" className="form-control" defaultValue={profile1.username} />
                      </div>
                      <div className="form-group">
                      <label size='large' for="status">Email:</label>
                        <input type="text" className="form-control" defaultValue={profile1.email} />
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="exampleCheck1" />
                        <label htmlFor="Isstudent">Is student</label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea className="form-control" name="editor1" defaultValue='Your Bio' />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h3>Your Avator</h3>
                <img src={avatar}alt="" className="d-block img-fluid mb-3" />
                <button className="btn btn-primary btn-block">Edit Image</button>
                <button className="btn btn-danger btn-block">Delete Image</button>
              </div>
            </div>
          </div>
        </section>
        {/* End of profile */}
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

export default  connect(mapStateToProps)(profile2)
