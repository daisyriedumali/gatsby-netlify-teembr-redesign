import React from 'react';
import PropTypes from 'prop-types';
import ServicesSection from '../components/ServicesSection';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import imagePathHelper from '../components/helper/imagePathHelper';
import Helmet from 'react-helmet';
import logo from '../img/logo.png';

export default class IndexPage extends React.Component {
  
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Helmet title="Teembr" 
          meta={[
              { name: 'description', content: 'We help businesses create products and brands. Helping businesses with everything from branding, product design and social media strategies.' },
              { name: 'keywords', content: 'branding, branding identity, branded content, branding strategies' },
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
          ]} />
        <section className="jumbotron">
          <div>
            <div>
              <h2>We help businesses create products and brands</h2>
              <p>Helping businesses with everything from branding, product design and social media strategies.</p>
              <a href="" className="btn">Contact Us</a>
            </div>
            <img src={imagePathHelper("main/jumbotron-img.png")} />
          </div>
        </section>
        <ServicesSection />
        <CaseStudies />
        <Testimonials />
        <section className="call-to-action">
            <p>Interested in collaborating with us?</p>
            <a href="" className="btn">Contact Us</a>
        </section>
      </div>
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
