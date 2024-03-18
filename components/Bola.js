import { Text, View, Pressable, Image, StyleSheet } from 'react-native';

export default function Bola() {
  return(
    <View>
      <Text style={styles.bola}>Bola de Futebol - R$50,00</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Champions_2018.jpg')}
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
    margin:'auto'
    
  },

  bola: {
    margin:15,
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

