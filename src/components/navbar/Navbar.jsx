/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
         <i className="fas fa-mobile-alt"></i> 
         <span className="text-warning">Phone </span>Fortress
        </Link>
      </div>
    </nav>
  )
}

export default Navbar