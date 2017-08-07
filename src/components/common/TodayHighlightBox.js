import React from 'react'
import { Image, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

import Heading from './Heading'
import BlueText from './BlueText'
import HighlightImage from './HighlightImage'
import Hr from './Hr'

const TodayHighlightBox = ({ highlightblue, title, subtitle, imageUri }) => {
  return (
    <View cls="mt1 mb3">
      <Image
        cls="h6 br2"
        source={require('../../images/today.png')}
        borderRadius={8}
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
          borderRadius: 8,
          resizeMode: 'cover',
          padding: 16,
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text cls="white-80 f6">
            INTRODUCING
          </Text>
          <Heading size="todayTitle">{title}</Heading>
        </View>
        <View>
          <Text cls="white-60 f6 lh-solid">
            {subtitle}
          </Text>
        </View>
      </Image>
    </View>
  )
}

export default NativeTachyons.wrap(TodayHighlightBox)
