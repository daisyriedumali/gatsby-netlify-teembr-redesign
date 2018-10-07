import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import BlogCardTest from '../components/BlogCardTest'

export default class BlogTest extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // image : 'post-01.jpg',
    // title  : 'Why investing in branding is important for',
    // snippet : 'The Harvard Review once warned the growing number of small business owners that there will soon be so many small businesses, owners will',
    // headshot : '/errol.jpg',
    // author: 'Errol B. Tiozon',
    // link  : '/',
    // date : 'Sep 5',

    return (
      <section>
        <div className="blog">
            <div className="blog-nav">
                <nav>
                    <a href="/">Design Resources</a>
                    <a href="/">Articles</a>
                </nav>
            </div>
            <div className="blog-cards-wrapper">
                <div className="blog-cards">
                    {posts
                      .map(({ node: post }) => (
                        <BlogCardTest 
                          data={{
                            image    : post.frontmatter.image,
                            title    : post.frontmatter.title,
                            snippet  : post.excerpt,
                            headshot : '/errol.jpg',
                            author   : 'Errol B. Tiozon',
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

BlogTest.propTypes = {
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
          }
        }
      }
    }
  }
`

// <div className="container">
//           <div className="content">
//             <h1 className="has-text-weight-bold is-size-2">Latest Stories!!!</h1>
//           </div>
//           {posts
//             .map(({ node: post }) => (
//               <div
//                 className="content"
//                 style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
//                 key={post.id}
//               >
                
                
//                 <img src={post.frontmatter.image}/>
//                 <p>
//                   <Link className="has-text-primary" to={post.fields.slug}>
//                     {post.frontmatter.title}
//                   </Link>
//                   <span> &bull; </span>
//                   <small>{post.frontmatter.date}</small>
//                 </p>
//                 <p>
//                   {post.excerpt}
//                   <br />
//                   <br />
//                   <Link className="button is-small" to={post.fields.slug}>
//                     Keep Reading →
//                   </Link>
//                 </p>
//               </div>
//             ))}
//         </div>