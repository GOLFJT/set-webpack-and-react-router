import { AppContainer } from 'react-hot-loader'
import React, { Component } from 'react'
import { render } from 'react-dom'
import Routes from './Routes'

render(
   <AppContainer>
      <Routes/>
   </AppContainer>
, document.getElementById('main'))

if (module.hot) {
    module.hot.accept('./Routes', () => {
      const NextRootApp = require('./Routes').default
      render(
        <AppContainer>
           <NextRootApp />
        </AppContainer>,
        document.getElementById('main')
      );
    });
  }