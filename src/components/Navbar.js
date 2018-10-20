import React, { Component } from 'react';
import imagePathHelper from '../components/helper/imagePathHelper'
import smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== `undefined`) {
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

class Navbar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        'our-services': '/#our-services'
    };
  }

  componentDidMount() {
    document.querySelector('.burger-menu').addEventListener('click', function(e) {
        let el = document.querySelector('.mobile-menu');
        el.classList.add('show');
    });
    document.querySelector('.close-button').addEventListener('click', function(e) {
        let el = document.querySelector('.mobile-menu');
        el.classList.remove('show');
    });

    this.state.ourServices = document.querySelector('#our-services');
  }

  onClickNav(navClass) {
    if(window.location.pathname == '/') {
      let selectorRect = document.querySelector('#' + navClass).getBoundingClientRect();
      window.scrollTo({ top: selectorRect.top + window.pageYOffset, left: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/#' + navClass;
    }
    //WHEN BURGER MENU IS OPEN, ANY CLICK ON THE NAV BUTTONS SHOULD CLOSE THE BURGER MENU
    let el = document.querySelector('.mobile-menu');
    el.classList.remove('show');
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
              <a href="#" 
                 onClick={this.onClickNav.bind(this, 'our-services')}>
                Our Services
              </a>
              <a href="#"
                 onClick={this.onClickNav.bind(this, 'case-studies')}>
                Case Studies
              </a>
              <a href="#"
                 onClick={this.onClickNav.bind(this, 'testimonials')}>
                Testimonials
              </a>
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
            <a href="#" 
               onClick={this.onClickNav.bind(this, 'our-services')}>
              Our Services
            </a>
            <a href="#"
               onClick={this.onClickNav.bind(this, 'case-studies')}>
              Case Studies
            </a>
            <a href="#"
               onClick={this.onClickNav.bind(this, 'testimonials')}>
              Testimonials
            </a>
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