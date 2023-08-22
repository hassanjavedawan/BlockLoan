import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import {HStack, ScrollView} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Borrow = ({navigation}) => {
 
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <HStack justifyContent={'center'} marginTop={6}>
            <Image
              style={styles.img}
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </HStack>
         
          <Text style={styles.head}>WELCOME BACK!</Text>
            
          <Text style={styles.para}>Fill in your account using </Text>

          <TouchableOpacity >
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3F5CC8', '#E12160']}
              style={styles.linearGradient}>
              <Text style={styles.btn}>Borrow from Aave</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Borrow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F4F7FC',
  },
  img: {
    width: '45%',
    aspectRatio: 3,
    height: undefined,
  },
  head: {
    textAlign: 'center',
    color: '#1D2126',
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  para: {
    textAlign: 'center',
    fontSize: 15,
    color: '#1D2126',
  },
  error: {
    fontSize: 15,
    color: 'red',
    fontWeight: 600,
  },
  label: {
    marginBottom: 2,
    fontSize: 15,
    color: '#767676',
    marginTop: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  linearGradient: {
    marginTop: 140,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    textTransform: 'uppercase',
    color: '#fff',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
