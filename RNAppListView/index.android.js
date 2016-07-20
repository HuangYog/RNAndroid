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
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';
var THUMB_URLS = [
    require('./img/one.png'),
    require('./img/two.png'),
    require('./img/three.png'),
    require('./img/four.png'),
    require('./img/five.png'),
    require('./img/six.png'),
    require('./img/seven.png'),
    require('./img/eight.png'),
    require('./img/nine.png'),
    require('./img/ten.png')
];

class RNAppListView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows(this._genRows({}))};

    }

    _genRows(pressData: {[key: number]: boolean}) :Array<string> {
        var dataBlob = [];
        for (var ii = 0; ii < THUMB_URLS.length; ii++) {
            dataBlob.push('单元格 ' + (ii+1));
        }
        console.log('dataBlob ' + dataBlob);
        return dataBlob;
    }

    _renderRow(rowData: string, sectionID: number, rowID:number) {
        var imgSource = THUMB_URLS[rowID];
        return (
            <TouchableHighlight underlayColor="red">
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource} />
                        <Text style={styles.text}>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                initialListSize={10}
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: 85,
        height: 85,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC',
        backgroundColor: '#F6F6F6'
    },
    list: {
        marginTop: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    thumb: {
        width: 45,
        height: 45
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('RNAppListView', () => RNAppListView);
