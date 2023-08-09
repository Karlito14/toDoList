import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { style } from "./App.style";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
            <View style={style.header}>
              <Header />
            </View>
            <View style={style.body}>
              <Text>Body</Text>
            </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
    
  )
}


