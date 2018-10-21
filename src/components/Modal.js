import React, { Component } from 'react';
import imagePathHelper from '../components/helper/imagePathHelper';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowModal : false
        }

        this.showModal = this.showModal.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    showModal(e) {
        this.props.showModal(e);
    }

    handleClickOutside(e) {
        if (!this.node.contains(e.target)) {
          this.props.showModal(e);
        }
    }

    render() {
        return (
            <div className="modal-outerspace" onClick={this.handleClickOutside} >
                <div className="modal-innerspace" ref={node => this.node = node}>
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