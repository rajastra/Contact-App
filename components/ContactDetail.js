import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClipboard, faUser } from "@fortawesome/free-solid-svg-icons";
import * as Clipboard from "expo-clipboard";

const ContactDetail = ({ route }) => {
  const { item } = route.params;

  const copiedTextNumber = item.phoneNumbers[0].number || "";

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(copiedTextNumber);
    Alert.alert("Nomor berhasil di salin!", copiedTextNumber, [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK" },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.iconBox}>
          <FontAwesomeIcon icon={faUser} size={90} color={"white"} />
        </View>
        <Text style={styles.font}>{item.name}</Text>
      </View>
      <View style={styles.numberBox}>
        <Text style={styles.font}>Nomor: {copiedTextNumber}</Text>
        <TouchableOpacity onPress={copyToClipboard} style={styles.clipboard}>
          <FontAwesomeIcon icon={faClipboard} size={20} color={"white"} />
        </TouchableOpacity>
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
  numberBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  clipboard: {
    backgroundColor: "#777783",
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },
});
