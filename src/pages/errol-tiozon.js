import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import TeamMemberCard from '../components/TeamMemberCard';
import imagePathHelper from '../components/helper/imagePathHelper';
import Helmet from 'react-helmet';
import logo from '../img/logo.png';

export default class ErrolTiozonPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Errol Tiozon | Teembr" 
          meta={[
              { name: 'description', content: 'Confirm Errol Tizon affiliation to Teembr' },
              { name: 'keywords', content: '' },
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
          ]} />
        <section className="team-info">
          <img src={imagePathHelper("about-us/team2.jpg")} />
          <div>
            <p>This is to confirm my affiliation with the website</p>
            <p><strong>Errol B. Tiozon</strong></p>

            <p>Address: Barangay 95-A Caibaan, Tacloban City, Leyte, Philippines 6500</p>

            <p>Contact Number: +63 905 254 8477</p>
          </div>
        </section>
        
      </div>
    )
  }
}