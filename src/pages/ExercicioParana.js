import React, { Component } from 'react';

import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text, ImageBackground, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import Video from 'react-native-video';
import next from '../assets/next.png';
import logo from '../assets/fundo2.png';
import { Actions } from 'react-native-router-flux';

import { Botao } from './MenuButton';

export default class ExercicioParana extends Component {

    onEnd() {
        Actions.menu();
    }

    async errado(solido) {
        await Alert.alert(
            'Ops, você não acertou!',
            `O MASP não é um ${solido}, vamos tentar novamente: `
        );
    }


    render() {
        return (
            <ImageBackground source={logo} style={style.container} >
                <View style={[style.titleContainer, { alignItems: 'center', paddingTop: 30 }]}>
                    <Text
                        style={style.titulo}
                    >
                        Os sinais que o Carlos fez se referem, respectivamente, à:

                </Text>
                </View>

                <View style={style.innerContainer}>
                    <View style={style.containerButtons} >
                        <Botao
                            style={{ backgroundColor: 'red' }}
                            text='Conjunto, União de Conjuntos, Intersecção de Conjuntos'
                            onPress={() => {
                                Alert.alert(
                                    'oh não…',
                                    ` resposta errada, tente novamente`
                                );
                            }}
                        />

                        <Botao
                            style={{ backgroundColor: 'green' }}
                            text='União de Conjuntos, conjunto complementar, diferença'
                            onPress={() => {
                                Alert.alert(
                                    'oh não…',
                                    ` resposta errada, tente novamente`
                                );
                            }}
                        />
                        <Botao
                            style={{ backgroundColor: 'purple' }}
                            text='Conjunto, Interseção de Conjuntos e União de Conjuntos'
                            onPress={async () => {
                              await Alert.alert(
                                    'Parabéns',
                                    `Missão Cumprida!  Aguarde atualização... `
                                );
                                Actions.home();
                            }}
                        />

                        <Botao
                            style={{ backgroundColor: 'blue' }}
                            text='Pertence, Contido e Subconjunto'
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
        height: '50%',
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

