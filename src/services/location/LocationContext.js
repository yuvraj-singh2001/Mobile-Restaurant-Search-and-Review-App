import { isLoading } from "expo-font";
import { createContext, useContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./LocationService";
export const LocationContext = createContext();

export const LocationContextProvider = (props)=>{  
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword)=>{
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(()=>{
    locationRequest(keyword.toLowerCase()).then(locationTransform)
    .then((result)=>{
        setIsLoading(false);
        setLocation(result);
    }).catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log(error);
    })

  },[keyword]);

    return(
        <LocationContext.Provider value = {
           { isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}