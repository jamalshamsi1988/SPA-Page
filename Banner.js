import React from 'react';
import banner from "../Images/banner.jpg";
import styles from "../Components/Banner.module.css";

const Banner=()=> {
  return (
    <div className={styles.container}>
      <img  src={banner} alt="banner" />

      <div className={styles.textcontainer}>
        <h1>Phone Shop</h1>
        <p>We sell <span>Smartphones</span> </p>
      </div>
    </div>
  )
}

export default Banner;