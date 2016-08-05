import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var SignIn = require('./components/authentication/signin');
var SignUp = require('./components/authentication/signup');

var ROUTES = {
  signin: SignIn,
  signup: SignUp
};

module.exports = React.createClass({
  render: function() {
    return (
      <Navigator
      style={styles.container}
      initialRoute={{name: 'signin'}}
      renderScene={this.renderScene}
      configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}/>
    );
  },

  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
