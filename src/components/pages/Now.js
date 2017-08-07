import React, { Component } from 'react'
import {
  AppRegistry,
  Button,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native'

import Mh from '../common/Mh'
import Heading from '../common/Heading'
import HighlightBox from '../common/HighlightBox'
import AppListWide from '../common/AppListWide'

const apps = [
  {
    id: '1',
    name: 'App1',
    descr: 'Descr1',
    maker: 'Maker 1'
  },
  {
    id: '2',
    name: 'App2',
    descr: 'Descr2',
    maker: 'Maker 2'
  },
  {
    id: '3',
    name: 'App3',
    descr: 'Descr3',
    maker: 'Maker 3'
  }
]

const highlights = {
  today: {
    highlightblue: 'THE ALL NEW',
    title: 'Welcome to hub@TM!',
    subtitle: 'For work and play',
    imageUri: 'https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085--open-floor-house-plans-dream-house-plans.jpg'
  }
}

export default class Now extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="heading">Today</Heading>
          <HighlightBox {...highlights.today} />
          <AppListWide apps={apps} navigate={navigate} />
        </Mh>
      </ScrollView>
    )
  }
}
