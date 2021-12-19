import React from "react";
import styles from "./LoaderFetch.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const LoaderFetch = () => {
  return (
      <Loader className={styles.Loader}
        type="ThreeDots"
        color="	#DC143C"
        height={120}
        width={120}
      />
  )
}

export default LoaderFetch;