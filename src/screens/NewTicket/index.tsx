/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React, { useState } from 'react'
import { ActivityIndicator, Alert, StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation }from '@react-navigation/native';

import api from '../../services/api';

const NewTicket = () => {

    const navigation = useNavigation();

    const [title, setTitle]       = useState('Novo chamado')
    const [service, setService]   = useState('Service')
    const [timeUnit, setTimeUnit] = useState('0')
    const [customer, setCustomer] = useState('')
    const [description, setDescription] = useState('Descrição default')
    const [loading, setLoading] = useState(false)

    async function handleTicketCreate() {

        setLoading(true);

        const params = {
            //SessionID: "1nU0YTyC1yeIH8r0xikPfgMEJ6OHof6W",
            UserLogin: "dsilva", 
            Password: "dsilva123",
            Ticket: {
                Title: title,
                Queue: "Postmaster",
                Lock: "unlock",
                Type: "Requisição de serviço",                             
                Service: "Service",
                State: "new",
                Priority: "3 normal",
                CustomerUser: customer
            },
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
                TimeUnit: 10
            },
        }

        const response = await api.post('/Ticket', params )
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

        console.log(response);

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
           
            Alert.alert(
                'Chamado criado!',
                "O número do seu chamado é: " + response.data.TicketNumber,
                [
                    { text: 'OK', onPress: () => navigation.navigate('Tickets', {}) },
                ]
            )
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

                    <Text style={styles.label}>* Cliente</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="cliente"
                        placeholderTextColor="#999"
                        autoCorrect={false}
                        value={customer}
                        onChangeText={setCustomer}

                    />
                    
                    <Text style={styles.label}>Título</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="assunto do chamado"
                        placeholderTextColor="#999"
                        autoCorrect={false}
                        value={title}
                        onChangeText={setTitle}

                    />

                    <Text style={styles.label}>Service</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="serviço"
                        placeholderTextColor="#999"
                        value={service}
                        onChangeText={setService}
                    />

                    <Text style={styles.label}>Tempo contabilizado</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="em minutos"
                        placeholderTextColor="#999"
                        value={timeUnit}
                        onChangeText={setTimeUnit}
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
                </View>
                <View style={styles.main}>
                    <RectButton style={styles.button} onPress={handleTicketCreate}> 
                        <View style={styles.buttonIcon}>
                            <Text> 
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Abrir chamado 
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

export default NewTicket;

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
        marginBottom: 8,
        fontFamily: 'Ubuntu_300Light',
    },
    input: {
        // borderWidth: 1,
        // borderColor: '#000',
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