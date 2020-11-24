import React, { Component } from 'react'
import './style/main.css'
import lord1 from './pic/lord1.jpg'

export class buy_sell extends Component {
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
                      <a href="#" className="nav-link">Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Profile</a>
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
            {/* section/search-bar */}
            <section className="search-bar bg-buy-sell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <form>
                      <div className="search-bar-margin">
                        <div className="input-group">
                          <input type="search" placeholder="search for your favourite book's to explore or to buy, rent them " className="form-control" />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-link bg-light"><i className="fas fa-search" /></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}

export default buy_sell
