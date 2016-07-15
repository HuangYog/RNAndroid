/**
 * 简单的Text 组件使用
 */
'use strict';


import React, {Component} from "react";
import {AppRegistry, Text, StyleSheet, View} from "react-native";

class RNAppView extends Component {

    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.titleBase}>
                        I am root text !
                        <Text style={styles.title}>
                            I am chid text !
                        </Text>
                    </Text>
                </Text>
                <View style={{borderWidth:1,borderStyle: 'dashed',borderColor: 'blue'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 28}}>
                        水平分布  I am bold   水平分布  I am bold
                        <Text style={{color: 'red'}}>     and red</Text>
                    </Text>
                </View>
                <View style={{borderWidth:1,borderStyle: 'dotted',borderColor: 'green'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 28}}> 垂直分布 I am bold</Text>
                    <Text style={{color: 'red'}}>     and red</Text>
                </View>
                <View>
                    <Text style={{color: 'red'}}>这是红色</Text>
                    <Text style={{color: 'green', fontSize: 20}}>这是绿色，大小为20</Text>
                    <Text style={{color: 'green', fontFamily: 'Cochin'}}>这是绿色，字体为Cochin</Text>
                    <Text style={{color: 'pink', fontWeight: 'blod'}}>这是粉色，字体加粗</Text>
                    <Text style={{color: 'gray', fontStyle: 'italic'}}>这是灰色，斜字体</Text>
                    <Text style={{textAlign: 'center', fontStyle: 'italic'}}>居中显示，斜体</Text>
                    <Text style={{textAlign:'center',fontStyle:'italic'}} numberOfLines={1}>
                        测试行数 居中和斜体 ,再多的数据也只会显示一行        再多的数据也只会显示一行   再多的数据也只会显示一行
                    </Text>
                    <Text style={{marginLeft:50,marginTop:50,textAlign:'center',fontStyle:'italic'}}>
                        设置文本的间距,居左，居顶部50
                    </Text>
                    <Text numberOfLines={2} style={{lineHeight:50,textAlign:'center',fontStyle:'italic'}}>
                        测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                        测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                    </Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    titleBase: {
        margin: 10,
        textAlign: 'center',
        color: 'red',
        fontSize: 28,
        fontFamily: 'Cochin'
    },
    title: {
        color: 'green',
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('RNAppView', () => RNAppView);