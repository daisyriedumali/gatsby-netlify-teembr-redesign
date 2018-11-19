import React, { Component } from 'react';
import CaseStudiesCard from '../components/CaseStudiesCard'

const caseStudiesData = [
    {
        title: "Branding and Identity for Victoria Winery",
        image: "https://res.cloudinary.com/teembr/image/upload/v1/img/blog/main_image_banner_victoria_winery.jpg",
        url  : "https://eloquent-volhard-97fa44.netlify.com/blog/2018-11-18-a-case-study-branding-and-identity-for-victoria-winery/"
    }
];
class CaseStudies extends Component {
    
    componentDidMount() {
        // let hash = window.location.hash.substring(1);
        // if(hash) {
        //     let selectorRect = document.querySelector('#' + hash).getBoundingClientRect();
        //     let topNav = document.querySelector('.top-nav');
        //     let scrollToTop = (selectorRect.top + window.pageYOffset + 5) - topNav.clientHeight;
        //     scrollToTop = (!topNav.classList.contains('sticky-nav')) ? scrollToTop - topNav.clientHeight : scrollToTop;

        //     window.scrollTo({ top: scrollToTop + window.pageYOffset, left: 0, behavior: 'smooth' });
        // }
    }
    
    render() {
        return (
            <div className="case-studies" id="case-studies">
                <div>
                    <h3 className="section-title">Case Studies</h3>
                    <div className="case-studies-cards">
                        <CaseStudiesCard caseStudy={caseStudiesData[0]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseStudies