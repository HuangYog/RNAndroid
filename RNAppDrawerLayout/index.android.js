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
  DrawerLayoutAndroid
} from 'react-native';

class RNAppDrawerLayout extends Component {
  render() {
    var navigatiobView = (
        <View style = {{flex:3, backgroundColor:'green'}}>
          <Text style={{margin:10, fontSize: 15,color:'red', textAlign:'center'}}>
            导航功能标题栏
          </Text>
          <Text style={{margin:10, marginLeft: 20, fontSize: 15, color:'#fff',textAlign:'left'}}>
            1.功能一
          </Text>
          <Text style={{margin:10,marginLeft: 20, fontSize: 15, color:'#fff', textAlign:'left'}}>
            2.功能二
          </Text>
        </View>
    );
    return (
        <DrawerLayoutAndroid drawerWidth = {150}
          drawerPosition = {DrawerLayoutAndroid.positions.Left}
          renderNavigationView = {() => navigatiobView}>
          <View style={{flex:1,alignItems:'center'}}>
            <Text style={{margin:10, fontSize:15,textAlign: 'right'}}>主布局界面内容</Text>
          </View>
         </DrawerLayoutAndroid>
    );
  }
}
AppRegistry.registerComponent('RNAppDrawerLayout', () => RNAppDrawerLayout);
