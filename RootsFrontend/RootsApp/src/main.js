/* main.js is where we construct the navigator. It first
    takes us to signin.js which then has the ability to
    take us to the actual meat of the app.            */
import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

/* Require paths to future pages */
//var Parse = require('parse/react-native');
//var ParseReact = require('parse-react/react-native');
var SignIn = require('./components/authentication/signin');
var SignUp = require('./components/authentication/signup');
var Dashboard = require('./components/dashboard');

/* ROUTES variable stores locations of pages */
var ROUTES = {
  signin: SignIn,
  signup: SignUp,
  dashboard: Dashboard
};

/* Export navigator object */
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
