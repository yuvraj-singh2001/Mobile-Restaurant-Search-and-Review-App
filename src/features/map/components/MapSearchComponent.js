import React, { useContext, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/LocationContext";

export const MapSearchComponent = () => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);
  useEffect(()=>{
    setSearchQuery(locationContext.keyword);
  },[locationContext.keyword]);

  return (
    <View style={{ position:'absolute', top:30, height: 80, padding:15, justifyContent: "center", zIndex: 999, width: Dimensions.get('window').width}}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onSubmitEditing={() => {
          locationContext.search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </View>
  );
};
