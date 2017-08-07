import React, { Component } from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
// import { Constants } from 'expo'

import NativeTachyons from 'react-native-style-tachyons'
NativeTachyons.build(
  {
    /* REM parameter is optional, default is 16 */
    rem: 16,
    fonts: {
      ssl: 'sans-serif-light',
      ssc: 'sans-serif-condensed',
      ssm: 'sans-serif-medium'
    },
    colors: {
      palette: {
        white: '#ffffff',
        black: '#000000',
        orange: '#ee7202',
        blue: '#143e8c',
        darkBlue: '#1c2237',
        yellow: '#fbbf00',
        turquoise: '#01a8c2',
        green: '#3dbf3a',
        red: '#cf1032'
      }
    }
  },
  StyleSheet
)

import Now from './components/pages/Now'
import Install from './components/pages/Install'

const Tabs = TabNavigator(
  {
    Now: {
      screen: Now,
      title: 'Now',
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-list-box" size={32} color={tintColor} />
        )
      })
    },
    Play: {
      screen: Install,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-jet" size={32} color={tintColor} />
        )
      })
    },
    Work: {
      screen: Install,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-briefcase" size={32} color={tintColor} />
        )
      })
    },
    Updates: {
      screen: Install,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-download" size={32} color={tintColor} />
        )
      })
    },
    Search: {
      screen: Install,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={32} color={tintColor} />
        )
      })
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: '#fdfdfd'
      },
      activeTintColor: '#01a8c2'
    }
  }
)

const Stack = StackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 0
        }
      })
    },
    Install: {
      screen: Install,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.app.name}`,
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          shadowOpacity: 0
        },
        headerTintColor: '#01a8c2'
      })
    }
  },
  {
    initialRouteName: 'Tabs'
  }
)

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff'
        }}
      >
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Stack />
      </View>
    )
  }
}

// marginTop: Constants.statusBarHeight
