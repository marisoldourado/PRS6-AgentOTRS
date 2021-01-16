/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React from 'react'
import { 
    View, StyleSheet,
    Text, Image, KeyboardAvoidingView, 
    Platform, StatusBar 
} from 'react-native'

const logo =  require('../../assets/logo_new.png')

export default function About() {

    return (
        <KeyboardAvoidingView 
            behavior="padding" 
            style={styles.container}
            enabled={Platform.OS === 'ios'}>

            <StatusBar
                backgroundColor="#000"
                barStyle="light-content" />

            <View style={styles.form}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>Sobre nós</Text>

                <Text style={styles.aboutLabel}>Projeto desenvolvido pelos alunos de análise e desenvolvimento de sistemas do IFSP câmpus Araraquara</Text>
                {/* <Text style={styles.aboutLabel}>All rights reserved. 2021</Text> */}
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C2B3F'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },

    title: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Ubuntu_700Bold'
    },

    aboutLabel: { 
        color: '#808790',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Ubuntu_300Light'
    },

    logo: {
        // maxWidth: 290,
        // maxHeight: 200
        alignSelf: 'center',
        height: 130,
        width: 300,
        resizeMode: 'contain'
    },

    copyRight: {
        color: '#808790',
        top: 100,
        textAlign: 'center',
        fontFamily: 'Ubuntu_300Light'
    },
})
