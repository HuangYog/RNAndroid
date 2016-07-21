/**
 * Created by huangyong on 16-7-21.
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Row extends Component{
    render() {
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        borderColor: 'red',
        borderWidth: 2,
        padding: 20,
        backgroundColor: '#3ad734',
        margin: 5
    },
    text: {
        alignSelf: 'center',
        color: '#fff'
    }
});
module.exports = Row;