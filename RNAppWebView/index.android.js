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
    WebView
} from 'react-native';

var DEFAULT_URL = 'http://www.oschina.net/';
const HTML = `<!DOCTYPE html>\n
    <html>
    <head>
    <title>HTML字符串</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
    body {
    margin: 0;
    padding: 0;
    font: 62.5% arial, sans-serif;
    background: #ccc;
}
h1 {
    padding: 45px;
    margin: 0;
    text-align: center;
    color: #33f;
}
</style>
</head>
<body>
<h1>加载静态的HTML文本信息</h1>
</body>
</html>`;

class RNAppWebView extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{height: 30, backgroundColor: '#cc4125',alignSelf:'center'}}>
                    简单的网页显示
                </Text>
                <WebView
                    style={styles.webview_style}
                    source = {{html:HTML}}
                    startInLoadingState = {false}
                    domStorageEnabled = {true}
                    javaScriptEnabled = {true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webview_style: {
        backgroundColor: '#00ff00'
    }
});

AppRegistry.registerComponent('RNAppWebView', () => RNAppWebView);
