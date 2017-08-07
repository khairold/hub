import React from 'react'
import { Image, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const HighlightImage = ({ uri }) => {
  return (
    <Image
      cls="h5 mt2 br2"
      source={require('../../images/now.png')}
      borderRadius={8}
      style={{
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 8,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 16,
        paddingRight: 16
      }}
    >
      <Text cls="white-80 ff-ssl f5">
        Just like the App Store and Play Store
      </Text>
      <Text cls="white-80  ff-ssl f5">
        but for TM Staff only
      </Text>
      <Text> </Text>
      <Text> </Text>
      <Text cls="orange ff-ssm f4">
        More apps coming soon...
      </Text>
    </Image>
  )
}

export default NativeTachyons.wrap(HighlightImage)
