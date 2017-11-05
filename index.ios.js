/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * control + command + z open console, or command + D
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Main from './App/components/Main';

let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: 'Github Notetaker',
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
