import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactDetail from "./ContactDetail";
import ContactsList from "./ContactsList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../store/contact-actions";

const Stack = createNativeStackNavigator();
const ContactScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        options={{
          headerShown: false,
        }}
        component={ContactsList}
      />

      <Stack.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: "#26302C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
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
