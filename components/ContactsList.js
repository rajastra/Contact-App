import React from "react";
import { FlatList, Text } from "react-native";
import ContactItem from "./ContactItem";

const ContactsList = ({ route, navigation, contacts }) => {
  const renderItem = ({ item }) => (
    <ContactItem item={item} navigation={navigation} />
  );

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ContactsList;
