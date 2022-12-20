import React from 'react';
import styles from "./Logos.module.css";
import iphone from "../Images/iphone-logo-17.png";
import samsung from "../Images/samsung-logo.jpg";
import xiaomi from "../Images/Xiaomi-logo-768x432.png"



 const Logos=()=> {
  return (
    <div className={styles.container}>
<p>Who Support Us?</p>
<div>
    <img src={iphone} alt="Logo" />
    <img src={samsung} alt="Logo" />
    <img src={xiaomi} alt="Logo" />
</div>
    </div>
  )
}

export default Logos;