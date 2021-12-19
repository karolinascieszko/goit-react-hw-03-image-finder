import React from 'react';
import styles from "./Searchbar.module.css";;

const Searchbar = ({ onSubmit, handleChange }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.Form} onSubmit={onSubmit}>
        <button type="submit" className={styles.FormButton}>
          <span className={styles.FormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.FormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  )
};

export default Searchbar;



