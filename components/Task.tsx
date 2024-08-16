import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  task: string;
  onRemove: () => void;
}

const Task = (props: Props) => {

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{props.task}</Text>
      <TouchableOpacity
      onPress={props.onRemove}
      >
        <Text style={styles.taskText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 5
  },
  taskText: {
    fontSize: 20,
    color: 'white'
  }
})
export default Task;