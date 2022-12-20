import React, { Component } from 'react'

 class Blogs extends Component {
  render() {
    return (
      <div>
        <h1>Blogs</h1>
        <p>The Authour is {this.props.match.params.author}</p>
        
      </div>
    )
  }
}

export default Blogs;
