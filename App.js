
import { StyleSheet, View, Text, SafeAreaView,} from 'react-native';
import Camisa from './components/Camisa'
import Bola from './components/Bola'
import Chuteira from './components/Chuteira'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Soccer Shop Online</Text>
      <Text style={styles.subtitle}>Produtos:</Text>
    <View>
      <Camisa/>
      <Bola/>
      <Chuteira/>
    </View>
    
    </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:-100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    padding:200  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  }
})
  

