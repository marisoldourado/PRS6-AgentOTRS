import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Splash from './screens/Splash'
import Login from './screens/Login'
import Navigator from './screens/Navigator'

const AppStack = createStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                {/* <AppStack.Screen name="Tickets" component={Tickets} options={{ headerShown: true }}/> */}
                {/* <AppStack.Screen name="New" component={New} options={{ headerShown: true }}/> */}
                <AppStack.Screen name="Navigator" component={Navigator} 
                    options={() => ({ headerShown: false }) }
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
