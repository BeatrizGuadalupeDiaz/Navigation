import React from "react";
import { View, Text } from "react-native";
import { stylesGlobal } from "../styles/global";

const Profile = ({route}) => {
  return (
    <View style={stylesGlobal.screenContainer}>
      <Text style={stylesGlobal.title}>Profile</Text>
      <Text style={{fontSize:17, fontWeight: 'bold'}}> {route?.params?.user ? `${route.params.user}'s Users` : '' }</Text>
    </View>
  );
};

export default Profile;
