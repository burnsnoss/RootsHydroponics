// Import modules that we need
import React from 'react';
import { AppRegistry } from 'react-native';

// Require main.js which is the navigator file
var Main = require('./src/main');

// Register component returns var Main
AppRegistry.registerComponent('RootsApp', () => Main);
