/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'

import api from '../../services/api';

export default function TicketAnswer({ route, navigation }) {

    const [title, setTitle]             = useState('Novo chamado')
    const [timeUnit, setTimeUnit]       = useState('0')
    const [description, setDescription] = useState('Descrição default')
    const [loading, setLoading]         = useState(false)
    const [ticket, setTicket]           = useState(route.params.ticket)

    useEffect(() => {

    }, [])

    async function sendAnswer() {

        setLoading(true);

        const params = {
            UserLogin: route.params.userLogin, 
            Password: route.params.password,
            Article: {
                CommunicationChannel: "Email",                    
                IsVisibleForCustomer: 1,
                From: "Marisol <marisol.dourado@gmail.com>",
                Subject: title,
                Body: description,
                MimeType: "text/html",
                Charset: "utf-8",
                HistoryType: "AddNote",
                HistoryComment: "Test Creation Article",
                TimeUnit: timeUnit
            },
        }

        const response = await api.pu('/Ticket/' + ticket.TicketID, params )
        .then()
        .catch(error => {
            Alert.alert(
                'Falha',
                "Não foi possível realizar a abertura do chamado =/",
                [
                    { text: 'Tentar novamente', onPress: () => handleTicketCreate() },
                    { text: 'OK' }
                ]
            )

            setLoading(false)
        })

        if(response.data.Error){
            Alert.alert(
                'failError',
                "Não foi possível realizar a abertura do chamado =/",
                [
                    { text: 'Tentar novamente', onPress: () => handleTicketCreate() },
                    { text: 'OK' }
                ]
            )
            setLoading(false)
        }
        else {

            setLoading(false)
           
            navigation.navigate('TicketResponseSent', {
                userLogin: route.params.userLogin,
                password: route.params.password,
                ticket: response.data
            })
        }
    }

    return ( 

        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <StatusBar
            backgroundColor="#35344c"
            barStyle="light-content" />
            <View style={styles.container}>
                <View>

                    <Text style={styles.label}>Assunto</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="assunto do chamado"
                        placeholderTextColor="#999"
                        autoCorrect={false}
                        value={title}
                        onChangeText={setTitle}
                    />

                    <Text style={styles.label}>Descrição</Text>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            value={description}
                            onChangeText={setDescription}
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>

                    <Text style={styles.label}>Tempo contabilizado</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="em minutos"
                        placeholderTextColor="#999"
                        value={timeUnit}
                        onChangeText={setTimeUnit}
                    />

                </View>
                <View style={styles.main}>
                    <RectButton style={styles.button} onPress={sendAnswer}> 
                        <View style={styles.buttonIcon}>
                            <Text> 
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Enviar
                        </Text>
                    </RectButton>
                </View>
                <ActivityIndicator 
                    animating 
                    size="large"
                    color={ loading ? '#F5F5F5' : '#2C2B3F' }
                    hidesWhenStopped={true}
                    style={ styles.loading } 
                />    
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#2C2B3F'
    },
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    footer: {

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
    },
    label: {
        color: '#FFF',
        marginTop: 20,
        marginBottom: 8,
        fontFamily: 'Ubuntu_300Light',
    },
    input: {
        backgroundColor: '#35344c',
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: 'Ubuntu_300Light',
        color: '#FFF',
        height: 45,
        marginBottom: 8,
        borderRadius: 5,
    },
    textAreaContainer: {
        borderRadius: 5,
        borderColor: '#35344c',
        backgroundColor: '#35344c',
        padding: 5
    },
    textArea: {
        backgroundColor: '#35344c',
        height: 100,
        justifyContent: "flex-start",
        color: '#FFF'
    },
    loading: {
        top: 8
    }
})