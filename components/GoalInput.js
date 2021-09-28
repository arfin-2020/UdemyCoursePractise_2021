import React, { useState } from 'react';

import { View, StyleSheet, TextInput, Button, Text, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal)
    }
    
    return (
        <Modal visible = {props.visible} animationType='slide'>
            <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Write something"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title='Add' onPress={props.addGoalHandler.bind(this,enteredGoal)} />
            {/* <Button title='close' onPress={()=>setIsAddMode(true)} /> */}
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        height: 50,
        marginBottom:10,
    },
})
export default GoalInput;