import React from 'react'
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import RestaurantScreen from '../restaurants/components/RestaurantScreen';
import RestaurantDetailsScreen from '../restaurants/screens/RestaurantDetailsScreen';


const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = ()=>{
    return(
        <RestaurantStack.Navigator screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
          }}>
            <RestaurantStack.Screen
                name = "Restaurant" 
                component={RestaurantScreen}                
                options={{ headerShown: false }}/>
            <RestaurantStack.Screen
                name = "RestaurantDetails" 
                component={RestaurantDetailsScreen}                
                options={{ headerShown: false }}/>
        </RestaurantStack.Navigator>
    )
}