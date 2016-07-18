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
  ProgressBarAndroid,
  View
} from 'react-native';

class RNAppProgressBar extends Component {
  render() {
    return (
        <View>
            <Text>
                ProgressBarAndroid 控件的各种实例
            </Text>
            <ProgressBarAndroid color='red' styleAttr = 'Inverse'/>
            <ProgressBarAndroid color='green' styleAttr = 'Horizontal' progress = {0.7}
            indeterminate = {false} style = {{marginTop: 10}}
            />
            <ProgressBarAndroid color = 'blue' styleAttr = 'Horizontal' indeterminate = {true}
                                style={{marginTop:10}}/>
            <ProgressBarAndroid color = 'black' styleAttr='SmallInverse'
                                style={{marginTop:10}} />
            <ProgressBarAndroid styleAttr = "LargeInverse" style={{marginTop: 10}} />

        </View>
    );
  }
}
AppRegistry.registerComponent('RNAppProgressBar', () => RNAppProgressBar);
