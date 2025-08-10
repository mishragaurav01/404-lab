import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DateContainer from './DateContainer'

const DatePicker = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const dates = []

    for(let i = 0; i < 14; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push(date);
    }

  return (
    <View style={styles.container}>
        {/* <DateContainer/>
        <DateContainer/> */}
        <FlatList
            data={dates}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item, index }) => (
                <DateContainer date={item} 
                    isSelected={selectedIndex === index}
                    onPress={() => setSelectedIndex(index)}
                />
            )}
            contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}
        />
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    }
})