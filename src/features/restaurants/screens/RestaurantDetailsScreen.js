import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

import { List } from "react-native-paper";

export default function RestaurantDetailsScreen({ route }) {
  const { restaurant } = route.params;
  const [breakfastExpanded, bSetExpanded] = React.useState(false);
  const [lunchExpanded, lSetExpanded] = React.useState(false);
  const [dinnerExpanded, dSetExpanded] = React.useState(false);
  const [drinksExpanded, drSetExpanded] = React.useState(false);

  const bHandlePress = () => bSetExpanded(!breakfastExpanded);
  const lHandlePress = () => lSetExpanded(!lunchExpanded);
  const dHandlePress = () => dSetExpanded(!dinnerExpanded);
  const drHandlePress = () => drSetExpanded(!drinksExpanded);
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <RestaurantInfoCard data={restaurant} detail={true}/>
          <ScrollView>
            <List.Accordion
              title="Breakfast"
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
              expanded={breakfastExpanded}
              onPress={bHandlePress}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
              expanded={lunchExpanded}
              onPress={lHandlePress}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food-variant" />}
              expanded={dinnerExpanded}
              onPress={dHandlePress}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="Drinks"
              left={(props) => <List.Icon {...props} icon="cup" />}
              expanded={drinksExpanded}
              onPress={drHandlePress}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
              <List.Item title="Third item" />
              <List.Item title="Fourth item" />
            </List.Accordion>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
