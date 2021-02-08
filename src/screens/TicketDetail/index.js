/* 
* Copyright (C) 2021
*
* written/edited by:
*  marisol.dourado@gmail.com.br
*/

import React, { useEffect, useState } from 'react'
import { View, KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

export default function TicketDetail({ route, navigation }) {

    const [ticket, setTicket] = useState({});

    useEffect(() => {
        setTicket(route.params.ticket)
    })

    function openArticles() {

        navigation.navigate('ArticleDetail', {
            userLogin: route.params.userLogin,
            password: route.params.password,
            ticket: ticket
        })
    }

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}>

            <StatusBar
                backgroundColor="#2C2B3F"
                barStyle="light-content" />
            
            <View style={styles.header}>
                <View style={styles.headerIcon}>
                    <Fontisto name="ticket" size={24} color="#35B5AD" />
                </View>
                <Text style={styles.textHeader}>{'Ticket#' + ticket.TicketNumber}</Text>
            </View>

            <View style={styles.title}>
                <Text style={styles.textTitle}>{ticket.Title}</Text>
            </View>

            <View style={styles.hairline} />

            <View style={styles.data}>
                <Text style={styles.key}>{'Data de criação:'}</Text>
                <Text style={styles.value}>{ticket.Created}</Text>
            </View>

            <View style={styles.data}>
                <Text style={styles.key}>{'Serviço:'}</Text>
                <Text style={styles.value}>{ticket.Service}</Text>
            </View>

            <View style={styles.data}>
                <Text style={styles.key}>{'Estado:'}</Text>
                <Text style={styles.value}>{ticket.State}</Text>
            </View>

            <View style={styles.data}>
                <Text style={styles.key}>{'Prioridade:'}</Text>
                <Text style={styles.value}>{ticket.Priority}</Text>
            </View>

            <View style={styles.data}>
                <Text style={styles.key}>{'Cliente:'}</Text>
                <Text style={styles.value}>{ticket.CustomerID}</Text>
            </View>

            <View style={styles.data}>
                <Text style={styles.key}>{'Atendente:'}</Text>
                <Text style={styles.value}>{ticket.Owner}</Text>
            </View>

            <TouchableOpacity 
                onPress={openArticles} 
                style={styles.article}>
                <View style={styles.articleIcon}>
                    <Fontisto name="comments" size={24} color="#35B5AD" />
                </View>
                <Text style={styles.textArticle}>{'ARTIGOS'}</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2B3F',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIcon: {
        textAlign: 'center'
    },
    textHeader: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        textAlign: 'center',
        padding: 10,
        fontSize: 30
    },
    title: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textTitle: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        textAlign: 'left',
        fontSize: 20,
        width: '94%',
        padding: 10
    },
    hairline: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        marginTop: 20,
        marginBottom: 20,
        height: 2,
        width: '96%'
    },
    data: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#35344C',
        paddingHorizontal: 20,
        marginBottom: 15,
        height: 45,
        width: '94%',
        borderRadius: 5
    },
    key: {
        fontSize: 16,
        fontFamily: 'Ubuntu_300Light',
        fontWeight: 'bold',
        color: '#FFF'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Ubuntu_300Light',
        color: '#FFF',
        marginLeft: 10
    },
    article: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#35344C',
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
        height: 110
    },
    articleIcon: {
        textAlign: 'center'
    },
    textArticle: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 25
    },
})

