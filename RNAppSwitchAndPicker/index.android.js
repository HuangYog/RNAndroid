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
  Picker
} from 'react-native';

class RNAppSwitchAndPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: ''
        };

    }

  render() {
      var promptStr = "请选择您喜欢的编程语言";
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Picker 选择器 实例 一
        </Text>
        <Picker
            style={{width: 200}}
            selectedValue = {this.state.language}
            onValueChange = {(value) => this.setState({language: value})}
        >
            <Picker.Item label = 'Java' value = 'java'/>
            <Picker.Item label = 'JavaScript' value = 'js'/>
        </Picker>
          <Text>
              当前选择的是：{this.state.language}
          </Text>
          <Text style={styles.welcome}>
              Picker 选择器 实例 二
          </Text>
          <Picker
              prompt = {promptStr}
              style={{width: 200}}
              selectedValue = {this.state.language}
              onValueChange = {(value) => this.setState({language: value})}
          >
              <Picker.Item label = 'Java' value = 'java'/>
              <Picker.Item label = 'JavaScript' value = 'js'/>
          </Picker>
          <Text>
              当前选择的是：{this.state.language}
          </Text>
          <Text style={styles.welcome}>
              Picker 选择器 实例 三
          </Text>
          <Picker
              mode = {'dropdown'}
              style={{width: 200}}
              selectedValue = {this.state.language}
              onValueChange = {(value) => this.setState({language: value})}
          >
              <Picker.Item label = 'Java' value = 'java'/>
              <Picker.Item label = 'JavaScript' value = 'js'/>
          </Picker>
          <Text>
              当前选择的是：{this.state.language}
          </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('RNAppSwitchAndPicker', () => RNAppSwitchAndPicker);
