import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='gif-list'>
        {this.props.gifs.map((gif) =>
          <Gif gifid={gif.id} key={gif.id} select={this.props.select}/>
          )
        }
      </div>
      )
  }
}

export default GifList;
