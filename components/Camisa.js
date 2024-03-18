import { Text, View, Pressable ,Image, StyleSheet } from 'react-native';

export default function Camisa() {
  return(
    <View>
      <Text style={styles.camisa}>Camisa Oficial do Time - R$100,00</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/inter2.webp')}
      />
      <Pressable onPress={''} style={styles.botao}>
        <Text style={styles.text}>COMPRAR</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  tinyLogo:{
    width:100,
    height:100,
    display: 'block',
    margin:'auto',
    marginBottom:10
  },

  camisa: {
    margin: 10,
    fontWeight: 'bold'

  },
  botao: {
    backgroundColor:'#00BFFF',
    width:250,
    height:35,
  },
  text:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#FFFFFF',
    margin:5
  }

})