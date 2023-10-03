import React, { useState, createContext, useEffect, useContext} from "react";
import { RestaurantRequest, RestaurantTransform } from "./RestaurantRequest";
import { LocationContext } from "../location/LocationContext";
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);  
  const {location} = useContext(LocationContext);
  
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      RestaurantRequest(loc)
        .then(RestaurantTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
          console.log(results.length);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 10);
    
  };

  useEffect(() => {
    if(location){
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{
        restaurants,
        isLoading,
        error,
      }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
