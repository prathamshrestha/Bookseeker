import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, TextArea } from 'semantic-ui-react';
import axios from "axios";
import {connect} from 'react-redux'

import { Modal} from 'semantic-ui-react'

// const initialstate={
//   title_error: "",
//   desc_error: "",
//   date_error: "",
// }

class Updatebook extends Component {
//   state =
//       initialstate;

  onClose = () => {
    this.props.onUpdateClose()
    console.log(this.props.id)

    
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  up_book = (id) => {
      console.log(id)
    //   const isValid=this.validate();
    //   if (isValid){
    //     console.log(this.state)
    //     this.setState(initialstate)
    //   }
      if (this.props.token){
        axios.defaults.headers={
          'Authorization':`token ${this.props.token}`
        }}
    axios.patch(`http://localhost:8000/book_update_delete/${id}/`, this.state).then((response)=>{
      if (response.status===200){
         alert('book Updated! ')
         window.location.reload()
      }});}
    //   validate=()=>{
    //     if (!this.state.title){
    //       this.setState({title_error:'Input fields cannot be empty'})
    //       console.log(this.state.title_error)
    //       return false
    //     }
    //     if (!this.state.description){
    //       this.setState({desc_error:'Input fields cannot be empty'})
    //       return false
    //     }
    //     if (!this.state.post_at){
    //       this.setState({date_error:'Input fields cannot be empty'})
    //       return false
    //     }
    //     return true
    //   }
  render() {
    const modalStyle = {

      backgroundColor: 'teal',
      // marginLeft: 30 + "em",
      // marginTop: 7 + "em",
      height: 'auto',
      width: 35 + "em",



  };
    const { isUpdateOpen, id, bookname,bookpicture,author,genre,publish_year,price,age,hardcopy,status, description} = this.props
    return (
      <div>
        <Modal style={modalStyle} open={isUpdateOpen} onClose={this.onClose}>
          <Modal.Header>{bookname}</Modal.Header>
          <Modal.Content>

            <Modal.Description>
            <Form onSubmit={this.up_book}>
          <FormGroup>
            <Label for="bookname">Title:</Label>
            <Input
              type="text"
              name="bookname"
              onChange={this.onChange}
              defaultValue={bookname}
            />
           
          </FormGroup>
          <FormGroup>
            <Label for="description">Description:</Label>
            <TextArea
              type="text"
              name="description"
              onChange={this.onChange}
              defaultValue={description}
            />
            
          </FormGroup>
          
          <FormGroup>
            <Label for="author">Author:</Label>
            <Input
              type="text"
              name="author"
              onChange={this.onChange}
              defaultValue={author}
            />
            
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre:</Label>
            <Input
              type="text"
              name="genre"
              onChange={this.onChange}
              defaultValue={genre}
            />
            
          </FormGroup>
          <FormGroup>
            <Label for="status">Status:</Label>
            <Input
              type="text"
              name="status"
              onChange={this.onChange}
              defaultValue={status}
            />
            
          </FormGroup>
          <FormGroup>
            <Label for="publish_year">publish_year:</Label>
            <Input
              type="date"
              name="publish_year"
              onChange={this.onChange}
              defaultValue={publish_year}
            />
            
          </FormGroup>

          <FormGroup>
            <Label for="price">price:</Label>
            <Input
              type="number"
              name="price"
              onChange={this.onChange}
              defaultValue={price}
            />
            
          </FormGroup>

          <FormGroup>
            <Label for="age">age:</Label>
            <Input
              type="date"
              name="age"
              onChange={this.onChange}
              defaultValue={age}
            />
            
          </FormGroup>

          <FormGroup>
            <Label for="hardcopy">hardcopy:</Label>
            <Input
              type="checkbox"
              name="hardcopy"
              onChange={this.onChange}
              defaultValue={hardcopy}
            />
            
          </FormGroup>
          <Button onClick={this.up_book.bind(this,id)} content="Submit" type="submit">Update</Button>
        </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div >
    )
  }
}
const mapStateToProps=state=>{
    console.log(state)
    
    return{
      token:state.token
    }
  }
  
  export default connect(mapStateToProps)(Updatebook);