/* 
* Copyright (C) 2020 
*
* written/edited by:
*   marisol.dourado@gmail.com.br
*/

import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

export default function Stats({ route, navigation }) {

    // const [ticket, setTicket] = useState(route.params.ticket)

    useEffect(() => {
    }, [])

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}>

            <StatusBar
                backgroundColor="#2C2B3F"
                barStyle="light-content" />

            <Fontisto name="pie-chart-2" size={48} color="#35B5AD" />
            <Text style={styles.title}>Relatorios</Text>
            <Text style={styles.subtitle}>{'Em breve...'}</Text>

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
    }
})