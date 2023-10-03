import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/LocationContext";

export const SearchComponent = ({onToggle, isFavoritesToggled}) => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);
  useEffect(()=>{
    setSearchQuery(locationContext.keyword);
  },[locationContext.keyword]);

  return (
    <View style={{ height: 80, justifyContent: "center", padding: 15 }}>
      <Searchbar icon={isFavoritesToggled ? 'heart':'heart-outline'}
      onIconPress={onToggle}
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
