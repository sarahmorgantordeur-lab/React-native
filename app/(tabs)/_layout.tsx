import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: "#007AFF",
                headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "bold"
                    },
                headerStyle: {
                    backgroundColor: "#007AFF"
                    }
            }}>
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
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contact",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="share"
                options={{
                    title:"share",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="share-social" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}