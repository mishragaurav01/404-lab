import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calender from '@/components/Calender/DateList'
import DatePicker from '../components/Calender/DatePicker'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.calenderContainer}>
        <DatePicker/>
      </View>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Choose Activity</Text>
      </View>
      <View style={styles.activityContainer}>
        <DatePicker/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    calenderContainer:{
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
    },
    activityContainer:{
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
    },
    titleContainer:{
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    }

})