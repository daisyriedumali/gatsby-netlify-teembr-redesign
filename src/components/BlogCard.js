import React from 'react'
import imagePathHelper from '../components/helper/imagePathHelper'

const BlogCard = ({ iconfill, data }) => {
    return (
        <div className="blog-card">
            <img src={imagePathHelper(data.image)} />
            <div>
                {data.claps}
                <h2><a href={data.link}>{data.title}</a></h2>
                <p>{data.snippet}</p>
                <div className="author-info">
                    <img src={imagePathHelper(data.headshot)} />
                    <div>
                        {data.author}
                        <span>{data.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard