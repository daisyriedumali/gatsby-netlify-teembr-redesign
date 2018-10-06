import React, { Component } from 'react';

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
            <div className="modal-outerspace">
                <div className="modal-innerspace">
                    <span className="modal-close" onClick={this.showModal}>x</span>
                    {this.props.msg}
                </div>
            </div>
        )
    }
}

export default Modal;