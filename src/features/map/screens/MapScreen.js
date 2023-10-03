import React, {useContext, useEffect, useState} from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MapSearchComponent } from '../components/MapSearchComponent';
import { LocationContext } from '../../../services/location/LocationContext';
import { RestaurantsContext } from '../../../services/restaurants/RestaurantContext';
import MapCallout from '../components/MapCallout';

export default function MapScreen({navigation}) {
    
  const {location} = useContext(LocationContext);
  const {restaurants} = useContext(RestaurantsContext);

    const {viewport} = location;
    const [latDelta, setLatDelta]=useState(0);
    useEffect(()=>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta (northeastLat - southwestLat);

    },[location])

    return (
      <View style={styles.container}>
        <MapSearchComponent/>
        <MapView style={styles.map} region = {{
            latitude:location.lat,
            longitude:location.lng,
            latitudeDelta : latDelta,
            longitudeDelta : 0.02,

        }}>
            {restaurants.map((restaurant)=>{
                return( <MapView.Marker
                    key = {restaurant.name}
                    title = {restaurant.name}
                    coordinate = {{
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng
                }}
                >
                    <MapView.Callout onPress={()=>navigation.navigate("RestaurantDetails", {restaurant})}>
                        <MapCallout restaurant = {restaurant}/>
                    </MapView.Callout>
                </MapView.Marker>)
            })}

        </MapView>
      </View>
    );
  }




  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });