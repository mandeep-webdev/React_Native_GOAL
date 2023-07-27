import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setListOfGoals((prevState) => [
      ...prevState,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.headline}>List of Goals</Text>
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, index) => item.id}
        />

        {/* {listOfGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
  headline: {
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
