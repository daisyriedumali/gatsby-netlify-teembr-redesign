import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Blogs from '../components/Blogs';

export default class BlogPage extends React.Component {
  render() {
    return (
        <section>
          <Blogs />
        </section>
    )
  }
}