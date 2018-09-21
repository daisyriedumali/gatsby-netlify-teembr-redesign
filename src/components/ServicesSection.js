import React from 'react'
import ServicesCard from '../components/ServicesCard'

const ServicesSection = ({ iconfill }) => {
    return (
        <div className="services-section">
            <div>
                <h3>Our Services</h3>
                <div className="services-cards">
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </div>
                <div className="services-logos">
                    <img src="/img/services-logos/shopify-experts.png"/>
                    <img src="/img/services-logos/aws.png"/>
                    <img src="/img/services-logos/paypal.png"/>
                    <img src="/img/services-logos/mailchimp.png"/>
                    <img src="/img/services-logos/envato.png"/>
                    <img src="/img/services-logos/printful.png"/>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection