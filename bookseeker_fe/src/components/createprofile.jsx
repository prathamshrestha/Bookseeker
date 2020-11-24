import React, { Component } from 'react'
import { Button, Form, Input, Label, Header, Icon, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import * as data from '../store/actions/auth'
import axios from 'axios'


const initialstate={
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
export class createprofile extends Component {
    state = initialstate


    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/user/${data.userid}/`)
          .then(res => {
            this.setState({ profile1: res.data })
          })}

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      handleSubmit=e=>{
        e.preventDefault();
        this.setState(initialstate)
        let form_data = new FormData();
        
        form_data.append('fav_book', this.state.fav_book);
        form_data.append('bio', this.state.bio);
        form_data.append('contact_info', this.state.contact_info);
        form_data.append('location', this.state.location);
        axios.post('http://127.0.0.1:8000/profile/', form_data).then((response)=>{
            if (response.status===201){
               alert('profile created! ')
               window.location.reload()
               this.props.history.push('/profile/')
            }
       }
         )
         .catch(err=>console.log(err))
        
       };


      
    render() {
        const formStyle = {
            paddingLeft: 20 + "em",
    
          };
          const {profile1,profile2}=this.state
        return (
        <div>
            <Form style={formStyle}   onSubmit={this.handleSubmit}>
      <Form.Field style={{width:1000}} >
        <Label size='large' for="first_name">First Name:</Label>
        <Input 
        type="text"
        name="first_name"
        onChange={this.onChange}
        placeholder="First name"
        defaultValue={profile1.first_name}/>
        
        <div style={{color:'crimson', fontSize:12}}>
        {/* {this.state.bookname_error} */}
      </div>
      </Form.Field>
      <Form.Field style={{width:1000}}>
        <Label size='large' for="last_name">Last Name:</Label>
        
        <Input 
        type="text"
        name="last_name"
        onChange={this.onChange}
        placeholder="Last name"
        defaultValue={profile1.last_name}/>        
        <div style={{color:'crimson', fontSize:12}}>
        {/* {this.state.desc_error} */}
      </div>
        
      </Form.Field>
      <Form.Field style={{width:500}}>
        <Label size='large' for="username">Username:</Label>
        
        <Input 
        type="text"
        name="username"
        onChange={this.onChange}
        placeholder="Username"
        defaultValue={profile1.username}/>  
        
      </Form.Field>
      
      <Form.Field style={{width:500}}>
        <Label size='large' for="email">Email:</Label>
        <Input 
        type="text"
        name="email"
        onChange={this.onChange}
        placeholder="Email address"
        defaultValue={profile1.email}/>  
        
      </Form.Field>

      <Form.Field style={{width:500}}>
        <Label size='large' for="fav_book">Favourite Book:</Label>
        <Input 
        type="text"
        name="fav_book"
        onChange={this.onChange}
        placeholder="Favourite book"
        value={this.state.fav_book}/>  
        
      </Form.Field>

      <Form.Field style={{width:500}}>
        <Label size='large' for="bio">Bio:</Label>
        <TextArea
        type="text"
        name="bio"
        onChange={this.onChange}
        placeholder="Bio"
        value={this.state.bio}/>  
        
      </Form.Field>

      <Form.Field style={{width:500}}>
        <Label size='large' for="contact_info">Contact info:</Label>
        <Input 
        type="text"
        name="contact_info"
        onChange={this.onChange}
        placeholder="Contact info"
        value={this.state.contact_info}/>  
        
      </Form.Field>
      <Form.Field style={{width:500}}>
        <Label size='large' for="location">Location:</Label>
        <Input 
        type="text"
        name="location"
        onChange={this.onChange}
        placeholder="Location"
        value={this.state.location}/>  
        
      </Form.Field>
      <Button size='big' type='submit' >Save</Button>

      
    </Form> 
        </div>
        )
        };
    }

export default createprofile
