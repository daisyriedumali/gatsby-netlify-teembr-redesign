import React from 'react'

const BlogCard = ({ iconfill, data }) => {
    return (
        <div className="blog-card">
            <img src={"/img/blogs/" + data.image} />
            <div>
                {data.claps}
                <h2>{data.title}</h2>
                <p>{data.snippet}</p>
                <div className="author-info">
                    <img src={"/img/blogs/" + data.headshot} />
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