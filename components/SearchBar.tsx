import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }} className='bg-dark-200 rounded-full px-5 py-4'>
      <Ionicons name='search' size={22} />
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white text-base'
      />
    </View>
  )
}

export default SearchBar
