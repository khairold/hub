import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Now from '../components/pages/Now'
import Today from '../components/pages/Today'
import Play from '../components/pages/Play'
import Work from '../components/pages/Work'
import Search from '../components/pages/Search'
import Updates from '../components/pages/Updates'

const navOps = iconName => ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => (
    <Icon name={iconName} size={32} color={tintColor} />
  )
})

const Tabs = TabNavigator(
  {
    Today: {
      screen: Today,
      navigationOptions: navOps('ios-list-box')
    },
    Play: {
      screen: Play,
      navigationOptions: navOps('ios-jet')
    },
    Work: {
      screen: Work,
      navigationOptions: navOps('ios-briefcase')
    },
    Updates: {
      screen: Updates,
      navigationOptions: navOps('ios-download')
    },
    Search: {
      screen: Search,
      navigationOptions: navOps('ios-search')
    }
  },
  {
    initialRouteName: 'Updates',
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

export default Tabs
