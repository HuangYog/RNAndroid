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
    Clipboard,
    ToastAndroid
} from 'react-native';

class RNAppCilpboard extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            content: '需要保存的内容: '
        };
    }

    async _setClipboardContent() {
        Clipboard.setString('Heoo ,React-Native');
        try {
            var content = await Clipboard.getString();
            ToastAndroid.show('粘贴板上的内容为: ' + content, ToastAndroid.SHORT);
        } catch (e) {
            ToastAndroid.show(e.message, ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Clipboard 粘贴板演示 setString, getString 方法
                </Text>
                <Text
                    onPress={this. _setClipboardContent}
                    style={styles.instructions}>
                    点击我 复制 'Heoo ,React-Native' 添加到粘贴板,弹出Tost显示内容
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10,
        marginLeft: 10
    },
    instructions: {
        textAlign: 'center',
        color: 'green',
        marginBottom: 5,
        fontSize:20
    },
});

AppRegistry.registerComponent('RNAppCilpboard', () => RNAppCilpboard);
