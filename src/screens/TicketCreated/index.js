/* 
* Copyright (C) 2020 
*
* written/edited by:
*   marisol.dourado@gmail.com.br
*/

import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Fontisto, Feather as Icon } from '@expo/vector-icons'

export default function TicketCreated({ route, navigation }) {

    const [ticket, setTicket] = useState(route.params.ticket)

    useEffect(() => {
    }, [])

    function backToTickets() {
        navigation.navigate('Tickets')
        navigation.pop()
    }

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
            <Text style={styles.subtitle}>{'O número do seu ticket é #' + ticket.TicketNumber}</Text>

            <View style={styles.main}>
                <RectButton style={styles.button} onPress={backToTickets}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        OK
                    </Text>
                </RectButton>
            </View>

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
    main: {
        width: '30%',
        marginTop: 50
    },
    button: {
        backgroundColor: '#35B5AD',
        height: 48,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonIcon: {
        height: 48,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Ubuntu_300Light',
        fontSize: 16,
    }
})

