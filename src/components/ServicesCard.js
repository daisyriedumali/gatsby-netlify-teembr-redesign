import React from 'react'

const ServicesCard = ({ iconfill }) => {
    return (
        <div className="services-card">
            <img src="/img/services/services-sketch-01.png" />
            <div>
                <h3>Web Development</h3>
                <a href="" className="btn">Learn More</a>
            </div>
        </div>
    );
}

export default ServicesCard