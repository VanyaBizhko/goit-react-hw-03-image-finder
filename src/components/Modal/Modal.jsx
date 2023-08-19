import React, { Component } from "react";
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

    handleBackdropClick = (e) => {
  if (e.target !== this.props.imageUrl) {
    this.props.onClose();
  }
};

  render() {
    const { imageUrl } = this.props;

    return (
      <div className={styles.overlay}>
        <div className={styles.modal} onClick={this.handleBackdropClick}>
          <img src={imageUrl} alt="Large"/>
        </div>
      </div>
    );
  }
}