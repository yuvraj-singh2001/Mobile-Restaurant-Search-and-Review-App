import React from 'react'
import { View, Text, Image } from 'react-native'
import WebView from "react-native-webview";
import { Platform } from "react-native";


const isAndroid = Platform.OS === "android";

export default function CompactRestaurantInfo({restaurant, isMap}) {
  return (   
    <View style={{padding: 10, maxWidth: 200, alignItems: 'center',}}>
        {(isAndroid && isMap)?  <WebView source={{ uri: restaurant.photos[0] }} style={{borderRadius: 10, width: 175, height: 120}}/>
         : <Image source={{ uri: restaurant.photos[0] }} style={{borderRadius: 10, width: 175, height: 125}}/>}
      <Text numberOfLines={3} style={{fontWeight:'bold', marginTop:5, textAlign:'center'}}>
        {restaurant.name}
      </Text>
    </View>   
  )
}