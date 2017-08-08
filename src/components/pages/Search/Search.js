import React, { Component } from 'react'
import { ScrollView, TextInput } from 'react-native'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Fumi } from 'react-native-textinput-effects'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'
import AppListWide from '../../common/AppListWide'
import SearchInput from '../../common/SearchInput'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { apps: props.apps }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      apps: nextProps.apps
    })
  }
  handleChange(text) {
    const searchApps = this.props.apps.filter(app => {
      return (
        app.name.toLowerCase().includes(text) ||
        app.descr.toLowerCase().includes(text) ||
        app.maker.toLowerCase().includes(text)
      )
    })
    this.setState({ apps: searchApps })
  }
  render() {
    const { apps } = this.state
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Mh>
          <Heading size="todayHeading">Search</Heading>
          <Fumi
            onChangeText={text => this.handleChange(text)}
            label={'hub@TM'}
            iconClass={FontAwesomeIcon}
            iconName={'search'}
            iconColor={'#333333'}
            iconSize={20}
            style={{ marginTop: 8, backgroundColor: '#f2f2f2' }}
          />
          <AppListWide apps={apps} navigate={navigate} />
        </Mh>
      </ScrollView>
    )
  }
}
