import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ContactDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.iconBox}>
          <FontAwesomeIcon icon={faUser} size={90} color={"white"} />
        </View>
        <Text style={styles.font}>{item.name}</Text>
        <Text style={styles.font}>Nomor: {item.phoneNumbers[0].number}</Text>
      </View>
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2421",
  },
  iconBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#26302C",
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  user: {
    alignItems: "center",
  },
  font: {
    fontSize: 20,
    color: "#fff",
    marginTop: 20,
  },
});
