import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

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
    // setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  const cencellGoalAdditionalHandler = () => {
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler}
        cencellGoalAdditionalHandler={cencellGoalAdditionalHandler} />
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
