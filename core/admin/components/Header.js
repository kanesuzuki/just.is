import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <ul className="Header__navContainer">
          <Link to="/" className="Header__navItem Header__navItem">Dashboard</Link>
          <Link to="/admin/new-page" className="Header__navItem Header__navItem">New Page</Link>
        </ul>
      </div>
    )
  }
}


export default Header