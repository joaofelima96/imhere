import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { Home } from "./src/screens/Home"

export default function App() {
  return (<>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
      />
    </SafeAreaView>
    <Home />
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016"
  }
})