import React from 'react'

const ServicesCard = ({ iconfill, data }) => {
    return (
        <div className="services-card">
            <img src={"/img/services/" + data.image} />
            <div>
                <h3>{data.name}</h3>
                <a href={data.link} className="btn">Learn More</a>
            </div>
        </div>
    );
}

export default ServicesCard