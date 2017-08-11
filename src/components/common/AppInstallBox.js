import React from 'react'
import { Button, Image, Text, View, ScrollView } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

import Icon from 'react-native-vector-icons/Ionicons'
import AppCaption from '../common/AppCaption'
import AppIcon from '../common/AppIcon'
import Hr from './Hr'

const BannerImage = NativeTachyons.wrap(
  ({ uri = 'http://185.29.100.109/upload/images/putnici/ci2.jpg' }) => {
    return (
      <Image
        cls="mt2 br2 mb3"
        source={{ uri: uri }}
        borderRadius={8}
        style={{
          flex: 1,
          width: undefined,
          height: 160,
          borderRadius: 8,
          resizeMode: 'cover'
        }}
      />
    )
  }
)

const AppInstallBox = ({ app }) => {
  const name = app ? app.name : null
  const maker = app ? app.maker : null
  return (
    <View>
      <BannerImage />
      <View cls="mt3 mb3" style={{ flex: 0, flexDirection: 'row' }}>
        <AppIcon size="big" />
        <View cls="ml3">
          <AppCaption size="titleBold">{name}</AppCaption>
          <AppCaption size="description">{maker}</AppCaption>
        </View>
      </View>
      <View
        style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-end' }}
      >
        <Button style={{ width: 100 }} title="INSTALL" onPress={() => null} />
      </View>
      <Hr />
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text cls="black-40 f3 mr2">4.5</Text>
        <Icon name="ios-star" cls="black-40" size={24} />
        <Icon name="ios-star" cls="black-40" size={24} />
        <Icon name="ios-star" cls="black-40" size={24} />
        <Icon name="ios-star" cls="black-40" size={24} />
        <Icon name="ios-star-half" cls="black-40" size={24} />
      </View>
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text cls="black-20 f6">401 Ratings</Text>
      </View>
      <Hr />
      <Text cls="black-40 f5 tc mv3 lh-copy">
        Meeting minutes on the cloud. Everyone knows what was said, who decided
        what, and what needs to be done next.
      </Text>
      <Text cls="turquoise f5 b tc">READ MORE</Text>

    </View>
  )
}

export default NativeTachyons.wrap(AppInstallBox)
