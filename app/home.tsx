import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const home = () => {

  const [activeitem, setactiveitem] = useState("Most Viewed")

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View className='bg-white'>
      <Image className='!w-full !h-60 absolute rounded-b-2xl' source={require("../assets/images/loadphoto.jpg")} />
      <View className='flex flex-row justify-between items-center mt-12 px-5'>
        <Text className='text-white text-2xl font-extrabold'>Food Mania</Text>
        <TouchableOpacity>
          <Image className='!w-10 !h-10 rounded-full border-2 border-purple-900' source={require("../assets/images/profilelogo.jpg")} />
        </TouchableOpacity>
      </View>

      <View className='mt-14 px-5'>
        <View className=' relative flex flex-col justify-center'>
          <TouchableOpacity>
            <Ionicons className='absolute top-3.5 left-2.5' name="search" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            placeholder='Burger, Tacos, Pizza'
            placeholderTextColor={'white'}
            className='border h-14 border-gray-200 text-white rounded-xl px-11'
          />
        </View>
      </View>

      <View className='flex-row px-6 mt-16 flex justify-between items-center'>
        <Text className='text-xl font-extrabold tracking-wider'>Popular Food</Text>
        <TouchableOpacity className='bg-purple-600 px-3 py-2 rounded-xl'>
          <Text className='text-white'>View More</Text>
        </TouchableOpacity>
      </View>

      <View className='px-5 mt-3'>
        <FlatList
          data={[
            "Most Viewed",
            "Burger",
            "Pizza",
            "Tacos",
            "Sandwiches",
            "Desi Items"
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setactiveitem(item)}
              className={`${activeitem == item ? "bg-purple-600 px-5 py-3 rounded-xl mt-6" : "mt-6 py-3 px-5"}`}>
              <Text className={`${activeitem == item ? "text-white" : "text-black"}`}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View className='h-5' />

      <View className='px-5'>
        <FlatList
          data={[{
            image: "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Burger",
            price: "Rs. 800",
            rating: "4.5"
          },
          {
            image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Pizza",
            price: "Rs. 1600",
            rating: "4.2"
          },
          {
            image: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Tacos",
            price: "Rs. 500",
            rating: "4.2",
          },
          {
            image: "https://images.unsplash.com/photo-1709689155439-f9e97bfec7d9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Club Sandwich",
            price: "Rs. 650",
            rating: "4.3",
          },
          {
            image: "https://images.unsplash.com/photo-1694579740719-0e601c5d2437?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Karahi",
            price: "Rs. 450",
            rating: "4.3",
          },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className='w-60 h-96 bg-gray-300 rounded-xl mr-3'>
              <Image className='w-full h-full rounded-xl' source={{ uri: item.image }} />
              <View className='flex flex-row justify-between absolute bottom-1 items-center px-3 py-3'>

                <View className='bg-[#07071fa8] p-2 rounded-xl'>
                  <Text className='text-xl font-bold text-white'>{item.name}</Text>
                  <Text className='text-white'>{item.price}</Text>

                  <View className='flex flex-row justify-between gap-16'>

                  <View className='flex flex-row gap-2 items-center'>
                    <Ionicons name="star" size={20} color="yellow" />
                    <Text className='text-white'>{item.rating}</Text>
                  </View>

                  <TouchableOpacity className='bg-purple-600 px-5 py-1 rounded-xl'>
                    <Text className='text-white'>Order</Text>
                  </TouchableOpacity>

                  </View>

                </View>

              </View>
            </View>
          )}
        />
      </View>

    </View>
    </ScrollView>
  )
}

export default home