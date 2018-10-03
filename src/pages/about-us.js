import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import TeamMemberCard from '../components/TeamMemberCard';

export default class AboutUsPage extends React.Component {
  render() {
    return (
      <div>
        <section className="team-info">
          <img src="/img/services/services-sketch-01.png" />
          <p>Hello</p>
        </section>
        <section className="team-members">
          <div className="team-member-cards">
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
          </div>
        </section>
      </div>
    )
  }
}