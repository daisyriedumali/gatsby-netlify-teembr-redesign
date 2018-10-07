import React from 'react'
import CaseStudiesCard from '../components/CaseStudiesCard'

const CaseStudies = ({ iconfill }) => {
    return (
        <div className="case-studies">
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

export default CaseStudies