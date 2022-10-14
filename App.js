import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "./components/ContactScreen";
import FavoriteScreen from "./components/FavoriteScreen";
import GroupScreen from "./components/GroupScreen";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

const Tab = createBottomTabNavigator();
export default function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "rgba(34,36,40,1)",
            height: 50,
          },
        })}
      >
        <Tab.Screen
          name="Contacts"
          children={() => <ContactScreen contacts={contacts} />}
        />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Group" component={GroupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
