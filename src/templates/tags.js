import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import logo from '../img/logo.png';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <a>{post.node.frontmatter.title}</a>
        </Link>
      </li>
    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <section className="section tags-page">
        <div>
          <Helmet title={'Tags | Teembr'}
                  meta={[
                      { name: 'description', content: 'We help businesses create products and brands. Helping businesses with everything from branding, product design and social media strategies.' },
                      { name: 'keywords', content: 'branding, branding identity, branded content, branding strategies' }
                  ]}
                  link={[
                      { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
                  ]} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="section-title">{tagHeader}</h3>
                <ul className="postlist">{postLinks}</ul>
                <p className="browse-tags">
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
