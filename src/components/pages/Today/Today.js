import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import TodayHighlightBox from '../../common/TodayHighlightBox'
import AppListWide from '../../common/AppListWide'

const highlights = {
  today: {
    highlightblue: 'THE ALL NEW',
    title: 'hub@TM',
    subtitle: `hub@TM is a digital distribution platform for mobile apps. Made exclusively for TM Staff, for both: Work and Play.`,
    imageUri:
      'https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085--open-floor-house-plans-dream-house-plans.jpg'
  }
}

export default class Today extends Component {
  render() {
    const { apps } = this.props
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="todayHeading">Today</Heading>
          <TodayHighlightBox {...highlights.today} />
          <AppListWide title="Apps We Love" apps={apps} navigate={navigate} />
        </Mh>
      </ScrollView>
    )
  }
}
