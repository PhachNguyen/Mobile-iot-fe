import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import StatsScreen from "../screens/StatsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          position: "absolute",
          // bottom: 10,
          // left: 20,
          // right: 20,
          borderRadius: 30,
          justifyContent: "center",
          alignContent: "center",
          elevation: 10,
        },
      }}
    >
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="leaf-outline" size={26} color="#4CAF50" />
          ),
        }}
      />

      <Tab.Screen
        name="Statistic"
        component={StatsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="bar-chart-outline" size={26} color="#4CAF50" />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.fab}>
              <Ionicons name="home" size={32} color="#fff" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={26} color="#4CAF50" />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={26} color="#4CAF50" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 75,
    height: 75,
    backgroundColor: "#4CAF50",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    top: -25,
    elevation: 12,
  },
});
