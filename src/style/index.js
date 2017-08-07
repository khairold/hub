import { StyleSheet, StatusBar, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'

const palette = {
  white: '#ffffff',
  black: '#000000',
  orange: '#ee7202',
  blue: '#143e8c',
  darkBlue: '#1c2237',
  yellow: '#fbbf00',
  turquoise: '#01a8c2',
  green: '#3dbf3a',
  red: '#cf1032'
}

NativeTachyons.build(
  {
    rem: 16,
    fonts: {
      ssl: 'sans-serif-light',
      ssc: 'sans-serif-condensed',
      ssm: 'sans-serif-medium'
    },
    colors: {
      palette: palette
    }
  },
  StyleSheet
)

export default palette
