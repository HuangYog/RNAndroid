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
    Image
} from 'react-native';

class RNAppImage extends Component {
    render() {
        return (
            <View style={{marginLeft: 5, marginTop: 10, marginRight: 5}}>
                <View style={{flexDirection: 'row'}}>

                    <View style={{width: 70}}>
                        <Image source={require('./img/one.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>美食</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/two.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>美食</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/three.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>酒店</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/four.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>KTV</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/five.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>外卖</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>

                    <View style={{width: 70}}>
                        <Image source={require('./img/six.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>优惠买单</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/seven.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>周边游</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/eight.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>休闲娱乐</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/nine.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>今日新单</Text>
                    </View>

                    <View style={{width: 70}}>
                        <Image source={require('./img/ten.png')} style={{alignSelf: 'center', width: 45, height: 45}} />
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color:'#555555'}}>丽人</Text>
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('RNAppImage', () => RNAppImage);
