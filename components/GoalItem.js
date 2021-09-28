import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
const GoalItem = props => {
    const {title} = props
    return (
        <TouchableOpacity onPress= {props.onDelete} style={styles.listItem}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   
    listItem: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc'
    }
})
export default GoalItem;