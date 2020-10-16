import { Button} from 'semantic-ui-react';

import React from 'react'
import axios from "axios";

// import { API_URL2} from "../constants";
// import DetailNotice from './DetailNotice';
// import UpdateNotice from './UpdateNotice'
// import {Link, RichText, Date} from 'prismic-reactjs';

class List extends React.Component {
  state = {
    id: "",
    bookname:"",
    age: "",
    bookpicture:[],
    books:[],
    
    isDetailOpen: false,
    isUpdateOpen: false
  };

  componentDidMount() {
    axios.get('http://localhost:8000/booksell/')
      .then(res => {
        this.setState({ books: res.data })


      })

  }
  detail_data(id, name, bookpicture,age) {
    this.setState({
      isDetailOpen: true,
      id: id,
      name: name,
      bookpicture: bookpicture,
      age:age

    })}



  
  update_data(id,bookname,bookpicture,age) {
    this.setState({ 
      isUpdateOpen: true,
      id:id,
      bookname:bookname,
      bookpicture:bookpicture,
      age:age
     })
  }

  del_data(id) {
    console.log(id);
    axios.delete(`http://localhost:8000/booksell/${id}`, this.state)
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
    const { id, bookname, bookpicture, age } = this.state



    return (
      <div>


        {/* <DetailBook id={id} name={name} bookpicture={bookpicture} age={age} isDetailOpen={isDetailOpen} onDetailClose={this.onDetailClose} ></DetailBook> */}
        {/* <UpdateBook id={id} name={name} bookpicture={bookpicture} age={age} isUpdateOpen={isUpdateOpen} onUpdateClose={this.onUpdateClose}></UpdateBook> */}
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(books => (

              <tr textAlign="center" key={books.id}>
                <td data-label="Book Name" >{books.bookname}  </td>
                
                <td data-label="Action">

                  <Button type="submit" onClick={this.detail_data.bind(this, books.id, books.bookname, books.bookpicture, books.age)} > Detail</Button>

                  <Button type="submit" onClick={this.update_data.bind(this, books.id, books.bookname, books.bookpicture, books.age)}>Update</Button>

                  <Button type="submit" onClick={this.del_data.bind(this, books.id)} >Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <a href="/sellbook/">Sell Book</a>
        </div>
      </div>
    )
  };
}


export default List;