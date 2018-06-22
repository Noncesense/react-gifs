import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.select(this.props.gifid)
  }

  render() {
    const src = `http://media.giphy.com/media/${this.props.gifid}/giphy.gif`;
    return (
        <img className='gif' src={src} onClick={this.handleClick}/>
      )
  }
}

export default Gif;
