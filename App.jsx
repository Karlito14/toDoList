import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { style } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";

const TODO_LIST = [
  {
    id : 1,
    title : 'Sortir le chien',
    isCompleted : true
  },
  {
    id : 2,
    title : 'Faire les courses',
    isCompleted : false
  },
  {
    id : 3,
    title : 'Laver la voiture',
    isCompleted : false
  },
  {
    id : 4,
    title : 'Appeler l\'école',
    isCompleted : true
  }
]

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);

  const updateTodo = (todo) => {
    const updatedTodo = {
      ...todo,
      isCompleted : !todo.isCompleted
    };

    const index = todoList.findIndex((todo_) => todo_.id === updatedTodo.id);

    const updatedTodoList = [...todoList]

    updatedTodoList[index] = updatedTodo;

    setTodoList(updatedTodoList)
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
            <View style={style.header}>
              <Header />
            </View>
              <View style={style.body}>
                <ScrollView>
                  {todoList.map((todo) => {
                    return (
                      <View style={style.cardItem} key={todo.id}>
                        <CardTodo onPress={updateTodo} todo={todo} />
                      </View>
                    )
                  })}
                  </ScrollView>
              </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
    
  )
}


