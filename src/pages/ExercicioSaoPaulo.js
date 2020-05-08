import React, { Component } from 'react';

import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text, ImageBackground, Alert, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';
import Video from 'react-native-video';
import next from '../assets/next.png';
import logo from '../assets/fundo2.png';
import { Actions } from 'react-native-router-flux';

import { Botao } from './MenuButton';

export default class ExercicioSaoPaulo extends Component {

    onEnd() {
        Actions.menu();
    }



    render() {
        return (
            <ImageBackground source={logo} style={style.container} >
                <View style={[style.titleContainer, { alignItems: 'center', paddingTop: 30 }]}>
                    <Text
                        style={style.titulo}
                    >
                        Pensando nos quatro campos artísticos, que são:
                        ARTES VISUAIS, MÚSICA, DANÇAS e TEATRO,
                        como conjuntos de obras ou peças, identifique a sentença verdadeira:
                </Text>
                </View>

                { /* Coluna 1 */}
                <View style={style.innerContainer}>
                    <View style={style.containerButtons} >
                        <Botao
                            style={{ backgroundColor: 'red' }}
                            text='ABAPORU ∈ DANÇA'
                            onPress={() => {
                                Alert.alert(
                                    'oh não…',
                                    ` resposta errada, tente novamente`
                                );
                            }}
                        />

                        <Botao
                            style={{ backgroundColor: 'green' }}
                            text='MONA LISA ∈ ARTES VISUAIS'
                            onPress={async () => {
                                await Alert.alert(
                                    'Parabéns',
                                    `Parabéns, missão cumprida!`
                                );
                                try {
                                    await AsyncStorage.setItem('desafio', '3');
                                } catch (error) {
                                    // Error saving data
                                }
                                setTimeout(async () => {
                                    Actions.menu();
                                }, 500); 
                            }}
                        />
                        <Botao
                            style={{ backgroundColor: 'purple' }}
                            text='{BALLET, SAPATEADO} ∈ DANÇA'
                            onPress={() => {
                                Alert.alert(
                                    'oh não…',
                                    ` resposta errada, tente novamente`
                                );
                            }}
                        />
                    </View>


                </View>

            </ImageBackground>
        )
    }
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    innerContainer: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    imagem: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        width: '100%'
    },

    titleContainer: {
        height: '20%',
        width: '100%',
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },

    containerButtons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '2%',
    },

});

