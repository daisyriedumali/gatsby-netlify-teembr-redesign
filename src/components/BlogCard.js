import React from 'react'
import imagePathHelper from '../components/helper/imagePathHelper'

const BlogCard = ({ iconfill, data }) => {
    return (
        <div className="blog-card">
            <img src={imagePathHelper(data.image)} />
            <div>
                {data.claps}
                <h2>{data.title}</h2>
                <p>{data.snippet}</p>
                <div className="author-info">
                    <img src={imagePathHelper(data.headshot)} />
                    <div>
                        <a href={data.link}>{data.author}</a>
                        <span>{data.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard