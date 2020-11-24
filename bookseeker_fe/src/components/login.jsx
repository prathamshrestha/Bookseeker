import React from 'react';
import {Modal} from 'semantic-ui-react'
import './style/main.css'

import { Form, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { BookFilled } from '@ant-design/icons';

const FormItem = Form.Item;
const antIcon = <BookFilled type="loading" style={{ fontSize: 24 }} spin />;


class login2 extends React.Component {

  state={
    username:"",
    password:""
  }
  onClose = () => {
    this.props.onLoginClose()
    console.log(this.props.id)

    
  }
  
  handleFinish = (values) => {
    console.log('Received values of form: ', values.username,values.password);
        this.props.onAuth(values.username, values.password);
        this.props.history.push('/home/');
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }
    const modalStyle = {

      backgroundColor: 'teal',
      // marginLeft: 30 + "em",
      // marginTop: 7 + "em",
      height: 'auto',
      width: 35 + "em",



  };
  const { isLoginOpen} = this.props

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
                  <a href="/register/" className="nav-link">sign up</a>
                </li>
                <li className="nav-item">
                  <a href="/login2/" className="nav-link">log in</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End of navbar */}
        {/* Login */}
        <section id="login ">
          <div className="container login-margin">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header "style={{ backgroundColor:'#3292a6' }}>
                    <h4>Login</h4>
                  </div>
                  <div className="card-body"></div>

                <Form  onFinish={(values) => this.handleFinish(values)} >
                <div className="form-group">
              <Form.Item label='Username' name="username" rules={[{ required: true }]}>
              
              <Input
              className="form-control"
                
              />
                  </Form.Item>
              </div>
              <div className="form-group">

              <Form.Item label='Password' name="password" rules={[{ required: true }]}>
              
              <Input
              type="password"
              className="form-control"
               
              />
              </Form.Item>
              </div>

              <FormItem >
                  <Button type="primary"   htmlType="submit" className="btn  btn-block" style={{ backgroundColor:'#3292a6' }}>Submit</Button>
                    Or 
                    <NavLink
                        style={{marginRight: '10px'}} 
                        to='/register/'> signup
                    </NavLink>
                    </FormItem>
                </Form>
                {/* </Modal.Content> */}
                {/* </Modal> */}
                </div>
                </div>
              </div>
            </div>
          
        </section>
        {/*start of  footer */}
        <footer id="main-footer" className="py-5 bg-login-footer text-white login-margin" >
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 ml-auto">
                <p className="lead">
                  Copyright © <span id="year" />
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* End of footer */}
      
        <div>
          
            
      </div>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login2);