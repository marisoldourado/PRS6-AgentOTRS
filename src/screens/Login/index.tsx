/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { Alert, View, StyleSheet, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'

import { useNavigation }from '@react-navigation/native'

const logo =  require('../../assets/logo_new.png')
// import logo from '../../assets/purple_logo.png'
//import api from '../services/api'

// export default function Login({ navigation }) {
export default function Login( ) {

    const navigation = useNavigation();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {

        // realizar chamada na api para validar usuario e senha
        // disparar um Alert caso os dados estejam incorretos

        //navigation.navigate('Navigator', { token: response.data.result })
        navigation.navigate('Navigator')

    }

    return (
    <KeyboardAvoidingView 
        behavior="padding" 
        style={styles.container}
        enabled={Platform.OS === 'ios'}>

        <StatusBar
            backgroundColor="#320346"
            barStyle="light-content" />

        <Image source={logo} style={styles.logo} />

        <View style={styles.form}>
            <Text style={styles.title}>Help Desk - Atendente</Text>
            <Text style={styles.subtitle}>Login</Text>

            <Text style={styles.label}>User</Text>
            <TextInput 
                style={styles.input}
                placeholder="user.name"
                placeholderTextColor="#999"
                autoCorrect={false}
                value={username}
                onChangeText={setUsername}

            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder="**********"
                placeholderTextColor="#999"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
            />

            <TouchableOpacity 
                onPress={handleLogin} 
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPasswd}>Esqueceu a senha?</Text>

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
        paddingHorizontal: 40,
    },

    label: {
        color: '#808790',
        marginBottom: 8,
        fontFamily: 'Ubuntu_300Light',
    },
    forgotPasswd: {
        color: '#35B5AD',
        marginBottom: 8,
        textAlign: 'right',
        fontFamily: 'Ubuntu_300Light',
    },

    title: {
        color: '#e6e1e4',
        fontSize: 28,
        marginBottom: 8,
        top: 10,
        fontFamily: 'Ubuntu_300Light',
    },

    subtitle: {
        color: '#FFF',
        fontSize: 24,
        // fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Ubuntu_700Bold'
    },

    input: {
        borderWidth: 1,
        borderColor: '#35344c',
        backgroundColor: '#35344c',
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: 'Ubuntu_300Light',
        color: '#FFF',
        height: 45,
        marginBottom: 20,
        borderRadius: 5,
    },
    
    button: {
        height: 45,
        backgroundColor: '#35B5AD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        fontFamily: 'Ubuntu_300Light',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Ubuntu_700Bold',
    },

    logo: {
        alignSelf: 'flex-start',
        height: 100,
        width: 180,
        resizeMode: 'contain'
    }
})
