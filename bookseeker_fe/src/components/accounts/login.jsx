import React from 'react';
import {Modal} from 'semantic-ui-react'
import { Form, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import { BookFilled } from '@ant-design/icons';

const FormItem = Form.Item;
const antIcon = <BookFilled type="loading" style={{ fontSize: 24 }} spin />;


class Login extends React.Component {

  state={
    username:"",
    password:""
  }
  onClose = () => {
    this.props.onLoginClose()
    console.log(this.props.id)

    
  }
  // onChange=e=> this.setState({[e.target.name]:[e.target.value]})

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // this.props.form.validateFields((err,values) => {
  //   //   if (!err) {
        // this.props.onAuth(this.state.username, this.state.password);
        // this.props.history.push('/home/');
      
    
  // }
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
          
            {/* {errorMessage}
            {
                this.props.loading ?

                <Spin indicator={antIcon} />

                // : */} 
                 {/* <Modal style={modalStyle} open={isLoginOpen} onClose={this.onClose}> */}
           {/* <Modal.Header>{title}</Modal.Header> */}
          {/* // <Modal.Content> */}

          {/* //   <Modal.Description></Modal.Description> */}

                <Form  onFinish={(values) => this.handleFinish(values)} >

              <Form.Item label='Username' name="username" rules={[{ required: true }]}>
              
              <Input
                // type="text"
                // className="form-control"
                // name="username"
                // onChange={this.onChange}
                // value={username}
              />
                  </Form.Item>
              

              <Form.Item label='Password' name="password" rules={[{ required: true }]}>
              
              <Input
              type="password"
                // type="text"
                // className="form-control"
                // name="password"
                // onChange={this.onChange}
                // value={password}
              />
              </Form.Item>

              <FormItem >
                  <Button type="primary"   htmlType="submit">Submit</Button>
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
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);