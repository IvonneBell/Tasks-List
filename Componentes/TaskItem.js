
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

const TaskItem = ({ item, completarTarea, index }) => {
    return (
        <View style={styles.taskContainer}>
            <Checkbox
                value={item.completada}
                onValueChange={() => completarTarea(index)}
                style={styles.checkbox}
            />
            <Text style={[styles.taskText, item.completada && styles.completedTask]}>
                {item.texto}
            </Text>
            <TouchableOpacity onPress={() => completarTarea(index)}>
                <Text style={styles.taskButton}>
                    {item.completada ? 'Desmarcar' : 'Completar'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '90%',
        justifyContent: 'space-between',
    },
    checkbox: {
        marginRight: 10,
    },
    taskText: {
        flex: 1,
        fontSize: 18,
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    taskButton: {
        marginLeft: 10,
        color: 'blue',
    },
});

export default TaskItem;

