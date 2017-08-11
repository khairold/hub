import React from 'react'
import { Image, TextInput, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const TextInputAndStuff = ({ type, placeholder }) => {
  let secureTextEntry = false
  switch (type) {
    case 'password':
      secureTextEntry = true
      break
    default:
      fontStyle = 'f5'
  }
  return (
    <View cls="mv3 ph2 bb b--black-20">
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#cccccc"
        cls="f4 black-60"
        autoCorrect={false}
        underlineColorAndroid="rgba(0,0,0,0)"
      />
    </View>
  )
}

export default NativeTachyons.wrap(TextInputAndStuff)
