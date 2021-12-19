import React from 'react';
import styles from "./Button.module.css";

const Button = ({ loadMoreImages }) => {
    return (
       
        <button type="button" onClick={loadMoreImages} className={styles.Button}>
            Load more
        </button>
           
    );
};

export default Button;
