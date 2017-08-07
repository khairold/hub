import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native'

import Mh from '../common/Mh'
import AppInstallBox from '../common/AppInstallBox'

export default class Install extends Component {
  render() {
    const { state } = this.props.navigation
    const app = state.params ? state.params.app : null
    const id = app ? app.id : null
    const name = app ? app.name : null
    const descr = app ? app.descr : null
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <AppInstallBox app={app} />
        </Mh>
      </ScrollView>
    )
  }
}
