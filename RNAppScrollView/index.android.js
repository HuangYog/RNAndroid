/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
/*import React, { Component } from 'react';
import {
  AppRegistry,
    ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var NUM_ITEMS = 20;
class RNAppScrollView extends Component {

    makeItems(nItems: number, styles){
        var items = [];
        for (var i = 0; i < nItems; i++) {
            items[i] = (
                <TouchableOpacity key={i} style={styles}>
                    <Text>{'Item ' + i}</Text>
                </TouchableOpacity>
            );
        }
        return items;
    }

  render() {
      // One of the items is a horizontal scroll view
      var items = this.makeItems(NUM_ITEMS, styles.itemWrapper);
      items[4] = (
          <ScrollView key={'scrollView'} horizontal={true}>
              {this.makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
          </ScrollView>
      );

      var verticalScrollView = (
          <ScrollView style={styles.verticalScrollView}>
              {items}
          </ScrollView>
      );

      return verticalScrollView;
  }
}

const styles = StyleSheet.create({
  verticalScrollView:{
      margin:10
  },
    itemWrapper:{
        backgroundColor:'#dddddd',
        alignItems:'center',
        borderRadius:5,
        borderWidth: 5,
        borderColor: '#a52a2a',
        padding:30,
        margin:5
    },
    horizontalItemWrapper:{
        padding:50
    }
});*/

import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

class RNAppScrollView extends Component {
    render(){
       return (
           <View style = {styles.container}>
               <Text style={styles.welcome}> 进行测试ScrollView控件</Text>
               <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.contentContainer}>
                   <Text style={{color: '#fff', margin:5, fontSize:16, backgroundColor:'#43CD80'}}>
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                       React-Native之DrawerLayoutAndroid控件学习
                   </Text>
               </ScrollView>
           </View>
       );
    }
}
const styles = StyleSheet.create({
    container:{
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    contentContainer:{
        margin:10,
        color: 'yellow',
        backgroundColor: '#ff0000'
    }
});

AppRegistry.registerComponent('RNAppScrollView', () => RNAppScrollView);
