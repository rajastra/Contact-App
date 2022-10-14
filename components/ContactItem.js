import { StyleSheet, Text, View } from "react-native";

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.font}>{name}</Text>
  </View>
);

export default Item;

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
