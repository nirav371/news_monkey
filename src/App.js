import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'

export default class App extends Component {
  c = 'nirav'
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}

