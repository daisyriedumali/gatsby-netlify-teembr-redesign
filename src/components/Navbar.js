import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <div className="top-nav">
    <div>
      <h1>Teembr</h1>
      <nav>
        <a href="">Our Services</a>
        <a href="">Case Studies</a>
        <a href="">Testimonials</a>
        <a href="">Blog</a>
        <a href="">About Us</a>
        <a href="" className="btn">Contact Us</a>
      </nav>
    </div>
  </div>
)

export default Navbar
