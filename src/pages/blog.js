import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import BlogCard from '../components/BlogCard'
import BlogNav from '../components/BlogNav'
import Helmet from 'react-helmet';
import logo from '../img/logo.png';

export default class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <Helmet title="Blogs | Teembr" 
          meta={[
              { name: 'description', content: 'We help businesses create products and brands. Helping businesses with everything from branding, product design and social media strategies.' },
              { name: 'keywords', content: 'branding, branding identity, branded content, branding strategies' },
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
          ]} />
        <div className="blog">
            
            <div className="blog-cards-wrapper">
                <div className="blog-cards">
                    {posts
                      .map(({ node: post }) => (
                        <BlogCard 
                          data={{
                            image    : post.frontmatter.image,
                            title    : post.frontmatter.title,
                            snippet  : post.frontmatter.description.substr(0, 400),
                            headshot : post.frontmatter.authorImage,
                            author   : post.frontmatter.authorName,
                            link     : post.fields.slug,
                            date     : post.frontmatter.date
                          }}/>
                    ))}
                </div>
            </div>
        </div>        
      </section>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery2 {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image
            authorImage
            authorName
            description
          }
        }
      }
    }
  }
`