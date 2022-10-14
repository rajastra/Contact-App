import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactDetail from "./ContactDetail";
import ContactsList from "./ContactsList";

const Stack = createNativeStackNavigator();
const ContactScreen = (props) => {
  const data = [...props.contacts];
  return (
    // <FlatList
    //   data={props.contacts}
    //   renderItem={ContactItem}
    //   keyExtractor={(item) => item.id}
    // />
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <ContactsList {...props} contacts={data} />}
      </Stack.Screen>
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
    </Stack.Navigator>
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
