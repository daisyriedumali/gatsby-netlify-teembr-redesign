import React from 'react'

const CaseStudiesCard = ({ iconfill }) => {
    return (
        <div className="case-studies-card">
            <img src="/img/case-studies/crazy-rich-asians.jpg" />
            <div>
                <h3>Crazy Rich Asians</h3>
                <a href="" className="btn">Read More</a>
            </div>
        </div>
    );
}

export default CaseStudiesCard