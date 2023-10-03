import React, {useContext} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FavoritesContext } from '../../services/favorites/FavoritesContext'
import CompactRestaurantInfo from '../restaurants/components/CompactRestaurantInfo';


export default function FavoriteBar({onNavigate}) {
    
  const { favorites } =  useContext(FavoritesContext);
  if(!favorites.length){
    return null;
  } 
  return (
    <View style={{maxHeight:250, padding:10, paddingBottom:0}}>
        <Text style={{marginLeft:10, fontWeight:'bold', paddingBottom:5, fontSize:15}}>Favorites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           { favorites.map((restaurant)=>{
            const key = restaurant.name.split(" ").join("");
            return(
                <View key = {key} style={{marginRight:10}}>
                <TouchableOpacity onPress={()=>onNavigate("RestaurantDetails", {restaurant})}>
                        <CompactRestaurantInfo restaurant={restaurant} isMap={false}/>
                </TouchableOpacity>
                </View>
            )
           })} 
        
        </ScrollView>
    </View>
  )
}
