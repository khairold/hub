import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import AppListWideUpdate from '../../common/AppListWideUpdate'

export default class Today extends Component {
  render() {
    const { apps } = this.props
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="todayHeading">Updates</Heading>
          <AppListWideUpdate
            title="Updated Recently"
            apps={apps}
            navigate={navigate}
          />
        </Mh>
      </ScrollView>
    )
  }
}
