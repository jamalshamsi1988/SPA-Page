import React, { Component } from 'react';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Logos from "./Components/Logos";
import Footer from "./Components/Footer";

 class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards/>
        <Search/>
        <Logos/>
        <Footer />
       
      </div>
    )
  }
}
export default App;