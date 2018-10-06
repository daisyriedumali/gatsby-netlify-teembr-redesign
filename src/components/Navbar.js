import React, { Component } from 'react';
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
            <img src="img/svg/burger-menu.svg" className="burger-menu" />
            <h1>
              <a href="/">
                <img src="img/svg/teembr-logo.svg" />
              </a>
            </h1>
            <nav>
              <a href="">Our Services</a>
              <a href="">Case Studies</a>
              <a href="">Testimonials</a>
              <a href="">Blog</a>
              <a href="/about-us">About Us</a>
              <a href="" className="btn">Contact Us</a>
            </nav>
          </div>
        </div>
        <div className="mobile-menu">
          <img src="img/svg/close-button.svg" className="close-button" />
          <h1>
            <a href="/">
              <img src="img/svg/teembr-logo.svg" />
            </a>
          </h1>
          <nav>
            <a href="">Our Services</a>
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