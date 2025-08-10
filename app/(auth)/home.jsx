import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Calender from '@/components/ui/DateList'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Calender/> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})