import React from 'react'
import { Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const AppCaption = ({ size, children }) => {
  let fontStyle
  switch (size) {
    case 'titleBold':
      fontStyle = 'f3 black-80 ff-ssm'
      break
    case 'title':
      fontStyle = 'f4 black-80'
      break
    case 'description':
      fontStyle = 'f5 black-40'
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

export default NativeTachyons.wrap(AppCaption)
