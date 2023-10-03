import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../services/favorites/FavoritesContext";
import { AntDesign } from "@expo/vector-icons";

export default function Favorite({ restaurant }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          isFavorite
            ? removeFromFavorites(restaurant)
            : addToFavorites(restaurant);
        }}
        style={{ position: "absolute", top: 10, right: 10, zIndex: 999 }}
      >
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </>
  );
}
