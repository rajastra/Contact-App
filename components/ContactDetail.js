import { View, Text } from "react-native";
import React from "react";

const ContactDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <Text>Nama : {item.name}</Text>
    </View>
  );
};

export default ContactDetail;
