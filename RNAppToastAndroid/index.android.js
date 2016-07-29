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
    ToastAndroid,
    TouchableHighlight
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

class RNAppToastAndroid extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    点击弹出段时间的 Toast
                </Text>
                <CustomButton
                text = '点击弹出段时间的 toast'
                onPress={() => ToastAndroid.show('只是弹出来的toast,是短时间的', ToastAndroid.SHORT)}/>
                <Text style={styles.welcome}>点击弹出时间长的Toast</Text>
                <CustomButton
                text="点击弹出时间长的toast"
                onPress={() => ToastAndroid.show("点击弹出长时间的 Toast",ToastAndroid.LONG)}/>
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
        borderBottomColor: '#CDCDCD'
    }
});

AppRegistry.registerComponent('RNAppToastAndroid', () => RNAppToastAndroid);
