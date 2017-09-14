import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <header >
          <Link to={{ pathname: '/' }} >Home</Link>
          <Link  to={{ pathname: '/page' }}>page</Link>
      </header>
    )
  }
}