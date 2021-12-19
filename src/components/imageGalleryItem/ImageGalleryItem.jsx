import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";


class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL} = this.props;
    return (
      <li id={id} className={styles.ImageGalleryItem}>
        <img
          className={styles.Image}
          src={webformatURL}
          alt=""
          data-img={largeImageURL}
        />
      </li>
    );
  }
}


export default ImageGalleryItem;