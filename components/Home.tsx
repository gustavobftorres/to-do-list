import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  Button,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Counter from "./Counter";
import Task from "./Task";


const Home = () => {
  const [textInput, setTextInput] = useState('');
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);
  
  const handleTaskAddition = () => {
    setTaskList(prevState => [...prevState, textInput]);
    setTextInput('');
    setTaskCounter(taskCounter + 1);
  }

  const handleTaskRemoval = (task: string) => {
    setTaskList(prevState => prevState.filter(item => item !== task))
    setTaskCounter(taskCounter - 1);
    setTaskDoneCounter(taskDoneCounter + 1);
  }



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.upperContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
      </View>
      <View style={styles.overlayView}>
        <TextInput
          style={{
            backgroundColor: "#333333",
            color: "#808080",
            width: "70%",
            height: "100%",
            borderRadius: 6,
            paddingLeft: 20,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 80,
            zIndex: 999,
          }}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTextInput}
          value={textInput}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleTaskAddition}
        >
          <Image source={require("../assets/plus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.header}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 5,
          }}>
            <Text style={styles.leftHeaderText}>Criadas</Text>
              <Counter
              taskCounter={taskCounter}
              />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5,
          marginRight: 20,
        }}>
          <Text style={styles.rightHeaderText}>Concluídas</Text>
          <Counter
          taskCounter={taskDoneCounter}
          />
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.taskList}>
          <FlatList
            data={taskList}
            renderItem={({ item }) => (
              <Task 
              task={item}
              key={item}
              onRemove={() => handleTaskRemoval(item)} 
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.flatListView}>
                <Image
                  style={styles.clipboardImage}
                  source={require("../assets/Clipboard.png")}
                />
                <Text style={styles.flatListTitleText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.flatListText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    zIndex: 2,
    position: "relative",
  },
  header: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  leftHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#4EA8DE",
  },
  rightHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8284FA",
    marginHorizontal: 10,
    marginRight: 10,
  },
  horizontalLine: {
    borderColor: "#808080",
    borderBottomWidth: 0.5,
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  taskList: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  flatListView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  flatListTitleText: {
    color: "#808080",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  flatListText: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  clipboardImage: {
    width: 56,
    height: 56,
  },
  logo: {
    width: 110.34,
    height: 32,
  },
  overlayView: {
    height: 60,
    // position: "absolute",
    // top: "24%",
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black",
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    width: 70,
    height: "100%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  createdCounter: {
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',    
  },
});

export default Home;
