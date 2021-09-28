import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {
      id: Math.random().toString(),
      value: goalTitle
    }])
    // console.log(enteredGoal)
    // console.log("This is an array", courseGoals)
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={()=>setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} />
      <FlatList style={{ marginBottom: 30 }}
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={() => removeGoalHandler(itemData.item.id)}
         title={itemData.item.value} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
