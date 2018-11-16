import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import TeamMemberCard from '../components/TeamMemberCard';
import imagePathHelper from '../components/helper/imagePathHelper';
import Helmet from 'react-helmet';
import logo from '../img/logo.png';

export default class AboutUsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="About Us | Teembr" 
          meta={[
              { name: 'description', content: 'We help businesses create products and brands. Helping businesses with everything from branding, product design and social media strategies.' },
              { name: 'keywords', content: 'branding, branding identity, branded content, branding strategies' },
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
          ]} />
        <section className="team-info">
          <img src={imagePathHelper("about-us/team.jpg")} />
          <div>
            <h1>About the Team</h1>
            <p>We are a group of passionate individuals who aims to help businesses create products and brands through creative design.</p>
            <p><strong>Mission: </strong>
            <strong>Get more attention and make things simple.</strong></p>

            <p>We are living in a fast-paced world where getting attention becomes scarce. 
            The business world of today is different from the business world of the past. 
            And with the rise of internet demand this will continue to evolve in the future.</p>

            <p>Knowing this, Design thinking becomes more valuable in predicting the success of a business. 
            Design of today is not only about making things pretty but also making things align with the strategic goals of a business through creative strategy.</p>

            <p>Thus, it is our goal to be able to help businesses create products and brands through creative design.</p>
          </div>
        </section>
        
      </div>
    )
  }
}

// <section className="team-members">
//   <div className="team-member-cards">
//     <TeamMemberCard />
//     <TeamMemberCard />
//     <TeamMemberCard />
//     <TeamMemberCard />
//     <TeamMemberCard />
//     <TeamMemberCard />
//   </div>
// </section>