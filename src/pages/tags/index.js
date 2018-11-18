import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import logo from '../../img/logo.png';

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
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
            <h1 className="section-title">Tags</h1>
            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} <span>{tag.totalCount}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
