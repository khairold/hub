import React from 'react'
import { View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const BlueText = ({ size, children }) => {
  let viewStyle
  switch (size) {
    default:
      viewStyle = 'mh3'
  }
  return (
    <View cls={viewStyle}>
      {children}
    </View>
  )
}

export default NativeTachyons.wrap(BlueText)
