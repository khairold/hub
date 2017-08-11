import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './redux/reducers'
// const store = createStore(
//   reducer,
//   undefined,
//   compose(applyMiddleware(thunk), autoRehydrate())
// )
const store = createStore(reducer, undefined, compose(applyMiddleware(thunk)))

// persistStore(store, { storage: AsyncStorage })
// persistStore(store, { storage: AsyncStorage }).purge()

// import { Constants } from 'expo'
import './style'

import Index from './routes/Index'

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
          <Index />
        </View>
      </Provider>
    )
  }
}

// marginTop: Constants.statusBarHeight
