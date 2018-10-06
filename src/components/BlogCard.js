import React from 'react'

const BlogCard = ({ iconfill }) => {
    return (
        <div className="blog-card">
            <img src="/img/services/services-sketch-01.png" />
            <div>
                <span>Errol B. Tiozon and 1 other</span>
                <h2>Why investing in branding is important for...</h2>
                <p>The Harvard Review once warned the growing number of small business owners that there will soon be so many small businesses, owners will</p>
                <div>
                    <img src="" />
                    <a href="/">Errol B. Tiozon</a>
                    <span>Sep 5</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard