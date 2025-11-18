import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import SearchBar from '@/components/SearchBar';

const Index = () => {
  return (
    <View className="flex-1 bg-purple-950">
      {/* Background Image */}
      <Image 
        source={require('../../assets/netbox-logo-iconn.png')} 
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1 px-5 "
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Centered Logo */}
        <Image
          source={require('../../assets/netbox-logo-icon.png')}
          className="w-24 h-24 mb-5 mt-20 items-center self-center rounded-lg"
          resizeMode="contain"
        />

        <View className='flex-1 mt-5'>
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
