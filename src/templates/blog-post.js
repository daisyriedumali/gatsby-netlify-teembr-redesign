import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import BlogNav from '../components/BlogNav'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <BlogNav />
      <section className="blog-post">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title">
                {title}
              </h1>
              <p className="description">{description}</p>
              <PostContent content={content} className="post-content" />
              {tags && tags.length ? (
                <div className="taglist" style={{ marginTop: `4rem` }}>
                  <ul>
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="blog-author-wrapper">
                <div className="blog-author">
                  <h4 className="mobile-only">About the Author</h4>
                  <div className="author-info-wrapper">
                    <img className="author-headshot" src="https://pbs.twimg.com/media/Dop6D7sUcAAPF2r.jpg" />
                    <div className="author-info">
                      <h4 className="desktop-only">About the Author</h4>
                      <p>Kim Seokjin is a coffee lover, former agency digital strategist, and Shopify Partner's Growth Marketing Manager. When he isn't hustling at the Shopify HQ, you can most likely find him dining at restaurants across the city or brushing up on the latest design trends</p>
                      <div className="social">
                        <span>Follow on:</span>
                        <a href="" className="facebook"><i className="fa fa-facebook" /></a>
                        <a href="" className="instagram"><i className="fa fa-instagram" /></a>
                        <a href="" className="medium"><i className="fa fa-medium" /></a>
                        <a href="" className="linkedin"><i className="fa fa-linkedin" /></a>
                        <a href="" className="google-plus"><i className="fa fa-google-plus" /></a>
                        <a href="" className="twitter"><i className="fa fa-twitter" /></a>
                        <a href="" className="dribbble"><i className="fa fa-dribbble" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
