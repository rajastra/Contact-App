import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactsList = ({ route, navigation }) => {
  const renderItem = ({ item }) => (
    <ContactItem item={item} navigation={navigation} />
  );

  const contacts = useSelector((state) => state.contact.contacts);
  let filteredContacts = contacts || [];
  if (contacts && contacts.length !== 0) {
    filteredContacts = contacts.filter((contact) => contact.phoneNumbers);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Contacts</Text>
      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2421",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
});

export default ContactsList;
