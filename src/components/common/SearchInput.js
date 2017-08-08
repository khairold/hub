import React from 'react'
import { TextInput, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Fumi } from 'react-native-textinput-effects'
import NativeTachyons from 'react-native-style-tachyons'

const SearchInput = () => (
  <View style={{ backgroundColor: '#f2f2f2', padding: 0 }}>
    <Fumi
      label={'hub@TM'}
      iconClass={FontAwesomeIcon}
      iconName={'search'}
      iconColor={'#333333'}
      iconSize={20}
      style={{ backgroundColor: '#f2f2f2' }}
    />
  </View>
)

export default NativeTachyons.wrap(SearchInput)
