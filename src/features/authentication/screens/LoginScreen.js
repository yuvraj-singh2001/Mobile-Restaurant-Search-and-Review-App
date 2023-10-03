import React, {useState, useContext} from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import {ImageBackground, Text, View } from 'react-native'
import { ActivityIndicator, Colors } from "react-native-paper";

import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';


export default function LoginScreen() {
    
    const image = {
        uri: "https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg?w=2000",
    };

    
    const {onLogin, isLoading, error} = useContext(AuthenticationContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style = {{position:'absolute', height:'100%',width:'100%', backgroundColor:'rgba(255, 255, 255, 0.2)'}}/>
                
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)', padding: 30, width:'80%'}}>  
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />

                    {isLoading && (
                        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
                            <ActivityIndicator
                            size={50}
                            style={{zIndex:99 }}
                            animating={true}
                            color={Colors.blue300}
                            />
                        </View>
                    )}

                    <Button style={{margin:10, padding:10, borderRadius:10, marginTop:20, backgroundColor:'rgba(29, 119, 180, 1)'}}  
                        icon="lock" 
                        mode="contained" 
                        onPress={() => onLogin(email,password)}
                    >
                        Login
                    </Button>
                </View>
            </ImageBackground>        
        </>
    )
}

const styles = StyleSheet.create({
  input : {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 5,
  }
})

