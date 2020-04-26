import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import logo from '../assets/fundo4.png'

function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function load() {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }

        load();
    })

    function iniciar() {
        Actions.apresentacao();
    }

    return (
        <ImageBackground source={logo} style={styles.container}>
            <View style={[styles.conteudo, { marginTop: 60 }] }>
            </View>

            { loading ? 
                <View style={[styles.conteudo, { justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#5cb85c'/>
                </View> :
                <View style={[styles.conteudo, { justifyContent: 'center' }]}>
                    <TouchableOpacity style={styles.button} onPress={() => iniciar()}>
                        <Text style={styles.textButton}>INICIAR</Text>
                    </TouchableOpacity>
                </View>    
            }
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '75%',
        height: 40,
        backgroundColor: '#5cb85c',
        elevation: 10 

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

export default Home
