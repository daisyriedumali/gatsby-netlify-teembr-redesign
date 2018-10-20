import React, { Component } from 'react';
import ServicesCard from '../components/ServicesCard';
import imagePathHelper from '../components/helper/imagePathHelper'

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

class ServicesSection extends Component {

    getServicesCards() {
        let cards = data.map(function(datum, index){
            return <ServicesCard data={datum} key={index}/>;
        });
        
        return cards;
    }

    componentDidMount() {
        let hash = window.location.hash.substring(1);
        if(hash) {
            let selectorRect = document.querySelector('#' + hash).getBoundingClientRect();
            window.scrollTo({ top: selectorRect.top + window.pageYOffset, left: 0, behavior: 'smooth' });
        }
    }

    render() {
        return (
            <div className="services-section" id="our-services">
                <div>
                    <h3 className="section-title">Our Services</h3>
                    <div className="services-cards">
                        {this.getServicesCards()}
                    </div>
                    <div className="services-logos">
                        <img key={1} src={imagePathHelper("services-logos/shopify-experts.png")}/>
                        <img key={2} src={imagePathHelper("services-logos/aws.png")}/>
                        <img key={3} src={imagePathHelper("services-logos/paypal.png")}/>
                        <img key={4} src={imagePathHelper("services-logos/mailchimp.png")}/>
                        <img key={5} src={imagePathHelper("services-logos/envato.png")}/>
                        <img key={6} src={imagePathHelper("services-logos/printful.png")}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesSection;