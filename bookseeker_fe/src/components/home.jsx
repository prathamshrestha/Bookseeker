import React, { Component } from 'react'
import './style/main.css'
import lord1 from './pic/lord1.jpg'
import dashboard from './dashboard.jsx'
import * as action from '../store/actions/auth'



export class Home extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
        <link rel="stylesheet" href="C:\Users\Pratham\OneDrive\Documents\Minor_project\Bookseeker\bookseeker_fe\src\components\style\main.css" />
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
              
            {
                 this.props.isAuthenticated ?
                 <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href='/dashboard/' className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="/profile2/" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                  <a onClick={action.Logout} className="nav-link">Logout</a>
                </li>
                </ul>
                  :
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/register/" className="nav-link">sign up</a>
                  </li>
                  <li className="nav-item">
                    <a href="/login2/" className="nav-link">log in</a>
                  </li>
                </ul>
  }


            </div>
          </div>
        </nav>
        {/* End of navbar */}
        {/* Showcase */}
        <section id="showcase" className="py-5 ">
          <div className="primary-overlay text-white">
            <div className="container index-margin">
              <div className="row">
                <div className="col-lg-6 text-center">
                  <h1 className="display-2 mt-5 pt-5 mb-4">
                    Get Your favourite Books
                  </h1>
                  <a href="/booklist/" className="btn btn-outline-secondary btn-lg text-white">
                    Buy books
                  </a>
                  <a href="/booklist/" className="btn btn-outline-secondary btn-lg text-white">
                    Rent books
                  </a>
                  <a href="/sell/" className="btn btn-outline-secondary btn-lg text-white">
                    Sell books
                  </a>
                </div>
                <div className="col-lg-6">
                  <img src={lord1} alt="book" className="img-fluid d-none d-lg-block mt-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of showcase */}
        {/* Start of How to use section */}
        <section id="about" className="pt-5 pb-3 text-center bg-how">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="info-header mb-5">
                  <h1 className="how-color pb-3">
                    How to use?
                  </h1>
                  <p className="lead pb-3 mt-3">
                    Use the buy and rent button's to buy or rent your favourite book's and the sell button to sell the books you want.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of How to use section */}
        {/* Start of contact */}
        <section id="contact" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <h3>Get in touch</h3>
                <p className="lead">Contact us and find the answer's of all your queries.</p>
                <form>
                  <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder="name" />
                  </div>
                  <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-envelope" />
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder="email" />
                  </div>
                  <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-pencil-alt" />
                      </span>
                    </div>
                    <textarea type="text" className="form-control" placeholder="Message" rows={5} defaultValue={""} />
                  </div>
                  <input type="submit" defaultValue="submit" className="btn btn-contact btn-block btn-lg" />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End of contact */}
        {/*start of  footer */}
        <footer id="main-footer" className="py-5 bg-footer text-white">
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
      </div>
    );
  }
}
    
  


export default Home




