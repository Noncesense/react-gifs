import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: '1qgBgMjemsSqZTQxNn',
    }
  }

  search = (query) => {
    var giphy = require('giphy-api')('I8xRukSU70FDj8NoykJg1viezXuSwhz4')
    var app = this;
    giphy.search(query, function (err, res) {
      console.log(res);
      if(res !== undefined) {app.setState({
        gifs: res.data.slice(0,10)
      })}
    });
  }

  select = (id) => {
    console.log(id);
    if(this.selectedGif == id) {
      return
    } else {
      this.setState({
        selectedGif: id
      })
    }
  }

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar search={this.search}/>
          <div className='selected-gif'>
            <Gif gifid={this.state.selectedGif} select={this.select}/>
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} select={this.select}/>
        </div>
      </div>
      )
  }
}

export default App;
