import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import NativeTachyons from 'react-native-style-tachyons'

import Tabs from './Tabs'
import Install from '../components/pages/Install'

const AppInstallHeaderText = NativeTachyons.wrap(({ children }) => (
  <Text cls="ff-ssl b black-40">{children}</Text>
))

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
        // title: (
        //   <AppInstallHeaderText>
        //     {navigation.state.params.app.name}
        //   </AppInstallHeaderText>
        // ),
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

export default Stack
