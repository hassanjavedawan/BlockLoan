import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { HStack, ScrollView } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headText}>Povo.Ai</Text>
        <ScrollView>
        <HStack justifyContent={'center'} marginTop={8}>
            <Image style={styles.img} source={require('../../../assets/images/metalogo.webp')} resizeMode='contain' />
        </HStack>
        <Text style={styles.text}>NFTs to game with one click</Text>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Auth')}>
           <HStack style={styles.btn_bg} justifyContent={'center'} alignItems={'center'}>
           <Text style={styles.btn}>Connect Metamask</Text>
            <Image style={styles.img2} source={require('../../../assets/images/metalogo.webp')} resizeMode='contain' />
           </HStack>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    headText:{
      color: '#fff',
      fontFamily: 'Type Juice - Unison Pro Light Round',
      letterSpacing: 0.8,
      textAlign: 'center',
      fontSize: 25,
      marginTop: 40
    },
    img:{
        width: '52%',
        height: undefined,
        aspectRatio: 0.9
    },
    text:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 22,
      marginBottom: 280,
      textTransform: 'uppercase',
      paddingHorizontal: 20,
      lineHeight: 35,
      fontFamily: 'Type Juice - Unison Pro Light',
      letterSpacing: 0.5
    },
    btn:{
        fontSize: 20,
        letterSpacing: 0.8,
        marginRight: 15,
        color: '#fff',
    },
    img2:{
        width: '10%',
        height: undefined,
        aspectRatio: 0.6
    },
    btn_bg:{
        backgroundColor: 'none',
        marginHorizontal: 22,
        borderRadius: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#fff',
    }
})