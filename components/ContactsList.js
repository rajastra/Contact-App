import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactsList = ({ route, navigation }) => {
  const renderItem = ({ item }) => (
    <ContactItem item={item} navigation={navigation} />
  );

  const contacts = useSelector((state) => state.contact.contacts);

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ContactsList;
