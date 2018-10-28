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

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('readystatechange', function docStateChange(e) {
      if(e.target.readystate === 'complete') {
          let hash = window.location.hash.substring(1);
          console.log('====hasha');
          if(hash) {
              console.log('====hash' + hash);
              let selectorRect = document.querySelector('#' + hash).getBoundingClientRect();
              let topNav = document.querySelector('.top-nav');
              let scrollToTop = (selectorRect.top + window.pageYOffset + 5) - topNav.clientHeight;
              scrollToTop = (!topNav.classList.contains('sticky-nav')) ? scrollToTop - topNav.clientHeight : scrollToTop;

              window.scrollTo({ top: scrollToTop + window.pageYOffset, left: 0, behavior: 'smooth' });
          }
          e.target.removeEventListener('readystatechange', docStateChange);
          done();
      }
  });
      
    window.addEventListener('scroll', this.handleScroll);

    document.querySelector('.burger-menu').addEventListener('click', function(e) {
        let el = document.querySelector('.mobile-menu');
        el.classList.add('show');

        let body = document.querySelector('body');
        body.classList.add('freeze-body');
    });

    document.querySelector('.close-button').addEventListener('click', function(e) {
        let el = document.querySelector('.mobile-menu');
        el.classList.remove('show');

        let body = document.querySelector('body');
        body.classList.remove('freeze-body');
    });

    this.state.ourServices = document.querySelector('#our-services');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onClickNav(navClass) {
    if(window.location.pathname == '/') {
      let selectorRect = document.querySelector('#' + navClass).getBoundingClientRect();
      let topNav = document.querySelector('.top-nav');
      let scrollToTop = (selectorRect.top + window.pageYOffset + 5) - topNav.clientHeight;
      scrollToTop = (!topNav.classList.contains('sticky-nav')) ? scrollToTop - topNav.clientHeight : scrollToTop;
      
      console.log(scrollToTop);
      window.scrollTo({ top: scrollToTop, left: 0, behavior: 'smooth' });
      console.log('should scroll: '+ window.pageYOffset);
    } else {
      window.location.href = '/#' + navClass;
    }

    //WHEN BURGER MENU IS OPEN,
    //ANY CLICK ON THE NAV BUTTONS SHOULD CLOSE THE BURGER MENU
    //AND REMOVE THE FREEZE-BODY CLASS IN BODY
    let el = document.querySelector('.mobile-menu');
    el.classList.remove('show');

    let body = document.querySelector('body');
    body.classList.remove('freeze-body');
  }

  handleScroll(e) {
    let topNav = document.querySelector('.top-nav');
    let jumbotron = document.querySelector('.jumbotron');
    if(window.pageYOffset > jumbotron.clientHeight - topNav.clientHeight) {
      topNav.classList.add('sticky-nav');
    } else {
      topNav.classList.remove('sticky-nav');
    }
  }

  render() {
    return (
      <div>
        <div className="top-nav" style={{'zIndex':100}}>
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