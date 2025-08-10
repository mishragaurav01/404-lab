import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const generateDates = (daysCount) => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < daysCount; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i); // i days from today

    dates.push({
      id: i,
      day: date.getDate(), // 10
      weekday: date.toLocaleString("en-US", { weekday: "short" }), // Sun
      month: date.toLocaleString("en-US", { month: "short" }), // Aug
      fullDate: date, // store for tasks
    });
  }
  return dates;
};

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dates = generateDates(14); // next 14 days

  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected =
            selectedDate.toDateString() === item.fullDate.toDateString();

          return (
            <TouchableOpacity
              style={[styles.dateContainer, isSelected && styles.selected]}
              onPress={() => setSelectedDate(item.fullDate)}
            >
              <Text style={styles.weekday}>{item.weekday}</Text>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.month}>{item.month}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={{ marginTop: 20, textAlign: "center" }}>
        Selected Date: {selectedDate.toDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  selected: {
    backgroundColor: "dodgerblue",
  },
  weekday: {
    fontSize: 14,
    color: "#333",
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
  },
  month: {
    fontSize: 12,
    color: "#555",
  },
});
