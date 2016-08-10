/* button.js is the standard button component, used on
    the signin and signup pages */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var colors = {
  darkBlue: '#00001A',
  lightBlue: '#4D4DFF',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#666666'
};

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight style={styles.button}
      underlayColor='grey'
      onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 5,
    padding: 5,
    borderColor: colors.white,
    backgroundColor: colors.lightBlue,
    width: 250
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'Verdana'
  }
});
