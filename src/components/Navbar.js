import React, { Component } from 'react';
import imagePathHelper from '../components/helper/imagePathHelper'

class Navbar extends Component {
  
  componentDidMount() {
    document.querySelector('.burger-menu').addEventListener('click', function(e) {
        let el = document.querySelector('.mobile-menu');
        el.classList.add('show');
    });
    document.querySelector('.close-button').addEventListener('click', function(e) {
        let el = document.querySelector('.mobile-menu');
        el.classList.remove('show');
    });
  }

  render() {
    return (
      <div>
        <div className="top-nav">
          <div>
            <img src={imagePathHelper('svg/burger-menu.svg')} className="burger-menu" />
            <h1>
              <a href="/">
                <img src={imagePathHelper('svg/teembr-logo.svg')}/>
              </a>
            </h1>
            <nav>
              <a href="#" className="nav-our-services">Our Services</a>
              <a href="">Case Studies</a>
              <a href="">Testimonials</a>
              <a href="/blog">Blog</a>
              <a href="/about-us">About Us</a>
              <a href="" className="btn">Contact Us</a>
            </nav>
          </div>
        </div>
        <div className="mobile-menu">
          <img src={imagePathHelper('svg/close-button.svg')} className="close-button" />
          <h1>
            <a href="/">
              <img src={imagePathHelper('svg/teembr-logo.svg')} />
            </a>
          </h1>
          <nav>
            <a href="#" className="nav-our-services">Our Services</a>
            <a href="">Case Studies</a>
            <a href="">Testimonials</a>
            <a href="/blog">Blog</a>
            <a href="/about-us">About Us</a>
            <a href="" className="btn">Contact Us</a>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar;