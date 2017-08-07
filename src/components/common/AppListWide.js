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
  const { id, name, descr } = app
  return (
    <TouchableOpacity onPress={() => navigate('Install', { app: app })}>
      <View cls="mb3" style={{ flex: 0, flexDirection: 'row' }}>
        <AppIcon navigate={navigate} />
        <View cls="flx-i ml3 bb b--black-10 pb5">
          <AppCaption size="title">{name}</AppCaption>
          <AppCaption size="description">{descr}</AppCaption>
        </View>
      </View>
    </TouchableOpacity>
  )
})

const AppListWide = ({ apps, navigate }) => {
  return (
    <View>
      <Heading size="heading2">New Apps We Love</Heading>
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
