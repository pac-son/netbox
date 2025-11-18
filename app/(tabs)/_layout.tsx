import { StyleSheet, Text, View } from 'react-native'
import '../../global.css'
import React from 'react'
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#777",
        tabBarStyle: { backgroundColor: "#fff", borderTopWidth: 0, elevation: 3 },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="home" size={size} color={color} />
            </>
          )
        }} 
      />
      
      <Tabs.Screen 
        name="search" 
        options={{ 
          title: 'Search', 
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="search" size={size} color={color} />
            </>
          )
        }} 
      />

      <Tabs.Screen 
        name="saved" 
        options={{ 
          title: 'Saved', 
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="bookmark" size={size} color={color} />
            </>
          )
        }} 
      />

      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile', 
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="person" size={size} color={color} />
            </>
          )
        }} 
      />
    </Tabs>
  )
}

export default _layout
