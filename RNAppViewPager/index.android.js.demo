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
  View,
    ViewPagerAndroid
} from 'react-native';

class RNAppViewPager extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ViewPagerAndroid 实例 一
        </Text>
        <ViewPagerAndroid
            style={styles.pageStyle}
            initialPage = {0}>
            <View style={{backgroundColor: '#6d9eeb'}}>
                <Text>First Page !</Text>
            </View>
            <View style={{backgroundColor: '#674ea7'}}>
                <Text>Second Page !</Text>
            </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageStyle:{
      alignItems: 'center',
      padding: 20,
      height: 200
  }
});

AppRegistry.registerComponent('RNAppViewPager', () => RNAppViewPager);
