import React from 'react'

const TestimonialCard = ({ iconfill, data }) => {
    return (
        <div className="testimonial-card">
            <img src={"/img/testimonials/" + data.image} />
            <h3>{data.name}</h3>
            <p>{data.testimonial}</p>
        </div>
    );
}

export default TestimonialCard