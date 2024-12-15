import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Loadpage = () => {
  return (
    <View className='flex-1 flex flex-col justify-center items-center'>
        <Image
        source={require('../assets/images/loadlogo.png')}
        className='!w-56 !h-56 mb-5 '
        />
        <Text className='text-3xl font-extrabold text-center text-white'>Food Mania...</Text>
        <Text className='text-2xl font-bold text-center text-white'>Your Foodie Partner</Text>
        <Image 
        source={require('../assets/images/loadphoto.jpg')}
        className='absolute inset-0 -z-10 object-cover' />
    </View>
  )
}

export default Loadpage