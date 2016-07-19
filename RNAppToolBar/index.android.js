/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');
var SwitchAndroid = require('SwitchAndroid');
class RNAppToolBar extends Component {

  render() {
    return (
        <ToolbarAndroid
            navIcon = {require('./imgs/app_logo.png')}
            logo = {require('./imgs/next_four.png')}
            actions = {toolbarActions}
            style={styles.toolBar}
        >
            <SwitchAndroid value = {true} />
        </ToolbarAndroid>
    );
  }
}

var toolbarActions = [
    {title:'Create', icon: require('./imgs/next_one.png'),show: 'always'},
    {title:'Filter'},
    {title:'Settings', icon: require('./imgs/next_nine.png'),show: 'always'}
];

const styles = StyleSheet.create({
  toolBar:{
      backgroundColor:'#e9eaed',
      height: 56
  }
});

AppRegistry.registerComponent('RNAppToolBar', () => RNAppToolBar);
