import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';

const Index = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: Loading,
    error: moviesError
  } = useFetch(() => fetchMovies({ query: ''}))

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

        {Loading ?  (
          <ActivityIndicator 
            size='large'
            color='#0000ff'
            className='mt-10 self-center'
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className='flex-1 mt-5'>
          <SearchBar 
            onPress={() => router.push('/(tabs)/search')}
            placeholder='Search for movies'
          />

          <>
            <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>

            <FlatList 
              data={movies}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              renderItem={({ item }) => (
                <MovieCard {...item} />
              )}
              columnWrapperClassName='justify-start gap-5 pr-1.5 mb-2.5'
              className='mt-2 pb-32'
              scrollEnabled={false}
            />
          </>
        </View>
        )}

      </ScrollView>
    </View>
  );
};

export default Index;
