import React, { useContext, useState } from "react";
import {StyleSheet, View, SafeAreaView, StatusBar, FlatList, Pressable} from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SearchComponent } from "./SearchComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import FavoriteBar from "../../favorite/FavoriteBar";

export default function RestaurantScreen({navigation}) {
  const [isToggled, setIsToggled]= useState(false);
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchComponent 
          onToggle={()=>setIsToggled(!isToggled)}
          isFavoritesToggled={isToggled}
        />
      {isToggled && (<FavoriteBar onNavigate= {navigation.navigate}/>)}

        {restaurantContext.isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25, zIndex:99 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}
        <View style={{ flex: 1 }}>
          <FlatList
            data={restaurantContext.restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails",{restaurant : item,})}>
                  <RestaurantInfoCard data={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
