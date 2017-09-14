import React, { Component } from 'react'
import Header from './Header'
import style from './style.scss'

class App extends Component {
  render() {
    return (
      <div>
        <header><Header/></header>
        {this.props.children}
      </div>
    )
  }
}

export default App