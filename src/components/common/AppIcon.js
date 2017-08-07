import React from 'react'
import { Image } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const AppIcon = ({ uri, size, navigate }) => {
  let iconStyle
  switch (size) {
    case 'big':
      iconStyle = { height: 96, width: 96 }
      break
    default:
      iconStyle = { height: 88, width: 88 }
  }
  return (
    <Image
      source={{
        uri: 'http://tworzenienazw.pl/serwer_artykulow/uploads/1604181032442.jpg'
      }}
      borderRadius={8}
      style={{
        flex: 0,
        width: undefined,
        height: undefined,
        ...iconStyle,
        borderRadius: 8,
        resizeMode: 'cover'
      }}
    />
  )
}

export default NativeTachyons.wrap(AppIcon)
