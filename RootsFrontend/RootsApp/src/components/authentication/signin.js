/* singin.js is the first page a user will reach when the app loads
    if the user has already signed in, check the credentials stored
    in core data against the DB and log in automatically.        */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

var Button = require('../common/button');
var dismissKeyboard = require('dismissKeyboard');

var colors = {
  darkBlue: '#00001A',
  lightBlue: '#4D4DFF',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#666666',
  lightGrey: '#CCCCCC'
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  render: function() {
    return (
      <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={dismissKeyboard} >
        <View style={styles.container}>

          <Text style={styles.title}> ROOTS </Text>
          <Text style={styles.label}>Sign In</Text>

          <TextInput style={styles.txtinput}
          placeholder={'Username'}
          placeholderTextColor={colors.lightGrey}
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})} />

          <TextInput style={styles.txtinput}
          placeholder={'Password'}
          placeholderTextColor={colors.lightGrey}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}/>

          <Text style={{fontSize: 22}}> </Text>
          <Button onPress={this.onSignInPress} text={'Sign In'}/>
          <Text style={{fontSize: 10}}> </Text>
          <Button onPress={this.onSignUpPress} text={'Sign Up'}/>

        </View>
      </TouchableWithoutFeedback>
    );
  },

  onSignInPress: function() {
    this.props.navigator.push({name: 'dashboard'});
  },

  onSignUpPress: function() {
    this.props.navigator.push({name: 'signup'});
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue
  },
  title: {
    color: colors.white,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 69,
    padding: 14,
    textShadowColor: colors.lightBlue,
    textShadowOffset: {width: -4, height: 4},
    paddingBottom: 100
  },
  txtinput: {
    padding: 4,
    height: 40,
    borderColor: colors.white,
    color: colors.white,
    backgroundColor: colors.grey,
    fontFamily: 'Verdana',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 250,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18,
    color: colors.white,
    padding: 4,
    fontFamily: 'Verdana'
  }
});
