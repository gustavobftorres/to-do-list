import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  taskCounter: number;
}

const Counter = (props: Props) => {

  return (
    <View style={styles.counter}>
      <Text style={styles.text}>{props.taskCounter}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  counter: {
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#333333',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    });


export default Counter;