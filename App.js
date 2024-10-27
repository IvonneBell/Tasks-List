import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';
import Header from './Componentes/Header';
import TaskItem from './Componentes/TaskItem';
import TaskList from './Componentes/TaskList';
import AddTask from './Componentes/AddTask';

export default function App() {
  const [tarea,setTarea] = useState("");
  const [listaTareas,setListaTareas]= useState([]);

const agregarTarea =()=>{
  if (tarea){
    setListaTareas([...listaTareas,{texto: tarea, completada: false}]);
    setTarea("");
  }
};

const completarTarea =(indice)=>{
  const nuevasTareas = listaTareas.map((t,i)=>{
    if(i===indice){
      return{...t,completada: ! t.completada};
    }
    return t;
  });
  setListaTareas(nuevasTareas);
};

  return (
    <View style={styles.container}>
      <Header/>
      <AddTask tarea={tarea} setTarea={setTarea} agregarTarea={agregarTarea}/>
      <TaskList listaTareas={listaTareas} completarTarea={completarTarea} />
      <StatusBar style='auto'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f0f8ff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
  },
});