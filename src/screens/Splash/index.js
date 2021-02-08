/* 
* Copyright (C) 2020 
*
* written/edited by:
*  marisol.dourado@gmail.com.br
*/

import React, { useEffect } from 'react'
import { KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { useNavigation } from '@react-navigation/native'

const logo = require('../../assets/logo_new.png')

export default function Splash() {

    const navigation = useNavigation();

    useEffect(() => {

        // clearAsyncStorage()

        loadUser()
    })

    // async function clearAsyncStorage() {
    //     AsyncStorage.clear()
    // }

    async function loadUser() {

        const userLogin = await AsyncStorage.getItem('userLogin')
        const password = await AsyncStorage.getItem('password')
        const token = await AsyncStorage.getItem('token')

        if (userLogin && userLogin) {

            navigation.navigate('Navigator', {
                token: token,
                userLogin: userLogin,
                password: password
            })
        }
        else {

            setTimeout(() => {
                navigation.navigate('Login', {
                    token: '',
                    userLogin: '',
                    password: ''
                })
            }, 2000)
        }
    }


    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}>

            <StatusBar
                backgroundColor="#35344c"
                barStyle="light-content" />

            <Image source={logo} style={styles.logo} />

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2B3F',
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

