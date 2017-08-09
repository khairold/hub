import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import HighlightBox from '../../common/HighlightBox'
import AppListWide from '../../common/AppListWide'

const highlights = {
  today: {
    highlightblue: 'MAKE THEM HAPPY',
    title: 'Wi-Fi Optimizer',
    subtitle: 'Milk every ounce of your connection',
    // imageUri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/WiFi_Home_Floorplan_800px.width-800.png',
    imageUri: 'https://cdn.cultofmac.com/wp-content/uploads/2016/05/Eero_WiFi_router_05_16_2016_1.jpg'
  }
}

export default class Customer extends Component {
  render() {
    const { apps } = this.props
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="heading">Customer</Heading>
          <HighlightBox {...highlights.today} />
          <AppListWide
            title="Customer At Heart"
            apps={apps}
            navigate={navigate}
          />
        </Mh>
      </ScrollView>
    )
  }
}
