import React, { Component } from 'react'

import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import { BookFilled } from '@ant-design/icons';


const FormItem = Form.Item;

export class Registration extends Component {
  

    handleFormSubmit=(values)=>{
      console.log('Received values of form: ', values.username,values.email,values.password);
      this.props.onAuth(values.first_name,values.last_name,values.username,values.email, values.password);
      this.props.history.push('/home/');
    }



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
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
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
        <section className="signup-body signup-margin" >
          <div className="row">
            <div className="col-lg-4">
              &nbsp;
            </div>
            <div className="col-lg-4 signup-form-margin">
              <div className="card  text-center card-form" style={{ backgroundColor:'#3292a6' }}>
                <div className="card-body ">
                  <h3>Sign up </h3>
                  <p>Please fill out this form to register</p>
          <Form onFinish={(values) => this.handleFormSubmit(values)}>
          <FormItem label="First Name" name="first_name">
          <Input  placeholder="Put a First name here" className="btn btn-outline-light btn-block" />
        </FormItem>
        <FormItem label="Last name" name="last_name">
          <Input  placeholder="Put a Last name here" className="btn btn-outline-light btn-block" />
        </FormItem>
  
        <FormItem label="Username" name="username">
          <Input  placeholder="Put a Username here" className="btn btn-outline-light btn-block"/>
        </FormItem>
  
        <FormItem label="email" name="email" >
          <Input  placeholder="Enter email" className="btn btn-outline-light btn-block"/>
        </FormItem>
        <FormItem label="Password" name="password">
          <Input  placeholder="Enter password" className="btn btn-outline-light btn-block" />
        </FormItem>
        <FormItem label="Confirm Password" name="confirmpassword">
          <Input  placeholder="Enter confrim password" className="btn btn-outline-light btn-block" />
        </FormItem>

  
        <FormItem >
          <Button type="primary"   htmlType="submit" className="btn btn-outline-light btn-block">Submit</Button>
          already have an account?<NavLink style={{marginRight: '10px'}} 
                        to='/login/'> login </NavLink>
        </FormItem>
      </Form>
      </div>
              </div>
            </div>
          </div>
          {/* End of signup card */}
        </section>
    </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (first_name,last_name,username,email, password) => dispatch(actions.authRegistration(first_name,last_name,username,email, password)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);