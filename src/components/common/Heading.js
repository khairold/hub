import React from 'react'
import { Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const Heading = ({ size, children }) => {
  let containerStyle
  let fontStyle
  switch (size) {
    case 'login':
      fontStyle = 'f1 b tc ff-ssm darkBlue'
      containerStyle = 'mt4 mb3'
      break
    case 'headline':
      fontStyle = ['f-headline', 'black-80']
      break
    case 'headingIcon':
      fontStyle = 'f2 black-80 b'
      containerStyle = 'bb b--black-10 pt3 pb2 mb1'
      break
    case 'subheadline':
      fontStyle = 'f-subheadline'
      break
    case 'todayHeading':
      fontStyle = 'f2 black-80 b'
      containerStyle = 'pt3 mb1'
      break
    case 'updatedRecently':
      fontStyle = 'f2 black-80 b'
      containerStyle = 'pt3 mt5 mb1'
      break
    case 'heading':
      fontStyle = 'f2 black-80 b'
      containerStyle = 'bb b--black-10 pt3 pb2 mb1'
      break
    case 'heading2':
      fontStyle = 'f3 black-80 ff-ssm mb4'
      break
    case 'todayTitle':
      fontStyle = 'f3 white-80 b'
      break
    case 'title':
      fontStyle = 'f3 black-80'
      break
    case 'subtitle':
      fontStyle = 'f4 black-40'
      break
    default:
      fontStyle = 'f5'
  }
  return (
    <View cls={containerStyle}>
      <Text cls={fontStyle}>
        {children}
      </Text>
    </View>
  )
}

export default NativeTachyons.wrap(Heading)
