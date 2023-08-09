import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { style } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";

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
]

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
            <View style={style.header}>
              <Header />
            </View>
            <View style={style.body}>
              <CardTodo todo={TODO_LIST[0]} />
            </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
    
  )
}


