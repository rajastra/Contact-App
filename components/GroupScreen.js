import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GroupScreen</Text>
    </View>
  );
};

export default GroupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
