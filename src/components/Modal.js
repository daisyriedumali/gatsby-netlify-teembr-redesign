import React, { Component } from 'react';
import imagePathHelper from '../components/helper/imagePathHelper';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowModal : false
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(e) {
        this.props.showModal(e);
    }

    render() {
        // modal-outerspace should be the gray area of the modal where users
        // can click it and the modal should be automatically closed
        // close event on the modal-outerspace is not yet implemented
        return (
            <div className="modal-outerspace" onClick={this.showModal}>
                <div className="modal-innerspace">
                    <img src={imagePathHelper("svg/close-button.svg")} onClick={this.showModal} className="modal-close" />
                    <h4>{this.props.title}</h4>
                    <p>{this.props.msg}</p>
                    <a href={this.props.cta} className="cta btn">{this.props.ctaMsg}</a>
                    <a href={this.props.otherLink}>{this.props.otherLinkMsg}</a>
                </div>
            </div>
        )
    }
}

export default Modal;