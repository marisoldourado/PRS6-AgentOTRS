/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'

import New from '../NewTicket'
import Created from '../TicketCreated'

const Stack = createStackNavigator()

export default function StackNewTicket({ route, navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Novo chamado"
                component={New}
                initialParams={ route.params }
                options={{ 
                    headerStyle: {
                        backgroundColor: '#2C2B3F',
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontFamily: 'Ubuntu_400Regular'
                    },
                    headerLeft: () => null
                }}
            />
             <Stack.Screen 
                name="Created"
                component={Created}
                initialParams={ route.params }
                options={{ 
                    headerStyle: {
                        backgroundColor: '#2C2B3F',
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontFamily: 'Ubuntu_400Regular'
                    },
                    headerLeft: () => null
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 15,
        width: 280,
        height: 35,
    },
    filterIcon: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 60
    },
})
