/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons';

const NewTicket = () => {
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
                    <Text style={styles.label}>Título</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="assunto do chamado"
                        placeholderTextColor="#999"
                        autoCorrect={false}
                       // value={username}
                        //onChangeText={setUsername}

                    />
                    <Text style={styles.label}>Tipo</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="tipo"
                        placeholderTextColor="#999"
                        //value={password}
                        secureTextEntry={true}
                        //onChangeText={setPassword}
                    />

                    <Text style={styles.label}>Service</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="serviço"
                        placeholderTextColor="#999"
                        //value={password}
                        secureTextEntry={true}
                        //onChangeText={setPassword}
                    />

                    <Text style={styles.label}>Prioridade</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="prioridade"
                        placeholderTextColor="#999"
                        //value={password}
                        secureTextEntry={true}
                        //onChangeText={setPassword}
                    />

                    <Text style={styles.label}>Descrição</Text>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            // placeholder="Type something"
                            // placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            />
                    </View>
                </View>
                <View style={styles.main}>
                    <RectButton style={styles.button} onPress={() => {}}> 
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
            </View>
        </KeyboardAvoidingView>
    );
};

export default NewTicket;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
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
        color: '#320346',
        height: 45,
        marginBottom: 20,
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
        justifyContent: "flex-start"
    }
})