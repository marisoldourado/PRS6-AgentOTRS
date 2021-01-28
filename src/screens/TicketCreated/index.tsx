/* 
* Copyright (C) 2020 
*
* written/edited by:
*  marisol.dourado@gmail.com.br
*/

import React, { useEffect } from 'react'
import { KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Text } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 
import { useNavigation }from '@react-navigation/native'

export default function TicketCreated() {

    const navigation = useNavigation();

    useEffect(() => {

        console.log("aaaaaa");

        setTimeout(() => {
            navigation.navigate('Tickets')
        }, 5000)
        
    })

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}>

            <StatusBar
                backgroundColor="#2C2B3F"
                barStyle="light-content" />

            <Fontisto name="check" size={48} color="#35B5AD" />
            <Text style={styles.title}>Ticket criado!</Text>
            <Text style={styles.subtitle}>O número do seu ticket é 20215675 </Text>
        
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
    title: {
        marginTop: 24,
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        textAlign: 'center',
        fontSize: 24
    },
    subtitle: {
        marginTop: 24,
        color: '#FFF',
        fontFamily: 'Ubuntu_300Light',
        textAlign: 'center',
        fontSize: 18
    },
})

