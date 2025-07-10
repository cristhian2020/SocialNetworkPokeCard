import {MaterialIcons } from '@expo/vector-icons/';
import { Tabs } from 'expo-router';
import { Platform, StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      
      tabBarActiveTintColor: 'blue',
      headerShown: false,
     
      
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="screenSearch"
        options={{
          title: 'buscar',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
      name='screenCreate'
      options={{
        title: 'Create',
        tabBarIcon: ({ color }) => <MaterialIcons size={28} name="add-box" color={color} />,
      }}
        
      />
        <Tabs.Screen
        name="screenFavorites"
        options={{
          title: 'favorites',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="favorite-outline" color={color} />,
        }}
      />
        <Tabs.Screen
        name="screenProfile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
