import React from 'react'
import { Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const BlueText = ({ size, children }) => {
  let fontStyle
  switch (size) {
    case 'small':
      fontStyle = 'f6 turquoise b mv2 ff-ssc'
      break
    default:
      fontStyle = 'f5'
  }
  return (
    <Text cls={fontStyle}>
      {children}
    </Text>
  )
}

export default NativeTachyons.wrap(BlueText)
