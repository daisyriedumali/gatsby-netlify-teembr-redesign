import React, { Component } from 'react';
import Modal from '../components/Modal'
import imagePathHelper from '../components/helper/imagePathHelper'

class ServicesCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowModal : false
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(e) {
        e.preventDefault();

        this.freezeBodyCondition();
        
        this.setState({
            isShowModal : !this.state.isShowModal
        });
    }

    freezeBodyCondition() {
        if(!this.state.isShowModal) {
            let body = document.querySelector('body');
            body.classList.add('freeze-body');
        } else {
            let body = document.querySelector('body');
            body.classList.remove('freeze-body');
        }
    }

    render() {
        return (
            <div className="services-card">
                <img src={imagePathHelper("services/" + this.props.data.image)} />
                <h3>{this.props.data.name}</h3>
                <a href={this.props.data.link} className="btn" onClick={this.showModal}>Learn More</a>
                
                { this.state.isShowModal &&
                    <Modal 
                    title="Thank you for your interest in working with us."
                    msg="Due to high demand, our team is highly selective with who we work with. As such, please answer the questions via our messenger bot, and we will get back to you."
                    cta="/"
                    ctaMsg="Send to Messenger"
                    otherLink="/"
                    otherLinkMsg="Want to see our sample work?"
                    showModal={this.showModal} />}
            </div>
        )
    }
}

export default ServicesCard;