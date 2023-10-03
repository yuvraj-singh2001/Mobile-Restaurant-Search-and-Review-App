import React from 'react'
import { Button } from 'react-native-paper';
import { ImageBackground, Text, View } from 'react-native'

export default function AccountScreen({navigation}) {

    const image = {
        uri: "https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg?w=2000",
    };

    return (
    <>
            <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style = {{position:'absolute', height:'100%', width:'100%', backgroundColor:'rgba(255, 255, 255, 0.2)'}}/>
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)', width:'80%', padding: 30, paddingHorizontal:50}}>                
                    <Button style={{margin:10, padding:10, borderRadius:10, backgroundColor:'rgba(29, 119, 180, 1)'}}  
                        icon="lock" 
                        mode="contained" 
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </Button>

                    <Button style={{margin:10, padding:10, borderRadius:10, backgroundColor:'rgba(29, 119, 180, 1)'}} 
                        icon="email" 
                        mode="contained" 
                        onPress={() => navigation.navigate('Register')}
                    >
                        Register
                    </Button>
                </View>
            </ImageBackground>   
    </>
    )
}
