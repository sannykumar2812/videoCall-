import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ContactsScreen from '../screens/ContactsScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import CallScreen from '../screens/CallScreen';
import LoginScreen from '../screens/LoginScreen';



const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name='Login'
                component={LoginScreen}
                options={{headerShown:true}}
                />
                <Stack.Screen 
                name='Contacts'
                component={ContactsScreen}
                options={{headerShown:true}}
                />
                <Stack.Screen 
                name='Call'
                component={CallScreen}
                options={{headerShown:false}}
                />
                <Stack.Screen 
                name='CallingScreen'
                component={CallingScreen}
                options={{headerShown:false}}
                />
                <Stack.Screen 
                name='IncomingScreen'
                component={IncomingCallScreen}
                options={{headerShown:false}}
                />

            </Stack.Navigator>

        </NavigationContainer>
  )
}

export default Navigation   