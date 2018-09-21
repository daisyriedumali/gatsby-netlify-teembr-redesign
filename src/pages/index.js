import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ServicesSection from '../components/ServicesSection';
import CaseStudies from '../components/CaseStudies';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Fragment>
        <section className="jumbotron">
          <div>
            <div>
              <h2>We help businesses create products and brands</h2>
              <p>Helping businesses with everything from branding, product design and social media strategies.</p>
              <a href="" className="btn">Contact Us</a>
            </div>
            <img src="/img/jumbotron-img.png" />
          </div>
        </section>
        <ServicesSection />
        <CaseStudies />
      </Fragment>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`
