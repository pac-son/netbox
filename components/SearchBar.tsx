import { Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Ionicons name='search' size={24} />
      <TextInput 
        onPress={() => {}}
        placeholder='Search for movies, TV shows, genres, etc.'
        value=''
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white text-base'
      />
    </View>
  )
}

export default SearchBar
