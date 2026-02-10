import { SIMPSONS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: SIMPSONS.orange,
        tabBarInactiveTintColor: SIMPSONS.brown,
        tabBarStyle: {
          backgroundColor: SIMPSONS.yellow,
          borderTopColor: SIMPSONS.orange,
          borderTopWidth: 2,
        },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
          color: SIMPSONS.white,
        },
        headerStyle: {
          backgroundColor: SIMPSONS.coolorange,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="perso"
        options={{
          title: "Personnages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          title: "Episodes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          title: "Lieux",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
