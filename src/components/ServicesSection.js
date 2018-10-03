import React from 'react'
import ServicesCard from '../components/ServicesCard'

const data = [
    {
        name  : 'Web Development',
        image : 'services-sketch-01.png',
        link  : '/'
    },
    {
        name  : 'Visual Design',
        image : 'services-sketch-02.png',
        link  : '/'
    },
    {
        name  : 'Social Media Strategy',
        image : 'services-sketch-03.png',
        link  : '/'
    },
    {
        name  : 'Messenger Chatbot Creation',
        image : 'services-sketch-04.png',
        link  : '/'
    }
];

const ServicesSection = ({ iconfill }) => {

    const getServicesCards = () => {
        let cards = data.map(function(datum){
            return <ServicesCard data={datum}/>;
        });
        
        return cards;
    }

    return (
        <div className="services-section">
            <div>
                <h3 className="section-title">Our Services</h3>
                <div className="services-cards">
                    {getServicesCards()}
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