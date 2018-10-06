import React, { Component } from 'react';
import Modal from '../components/Modal'

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

        this.setState({
            isShowModal : !this.state.isShowModal
        });
    }

    render() {
        return (
            <div className="services-card">
                <img src={"/img/services/" + this.props.data.image} />
                <div>
                    <h3>{this.props.data.name}</h3>
                    <a href={this.props.data.link} className="btn" onClick={this.showModal}>Learn More</a>
                    
                    { this.state.isShowModal &&
                      <Modal 
                        msg="I should be popping out lol. Services Card"
                        showModal={this.showModal} />}
                </div>
            </div>
        )
    }
}

export default ServicesCard;