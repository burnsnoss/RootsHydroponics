import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Text style={styles.label}>Username:</Text>

        <TextInput style={styles.txtinput}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})} />

        <Text style={styles.label}>Password:</Text>

        <TextInput style={styles.txtinput}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}/>

        <Button onPress={this.onSignInPress} text={'Sign In Bitch'}/>
        <Button onPress={this.onSignUpPress} text={'Sign Up Bitch'}/>
      </View>
    );
  },

  onSignInPress: function() {
    return '';
  },

  onSignUpPress: function() {
    this.props.navigator.push({name: 'signup'});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtinput: {
    padding: 4,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
