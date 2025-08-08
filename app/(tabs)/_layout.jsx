import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{ title: "Home" }} />
      <Tabs.Screen name='about' options={{ title: "About" }} />
    </Tabs>
  )
}

export default RootLayout