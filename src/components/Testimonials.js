import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = ({ iconfill }) => {
  return (
    <div className="testimonials">
        <div>
            <h3 className="section-title">Testimonials</h3>
            <div className="testimonial-cards">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
            <a href="/">See All Testimonials</a>
        </div>
    </div>
  );
}

export default Testimonials
