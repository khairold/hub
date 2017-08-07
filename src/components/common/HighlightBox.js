import React from 'react'
import { Image, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

import Heading from './Heading'
import BlueText from './BlueText'
import HighlightImage from './HighlightImage'
import Hr from './Hr'

const HighlightBox = ({ highlightblue, title, subtitle, imageUri }) => {
  return (
    <View cls="mv3">
      <BlueText size="small">{highlightblue}</BlueText>
      <Heading size="title">{title}</Heading>
      <Heading size="subtitle">{subtitle}</Heading>
      <HighlightImage uri={imageUri} />
      <Hr />
    </View>
  )
}

export default NativeTachyons.wrap(HighlightBox)
