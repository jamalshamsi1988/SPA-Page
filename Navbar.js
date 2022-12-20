import React from "react";
import styles from "../Components/Navbar.module.css";
import logo from "../Images/shop2.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <ul className={styles.list}>
          <li>Home Page</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
