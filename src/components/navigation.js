import React, { Component} from 'react'

class NavigationBar extends Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">React-Redux-Auth</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
              </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>

      </div>
    )
  }
}
export default NavigationBar
