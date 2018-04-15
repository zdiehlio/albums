import React, { Component } from 'react'
import { View } from 'react-native'
import axios from 'axios'

import AlbumDetail from '../AlbumDetail'

class AlbumList extends Component {
  state = {
    albums: [],
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }))
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => <AlbumDetail key={i} album={album} />)
  }

  render() {
    console.log(this.state)
    
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList