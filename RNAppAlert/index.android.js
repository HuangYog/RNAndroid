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
    Alert,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';

class CustomButton extends Component{
    render(){
        return(
            <TouchableHighlight
            style={styles.button}
            underlayColor='#a5a5a5'
            onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class RNAppAlert extends Component {
    render() {
        return (
            <View>
                <Text style={{height: 30, color: 'black', margin: 8}}>
                    弹出框实例
                </Text>
                <CustomButton
                    text = '点击弹出默认'
                    onPress={() => Alert.alert('退出','您确定要退出吗?')}/>

                <CustomButton
                    text = '点击弹出两个按钮'
                    onPress={()=>Alert.alert('提醒','确定退出吗?',[
                            {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消~',ToastAndroid.SHORT)},
                            {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定~',ToastAndroid.SHORT)}
                    ])}/>
                <CustomButton
                    text = '点击弹出三个按钮'
                    onPress={()=>Alert.alert('提醒','您确定要退出吗?',[
                            {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消',ToastAndroid.SHORT)},
                            {text:'不确定',onPress:()=>ToastAndroid.show('你点击了不确定',ToastAndroid.SHORT)},
                            {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定',ToastAndroid.SHORT)}
                    ])}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd'
    }
});

AppRegistry.registerComponent('RNAppAlert', () => RNAppAlert);
