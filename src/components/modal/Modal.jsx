import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    const { modalImage, closeModal } = this.props;

    return (
      <div className={styles.ModalOverlay} onClick={closeModal}>
        <div className={styles.Modal}>
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
