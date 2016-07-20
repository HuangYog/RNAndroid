/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
class RNAppTouchable extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <View>
                    <Text>TouchableNativeFeedback实例 一</Text>
                    <TouchableNativeFeedback
                        style={{marginTop:20}}>
                        <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                            <Text style={{margin: 30}}>Button</Text>
                        </View>

                    </TouchableNativeFeedback>
                </View>
                <View style={{marginTop:30}}>
                    <Text>TouchableNativeFeedback实例 二</Text>
                    <TouchableNativeFeedback
                        background = {TouchableNativeFeedback.Ripple('#CD1076',false)}>
                        <View style={{width: 150, height: 100,backgroundColor: "#00ffcc"}}>
                            <Text style={{margin: 30}}>Button</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('RNAppTouchable', () => RNAppTouchable);
