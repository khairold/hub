import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Now from '../components/pages/Now'
import Today from '../components/pages/Today'

import Personal from '../components/pages/Personal'
import Play from '../components/pages/Play'
import Work from '../components/pages/Work'
import Customer from '../components/pages/Customer'
import Search from '../components/pages/Search'
import Updates from '../components/pages/Updates'

const navOps = iconName => ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => (
    <Icon name={iconName} size={32} color={tintColor} />
  )
})

const Tabs = TabNavigator(
  {
    // Today: {
    //   screen: Today,
    //   navigationOptions: navOps('ios-list-box')
    // },
    Personal: {
      screen: Personal,
      navigationOptions: navOps('ios-medical')
    },
    Play: {
      screen: Play,
      navigationOptions: navOps('ios-paper-plane')
    },
    Work: {
      screen: Work,
      navigationOptions: navOps('ios-briefcase')
    },
    Customer: {
      screen: Customer,
      navigationOptions: navOps('ios-heart')
    },
    // Updates: {
    //   screen: Updates,
    //   navigationOptions: navOps('ios-download')
    // },
    Search: {
      screen: Search,
      navigationOptions: navOps('ios-search')
    }
  },
  {
    initialRouteName: 'Personal',
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#fdfdfd'
      },
      activeTintColor: '#01a8c2'
    }
  }
)

export default Tabs
