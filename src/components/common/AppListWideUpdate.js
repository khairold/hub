import React from 'react'
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

import Heading from './Heading'
import AppIcon from './AppIcon'
import AppCaption from './AppCaption'

const AppItemWide = NativeTachyons.wrap(({ app, navigate }) => {
  const { id, name, descr, lastUpdated } = app
  return (
    <TouchableOpacity onPress={() => navigate('Install', { app: app })}>
      <View cls="mb3 bb b--black-10 pb3">
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <AppIcon navigate={navigate} />
          <View cls="ml3">
            <AppCaption size="title">{name}</AppCaption>
            <AppCaption size="description">{lastUpdated}</AppCaption>
          </View>
        </View>
        <View cls="mv3">
          <Text>Support added for Meeting notes</Text>
          <Text>We have fixed sum bugs affecting push notifications</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
})

const AppListWide = ({ title, apps, navigate }) => {
  return (
    <View>
      <Heading size="heading2">{title}</Heading>
      <FlatList
        data={apps}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <AppItemWide app={item} navigate={navigate} />
        )}
      />
    </View>
  )
}

export default NativeTachyons.wrap(AppListWide)
