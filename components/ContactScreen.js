import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Item from "./ContactItem";

const ContactScreen = (props) => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <FlatList
      data={props.contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContactScreen;
