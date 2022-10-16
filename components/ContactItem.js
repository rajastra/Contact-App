import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ContactItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate("ContactDetail", { item })}
  >
    <View style={styles.iconBox}>
      <FontAwesomeIcon icon={faUser} style={styles.icon} size={15} />
    </View>
    <Text style={styles.font}>{item.name}</Text>
  </TouchableOpacity>
);

export default ContactItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  font: {
    fontSize: 20,
    color: "#fff",
  },
  icon: {
    color: "#fff",
  },
  iconBox: {
    backgroundColor: "#26302C",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: 15,
  },
});
