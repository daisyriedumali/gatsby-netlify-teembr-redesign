import React from 'react'
import imagePathHelper from '../components/helper/imagePathHelper'

const TestimonialCard = ({ iconfill, data }) => {
    return (
        <div className="testimonial-card">
            <img src={imagePathHelper("/testimonials/" + data.image)} />
            <h3>{data.name}</h3>
            <p>{data.testimonial}</p>
        </div>
    );
}

export default TestimonialCard