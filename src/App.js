import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/reducers'
let store = createStore(reducers)
// import { Constants } from 'expo'
import './style'

import Stack from './routes/Stack'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff'
          }}
        >
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <Stack />
        </View>
      </Provider>
    )
  }
}

// marginTop: Constants.statusBarHeight
