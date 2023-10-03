import React from 'react'
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import LoginScreen from '../authentication/screens/LoginScreen';
import RegisterScreen from '../authentication/screens/RegisterScreen';
import AccountScreen from '../authentication/screens/AccountScreen';

const AuthStack = createStackNavigator();

export const AuthNavigator = ()=>{
    return(
        <>
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name = "AuthScreen" 
                    component={AccountScreen}                
                    options={{ headerShown: false }}/>
                <AuthStack.Screen
                    name = "Login" 
                    component={LoginScreen}                
                    options={{ headerShown: false }}/>
                <AuthStack.Screen
                    name = "Register" 
                    component={RegisterScreen}                
                    options={{ headerShown: false }}/>
            </AuthStack.Navigator>
        </>
    )
}