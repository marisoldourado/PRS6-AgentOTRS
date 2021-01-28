/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// import About from './About'
import StackTickets from '../../screens/StackTickets'
import StackNew from '../../screens/StackNewTicket'
import StackAbout from '../../screens/About'
import { useRoute }from '@react-navigation/native'
  
const Tab = createBottomTabNavigator();

export default function Navigator() {

    return (

        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontFamily: 'Ubuntu_300Light'},
                style: {
                    borderTopColor:'#35344c',
                    backgroundColor: '#35344c',
                },
                activeTintColor: '#FFF',
            }}
        >

            <Tab.Screen name="Tickets" component={StackTickets} 
                // initialParams={ route.params }
                options={{
                    tabBarLabel: 'Chamados',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="tags" size={20} color="#FFF" />
                    ),
                }}
            />
            
            <Tab.Screen name="New" component={StackNew}
               // initialParams={ route.params }
                options={{
                    tabBarLabel: 'Novo chamado',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="plus" size={20} color="#FFF" />
                    ),
                }}
            />
            <Tab.Screen name="About" component={StackAbout}
               // initialParams={ route.params }
                options={{
                    tabBarLabel: 'Sobre',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="info" size={20} color="#FFF" />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}
  


