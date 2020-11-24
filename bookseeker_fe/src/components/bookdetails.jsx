import React, { Component } from 'react'
import './style/main.css'
import poter from "./pic/poter-card.webp"


export class bookdetail extends Component {

render() {
return(
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
        <section id="id">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{height: '16rem'}}>
                  <img className='img_last' src={poter} />
                </div>
              </div>
              <div className="col-md-8">
                <div className="details-text">
                  <h2>Harry potter and chamber of secrets</h2>
                  <p>Author: J.K. Rowling</p>
                  <p>published:07/01/2009</p>
                  <h1 className="text-warning">Rs.500</h1>
                </div>
                <button className="btn btn-warning book-button ">Rent</button>
                <button className="btn btn-success book-button">Buy</button>
                <button className="btn btn-primary book-button">Add to cart</button>
                <p className="book-detail-price">Price negotiable</p>
              </div>
            </div>
          </div>
        </section>
      </div>
)
}
}
export default bookdetail

