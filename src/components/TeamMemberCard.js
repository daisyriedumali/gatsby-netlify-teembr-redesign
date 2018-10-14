import React from 'react'
import imagePathHelper from '../components/helper/imagePathHelper'

const TeamMemberCard = ({ iconfill }) => {
    return (
        <div className="team-member-card">
            <img src={imagePathHelper("services/services-sketch-01.png")} />
            <div>
                <h3>Daisyrie Dumali</h3>
                <h4>Web Developer</h4>
                <p>Daisy you're a freak when we're having fun!</p>
            </div>
        </div>
    );
}

export default TeamMemberCard