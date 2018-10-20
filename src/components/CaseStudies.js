import React, { Component } from 'react';
import CaseStudiesCard from '../components/CaseStudiesCard'

class CaseStudies extends Component {
    
    componentDidMount() {
        let hash = window.location.hash.substring(1);
        if(hash) {
            let selectorRect = document.querySelector('#' + hash).getBoundingClientRect();
            window.scrollTo({ top: selectorRect.top + window.pageYOffset, left: 0, behavior: 'smooth' });
        }
    }
    
    render() {
        return (
            <div className="case-studies" id="case-studies">
                <div>
                    <h3 className="section-title">Case Studies</h3>
                    <div className="case-studies-cards">
                        <CaseStudiesCard />
                        <CaseStudiesCard />
                        <CaseStudiesCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseStudies