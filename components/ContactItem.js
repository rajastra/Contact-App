import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ContactItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate("ContactDetail", { item })}
  >
    <Text style={styles.font}>{item.name}</Text>
    <Text style={styles.font}>Contact id : {item.id}</Text>
  </TouchableOpacity>
);

export default ContactItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  font: {
    fontSize: 20,
  },
});
