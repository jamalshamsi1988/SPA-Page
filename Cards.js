import React, { Component } from 'react';
import Card from './Card';
import styles from "../Components/Cards.module.css";
import phone01 from "../Images/m7.jpg";
import phone02 from "../Images/m3.jpg";
import phone03 from "../Images/m10.jpg";
import phone04 from "../Images/mobil01.jpg";

class Cards extends Component {
  render() {
    
    return (
      <div className={styles.container}>
        <Card  image={phone01} cost="500 $" name="iphone X"/>
        <Card  image={phone02} cost="600 $" name="iphone 10"/>
        <Card  image={phone03} cost="800 $" name="iphone 11"/>
        <Card  image={phone04} cost="900 $" name="iphone 12"/>
      </div>
    )
  }
}

export default Cards;