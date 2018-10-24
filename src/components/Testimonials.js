import React, { Component } from 'react';
import TestimonialCard from '../components/TestimonialCard'

const data = [
    {
        name        : 'Chad Adam Shiflett',
        testimonial : 'I have to say Teembr has made my business successful. They work with you on every design making sure its exactly what you need. the customer service and overall friendliness is unmatched. Best in the design industry and will be my go to from here on! Best in the Business!',
        image       : 'chad_adam_shiflett.jpg'
    },
    {
        name        : 'Levon Darakchyan',
        testimonial : 'I cannot recommend Teembr enough. Amazing customer support and fast turnaround time. Super friendly as well. All projects i have done with Teembr have blew me away starting from their creative to their excellent customer support. I cannot recommend enough. If you are in need of designs definitely hit them up.',
        image       : 'levon_darakchyan.jpg'
    },
    {
        name        : 'Noure Ddine',
        testimonial : 'Awesome designers and amazing customer support. I am so happy working with them, also, thank you with your marketing advice. Highly Recommended!',
        image       : 'noure_ddine.jpg'
    }
];

class Testimonials extends Component {
  
  getTestimonialCards() {
    let cards = data.map(function(datum, index){
        return <TestimonialCard data={datum} key={index}/>;
    });
    
    return cards;
  }

  componentDidMount() {
    // let hash = window.location.hash.substring(1);
    // if(hash) {
    //   let selectorRect = document.querySelector('#' + hash).getBoundingClientRect();
    //   let topNav = document.querySelector('.top-nav');
    //   let scrollToTop = (selectorRect.top + window.pageYOffset + 5) - topNav.clientHeight;
    //   scrollToTop = (!topNav.classList.contains('sticky-nav')) ? scrollToTop - topNav.clientHeight : scrollToTop;

    //   window.scrollTo({ top: scrollToTop + window.pageYOffset, left: 0, behavior: 'smooth' });
    // }
  }

  render() {
    return (
      <div className="testimonials" id="testimonials">
        <div>
          <h3 className="section-title">Testimonials</h3>
          <div className="testimonial-cards">
              {this.getTestimonialCards()}
          </div>
          <a href="https://www.facebook.com/teembrdesigns/reviews" target="_blank" rel="nofollow noopener">See All Testimonials</a>
        </div>
      </div>
    );
  }
}

export default Testimonials
