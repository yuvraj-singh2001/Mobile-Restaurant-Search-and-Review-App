import React, { useState, createContext, useEffect } from "react";
import { auth } from "../firebase/firebase";

export const AuthenticationContext = createContext();

export function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setIsLoading(false);
        setUser(userCredentials);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
        alert(error);
      });
  };

  const onRegister = (email, password, repeatPassword)=>{
    if(password!==repeatPassword){
      alert("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setIsLoading(false);
        setUser(userCredentials);
      })
      .catch((error) => {
        setIsLoading(false); 
        alert(error.message)});
  }
  
  const onLogout = ()=>{
    setUser(null);
    auth.signOut();
  }

  auth.onAuthStateChanged((usr)=>{
    if(usr){
      setUser(usr);
    }
  })

  return(
    <AuthenticationContext.Provider
          value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout
          }}
    >    
        {children}
    </AuthenticationContext.Provider>
  )
}
