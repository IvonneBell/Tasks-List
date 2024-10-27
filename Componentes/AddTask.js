import React from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const AddTask = ({ tarea, setTarea, agregarTarea }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={tarea}
                onChangeText={setTarea}
                placeholder='Nombre de la tarea'
                style={styles.input}
            />
            <Button title="Añadir" onPress={agregarTarea} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#e6e6fa',
        borderRadius: 5,
    },
});

export default AddTask;