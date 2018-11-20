import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Author from '../components/Author'
import BlogNav from '../components/BlogNav'
import Content, { HTMLContent } from '../components/Content'
import imagePathHelper from '../components/helper/imagePathHelper'
import logo from '../img/logo.png';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  authorName,
  authorImage,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      
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
              <Author authorName={authorName} authorImage={authorImage} />
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
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
}

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const blogUrl = "www.teembr.com" + location.pathname;
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
          <Helmet>
            <meta name="description" content={post.frontmatter.description} />
            <meta name="keywords" content='branding, branding identity, branded content, branding strategies' />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta property="og:description" content={post.frontmatter.description} />
            <meta property="og:url" content={blogUrl} />
            <meta property="og:image" content={imagePathHelper(post.frontmatter.image)} />
            <meta property="fb:app_id" content="886703824858261" />
            <link rel="shortcut icon" type='image/png' href={logo} />
          </Helmet>
          }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      authorName={post.frontmatter.authorName}
      authorImage={post.frontmatter.authorImage}
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
        image
        authorName
        authorImage
      }
    }
  }
`
