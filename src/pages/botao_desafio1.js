import React, { Component } from 'react';

import {
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    Alert, 
    AsyncStorage
} from 'react-native'

import map from '../assets/mapabrasil.png'
import blocked from '../assets/trava.png'
import unblocked from '../assets/unlocked.png'

import { Botao } from './MenuButton';
import logo from '../assets/fundo2.png';

import fortalezaImage from '../assets/fortaleza.jpg'
import { Actions } from 'react-native-router-flux';

export default class botao_desafio1 extends Component {


    componentDidMount() {
        // setTimeout(() => {
        //     Actions.questaoCeara();
        // }, 1000);

        // if (this.props.props == 'ceara') {
        //     setTimeout(() => {
        //         Actions.exercicioCeara();
        //     }, 100);

        // }
        // else if (this.props.props == 'saopaulo') {
        //     setTimeout(() => {
        //         Actions.exercicioSaoPaulo();
        //     }, 200);
        // }  else if (this.props.props == 'parana') {
        //     setTimeout(() => {
        //         Actions.exercicioParana();
        //     }, 200);
        // }
    }

    questaoCeara() {
        Actions.questaoCeara();
    }

    questaoSaoPaulo() {
        Actions.questaoSaoPaulo();
    }

    questaoCuritiba() {
        Actions.questaoParana();
    }

    render() {
        return (
            <ImageBackground source={logo} style={styles.container} >

                <View style={[styles.titleContainer, { alignItems: 'center', paddingTop: 30 }]}>
                    <Text
                        style={styles.titulo}
                    >
                        Agora Vamos Praticar...
                </Text>
                </View>



                <View style={styles.innerContainer}>
                    <View style={styles.containerButtons} >

                        <Botao
                            style={{ backgroundColor: 'red' }}
                            text='DESAFIO 1'
                            onPress={async () => {
                                try {
                                    await AsyncStorage.setItem('desafio', '2');
                                    await Alert.alert(
                                        'Atenção',
                                        `Realize o desafio matemático seguinte e ao final retorne com a tecla “voltar” do seu celular, para prosseguir no desafio 2 (São Paulo).                            `
                                    );
                                    Actions.menu({ props: 'ceara' });
                                } catch (error) {
                                    await Alert.alert(
                                        'Erro',
                                        '' + error,
                                    );
                                }

                              
                            }} ></Botao>


                    </View>
                </View>


            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    containerMap: {

    },
    titleContainer: {
        height: '20%',
        width: '100%',
    },
    innerContainer: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    containerButtons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '2%',
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },

    buttonPr: {
        marginLeft: 300,
        marginTop: 150,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '20%',
        height: 60,
        // backgroundColor: '',
        elevation: 10,
        borderRadius: 50
    },

    buttonSp: {
        marginLeft: 220,
        marginTop: 180,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '20%',
        height: 60,
        // backgroundColor: '',
        elevation: 10,
        borderRadius: 50
    },

    buttonCe: {
        marginLeft: 320,
        marginTop: 120,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '20%',
        height: 60,
        // backgroundColor: '',
        elevation: 10,
        borderRadius: 50
    },

    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    conteudo: {
        height: '50%',
        alignItems: 'center',
        // margin: 20,
        // justifyContent: 'center',
    },
})
