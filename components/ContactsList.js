import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactsList = ({ route, navigation }) => {
  const contacts = useSelector((state) => state.contact.contacts);

  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(
    contacts.filter((contact) => contact.phoneNumbers !== undefined) || []
  );

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) => contact.phoneNumbers !== undefined) || []
    );
  }, [contacts]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setFilteredContacts(
        contacts.filter((contact) => contact.phoneNumbers !== undefined)
      );
      return;
    }
    setFilteredContacts(
      contacts.filter((contact) => {
        const name = contact.name.toUpperCase();
        const textData = text.toUpperCase();
        return name.indexOf(textData) > -1;
      })
    );
  };

  const renderItem = ({ item }) => (
    <ContactItem item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Contacts</Text>
        <View style={styles.searchBox}>
          <View style={styles.search}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={20}
              color={"#fff"}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor={"white"}
              onChangeText={handleSearch}
              value={search}
            />
          </View>
        </View>
      </View>
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
  header: {
    backgroundColor: "#26302C",
  },
  searchBox: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#777783",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  searchInput: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 12,
    width: 200,
  },
});

export default ContactsList;
