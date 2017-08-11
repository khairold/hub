import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import NativeTachyons from 'react-native-style-tachyons'

import Mh from '../../common/Mh'
import Heading from '../../common/Heading'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { staffId: '', password: '' }
    this.handleStaffIdChange = this.handleStaffIdChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  handleStaffIdChange(text) {
    this.setState({ staffId: text })
    this.props.onClearMessage()
  }
  handlePasswordChange(text) {
    this.setState({ password: text })
    this.props.onClearMessage()
  }
  render() {
    const { user } = this.props
    const { staffId, password } = this.state
    const { onLogin } = this.props
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff'
        }}
      >
        <Mh size="login">
          <Heading size="login">hub@TM</Heading>
          <Text cls="red tc">{user.failedLoginMessage}</Text>
          <TextInput
            onChangeText={text => this.handleStaffIdChange(text)}
            placeholder="Staff ID"
            placeholderTextColor="#cccccc"
            cls="f4 black-60 mv3 ph2 bb b--black-20"
            autoCorrect={false}
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            onSubmitEditing={event => {
              this.refs.PasswordInput.focus()
            }}
          />

          <TextInput
            ref="PasswordInput"
            onChangeText={text => this.handlePasswordChange(text)}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#cccccc"
            cls="f4 black-60 mv3 ph2 bb b--black-20"
            autoCorrect={false}
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="go"
            onSubmitEditing={() => onLogin(staffId, password)}
          />

          <View style={{ marginTop: 40 }}>
            <Button
              title="Login"
              onPress={() => onLogin(staffId, password)}
              color="#01a8c2"
            />
          </View>
        </Mh>
      </View>
    )
  }
}

export default NativeTachyons.wrap(Login)
