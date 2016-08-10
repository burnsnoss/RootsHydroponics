/* dashboard.js is the initial page you reach when you have
    signed in to Roots. It will display sensor data and
    navigation controls, as well as a settings button. */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

var colors = {
  darkBlue: '#00001A',
  lightBlue: '#4D4DFF',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#666666',
  lightGrey: '#CCCCCC'
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.navButtonsBar}>

          <TouchableHighlight
          style={styles.navButton}
          onPress={this.uselessFunction}>
            <Text style={styles.navButtonText}> STATUS </Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.navButton}
          onPress={this.uselessFunction}>
            <Text style={styles.navButtonText}> SETTINGS </Text>
          </TouchableHighlight>

        </View>

        <View style={styles.body}>

          <Text style={styles.header}>Most Recent Reading</Text>
          <Text style={styles.subHeader}>(4/20/2016, 16:20.69):</Text>

          <View style={styles.metric}>
            <Text style={styles.metricText}> 69.0 °F </Text>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLeft}></View>
            <View style={styles.dividerRight}></View>
          </View>

          <View style={styles.metric}>
            <Text style={styles.metricText}> 6.90 pH </Text>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLeft}></View>
            <View style={styles.dividerRight}></View>
          </View>

          <View style={styles.metric}>
            <Text style={styles.metricText}> 4.20 mS/m </Text>
          </View>

        </View>

      </View>
    )
  },

  uselessFunction: function() {
    return
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  navButtonsBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingTop: 20
  },
  navButton: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 3
  },
  navButtonText: {
    fontFamily: 'Verdana',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white
  },
  body: {
    flex: 9,
    justifyContent: 'center'
  },
  metric: {
    alignItems: 'flex-start'
  },
  metricText: {
    fontFamily: 'Verdana',
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.lightGrey
  },
  dividerContainer: {
    height: 3,
    flexDirection: 'row'
  },
  dividerLeft: {
    flex: 1,
    backgroundColor: colors.lightBlue
  },
  dividerRight: {
    flex: 9,
    backgroundColor: colors.white
  },
  header: {
    fontSize: 22,
    fontFamily: 'Verdana',
    color: colors.white,
    alignSelf: 'center'
  },
  subHeader: {
    fontSize: 18,
    fontFamily: 'Verdana',
    color: colors.lightGrey,
    alignSelf: 'center',
    paddingBottom: 20
  }
});
