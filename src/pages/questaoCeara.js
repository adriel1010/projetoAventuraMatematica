import React, { Component } from 'react';

import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import Video from 'react-native-video';
import next from '../assets/next.png';
import prev from '../assets/prev.png';
import { Actions } from 'react-native-router-flux';



export default class QuestaoCeara extends Component {

    onEnd() { 
        // Actions.menu({ props: 'ceara' });
        Actions.desafio1();
    } 
    onPrv() { 
        Actions.menu();
    } 
    render() {
        return (
            <View>
                {/* <View  style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 50 }} onPress={() => this.onPrv()}>
                        <Image source={prev} size={32} />
                    </TouchableOpacity>

                    <TouchableOpacity   style={{ width: 50, marginLeft: '75%' }} onPress={() => this.onEnd()}>
                        <Image source={next} size={32} />
                    </TouchableOpacity> 
                </View> */}

                <View >
                    <Video
                        ref={(ref) => {
                            this.player = ref
                        }}
                        source={{ uri: 'vanessa_sinalizadoapp', type: 'mp4' }}
                        style={style.backgroundVideo}
                        onEnd={() => this.onEnd()}
                    />
                </View>

            </View>
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

