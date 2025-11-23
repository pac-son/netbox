import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import SearchBar from '@/components/SearchBar';

const search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset
  } = useFetch(() => fetchMovies({ query: searchQuery }), false)

  useEffect( () => {
    const func = async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset()
      }
    }

    func();
  }, [searchQuery])

  return (
    <View className='flex-1 bg-primary'>
      <Image 
        source={require('../../assets/netbox-logo-iconn.png')} 
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList 
        data={movies}
        renderItem={({ item }) => <MovieCard {...item}/>}
        keyExtractor={(item) => item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperClassName='justify-center gap-4 my-4'
        contentContainerClassName='pb-[100px]'
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image
                source={require('../../assets/netbox-logo-icon.png')}
                className="w-24 h-24 mb-5 mt-20 items-center self-center rounded-lg"
                resizeMode="contain"
              />
            </View>

            <View className='my-5'>
              <SearchBar 
                placeholder='Search movies...'
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator size='large' color='#0000ff' className='my-3' />
            )}

            {error && (
              <Text className='text-red-500 px-5 my-3'>
                Error: {error?.message}
              </Text>
            )}

            {!loading && !Error && searchQuery.trim() && movies?.length === 0 && (
              <Text className='text-xl text-white font-bold'>
                Search Results for {''}
                <Text className='text-accent'>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  )
}

export default search

const styles = StyleSheet.create({})