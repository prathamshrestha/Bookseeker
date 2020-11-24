import React, { Component } from 'react'
import {  Form, Input, Label, Header, Icon, TextArea,Button, FormGroup, FormControl, ControlLabel } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import * as data from '../store/actions/auth'
import axios from 'axios'
import {connect} from 'react-redux'


export class profile extends Component {
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
      }
          // axios.get(`http://127.0.0.1:8000/retrieveprofile/1/`)
          // .then((res) => {
          //   this.setState({ profile2: res.data })
    
          //   console.log(res.data)
    
          // })
    
      }
    render() {
        const formStyle = {
            paddingLeft: 20 + "em",
    
          };
          const {profile1,profile2}=this.state
        return (
            <div>
                <Form style={formStyle}   >
          <Form.Field style={{width:1000}} >
            <Label size='large' for="bookname">First Name:</Label>
            {profile1.first_name}
            
            <div style={{color:'crimson', fontSize:12}}>
            {/* {this.state.bookname_error} */}
          </div>
          </Form.Field>
          <Form.Field style={{width:1000}}>
            <Label size='large' for="description">Last Name:</Label>
            
              {profile1.last_name}
            
            <div style={{color:'crimson', fontSize:12}}>
            {/* {this.state.desc_error} */}
          </div>
            
          </Form.Field>
          <Form.Field style={{width:500}}>
            <Label size='large' for="age">Username:</Label>
            
              {profile1.username}
            
          </Form.Field>
          
          <Form.Field style={{width:500}}>
            <Label size='large' for="status">Email:</Label>
            {profile1.email}
            
          </Form.Field>

          {/* <Form.Field style={{width:500}}>
            <Label size='large' for="status">Favourite Book:</Label>
            {profile2.fav_book}
            
          </Form.Field>

          <Form.Field style={{width:500}}>
            <Label size='large' for="status">Bio:</Label>
            {profile2.bio}
            
          </Form.Field>

          <Form.Field style={{width:500}}>
            <Label size='large' for="status">Contact info:</Label>
            {profile2.contact_info}
            
          </Form.Field>
          <Form.Field style={{width:500}}>
            <Label size='large' for="status">Location:</Label>
            {profile2.location}
            
          </Form.Field> */}
          
        </Form> 
        <div>
          <a href='/userbooks/'> My booklist </a>
          <a href='/sellbook/'> Sell Book </a>

        </div>
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


export default connect(mapStateToProps)(profile);

