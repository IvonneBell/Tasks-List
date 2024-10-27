import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ listaTareas, completarTarea }) => {
    return (
        <FlatList
            data={listaTareas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <TaskItem item={item} completarTarea={completarTarea} index={index} />
            )}
        />
    );
};

export default TaskList;
