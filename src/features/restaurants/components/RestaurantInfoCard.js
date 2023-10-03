import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Favorite from "../../favorite/Favorite";

export default function RestaurantInfoCard(props) {

  const ratingArray = Array.from(new Array(Math.floor(Math.min(5,props.data.rating))));
  return (
    <>
    <View style = {{margin:15}}>
        <Card elevation={10} onPress={()=>{}}>
          <Favorite restaurant={props.data}/>
          <Card.Cover source={{ uri: props.data.photos[0]}} />
          <Card.Content>
            <Title  style={{marginTop:10, fontFamily:""}}>{props.data.name}</Title>
            <View style={{flexDirection:'row', paddingLeft:0 ,padding:4}}>
              {ratingArray.map((_,i)=>(
                <SvgXml key={`star-${i}`} xml = {star} height={20} width = {20}/>
              ))}              
              <View style={{flex:1, alignItems:"flex-end"}}>
                    {props.data.isClosedTemporarily && <Text variant="label" style={{ color: "darkred" }}> CLOSED TEMPORARILY</Text>}
                    {props.data.isOpenNow && <SvgXml xml = {open} height={20} width = {20}/>}
              </View>
            </View>
           <Text>{props.data.vicinity}</Text>
           
          </Card.Content>
        </Card>
        </View>
    </>
  );
}


