import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import HighlightBox from '../../common/HighlightBox'
import AppListWide from '../../common/AppListWide'

const highlights = {
  today: {
    highlightblue: 'CHECK THIS OUT',
    title: 'Meeting App',
    subtitle: 'Remember who says what',
    imageUri:
      'http://www.officefurnitureitaly.com/userdata/immagini/articoli/930x453/meeting-table-imeet_12825.jpg'
  }
}

export default class Work extends Component {
  render() {
    const { apps } = this.props
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="heading">Work</Heading>
          <HighlightBox {...highlights.today} />
          <AppListWide
            title="Work Apps We Love"
            apps={apps}
            navigate={navigate}
          />
        </Mh>
      </ScrollView>
    )
  }
}
