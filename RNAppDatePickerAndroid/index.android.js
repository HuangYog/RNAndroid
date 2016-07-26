/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DatePickerAndroid,
    TouchableHighlight
} from 'react-native';

class CustomButton extends Component {
    render () {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor= '#a5a5a5'
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class RNAppDatePickerAndroid extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            presetDate: new Date(2016, 3, 5),
            allDate: new Date(2020, 4, 5),
            simpleText: '选择日期,默认今天',
            minText: '选择日期,不能比今天早',
            maxText: '选择日期,不能比今天晚',
            presetText: '选择日期, 指定 2016/3/5'
        };
      }

      // 进行创建时间日期选择器
    async showPicker(stateKey, options){
        try{
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if(action === DatePickerAndroid.dismissedAction){
                newState[stateKey + 'Text'] = 'dismissed';
            } else{
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        }catch ({code, message}){
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    日期选择器组件实例
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
                    <Text style={styles.buttonText}>点击弹出基本日期选择器</Text>
                </TouchableHighlight>
                <CustomButton text={this.state.presetText}
                              onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}/>
                <CustomButton text={this.state.minText}
                              onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:new Date()})}/>
                <CustomButton text={this.state.maxText}
                              onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
            </View>
        );
    }
    formateDate (format) {
        var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(), //day
            "h+" : this.getHours(), //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3), //quarter
            "S" : this.getMilliseconds() //millisecond
        }
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (this.getFullYear()+"").substr(4- RegExp.$1.length));
        for(var k in o)if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length==1? o[k] :
                    ("00"+ o[k]).substr((""+ o[k]).length));
        return format;
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 15,
        borderBottomColor: '#cdcdcd'
    }
});

AppRegistry.registerComponent('RNAppDatePickerAndroid', () => RNAppDatePickerAndroid);
