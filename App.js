import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "./components/ContactScreen";
import FavoriteScreen from "./components/FavoriteScreen";
import GroupScreen from "./components/GroupScreen";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faContactBook,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#26302C",
              height: 55,
              borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              fontSize: 13,
              color: "#ccc",
            },
            tabBarIcon: ({ focused }) => {
              let icon;
              if (route.name === "Contacts") {
                icon = faContactBook;
              } else if (route.name === "Favorite") {
                icon = faStar;
              } else if (route.name === "Group") {
                icon = faUserGroup;
              }
              return (
                <FontAwesomeIcon
                  icon={icon}
                  size={20}
                  color={focused ? "#fff" : "#ccc"}
                />
              );
            },
          })}
        >
          <Tab.Screen name="Contacts" component={ContactScreen} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} />
          <Tab.Screen name="Group" component={GroupScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

// git remote add origin https://github.com/rajastra/Contact-App.git
