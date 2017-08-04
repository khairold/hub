/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native'

const apps = [
  {
    id: '1',
    name: 'App1',
    category: 'Cat1'
  },
  {
    id: '2',
    name: 'App2',
    category: 'Cat2'
  },
  {
    id: '3',
    name: 'App1',
    category: 'Cat1'
  },
  {
    id: '4',
    name: 'App2',
    category: 'Cat2'
  },
  {
    id: '5',
    name: 'App1',
    category: 'Cat1'
  },
  {
    id: '6',
    name: 'App2',
    category: 'Cat2'
  }
]

const AppBox = () => (
  <View style={{ marginRight: 8 }}>
    <View style={{ height: 96, width: 96, backgroundColor: 'grey' }} />
    <Text style={{ fontWeight: 'bold' }}>App</Text>
    <Text>Category</Text>
  </View>
)

export default class hub extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 160,
            backgroundColor: '#ee7202',
            marginBottom: 32,
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 32,
              color: '#f9f9f9',
              padding: 8
            }}
          >
            hub@TM
          </Text>
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <Text style={{ fontSize: 18, paddingBottom: 8 }}>
            Check out these Apps
          </Text>
          <View>
            <FlatList
              style={{ paddingBottom: 16 }}
              horizontal={true}
              data={apps}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => <AppBox />}
            />
          </View>
          <View
            style={{
              borderStyle: 'solid',
              borderTopColor: 'grey',
              borderTopWidth: 1,
              marginVertical: 16
            }}
          />
          <View
            style={{
              backgroundColor: '#1c2237',
              paddingVertical: 32,
              paddingHorizontal: 16
            }}
          >
            <Text style={{ color: '#f9f9f9' }}>
              hub@TM is just like the App Store and Play Store
            </Text>
            <Text style={{ color: '#f9f9f9' }}>
              but for internal TM Staff only
            </Text>
            <Text> </Text>
            <Text style={{ color: '#f9f9f9' }}>
              More apps coming soon...
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('hub', () => hub)
