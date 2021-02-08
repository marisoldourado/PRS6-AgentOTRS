/* 
* Copyright (C) 2021
*
* written/edited by:
*  marisol.dourado@gmail.com.br
*/

import React, { useEffect, useState, useRef } from 'react'
import { View, KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

import { HeaderBackButton } from '@react-navigation/stack'

export default function ArticleDetail({ route, navigation }) {

    const [ticket, setTicket] = useState(route.params.ticket)
    const scrollRef = useRef()

    useEffect(() => {

        scrollRef.current?.scrollToEnd({ animated: true })

        navigation.setOptions({
            title: route.params.ticket.TicketNumber,
            headerLeft: () => (
                <HeaderBackButton
                    tintColor='#FFF'
                    onPress={() => {
                        navigation.navigate('TicketDetail', {
                            user: route.params.user,
                            userLogin: route.params.userLogin,
                            password: route.params.password
                        })
                    }}
                />
            )
        })
    }, [])

    function sendMessage() {

        navigation.navigate('TicketAnswer', {
            userLogin: route.params.userLogin,
            password: route.params.password,
            ticket: ticket
        })
    }

    return (

        <ScrollView ref={scrollRef} >

            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled={Platform.OS === 'ios'}>

                <StatusBar
                    backgroundColor="#2C2B3F"
                    barStyle="light-content" />

                <View style={styles.clear}></View>

                {ticket.Article.map((article) => {
                    return (
                        <View>
                            { article.SenderType === 'customer' ? (                 
                                <View style={styles.customer}>
                                    <View style={styles.iconCustomer}>
                                        <Fontisto name="person" size={24} color="#35B5AD" />
                                    </View>
                                    <Text style={styles.text}>{article.Subject + ': \n' + article.Body.slice(0, 200) + ' ...'}</Text>
                                </View>  
                            ) : (
                                <View style={styles.agent}>
                                    <Text style={styles.text}>{article.Subject + ': \n' + article.Body.slice(0, 200) + ' ...'}</Text>
                                    <View style={styles.iconAgent}>
                                        <Fontisto name="person" size={24} color="#35B5AD" />
                                    </View>
                                </View>  
                            )}
                            <View style={styles.customer}>
                                <View style={styles.iconCustomer}>
                                    <Fontisto name="person" size={24} color="#35B5AD" />
                                </View>
                                <Text style={styles.text}>{' dsdsadsadsd ...'}</Text>
                            </View>  
                            <View style={styles.customer}>
                                <View style={styles.iconCustomer}>
                                    <Fontisto name="person" size={24} color="#35B5AD" />
                                </View>
                                <Text style={styles.text}>{' dsdsdsdsdsds ...'}</Text>
                            </View>  
                            <View style={styles.agent}>
                                <Text style={styles.text}>{' dadadadadadadada ...'}</Text>
                                <View style={styles.iconAgent}>
                                    <Fontisto name="person" size={24} color="#35B5AD" />
                                </View>
                            </View>  
                            <View style={styles.customer}>
                                <View style={styles.iconCustomer}>
                                    <Fontisto name="person" size={24} color="#35B5AD" />
                                </View>
                                <Text style={styles.text}>{' dsdsdsdsdsds ...'}</Text>
                            </View>  
                            <View style={styles.agent}>
                                <Text style={styles.text}>{' dadadadadadadada ...'}</Text>
                                <View style={styles.iconAgent}>
                                    <Fontisto name="person" size={24} color="#35B5AD" />
                                </View>
                            </View>  
                            <View style={styles.agent}>
                                <Text style={styles.text}>{' dadadadadadadada ...'}</Text>
                                <View style={styles.iconAgent}>
                                    <Fontisto name="person" size={24} color="#35B5AD" />
                                </View>
                            </View>  
                        </View>
                    )
                })}            

            <TouchableOpacity 
                onPress={sendMessage} 
                style={styles.message}>
                <View style={styles.messageIcon}>
                    <Fontisto name="navigate" size={24} color="#35B5AD" />
                </View>
                <Text style={styles.textMessage}>{'Responder'}</Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2B3F',
        alignItems: 'center'
    },
    clear: {
        paddingTop: 10
    },
    iconCustomer: {
        textAlign: 'center',
        marginRight: 10
    },
    customer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    text: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        padding: 10,
        fontSize: 16,
        backgroundColor: '#35344C',
        borderRadius: 5,
        width: '95%'
    },
    iconAgent: {
        textAlign: 'center',
        marginLeft: 10
    },
    agent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20
    },
    message: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#35344C',
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        height: 110,
        width: '40%'
    },
    messageIcon: {
        textAlign: 'center'
    },
    textMessage: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 25
    },
})