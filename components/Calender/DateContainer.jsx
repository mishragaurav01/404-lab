import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DateContainer = ({date, isSelected, onPress}) => {

  // const date = new Date();
  const day = date.getDate();
  const weekDay = date.toLocaleString('default', { weekday: 'short' });

  return (
    <Pressable 
      onPress={onPress}
    >
      <View style={[styles.DateContainer, {backgroundColor: isSelected ? '#4A90E2' : '#D3D3D3'}]}>
            <Text style={styles.DateText}>{day}</Text>
            <Text style={styles.WeekText}>{weekDay}</Text>
      </View>
    </Pressable>
  )
}

export default DateContainer

const styles = StyleSheet.create({
    
    DateContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        width: 80,
        height: 90,
    },
    DateText:{
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
    },
    WeekText:{
        fontSize: 15,
        color: 'white',
    }
})