import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';


const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal)

    }
    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('');
        alert('added successfull.')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Write something"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color='red' title='Cancel' onPress={props.cencellGoalAdditionalHandler} />
                    </View>
                    <View style={styles.button}>
                    <Button title='Add' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        height: 50,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button:{
        width:'40%'
    }

})
export default GoalInput;