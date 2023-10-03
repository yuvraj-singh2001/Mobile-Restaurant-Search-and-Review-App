import React, {useContext} from 'react'
import { Button } from 'react-native-paper';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';

export default function SettingsScreen() {

    
    const {onLogout, isLoading, error} = useContext(AuthenticationContext);

    return (
        <>
            <Button style={{margin:10, padding:10, borderRadius:10, marginTop:20, backgroundColor:'rgba(29, 119, 180, 1)'}} 
                mode="contained" 
                onPress={() => onLogout()}
            >
                Logout
            </Button>
        </>
  )
}
