import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import BlogCard from '../components/BlogCard';

export default class BlogPage extends React.Component {
  render() {
    return (
        <section className="blogs-posts">
          <div className="blog-cards">
            <BlogCard className="featured-blog" />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
    )
  }
}