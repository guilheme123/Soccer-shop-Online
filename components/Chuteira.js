import {StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Chuteira() {
  return(
    <View>
      <Text style={styles.chuteira}>Chuteira Profissional - R$150,00</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/chuteira2.jpg')}
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
  chuteira:{
    margin: 15,
    fontWeight:'bold'
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



