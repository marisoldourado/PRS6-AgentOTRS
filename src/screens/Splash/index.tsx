/* 
* Copyright (C) 2020 
*
* written/edited by:
*  marisol.dourado@gmail.com.br
*/

import React, { useEffect } from 'react'
import { KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Image } from 'react-native'

import { useNavigation }from '@react-navigation/native'

const logo =  require('../../assets/purple_logo.png')

export default function Splash() {

    const navigation = useNavigation();

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
        
    })


    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}>

            <StatusBar
                backgroundColor="#320346"
                barStyle="light-content" />

            <Image source={logo} style={styles.logo} />
        
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        alignSelf: 'center',
        height: 150,
        width: 300,
        resizeMode: 'contain'
    },
})

