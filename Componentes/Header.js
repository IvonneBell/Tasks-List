import { Text, View, StyleSheet } from "react-native"
import React from "react";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tareas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333399',
    },
});

export default Header;