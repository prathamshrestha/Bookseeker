import React, { Component } from 'react'
import './style/main.css'


export class signup extends Component {
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
        {/* start of signup card */}
        <section className="signup-body signup-margin" >
          <div className="row">
            <div className="col-lg-4">
              &nbsp;
            </div>
            <div className="col-lg-4 signup-form-margin">
              <div className="card  text-center card-form" style={{ backgroundColor:'#3292a6' }}>
                <div className="card-body ">
                  <h3>Sign up </h3>
                  <p>Please fill out this form to register</p>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" placeholder="Confirm-Password" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Contact" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Address" />
                    </div>
                    <input type="submit" defaultValue="Submit" className="btn btn-outline-light btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End of signup card */}
        </section>
      </div>
        )
    }
}

export default signup
