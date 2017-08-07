import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import HighlightBox from '../../common/HighlightBox'
import AppListWide from '../../common/AppListWide'

const highlights = {
  today: {
    highlightblue: 'WE BUILD THIS IN-HOUSE',
    title: 'Marvel at our Apps',
    subtitle: 'Not for DC fans',
    imageUri:
      'http://geekandsundry.com/wp-content/uploads/2015/04/marvel-game-retrospective-970x545.jpg'
  }
}

export default class Play extends Component {
  render() {
    const { apps } = this.props
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="heading">Play</Heading>
          <HighlightBox {...highlights.today} />
          <AppListWide
            title="Fun Apps We Love"
            apps={apps}
            navigate={navigate}
          />
        </Mh>
      </ScrollView>
    )
  }
}
