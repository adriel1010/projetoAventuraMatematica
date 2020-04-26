import React, { Component } from 'react';

import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Video from 'react-native-video';
import next from '../assets/next.png';
import { Actions } from 'react-native-router-flux';

export default class ExercicioCeara extends Component {

    onEnd() {
        Actions.menu();
    }

    componentDidMount() {

    }



    render() {
        return (
            <WebView
                source={{ uri: 'https://www.geogebra.org/m/ewv6ce82' }}
                style={{ marginTop: 40 }}>
            </WebView>
        )
    }
}


const style = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    container: {
        flex: 1
    },

    video: {
        height: '70%',
    },

    button: {
        alignItems: 'center',
        paddingTop: '10%',
        marginLeft: '85%',
        borderRadius: 20,
    }
});

