/* signup.js is the signup page where users can
    sign up and are added to the database    */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight
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
      password: '',
      email: ''
    };
  },

  render: function() {
    return (
      <View style={{flex: 1}}>
      <TouchableHighlight
      style={styles.cancelButton}
      onPress={this.onCancelButtonPress}>
        <Text style={{color: colors.lightGrey}}> Cancel </Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={dismissKeyboard} >
        <View style={styles.container}>

          <Text style={styles.title}> ROOTS </Text>
          <Text style={styles.label}>Sign Up</Text>

          <TextInput style={styles.txtinput}
          placeholder={'E-mail'}
          placeholderTextColor={colors.lightGrey}
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})} />

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
          <Button onPress={this.onSignUpPress} text={'Sign Up'}/>
        </View>
      </TouchableWithoutFeedback>
      </View>
    );
  },

  onSignUpPress: function() {
    this.props.navigator.push({name: 'dashboard'});
  },
  onCancelButtonPress: function() {
    this.props.navigator.pop(0);
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
    paddingBottom: 85
  },
  txtinput: {
    padding: 4,
    height: 40,
    borderColor: colors.white,
    color: colors.white,
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 250,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18,
    color: colors.white
  },
  cancelButton: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    paddingTop: 25,
    paddingLeft: 15
  }
});
