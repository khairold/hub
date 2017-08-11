import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import HighlightBox from '../../common/HighlightBox'
import AppListWide from '../../common/AppListWide'

const highlights = {
  today: {
    highlightblue: 'CHECK THIS OUT',
    title: 'Medical Stuff',
    subtitle: 'Panel clinics & benefits entitlement',
    imageUri: 'https://nyoobserver.files.wordpress.com/2016/08/screen-shot-2016-08-24-at-11-01-59-am.png'
  }
}

export default class Personal extends Component {
  render() {
    const { apps } = this.props
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="heading">Personal</Heading>
          <HighlightBox {...highlights.today} />
          <AppListWide
            title="Life Made Easier"
            apps={apps}
            navigate={navigate}
          />
        </Mh>
      </ScrollView>
    )
  }
}
