  
import React from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Form, Input, Label, Header, Icon, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import {DatePicker,useState}  from "react-datepicker";

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
}

class SellBookForm extends React.Component {
    state =
      initialstate;
    
    // componentDidMount() {
    //   if (this.props.books) {
    //     const { bookname, description, status,age, bookpicture } = this.props.books;
    //     this.setState({ bookname, description, status, age, bookpicture });
    //   }
    // }

    // onClose = () => {
    // this.props.onregisterClose()
    // console.log(this.props.id)
    // }
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
      form_data.append('bookpicture', this.state.bookpicture, this.state.bookpicture.name);
      form_data.append('bookname', this.state.bookname);
      form_data.append('description', this.state.description);
      form_data.append('age', this.state.age);
      form_data.append('status', this.state.status);

      
      axios.post('http://127.0.0.1:8000/booksell/', form_data).then((response)=>{
         if (response.status===201){
            alert('book listed in selling list! ')
            window.location.reload()
         }
  
    }
      ).catch(err=>console.log(err))
      
    };
  

    // validate=()=>{
    //   if (!this.state.name){
    //     this.setState({bookname_error:'Input fields cannot be empty'})
    //     console.log(this.state.bookname_error)
    //     return false
    //   }
    //   if (!this.state.description){
    //     this.setState({desc_error:'Input fields cannot be empty'})
    //     return false
    //   }
    //   if (!this.state.status){
    //     this.setState({date_error:'Input fields cannot be empty'})
    //     return false
    //   }
    //   if (!this.state.age){
    //     this.setState({date_error:'Input fields cannot be empty'})
    //     return false
    //   }
    //   return true
    // }
    
    // defaultIfEmpty = value => {
    //   return value === "" ? "" : value;
    // };
  
    render() {
      const formStyle = {
        paddingLeft: 20 + "em",

      };
     
    
      return (
        <div>
          
    <a href='/booklist/'  style={{paddingLeft:110+'em' , size:40} }>
    <Icon name='list' rectangular />
        books List
    </a>
    
          
          <Form style={formStyle} onSubmit={this.createbooks}  >
          <Form.Field style={{width:1000}} required>
            <Label size='large' for="bookname">Name:</Label>
            <Input 
              type="text"
              name="bookname"
              onChange={this.onChange}
              placeholder="name"
              value={this.state.bookname}
            />
            <div style={{color:'crimson', fontSize:12}}>
            {/* {this.state.bookname_error} */}
          </div>
          </Form.Field>
          <Form.Field style={{width:1000}}>
            <Label size='large' for="description">Description:</Label>
            <TextArea 
              type="text"
              name="description"
              onChange={this.onChange}
              placeholder="Description"
              value={this.state.description}
            />
            <div style={{color:'crimson', fontSize:12}}>
            {/* {this.state.desc_error} */}
          </div>
            
          </Form.Field>
          <Form.Field style={{width:500}}>
            <Label size='large' for="age">Age:</Label>
            <Input
              type="number"
              name="age"
              onChange={this.onChange}
              value={this.state.age}
            />
          </Form.Field>
          
          <Form.Field style={{width:500}}>
            <Label size='large' for="status">Status:</Label>
            <Input
              type="text"
              name="status"
              onChange={this.onChange}
              value={this.state.status}
            />
          </Form.Field>

            <Form.Field style={{width:500}}>
            <Label size='large' for="bookpicture">Book Picture:</Label>
            <input type="file"
                    name="bookpicture"
                   
                   accept="image/png, image/jpeg" 
                   onChange={this.handleImageChange} required/>
          </Form.Field>
          <Button size='big' type='submit' >Post</Button>
          
        </Form> 
        </div>
      );
    };
  };

  
export default SellBookForm;