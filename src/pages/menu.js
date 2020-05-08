import React, { Component } from 'react';

import {
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    Alert,
    AsyncStorage,
    Dimensions
} from 'react-native'

import map from '../assets/mapabrasil.png'
import blocked from '../assets/trava.png'
import unblocked from '../assets/unlocked.png'

import fortalezaImage from '../assets/fortaleza.jpg'
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {


    state = {
        posicao: '',
    }

    async componentDidMount() {
        if (this.props.props == 'ceara') {
            setTimeout(async () => {
                Actions.exercicioCeara();
            }, 100);

        }

        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;

        // Alert.alert(
        //     'Atenção',
        //     `........ ` + windowWidth + ' -- ' + windowHeight
        // );

        try {
            const value = await AsyncStorage.getItem('desafio');


            if (value !== null) {
                // We have data!!

                this.setState({
                    posicao: value,
                });
            }
        } catch (error) {
            Alert.alert(
                'Atenção',
                `........ ` + error
            );
        }

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
            <ImageBackground source={map} style={styles.container} >
                <TouchableOpacity onPress={() => this.questaoCeara()} style={[styles.buttonCe]}>
                    <Image source={unblocked} height={10} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonSp]} disabled={this.state.posicao > 1 ? false : true} onPress={() => this.questaoSaoPaulo()}>
                    <Image source={this.state.posicao > 1 ? unblocked : blocked} height={10} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonPr]} disabled={this.state.posicao > 2 ? false : true} onPress={() => this.questaoCuritiba()}>
                    <Image source={this.state.posicao > 2 ? unblocked : blocked} height={10} />
                </TouchableOpacity>


            </ImageBackground>
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

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    buttonPr: {
        marginLeft: Dimensions.get('window').width  > 360 ? 200 : 180,
        marginTop: Dimensions.get('window').width  > 360 ? 0 : -20,
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
        marginLeft: Dimensions.get('window').width  > 360 ? 220 : 200,
        marginTop: Dimensions.get('window').width  > 360 ? 200 : 140,
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
        marginLeft: Dimensions.get('window').width  > 360 ? 340 : 320,
        marginTop: Dimensions.get('window').width  > 360 ? 180 : 120,
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
